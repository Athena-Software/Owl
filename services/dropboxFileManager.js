"use strict";

import { random } from 'case';
import { ChromePromiseApi } from '$lib/chrome-api-promise';
import {
	OauthManager
} from '$services/oauthManager.js'


const Base64 = require('base64-arraybuffer')
const axios = require('axios')

function DropboxFileManager(settings) {
	var accessTokenType = 'dropbox';

	var state = {
		loggedIn: false
	}

	var oauth = {
		accessTokenType: accessTokenType,
		origins: ['https://dropbox.com/oauth2/'],
		authUrl: 'https://dropbox.com/oauth2/authorize?response_type=token&reject_cors_preflight=true',
		supportedFeatures: ['incognito', 'listDatabases'],
		title: 'Dropbox',
		icon: 'icon-dropbox',
		chooseTitle: 'Dropbox',
		chooseDescription: 'Access password files stored on Dropbox.  Files will be retrieved from Dropbox each time they are used.',
	};

	oauth.searchRequestFunction = function (token) {
		return axios({
			method: 'post',
			url: 'https://api.dropbox.com/2/files/search',
			data: {
				path: '',
				query: '.kdbx',
				start: 0,
				max_results: 100,
				mode: 'filename'
			},
			headers: {
				'Authorization': 'Bearer ' + token
			}
		})
	}

	oauth.searchRequestHandler = function (response) {
		return response.data.matches.map(function (fileInfo) {
			return {
				title: fileInfo.metadata.path_display
			};
		});
	}

	//get the minimum information needed to identify this file for future retrieval
	oauth.getDatabaseChoiceData = function (dbInfo) {
		return {
			title: dbInfo.title
		}
	}

	//given minimal file information, retrieve the actual file
	oauth.fileRequestFunction = function (dbInfo, token) {
		function http_header_safe_json(v) {
			var charsToEncode = /[\u007f-\uffff]/g;
			return JSON.stringify(v).replace(charsToEncode,
				function (c) {
					return '\\u' + ('000' + c.charCodeAt(0).toString(16)).slice(-4);
				}
			);
		}
		var arg = {
			"path": dbInfo.title
		}
		return axios({
			method: 'post',
			url: 'https://api-content.dropbox.com/2/files/download',
			responseType: 'arraybuffer',
			headers: {
				'Authorization': 'Bearer ' + token,
				'Dropbox-API-Arg': http_header_safe_json(arg)
			}
		})
	}

	oauth.revokeAuth = function () {
		return Promise.resolve()
	}

	oauth.handleAuthRedirectURI = function (redirect_url, randomState) {
		console.info("OWL INFO - Redirect url:", redirect_url)
		var tokenMatches = /access_token=([^&]+)/.exec(redirect_url);
		var stateMatches = /state=([^&]+)/.exec(redirect_url);
		var uidMatches = /uid=(\d+)/.exec(redirect_url);

		if (tokenMatches && stateMatches && uidMatches) {
			var access_token = tokenMatches[1];
			var checkState = decodeURIComponent(decodeURIComponent(stateMatches[1])); //I have no idea why it is double-encoded
			var uid = uidMatches[1];
			if (checkState === randomState) {
				state.loggedIn = true;
				settings.getSetAccessToken(accessTokenType, access_token).then(function () {
					return access_token;
				});
			} else {
				//some sort of error or parsing failure
				console.error("OWL ERROR - " + redirect_url, " - state was found invalid");
			}
		} else {
			//some sort of error
			console.error("OWL ERROR - " + redirect_url, " - something was found invalid");
		}
	}

	return OauthManager(settings, oauth)
}

export {
	DropboxFileManager
}