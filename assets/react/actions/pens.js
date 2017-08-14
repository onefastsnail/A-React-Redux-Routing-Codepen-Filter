import * as types from './types';

// a action creater, it creates an action payload
export function searchPens(query) {
    // in es6 the second property we are not using left hand assignment as if property name matches then it will do this for us
    return { type: types.SEARCH_PENS, query };
}

export const showMorePens = () => ({
    type: types.SHOW_MORE_PENS
})

export const requestPens = () => ({
    type: types.FETCH_PENS_REQUEST
})


export const receivePens = (json) => ({
    type: types.FETCH_PENS_SUCCESS,
    pens: json,
})

export const requestPen = () => ({
    type: types.FETCH_PEN_REQUEST
})


export const receivePen = (json) => ({
    type: types.FETCH_PEN_SUCCESS,
    pen: json,
})

export function fetchPens() {

    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.

    return function (dispatch) {

        // First dispatch: the app state is updated to inform
        // that the API call is starting.

        dispatch(requestPens())

        // The function called by the thunk middleware can return a value,
        // that is passed on as the return value of the dispatch method.

        // In this case, we return a promise to wait for.
        // This is not required by thunk middleware, but it is convenient for us.

        return fetch('assets/api/pens.json')
            .then(response => response.json())
            .then(json =>

                // We can dispatch many times!
                // Here, we update the app state with the results of the API call.

                dispatch(receivePens(json))
            )

        // In a real world app, you also want to
        // catch any error in the network call.
    }
}

export function fetchPen() {

    return function (dispatch) {

        dispatch(receivePen({ id: 92992 }));

    }

}
