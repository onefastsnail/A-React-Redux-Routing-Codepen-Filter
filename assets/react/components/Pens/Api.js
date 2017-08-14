import React from 'react';

class Api extends React.Component {

    //our constructor
    constructor(props) {
        //this calls the parent constructor
        super(props);

    }

    //Our method used by react, and is required for components
    render() {

        let data = {
            x: 1,
            y: 2
        };

        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <p>API</p>
                        <pre><code>{JSON.stringify(data, null, 2)}</code></pre>
                    </div>
                </div>
            </div>
        );
    }
}

export default Api;
