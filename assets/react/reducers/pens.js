import * as types from '../actions/types';

// initial state of our store
const initialState = {
    pens: [],

    pen: null,

    types: [],
    typesSelected: [],

    users: [],
    usersSelected: [],

    query: '',
    sortBy: 'newest',

    end: 16,
    perPage: 16
};

/*
* nice now in es6 func args defaults are used when an argument is either omitted or undefined, therefore we could set default state.
* as reducers are actually called once when the store is created and then again after upon defined dispatches
* we always return a new version of state, never modify it!
* spread operator
*/
const pensReducer = (state = initialState, action) => {

    let y;

    switch (action.type) {

        case types.FETCH_PENS_SUCCESS:

            // create a clone, but only shallow, nested objects require further work
            y = Object.assign({}, state);

            // now lets assign some properties to our fresh new to be state object
            y.pens = action.pens;
            y.filtered = action.pens;

            // if we dont have users then must be first fetch, so lets populate that array
            if (y.users.length == 0) {
                let penUsers = [];
                let penTypes = [];

                // lets now populate our filter dropdown values
                y.pens.map(function (item, i) {

                    // lets save our types
                    penTypes.push(item.type);
                    penUsers.push(item.user);

                });

                // filter out our duplicates, cheap i know!!
                y.types = penTypes.filter(function (item, pos) { return penTypes.indexOf(item) == pos; });
                y.users = penUsers.filter(function (item, pos) { return penUsers.indexOf(item) == pos; });

                // then sort
                y.types.sort();
                y.users.sort();
            }

            return y;

        case types.SHOW_MORE_PENS:
            y = Object.assign({}, state);
            y.end += y.perPage; //increment our per ending value

            return y; //and return

        case types.FILTER_PENS_BY_TYPE: {
            y = Object.assign({}, state);

            // lets create a copy of the array as above does a shallow clone
            // and arrays are passed by reference also
            let x = y[action.payload.key].slice();

            // find our match
            let match = x.indexOf(action.payload.value);

            // if we have a match, remove from array
            if (match > -1) {
                x.splice(match, 1);
            }
            else {
                x.push(action.payload.value); //increment our per ending value
            }

            // finally append to main object
            y[action.payload.key] = x;

            return y; //and return
        }

        case types.SEARCH_PENS:
            y = Object.assign({}, state);

            y.query = action.query;

            return y;

        case types.FETCH_PEN_SUCCESS:
            y = Object.assign({}, state);

            y.pen = action.pen;

            return y;

        default:
            return state;
    }
};

export default pensReducer;
