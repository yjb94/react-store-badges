# react-store-badges

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

![](https://raw.githubusercontent.com/yjb94/react-store-badges/master/img/main.png)

react-store-badges is a React.js component displaying badges for App Store and Google Play Store. react-store-badge serves locale(localization) setting for each country.

react-store-badge uses SVG files, (optimized by svgo) so no worries about image going wrong.

## Getting started
```
  npm install --save react-store-badges
```

## Usage
```
  import React, {Component} from 'react'

  import ReactStoreBadges from 'react-store-badges'

  class App extends Component {
    render() {
      return <div>
        <ReactStoreBadges
          platform={'ios'}
          url={'YOUR_APP_STORE_URL'}
          locale={'en-us'}
        />

        <ReactStoreBadges
          platform={'android'}
          url={'YOUR_PLAY_STORE_URL'}
          locale={'ko-kr'}
        />
      </div>
    }
  }
```

## Localization
### Supported locales
[Apple locales list](https://www.apple.com/itunes/marketing-on-itunes/identity-guidelines.html#itunes-store-badges#LocalizedBadges)

[Google locales list](https://github.com/yjb94/google-play-badge-svg/tree/master/img)

### Localization tip
- iOS uses full code of their locale. (ex. en-us) and google uses short code of their locale(ex. en). So if you want your badge in only one store, you can customize it anyway.

## Badge Guidelines
please note that you have to follow the guidelines below

[Apple Badge Guidelines](https://developer.apple.com/app-store/marketing/guidelines/)

[Google Badge Guidelines](https://play.google.com/intl/en_us/badges/)



[build-badge]: https://img.shields.io/travis/yjb94/react-store-badge/master.png?style=flat-square
[build]: https://travis-ci.org/yjb94/react-store-badge

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/yjb94/react-store-badges/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/yjb94/react-store-badges
