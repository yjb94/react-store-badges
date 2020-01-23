import React, { useEffect, useState } from 'react';

const HEIGHT_RATIO = 3.375;

const ReactStoreBadges = ({
  url,
  platform,
  locale = (typeof navigator !== 'undefined' && navigator.language || 'en-us'),
  width = 135,
  height = width/HEIGHT_RATIO,
}) => {
  let shortCode = locale = locale.toLowerCase()
  const expeptionLocale = ["zh-cn", "zh-tw"];
  if (expeptionLocale.indexOf(locale) === -1) {
    shortCode = locale.split(/[_-]/)[0];
  }

  const image = {
    ios:`https://linkmaker.itunes.apple.com/images/badges/${locale}/badge_appstore-lrg.svg`,
    android: `https://raw.github.com/yjb94/google-play-badge-svg/master/img/${shortCode}_get.svg?sanitize=true`
  }

  return (
    <a
      style={{
        background: `url(${image[platform]}) 0% 0% / contain no-repeat`,
        display: 'inline-block',
        height: height,
        width: width,
      }}
      href={url}
    />
  );
}
export default ReactStoreBadges