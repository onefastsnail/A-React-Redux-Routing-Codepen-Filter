import * as types from '../actions/types';

// initial state of this branch of the store
const initialState = {
    pens: [],
    filtered: [],

    pen: null,

    types: [],
    typesSelected: [],

    users: [],
    usersSelected: [],

    query: '',
    sortBy: 'newest',

    end: 6,
    perPage: 6
};

//nice now in es6 func args defaults are used when an argument is either omitted or undefined, therefore we could set default state.
//as reducers are actually called once when the store is created and then again after upon defined dispatches
//we always return a new version of state, never modify it!
// spread operator
const pensReducer = (state = initialState, action) => {

    let y;

    switch (action.type) {

        case types.FETCH_PEN_SUCCESS:
            y = Object.assign({}, state); //create a clone, but only shallow, nested objects require further work
            y.pen = action.pen;

            return y; //and return

        case types.FETCH_PENS_SUCCESS:
            y = Object.assign({}, state);
            y.pens = action.pens;
            y.filtered = action.pens;

            //lets get all

            return y;

        case types.SHOW_MORE_PENS:
            y = Object.assign({}, state); //create a clone, but only shallow, nested objects require further work
            y.end += y.perPage; //increment our per ending value

            return y; //and return

        case types.SEARCH_PENS:
            y = Object.assign({}, state); //create clone of current state

            y.query = action.query;

            y.filtered = y.pens; //a fresh copy of pens to filter

            if (y.query != '') {
                y.filtered = y.filtered.filter(function (el) {
                    if (el.title.toLowerCase().indexOf(y.query.toLowerCase()) > -1) {
                        return el;
                    }
                });
            }

            return y;

        default:
            return state;
    }
}

export default pensReducer;
