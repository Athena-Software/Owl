# Owl
> A modern, clean keepass browser extension built with Vue.js and kdbxweb.  Rebooted from perfectapi/CKP and subdavis/Tusk.

![Owl](https://user-images.githubusercontent.com/5760400/71561102-5f326d00-2a72-11ea-8ee2-b2e99ecc8cdc.png "Owl Logo")

## Installation

**Firefox:** @TODO: Add store link

**Chrome:** @TODO: Add store link

## Build Setup

Owl requires:
* `node`
* `npm`
* `yarn`

```bash
# install dependencies
yarn install

# build static DLL resources (optional)
yarn build-dll

# build for production with minification
yarn build

# run the packer script targeted for 'chrome' and 'firefox' after build.
# this step generates the zip archives submitted to Chrome/Firefox addon marketplaces.
yarn bundle

# static reload with file watch for tests
yarn dev-tests
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Running tests

To run tests, first build them with `yarn build-tests` or `yarn watch-tests` then open `tests/test.html` in a browser.

## Browser Permissions

> Owl requires cross-origin permissions in order to inject credentials and query the storage backends on the user's behalf.

In Chrome, these permissions requests are __always__ prompted to the user upon first use.

Because of Firefox's implementation of `browser.permissions`, it was necessary to request all permissions at install time to avoid code rot.  A deeper explanation of the firefox permissions can be found [on stackoverflow](https://stackoverflow.com/questions/47723297/firefox-extension-api-permissions-request-may-only-be-called-from-a-user-input)
