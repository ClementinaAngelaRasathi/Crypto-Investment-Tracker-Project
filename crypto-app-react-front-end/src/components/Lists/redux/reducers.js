export const arrReducer = (state = [], action) => { // main array
    switch (action.type) {
        case 'MAIN_DATA':
            return action.mainData;
        default:
            return state;
    }
} 

export const favArrReducer = (state = [], action) => { // favorites array
    switch (action.type) {
        case 'FAV_DATA':
            return [...state, action.favData];
        default:
            return state;
    }
}

export const tempoArrReducer = (state = null, action) => { // temporary array
    switch (action.type) {
        case 'TEMPO_DATA':
            return action.tempoData;
        default:
            return state;
    }
}

export const searchValueReducer = (state = null, action) => { // search value
    switch (action.type) {
        case 'SEARCH_VALUE':
            return action.searchValue;
        default:
            return state;
    }
}