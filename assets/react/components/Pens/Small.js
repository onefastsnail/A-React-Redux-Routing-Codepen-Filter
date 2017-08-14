import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';

// here we are using a stateless component, cozzz we can ;)
const Pen = function (props, key, handler) {

    const handleTypeChange = function(e){

        let x = {
            key: 'typesSelected',
            value: e.target.dataset.value
        };

        handler(x);
    }

    const handleUserChange = function(e){

        let x = {
            key: 'usersSelected',
            value: e.target.dataset.value
        };

        handler(x);
    }

    const backgroundStyle = {
        backgroundImage: 'url(' + props.image + ')'
    }

    return (
        <div className="l-card-listing__item animated zoomIn" key={key}>
            <div className="c-card c-card--shadow">
                <div className="c-card__image" style={backgroundStyle}></div>
                <div className="c-card__content">
                    <p className="c-card__meta"><a href="javascript:;" onClick={handleTypeChange} data-value={props.type}>{props.type}</a></p>
                    <h3 className="c-card__title"><a href={props.link} target="_blank">{props.title}</a></h3>
                    <p className="c-card__author">by <a href="javascript:;" target="_blank" onClick={handleUserChange} data-value={props.user}>{props.user}</a></p>
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
