# Get Started

Welcome to the end-user documentation for Owl. Here, you'll find all information ranging from how to download Owl till advanced settings.
You can navigate between the different sections by using the sidebar or the arrow links in the footer.

## Download Owl

Want to download Owl and get started right away? You can download Owl in the following stores:

* [Firefox](#) (coming soon)
* [Chrome](#) (coming soon)

Please note that there are currently no plans to add support for Microsoft Edge.

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

Owl has two icons next to every entry; the magic wand icon automagically fills in the username and password of the selected entry into the currently present input fields. The clipboard will instead copy the password to clipboard (but not the username).

### Viewing entry details

You can view the details of an entry by clicking on it. This will reveal the group the entry is saved in, the tags, website, user name and password (hidden) as well as any notes you have saved for this entry.