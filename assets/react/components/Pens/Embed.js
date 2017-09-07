import React from 'react';
import { Link } from 'react-router-dom';

class Embed extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-2">
                        <Link to="/" className="c-btn"><i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
                    </div>
                    <div className="col-xs-12 col-sm-10">
                    <iframe height="565" width="100%" frameBorder="0" scrolling='no' title='Demo' src={'//codepen.io/onefastsnail/embed/'+this.props.match.params.slug+'/?height=565&theme-id=dark&default-tab=result&embed-version=2'} allowTransparency='true' allowFullScreen='true'></iframe>

                    </div>

                </div>
            </div>
        );
    }
}

export default Embed;
