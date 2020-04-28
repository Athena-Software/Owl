# Get Started

Welcome to the end-user documentation for Owl. Here, you'll find all information ranging from how to download Owl till advanced settings.
You can navigate between the different sections by using the sidebar or the arrow links in the footer.

## Download Owl

Owl is finally released on Firefox!

You can download it [here](https://addons.mozilla.org/en-US/firefox/addon/owl-keepass/).

Unfortunately, the extension is still being reviewed on Chrome and will likely have to undergo another review because of some changes made.
As such, Chrome users will still have to build Owl manually and then install the unpacked extension.

## Build Owl

To build Owl, clone the repository and execute the following statements in the terminal:

```
yarn install
yarn build-dll
yarn build
```

You've now built Owl. From here, the installation instructions differ for Firefox and Chrome. If you are using Vivaldi or Brave, follow the installation instructions for Chrome.

### Install on Firefox

First, you will have to execute `./packer.sh firefox`. A .zip file has been created for you. Via the three bars to the right, navigate to the Add-ons menu or type in `about:addons` in your browser. Here, click on the cogwheel next to `Manage Your Extensions` and select `Install add-on from file`. Choose the .zip file that was previously created for you.

### Install on Chrome

Chrome does not allow you to simply load packed extensions that are not provided via the Chrome Web Store. To use Owl on Chrome, you'll have to do the following:

1. Rename the provided `chrome.manifest.json` to `manifest.json`.
2. Navigate to `chrome://extensions` in your browser, or via the three dots > Settings > Extensions.
3. Enable Developer Mode in the top-right corner.
4. Select `Load unpacked`, navigating to the folder where your `manifest.json` is stored.

You can now start using Owl.

## Configure your first database

Once you have successfully installed Owl in your browser of choice, you can open the extension in the top right. At first, you'll be presented with a prompt to configure a KeePass 2.x database. If you do not configure a database, you will not be able to use Owl. 

Entering the settings menu of Owl, you'll be prompted to set up a database first, and manage your Keyfiles second. If you don't know what Keyfiles are, don't worry about it; we'll first take a look at how to sync a provider with Owl so you can start using your database. 

With Owl, you can sync your database using the following providers:

* Dropbox
* Google Drive
* OneDrive
* pCloud
* WebDAV (OneCloud, NextCloud)

In addition to the above, you can choose a Sample Database to test the functionality of Owl. Adding a Shared Link also works, so you won't have to give Owl access to your cloud provider. You can also choose to upload the .kdbx file manually using the File System option; please be aware though, that this stores the database in your browser's local storage, and it will not update when you have changed the database. 

The settings menu should guide you adequately through the process of connecting with any of the aforementioned providers. Once you have logged in and Owl has found your database(s), their names will show up right next to the name of the provider. When you have set up a database, it is time to start using Owl.

## Optional: Configuring Keyfiles

If you have configured your database to use a Keyfile (either exclusively or in combination with a password), you will need to upload the .key file from your file system to your browser's local storage so Owl can access the .key file. In the "Manage Keyfiles" tab, you'll be able to do so. There is currently no way to sync a Keyfile from any of the cloud storage providers.

## Using Owl

Having set up your database and, optionally, your Keyfile, you can finally start to use Owl. After selecting your preferred database, you'll be asked to log in with your master password and Keyfile. You can choose to remember these login details for a certain amount of time using the slider below the input fields. After the time expires, the local cache and storage is cleared and Owl forgets the login details. Next time you open the popup, you'll have to log in again. 

### Recommendations

Owl will recommend certain password entries to you based on the site you are currently visiting. For example, if you are visiting [outlook.com](https://outlook.com/) and have a matching entry in your database, Owl will recommend that entry. 

### Searching for entries manually

Of course, you can manually search for entries by using the search bar on top. Simply start typing; Owl will display search results on-the-go, without the need for you to press Enter.

### Filling in or copying entries

Since 2020.04.06, Owl has changed the functionality of auto-filling. Previously, there was a "magic wand" icon next to an entry with which forms could be auto-filled. This functionality has now been replaced with simply clicking on the entry to fill in forms. Instead, an "info" icon has taken the place of the "magic wand". By pressing on this, detailed information of the entry can be viewed. 

The clipboard icon still works the same. By pressing on this icon, you will be able to copy the **password** to your clipboard. By default, the clipboard will be cleared again after 2 minutes; you can change this in the Advanced Settings.

### Viewing entry details

You can view the details of an entry by clicking on it. This will reveal the group the entry is saved in, the tags, website, user name and password (hidden) as well as any notes you have saved for this entry.