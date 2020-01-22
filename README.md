# react-store-badges

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

react-store-badges is a React.js component displaying badges for App Store and Google Play Store. react-store-badge serves locale setting for each country

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
          platfrom={'ios'}
          url={'YOUR_APP_STORE_URL'}
        />

        <ReactStoreBadges
          platfrom={'android'}
          url={'YOUR_PLAY_STORE_URL'}
        />
      </div>
    }
  }
```



[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/yjb94/react-store-badges/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/yjb94/react-store-badges