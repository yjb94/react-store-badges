import React, {Component} from 'react'
import {render} from 'react-dom'

import ReactStoreBadges from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <ReactStoreBadges
        platform={'ios'}
        url={'https://apps.apple.com/app/kpop-speed-quiz/id1463167156'}
      />

      <ReactStoreBadges
        platform={'android'}
        url={'https://play.google.com/store/apps/details?id=com.stayge.speedquiz'}
      />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
