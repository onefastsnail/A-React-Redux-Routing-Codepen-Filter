import React from 'react';
import { Link } from 'react-router-dom';

class Embed extends React.Component {

    //our constructor
    constructor(props) {
        //this calls the parent constructor
        super(props);
    }

    //Our method used by react, and is required for components
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">

                    <p><Link to="/">Back to results</Link></p>

                    <iframe height="565" width="100%" frameBorder="0" scrolling='no' title='Demo' src={'//codepen.io/onefastsnail/embed/'+this.props.match.params.slug+'/?height=565&theme-id=dark&default-tab=result&embed-version=2'} allowTransparency='true' allowFullScreen='true'></iframe>

                    </div>

                </div>
            </div>
        );
    }
}

export default Embed;
