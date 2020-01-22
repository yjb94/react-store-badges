import React from 'react';
import PropTypes from "prop-types";

const ReactStoreBadges = ({
  url,
  platfrom,
  locale = (navigator.language || navigator.userLanguage || 'en-us').toLowerCase(),
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
        background: `url(${image[platfrom]}) 0% 0% / contain no-repeat`,
        display: 'inline-block',
        height: height,
        width: width,
      }}
      href={url}
    />
  );
}

ReactStoreBadges.propTypes = {
  platfrom:PropTypes.oneOf(['ios', 'android']).isRequired,
  url: PropTypes.string.isRequired,
}
export default ReactStoreBadges