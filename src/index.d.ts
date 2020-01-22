import React from 'react';
import ReactStoreBadges from './index.js';

export interface ReactStoreBadgesProps {
  /** url of App Store and Play Store */
  url: string

  /** platform name. 'ios' and 'android' only */
  platform: 'ios' | 'android'

  /** locale name. such as en-us */
  locale?: string

  /** width for badge size */ 
  width?: number

  /** height for badge size */ 
  height?: number
}

declare const ReactStoreBadges: ReactStoreBadgesProps
export default ReactStoreBadges;