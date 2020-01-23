import React, { useEffect, useState } from 'react';

const ReactStoreBadges = ({
  url,
  platform,
  locale,
  width = 135,
  height = 40,
}) => {
  const [_locale, setLocale] = useState((locale || typeof navigator !== 'undefined' && navigator.language || 'en-us').toLowerCase());
  const [_shortCode, setShortCode] = useState(_locale)

  useEffect(() => {
    const expeptionLocale = ["zh-cn", "zh-tw"];
    if (expeptionLocale.indexOf(_locale) === -1) {
      setShortCode(_locale.split(/[_-]/)[0]);
    }
  }, [_locale]);

  const image = {
    ios:`https://linkmaker.itunes.apple.com/images/badges/${_locale}/badge_appstore-lrg.svg`,
    android: `https://raw.github.com/yjb94/google-play-badge-svg/master/img/${_shortCode}_get.svg?sanitize=true`
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