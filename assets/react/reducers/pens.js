import * as types from '../actions/types';

// initial state of this branch of the store
const initialState = {
    pens: [],

    pen: null,

    types: ['layout', 'component'],
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

                y.types = penTypes.filter(function (item, pos) { return penTypes.indexOf(item) == pos });
                y.types.sort();

                y.users = penUsers.filter(function (item, pos) { return penUsers.indexOf(item) == pos });
                y.users.sort();
            }

            return y;

        case types.SHOW_MORE_PENS:
            y = Object.assign({}, state); //create a clone, but only shallow, nested objects require further work
            y.end += y.perPage; //increment our per ending value

            return y; //and return

        case types.FILTER_PENS_BY_TYPE:
            y = Object.assign({}, state); //create a clone, but only shallow, nested objects require further work

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

        case types.SEARCH_PENS:
            y = Object.assign({}, state); //create clone of current state

            y.query = action.query;

            return y;

        default:
            return state;
    }
}

export default pensReducer;
