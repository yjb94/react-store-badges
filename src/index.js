import React, {Component} from 'react';

function ReactStoreBadges({
  locale = (navigator.language || navigator.userLanguage || 'en-us').toLowerCase(),
  shortLocale = locale.split(/[_-]/)[0],
  imageLink = {
    ios:`https://linkmaker.itunes.apple.com/images/badges/${locale}/badge_appstore-lrg.svg`,
    // android: `https://play.google.com/intl/en_us/badges/static/images/badges/${shortLocale}_badge_web_generic.png`,
    android: `https://rawgithub.com/steverichey/google-play-badge-svg/master/img/${shortLocale}_get.svg`,
  },
}) {

  return (
    <div>
      <h2>{locale}</h2>
      <img src={imageLink.ios}/>
      <img src={imageLink.android}/>
    </div>
  );
}

export default ReactStoreBadges