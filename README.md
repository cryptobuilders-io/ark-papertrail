[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


# ARK Papertrail Logging

Send Winston logs to [Papertrail](https://papertrailapp.com).

## Installation

### Clone

```bash
yarn global add @cryptobuilders/ark-papertrail
```

### Register Plugin

Edit the plugin config file located at:

`~/.config/ark-core/{mainnet|devnet|testnet}/plugins.js`

Add the following snippet right after `core-logger-winston` gets included:

```javascript
module.exports = {
    '@arkecosystem/core-event-emitter': {},
    '@arkecosystem/core-logger-winston': {},
    '@cryptobuilders/ark-papertrail': {
      // Full options list at https://github.com/kenperkins/winston-papertrail/tree/v2#usage
      host: 'logs.papertrailapp.com',
      port: 12345
    },
    // ...
}
```
## Changelog

### 1.0.1
- updated devDependencies to remove known vulnerabilities in `npm-check-updates`

## Credits

- [Dan Matthews / Cryptobuilders OÜ](https://github.com/dmvt)
- [All Contributors](../../contributors)

## License

[MIT](LICENSE) © Cryptobuilders OÜ
