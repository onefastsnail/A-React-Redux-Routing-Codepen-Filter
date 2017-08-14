import React from 'react';
import Dropdown from '../Dropdown';

class Filter extends React.Component {

    // our constructor
    constructor(props) {
        // this calls the parent constructor
        super(props);
    }

    componentDidMount(){
        // for nice UX lets focus on our input upon rendering
        //$('.s-posts__search').focus();
    }

    // our method used by react, and is required for components
    render() {

        return (

            <div className="s-posts__navigation">
                <div className="s-posts__navigation__container">

                    <div className="row">
                        <div className="col-sm-4">
                            <input name="query" type="text" className="s-posts__search" id="search" onChange={this.props.handleQueryChange} value={this.props.filter.query} placeholder="Search"/>
                        </div>
                        <div className="col-sm-4">
                            <Dropdown
                                filter="typesSelected"
                                title="Type"
                                options={this.props.filter.types}
                                selected={this.props.filter.typesSelected}
                            />
                        </div>
                        <div className="col-sm-4">
                            <Dropdown
                                filter="usersSelected"
                                title="User"
                                options={this.props.filter.users}
                                selected={this.props.filter.usersSelected}
                            />
                        </div>
                    </div>

                </div>
            </div>

        );

    }

};

export default Filter;
