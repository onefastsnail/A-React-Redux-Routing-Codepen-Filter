import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';

const Pen = function (props, key) {

    var backgroundStyle = {
        backgroundImage: 'url(' + props.image + ')'
    }

    return (
        <div className="l-card-listing__item animated zoomIn" key={key}>
            <div className="c-card c-card--shadow">
                <div className="c-card__image" style={backgroundStyle}></div>
                <div className="c-card__content">
                    <p className="c-card__meta"><a href="javascript:;" data-value={props.type}>{props.type}</a></p>
                    <h3 className="c-card__title"><a href={props.link} target="_blank">{props.title}</a></h3>
                    <p className="c-card__author">by <a href="javascript:;" target="_blank" data-value={props.user}>{props.user}</a></p>
                </div>
            </div>
        </div>
    );
};

//we can catch a lot of bugs with typechecking so lets do it
// Pen.propTypes = {
//   post_title: PropTypes.string.isRequired
// };

export default Pen;
