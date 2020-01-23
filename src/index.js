import React from 'react';

const ReactStoreBadges = ({
  url,
  platform,
  locale = window.navigator.language,
  width = 135,
  height = 40,
}) => {
  const expeptionLocale = ["zh-cn", "zh-tw"];
  locale = (locale || 'en-us').toLowerCase();
  let shortCode = locale;
  if (expeptionLocale.indexOf(shortCode) === -1) {
    shortCode = shortCode.split(/[_-]/)[0];
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