import React from 'react';

const ReactStoreBadges = ({
  url,
  platform,
  locale = (navigator.language || navigator || 'en-us').toLowerCase(),
  shortLocale = locale.split(/[_-]/)[0],
  image = {
    ios:`https://linkmaker.itunes.apple.com/images/badges/${locale}/badge_appstore-lrg.svg`,
    android: `../img/playstore/${shortLocale}_get.svg`,
  },
  width = 135,
  height = 40,
}) => {
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