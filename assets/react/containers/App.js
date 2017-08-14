import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';

/*
    React router will handle the children property within the props property
*/

class App extends React.Component {

    //our constructor
    constructor(props) {
        //this calls the parent constructor
        super(props);
    }

    //Our method used by react, and is required for components
    render() {
        return (
            <section>
                <div className="container">
                    <ul>
                        <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                        <li><Link to="/api" activeClassName="active">Api</Link></li>
                        <li><Link to="/dev" activeClassName="active">Dev</Link></li>
                    </ul>
                </div>

                {this.props.children}

            </section>


        );
    }
}

// App.propTypes = {
//   children: PropTypes.object.isRequired
// };

export default App;
