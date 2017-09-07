import React from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// here we are using a stateless component, cozzz we can ;)
const Pen = function (props, key, handler) {

    const handleTypeChange = function (e) {

        e.preventDefault();

        let x = {
            key: 'typesSelected',
            value: e.target.dataset.value
        };

        handler(x);
    };

    const handleUserChange = function (e) {

        let x = {
            key: 'usersSelected',
            value: e.target.dataset.value
        };

        handler(x);
    };

    const backgroundStyle = {
        backgroundImage: 'url(' + props.image + ')'
    };

    return (
        <div className="l-card-listing__item animated zoomIn" key={key}>
            <div className="c-card c-card--shadow">
                <Link to={"/embed/"+props.slug}>
                    <div className="c-card__image" style={backgroundStyle}>
                        <p className="c-card__meta" onClick={handleTypeChange} data-value={props.type}>{props.type}</p>
                    </div>
                </Link>
                <div className="c-card__content">
                    <p className="c-card__author">By <a href="javascript:;" target="_blank" onClick={handleUserChange} data-value={props.user}>{props.user}</a></p>
                    <h3 className="c-card__title"><Link to={"/embed/"+props.slug}>{props.title}</Link></h3>
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
