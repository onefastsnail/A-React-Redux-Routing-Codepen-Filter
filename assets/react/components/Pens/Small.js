import React from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Pen extends React.Component {

    constructor(props) {

        super(props);

        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
    }

    componentDidMount() {

        // find the element
        let penEl = document.querySelector('div[data-pen="' + this.props.item.slug + '"] .c-card__image__holder');

        // lets create a cheeky quick lazy load
        if(penEl){
            // create the image
            let img = new Image();
            let self = this;

            // set the src for it to load
            img.src = this.props.item.image;

            // lets wait for the image to load
            img.onload = function () {
                // add the style attr
                penEl.style.backgroundImage = 'url(' + self.props.item.image + ')';

                // toggle the class to animate in
                penEl.className += ' js-loaded';
            };
        }
    }

    handleTypeChange(e) {

        e.preventDefault();

        let x = {
            key: 'typesSelected',
            value: e.target.dataset.value
        };

        this.props.handler(x);
    }

    handleUserChange(e) {

        e.preventDefault();

        let x = {
            key: 'usersSelected',
            value: e.target.dataset.value
        };

        this.props.handler(x);
    }

    render() {
        return (
            <div data-pen={this.props.item.slug} className="l-card-listing__item animated zoomIn">
                <div className="c-card c-card--shadow">
                    <Link to={"/embed/" + this.props.item.slug} className="c-card__image" title={this.props.item.title}>
                        <div className="c-card__image__holder"></div>
                        <ul className="c-card__meta">
                            <li onClick={this.handleUserChange} title={this.props.item.user} data-value={this.props.item.user}></li>
                            <li onClick={this.handleTypeChange} title={this.props.item.type} data-value={this.props.item.type}></li>
                            <li>{this.props.item.title}</li>
                        </ul>
                        <div className="c-card__overlay"></div>
                    </Link>
                    <div className="c-card__content">
                        <h3 className="c-card__title"><Link to={"/embed/" + this.props.item.slug} title={this.props.item.title}>{this.props.item.title}</Link></h3>
                    </div>
                </div>
            </div>
        );
    }
}

//we can catch a lot of bugs with typechecking so lets do it
// Pen.propTypes = {
//   post_title: PropTypes.string.isRequired
// };

export default Pen;
