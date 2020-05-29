# Privacy Policy

*Last updated: 29th March 2020*

This privacy policy provides a list of permissions that Owl needs to function and what data is saved by Owl during regular usage of the extension. It also shows how you can delete saved data and provides contact information if you have any additional questions.

Owl is not affiliated with Google nor Mozilla or any of its products.

"Owl" refers to the extension published on the Google Chrome Web Store as well as the Mozilla Firefox Add-on Marketplace. It does not refer to this website.

## Overview
Owl is not a standalone product, instead being offered as an extension on both the Google Chrome Webstore as well as the Mozilla Firefox Add-on Marketplace. Depending on your browser choice, you should be aware of either Google Chrome's Privacy Policy or Mozilla Firefox's Privacy Policy before you start using Owl.

In addition, Owl offers a way to connect ("synchronize") a range of third-party cloud providers with the extension. This action requires separate user consent. The list of supported third-party cloud providers is as follows:

* Dropbox
* Google Drive
* OneDrive
* pCloud

You will have to create a separate account on either of these platforms to be able to use them with Owl. Please refer to the Privacy Policy of the respective cloud provider before using them in conjunction with Owl.

## What Owl Collects
Owl does **not** transmit any data to external servers. We do not store any of your personal information. All information gathered by Owl is stored in your **local** browser storage and viewable only by you. [[How To Delete Data In Owl]] shows you how to wipe all data saved by Owl from local browser storage.

In detail, Owl **may** collect and save the following:

* A reference to the database file you have selected
* The third-party cloud provider you have selected
* The WebDAV instance (eg. NextCloud) you have selected
* The directory map of the currently used WebDAV instance
* Any uploaded key files, in addition to the **encoded** key of said keyfile
* A list of all Shared Links you have entered into Owl
* A copy of any files you have uploaded from your local File System

## Permissions Owl Needs
In addition to saving certain things in your local browser storage, Owl needs certain permissions in both Google Chrome as well as Mozilla Firefox to work properly. These permissions are as follows:

* Owl needs access to your current, active tab to autofill password entries when you select the Autofill action.
* Owl will need permission to write items to local browser storage. For details on what is written to local browser storage, see [[What Owl Collects]].
* Owl will need permission to receive write access to your clipboard. If you choose, you can copy a password to your clipboard to paste it manually.
* To launch authentication workflows with third-party cloud providers, Owl will need the "identity" permission. With this, authentication workflows can be launched in your name. You will still be asked to consent to any authentication request separately.
* Owl will ring an alarm when the password currently stored in the clipboard. By default, this happens after 2 minutes. For this to work, a separate permission is needed.
* Owl also displays a notification during certain events, eg. when the clipboard is emptied. This also requires a seperate permission.
* Owl also needs access to https://*/* as well as http://*/* to be able to access HTML forms on any given website. Without these permissions, Owl would not be able to paste any password into HTML forms and the Autofill action would not work, among other things.

There is currently no way to "opt out" of individual permissions, with notifications being the exception. This is due to the way Google Chrome and Mozilla Firefox are set up and has nothing to do with Owl.

## How To Delete Data In Owl
Deleting all data collected by Owl is very simple. When accessing Owl's Settings, you can navigate to the "Advanced" Tab and scroll down to "Stored Data". There, you will have a clear overview over what data is currently saved in local browser storage. By pressing "Delete" next to the listed data, it will be purged from your local browser storage. 

Be aware that deleting certain items, such as references to your currently used third-party cloud provider, may lead to you having to authorize access to said third-party cloiud provider once again.

## Contact Information
If you have any questions, concerns or feedback in regards to this Privacy Policy, there are different ways to contact the authors.

Owl is Open Source. As such, you are free to open an Issue on GitHub: https://github.com/Athena-Software/Owl/issues

For other questions, concerns or feedback, you can reach the developers under the following e-mail: owl [.] keepass [.] developers [at] gmail.com