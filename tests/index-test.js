import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import ReactStoreBadges from 'src/'

describe('ReactStoreBadges', () => {
  let node;

  beforeEach(() => {
    node = document.createElement('div');
    navigator = {
      get language() {
        return undefined;
      }
    };
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('renders ReactStoreBadges successfully', () => {
    render(<ReactStoreBadges/>, node, () => {
    })
  })

  it('renders ReactStoreBadges with props', () => {
    render(
      <ReactStoreBadges 
        platform={'ios'}
        url={'https://apps.apple.com/app/'}
        locale={'en-us'}
        width={135}
        height={40}
      />, node, () => {
    })
  })

  it('locale branching', () => {
    render(
      <ReactStoreBadges
        locale={'zh-cn'}
      />, node, () => {
    })
    render(
      <ReactStoreBadges
        locale={'zh-tw'}
      />, node, () => {
    })
    render(
      <ReactStoreBadges
        locale={'en-us'}
      />, node, () => {
    })
  })
})
