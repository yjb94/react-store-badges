import React, { useState, useLayoutEffect } from 'react';

const HEIGHT_RATIO = 3.375;

const getImage = (locale = 'en-us', code = locale) => {
  return {
    ios: `https://apple-resources.s3.amazonaws.com/media-badges/download-on-the-app-store/black/${locale}.svg`,    
    android: `https://play.google.com/intl/pt-BR/badges/static/images/badges/${code}_badge_web_generic.png`
  }
}

const ReactStoreBadges = ({
  url,
  defaultLocale = 'en-us',
  platform,
  locale = (typeof navigator !== 'undefined' && navigator.language || defaultLocale),
  width = 135,
  height = width / HEIGHT_RATIO,
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

  useLayoutEffect(() => {
    setImage(getImage(locale, shortCode))
  }, [locale])

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
          width: '100%',
          height: '100%'
        }}
        onError={setDefaultImage}
      />
    </a>
  );
}
export default ReactStoreBadges
