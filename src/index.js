import React, { useState } from 'react';

const HEIGHT_RATIO = 3.375;

const getImage = (locale = 'en-us', code = locale) => {
  return {
    ios:`https://linkmaker.itunes.apple.com/images/badges/${locale}/badge_appstore-lrg.svg`,
    android: `https://raw.github.com/yjb94/google-play-badge-svg/master/img/${code}_get.svg?sanitize=true`
  }
}

const ReactStoreBadges = ({
  url,
  defaultLocale = 'en-us',
  platform,
  locale = (typeof navigator !== 'undefined' && navigator.language || defaultLocale),
  width = 135,
  height = width/HEIGHT_RATIO,
  target = "_self"
}) => {
  let shortCode = locale = locale.toLowerCase()
  const expeptionLocale = ["zh-cn", "zh-tw"];
  if (expeptionLocale.indexOf(locale) === -1) {
    shortCode = locale.split(/[_-]/)[0];
  }

  const [image, setImage] = useState(getImage(locale, shortCode))

  const setDefaultImage = () => {
    setImage(getImage(defaultLocale, shortCode))
  }

  return (
    <a
      style={{
        display: 'inline-block',
        height: height,
        width: width,
      }}
      href={url}
      target={target}
    >
      <img 
        src={image[platform]}
        style={{
          width:'100%',
          height:'100%'
        }}
        onError={setDefaultImage}
      />
    </a>
  );
}
export default ReactStoreBadges