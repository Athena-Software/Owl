(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{348:function(e,t,o){"use strict";o.r(t);var a=o(41),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"get-started"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#get-started"}},[e._v("#")]),e._v(" Get Started")]),e._v(" "),o("p",[e._v("Welcome to the end-user documentation for Owl. Here, you'll find all information ranging from how to download Owl till advanced settings.\nYou can navigate between the different sections by using the sidebar or the arrow links in the footer.")]),e._v(" "),o("h2",{attrs:{id:"download-owl"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#download-owl"}},[e._v("#")]),e._v(" Download Owl")]),e._v(" "),o("p",[e._v("Owl is finally released on Firefox!")]),e._v(" "),o("p",[e._v("You can download it "),o("a",{attrs:{href:"https://addons.mozilla.org/en-US/firefox/addon/owl-keepass/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Unfortunately, the extension is still being reviewed on Chrome and will likely have to undergo another review because of some changes made.\nAs such, Chrome users will still have to build Owl manually and then install the unpacked extension.")]),e._v(" "),o("h2",{attrs:{id:"build-owl"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#build-owl"}},[e._v("#")]),e._v(" Build Owl")]),e._v(" "),o("p",[e._v("To build Owl, clone the repository and execute the following statements in the terminal:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("yarn install\nyarn build-dll\nyarn build\n")])])]),o("p",[e._v("You've now built Owl. From here, the installation instructions differ for Firefox and Chrome. If you are using Vivaldi or Brave, follow the installation instructions for Chrome.")]),e._v(" "),o("h3",{attrs:{id:"install-on-firefox"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#install-on-firefox"}},[e._v("#")]),e._v(" Install on Firefox")]),e._v(" "),o("p",[e._v("First, you will have to execute "),o("code",[e._v("./packer.sh firefox")]),e._v(". A .zip file has been created for you. Via the three bars to the right, navigate to the Add-ons menu or type in "),o("code",[e._v("about:addons")]),e._v(" in your browser. Here, click on the cogwheel next to "),o("code",[e._v("Manage Your Extensions")]),e._v(" and select "),o("code",[e._v("Install add-on from file")]),e._v(". Choose the .zip file that was previously created for you.")]),e._v(" "),o("h3",{attrs:{id:"install-on-chrome"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#install-on-chrome"}},[e._v("#")]),e._v(" Install on Chrome")]),e._v(" "),o("p",[e._v("Chrome does not allow you to simply load packed extensions that are not provided via the Chrome Web Store. To use Owl on Chrome, you'll have to do the following:")]),e._v(" "),o("ol",[o("li",[e._v("Rename the provided "),o("code",[e._v("chrome.manifest.json")]),e._v(" to "),o("code",[e._v("manifest.json")]),e._v(".")]),e._v(" "),o("li",[e._v("Navigate to "),o("code",[e._v("chrome://extensions")]),e._v(" in your browser, or via the three dots > Settings > Extensions.")]),e._v(" "),o("li",[e._v("Enable Developer Mode in the top-right corner.")]),e._v(" "),o("li",[e._v("Select "),o("code",[e._v("Load unpacked")]),e._v(", navigating to the folder where your "),o("code",[e._v("manifest.json")]),e._v(" is stored.")])]),e._v(" "),o("p",[e._v("You can now start using Owl.")]),e._v(" "),o("h2",{attrs:{id:"configure-your-first-database"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configure-your-first-database"}},[e._v("#")]),e._v(" Configure your first database")]),e._v(" "),o("p",[e._v("Once you have successfully installed Owl in your browser of choice, you can open the extension in the top right. At first, you'll be presented with a prompt to configure a KeePass 2.x database. If you do not configure a database, you will not be able to use Owl.")]),e._v(" "),o("p",[e._v("Entering the settings menu of Owl, you'll be prompted to set up a database first, and manage your Keyfiles second. If you don't know what Keyfiles are, don't worry about it; we'll first take a look at how to sync a provider with Owl so you can start using your database.")]),e._v(" "),o("p",[e._v("With Owl, you can sync your database using the following providers:")]),e._v(" "),o("ul",[o("li",[e._v("Dropbox")]),e._v(" "),o("li",[e._v("Google Drive")]),e._v(" "),o("li",[e._v("OneDrive")]),e._v(" "),o("li",[e._v("pCloud")]),e._v(" "),o("li",[e._v("WebDAV (OneCloud, NextCloud)")])]),e._v(" "),o("p",[e._v("In addition to the above, you can choose a Sample Database to test the functionality of Owl. Adding a Shared Link also works, so you won't have to give Owl access to your cloud provider. You can also choose to upload the .kdbx file manually using the File System option; please be aware though, that this stores the database in your browser's local storage, and it will not update when you have changed the database.")]),e._v(" "),o("p",[e._v("The settings menu should guide you adequately through the process of connecting with any of the aforementioned providers. Once you have logged in and Owl has found your database(s), their names will show up right next to the name of the provider. When you have set up a database, it is time to start using Owl.")]),e._v(" "),o("h2",{attrs:{id:"optional-configuring-keyfiles"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#optional-configuring-keyfiles"}},[e._v("#")]),e._v(" Optional: Configuring Keyfiles")]),e._v(" "),o("p",[e._v("If you have configured your database to use a Keyfile (either exclusively or in combination with a password), you will need to upload the .key file from your file system to your browser's local storage so Owl can access the .key file. In the \"Manage Keyfiles\" tab, you'll be able to do so. There is currently no way to sync a Keyfile from any of the cloud storage providers.")]),e._v(" "),o("h2",{attrs:{id:"using-owl"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-owl"}},[e._v("#")]),e._v(" Using Owl")]),e._v(" "),o("p",[e._v("Having set up your database and, optionally, your Keyfile, you can finally start to use Owl. After selecting your preferred database, you'll be asked to log in with your master password and Keyfile. You can choose to remember these login details for a certain amount of time using the slider below the input fields. After the time expires, the local cache and storage is cleared and Owl forgets the login details. Next time you open the popup, you'll have to log in again.")]),e._v(" "),o("h3",{attrs:{id:"recommendations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#recommendations"}},[e._v("#")]),e._v(" Recommendations")]),e._v(" "),o("p",[e._v("Owl will recommend certain password entries to you based on the site you are currently visiting. For example, if you are visiting "),o("a",{attrs:{href:"https://outlook.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("outlook.com"),o("OutboundLink")],1),e._v(" and have a matching entry in your database, Owl will recommend that entry.")]),e._v(" "),o("h3",{attrs:{id:"searching-for-entries-manually"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#searching-for-entries-manually"}},[e._v("#")]),e._v(" Searching for entries manually")]),e._v(" "),o("p",[e._v("Of course, you can manually search for entries by using the search bar on top. Simply start typing; Owl will display search results on-the-go, without the need for you to press Enter.")]),e._v(" "),o("h3",{attrs:{id:"filling-in-or-copying-entries"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#filling-in-or-copying-entries"}},[e._v("#")]),e._v(" Filling in or copying entries")]),e._v(" "),o("p",[e._v('Since 2020.04.06, Owl has changed the functionality of auto-filling. Previously, there was a "magic wand" icon next to an entry with which forms could be auto-filled. This functionality has now been replaced with simply clicking on the entry to fill in forms. Instead, an "info" icon has taken the place of the "magic wand". By pressing on this, detailed information of the entry can be viewed.')]),e._v(" "),o("p",[e._v("The clipboard icon still works the same. By pressing on this icon, you will be able to copy the "),o("strong",[e._v("password")]),e._v(" to your clipboard. By default, the clipboard will be cleared again after 2 minutes; you can change this in the Advanced Settings.")]),e._v(" "),o("h3",{attrs:{id:"viewing-entry-details"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#viewing-entry-details"}},[e._v("#")]),e._v(" Viewing entry details")]),e._v(" "),o("p",[e._v("You can view the details of an entry by clicking on it. This will reveal the group the entry is saved in, the tags, website, user name and password (hidden) as well as any notes you have saved for this entry.")])])}),[],!1,null,null,null);t.default=n.exports}}]);