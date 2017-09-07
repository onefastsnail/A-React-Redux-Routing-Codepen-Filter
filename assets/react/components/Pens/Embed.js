import React from 'react';
import { Link } from 'react-router';

class Embed extends React.Component {

    //our constructor
    constructor(props) {
        //this calls the parent constructor
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    //a method to handle our clicks
    handleClick(item) {
    }

    //Our method used by react, and is required for components
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">

                    <Link to="/">Back to results</Link>

                    <iframe height="565" width="100%" frameBorder="0" scrolling='no' title='React Router demo' src={'//codepen.io/onefastsnail/embed/'+this.props.params.slug+'/?height=565&theme-id=dark&default-tab=result&embed-version=2'} allowTransparency='true' allowFullScreen='true'></iframe>

                    </div>

                </div>
            </div>
        );
    }
}

export default Embed;
