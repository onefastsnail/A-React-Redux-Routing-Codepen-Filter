import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as penActions from '../../actions/pens';
import { Link, IndexLink } from 'react-router';
import PropTypes from 'prop-types';

//our components
import Filter from './Filter';
import Pen from './Small';

class Home extends React.Component {

    //our constructor
    constructor(props) {
        //this calls the parent constructor
        super(props);

        //lets bind this class context to our methods
        //we do this here as within the render method is not ideal for performance due to this method being called by react upon state change
        this.handleShowMore = this.handleShowMore.bind(this);
        this.handleQueryChange = this.handleQueryChange.bind(this);
    }

    handleQueryChange(event) {
        //any component wrapped with connect() call will receive a dispatch function as a prop, and any state it needs from the global state
        this.props.dispatch(penActions.searchPens(event.target.value));
    }

    handleShowMore() {
        //any component wrapped with connect() call will receive a dispatch function as a prop, and any state it needs from the global state
        //this.props.dispatch(penActions.showMorePosts());
    }

    //Our method used by react, and is required for components
    render() {

        return (
            <section className="s-posts">

                <Filter
                    filter={this.props.filter}
                    handleClearFilter={this.handleShowMore}
                    handleQueryChange={this.handleQueryChange}
                    handleSortChange={this.handleShowMore}
                    handleScrollChange={this.handleShowMore}
                />

                <div className="s-posts__results">
                    <div className="s-posts__results__container">
                        <div className="l-card-listing">

                            {this.props.pens.map(function (item, i) {
                                return Pen(item, i);
                            })}

                            <a href="javascript:;" onClick={this.handleShowMore}>Show More</a>

                        </div>
                    </div>
                </div>

            </section>

        );
    }
}

// we can catch a lot of bugs with typechecking so lets do it
// Home.propTypes = {
//   actions: PropTypes.object.isRequired,
//   posts: PropTypes.array.isRequired,
//   end: PropTypes.number.isRequired
// };

// connecting redux to react
// map the store state as props to this component
function mapStateToProps(state, ownProps) {
    return {
        filter: {
            query: state.pens.query,
            types: state.pens.types,
            typesSelected: state.pens.typesSelected,
            users: state.pens.users,
            usersSelected: state.pens.usersSelected
        },
        pens: state.pens.filtered,
        end: state.pens.end,
        query: state.pens.query
    };
}

// what actions we want to expose to our component
// without this being provided in the connect method, it will automagically add the dispatch method in the component props
// bindActionCreators binds all actions supplied to this.props.actions.XXX within the component
// doing this allows our components to not have to know we are using redux, but simply call the prop
function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        actions: bindActionCreators(penActions, dispatch)
    };
}

/*
    connect returns a function which is then executed
    compare to flux we do not have to manually subscrive to events emitted from the store upon change
    easier use of stateless components, as no lifecycle methods required as above
    map only state we need, better performance
    2 paranthesis like below, connect returns, then we calls the second with the results
*/
export default connect(mapStateToProps, mapDispatchToProps)(Home);
