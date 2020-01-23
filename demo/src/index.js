import React, {Component} from 'react'
import {render} from 'react-dom'

import ReactStoreBadges from '../../src'

class Demo extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      locale:'en-us'
    };
  }

  changeLocale = () => {
    const { locale } = this.state;
    this.setState({ locale:locale === 'en-us' ? 'ko-kr' : 'en-us' })
  }

  render() {
    const { locale } = this.state;

    return (
      <div 
        style={{
          fontFamily:'Arial',
          textAlign:'center',
          display:'flex',
          flexDirection:'column',
          alignItems:'center'
        }}
      >
        <div
          style={{
            marginBottom:'60px'
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
              locale={'es-ES'}
            />

            <ReactStoreBadges
              platform={'android'}
              url={'https://play.google.com/store/apps/details?id='}
              locale={'zh-CN'}
            />
          </div>
        </div>
        <div>
          <h1>Locale Change</h1>
          <div>
            <ReactStoreBadges
              platform={'ios'}
              url={'https://apps.apple.com/app/'}
              locale={locale}
            />
          </div>
          <button
            onClick={this.changeLocale}
          >
            change language
          </button>
        </div>
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
