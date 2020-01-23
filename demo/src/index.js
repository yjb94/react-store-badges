import React, {Component} from 'react'
import {render} from 'react-dom'

import ReactStoreBadges from '../../src'

class Demo extends Component {
  render() {
    return (
      <div 
        style={{
          fontFamily:'Arial',
          display:'flex',
          flexDirection:'column',
          alignItems:'center'
        }}
      >
        <h1>React Store Badges</h1>
        <div
          style={{
            width:'600px',
            display:'flex',
            justifyContent:'space-between'
          }}
        >
          <ReactStoreBadges
            platform={'ios'}
            url={'https://apps.apple.com/app/'}
          />

          <ReactStoreBadges
            platform={'android'}
            url={'https://play.google.com/store/apps/details?id='}
            locale={'ko-kr'}
          />

          <ReactStoreBadges
            platform={'ios'}
            url={'https://apps.apple.com/app/'}
            locale={'pt-pt'}
          />

          <ReactStoreBadges
            platform={'android'}
            url={'https://play.google.com/store/apps/details?id='}
            locale={'zh-cn'}
          />
        </div>
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
