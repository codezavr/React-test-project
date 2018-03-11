const coreState = {
    headerMenu: {},
    filteredHeaderMenu: {}
};

export function reducer(state = coreState, action) {
    // console.log(state, action);
    switch (action.type) {
        case 'ADD_HEADER_MENU':
            return {
                ...state,
                headerMenu: action.payload
            };
        case 'ADD_FILTERED_MENU':
            return {
                ...state,
                filteredHeaderMenu: action.payload
            };
        default:
            return state
    }
}