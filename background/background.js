"use strict";

/*
  This page runs as an Background page, not an event

  Be careful using settings.
  Settings can call secureCacheMemory, which in turn can open new ports to this script.
*/

import { ProtectedMemory } from '$services/protectedMemory.js'
import { Settings } from '$services/settings.js'
import { Notifications } from "$services/notifications";

function Background(protectedMemory, settings, notifications) {
	chrome.runtime.onInstalled.addListener(settings.upgrade);
	chrome.runtime.onStartup.addListener(forgetStuff);

	//keep saved state for the popup for as long as we are alive (not long):
	chrome.runtime.onConnect.addListener(function(port) {
		//communicate state on this pipe.  each named port gets its own state.
		port.onMessage.addListener(function(msg) {
			if (!msg) return;
			switch (msg.action) {
				case 'clear':
					protectedMemory.clearData(msg.key);
					break;
				case 'save':
					protectedMemory.setData(msg.key, msg.value);
					break;
				case 'get':
					protectedMemory.getData(msg.key).then(function(value) {
						port.postMessage(value);
					});
					break;
				case 'forgetStuff':
					forgetStuff();
					break;
				default:
					throw new Error('unrecognized action ' + obj.action)
					break;
			}
		});

		port.onDisconnect.addListener(function() {
			//uncomment below to forget the state when the popup closes
			//protectedMemory.clearData();
		})
	});

	function handleMessage(message, sender, sendResponse) {
		if (!message || !message.m) return; //message format unrecognized

		if (message.m == "showMessage") {
			const expire = typeof message.expire !== 'undefined' ? message.expire * 1000 : 60000;
			chrome.notifications.create({
				'type': 'basic',
				'iconUrl': '/assets/icons/exported/48x48.png',
				'title': 'Owl',
				'message': message.text
			}, function(notificationId) {
				setTimeout(() => chrome.notifications.clear(notificationId), expire)
			})
		}

		if (message.m == "requestPermission") {
			//better to do the request here on the background, because on some platforms
			//the popup may close prematurely when requesting access
			chrome.permissions.contains(message.perms, function(alreadyGranted) {
				if (chrome.runtime.lastError || (alreadyGranted && message.then)) {
					handleMessage(message.then, sender, sendResponse);
				} else {
					//request
					chrome.permissions.request(message.perms, function(granted) {
						if (granted && message.then) {
							handleMessage(message.then, sender, sendResponse);
						}
					});
				}
			});
		}

		if (message.m == "autofill") {
			alreadyInjected(message.tabId).then( injectedAlready => {
				if (injectedAlready === true) {
					chrome.tabs.sendMessage(message.tabId, {
						m: "fillPassword",
						u: message.u,
						p: message.p,
						o: message.o
					});
					return;
				}
				chrome.tabs.executeScript(message.tabId, {
					file: "build/inject.build.js",
					allFrames: true,
					runAt: "document_start"
				}, function(result) {
					//script injected
					chrome.tabs.sendMessage(message.tabId, {
						m: "fillPassword",
						u: message.u,
						p: message.p,
						o: message.o
					});
				});
			})
		}
	}

	// function to determine if the content script is already injected, so we don't do it twice
	function alreadyInjected(tabId) {
		return new Promise( (resolve, reject) => {
			chrome.tabs.sendMessage(tabId, {m: 'ping'}, response => {
				if (response)
					resolve(true);
				else {
					let err = chrome.runtime.lastError;
					resolve(false);
				}
			})
		})
	}

	//listen for "autofill" message:
	chrome.runtime.onMessage.addListener(handleMessage);

	chrome.alarms.create("forgetStuff", {
		delayInMinutes: 1,
		periodInMinutes: 2
	});

	chrome.alarms.onAlarm.addListener(function(alarm) {
		if (alarm.name == 'forgetStuff') {
			forgetStuff();
			return;
		}
	});

	function forgetStuff() {
		//console.log("ForgetStuff", new Date()) // Don't spam console.
		protectedMemory.clearData('secureCache.entries'); // ALWAYS clear entries.
		settings.getAllForgetTimes().then(function(allTimes) {
			var now = Date.now();
			var forgottenKeys = [];
			for (var key in allTimes) {
				// If the time has passed but is still positive...
				if (allTimes[key] < now && allTimes[key] > 0) {
					forgottenKeys.push(key);
					switch (key) {
						case 'clearClipboard':
							clearClipboard();
							notifications.push({
								text: 'Clipboard cleared',
								type: 'expiration',
								expire: 2
							});
							break;
						default:
							if (key.indexOf('password') >= 0) {
								forgetPassword().then(() => {
									notifications.push({
										text: 'Remember password expired',
										type: 'expiration'
									});
								})
							} else {
								console.error("OWL - I don't know what to do with this key: ", key)
							}
					}
				}
			}

			//remove stuff
			settings.clearForgetTimes(forgottenKeys);
		});
	}

	function clearClipboard() {
		var clearClipboard = function(e) {
			e.clipboardData.setData('text/plain', "");
			e.preventDefault();
			document.removeEventListener('copy', clearClipboard); //don't listen anymore
		}

		document.addEventListener('copy', clearClipboard);
		document.execCommand('copy');
	}

	function forgetPassword() {
		return settings
			.getCurrentDatabaseChoice()
			.then(info => {
				let key = info.passwordFile.title + "__" + info.providerKey + ".password";
				return key
			})
			.then(protectedMemory.clearData)
	}

}

const settings = new Settings()
const notifications = new Notifications(settings)
const protectedMemory = new ProtectedMemory()

Background(protectedMemory, settings, notifications)
