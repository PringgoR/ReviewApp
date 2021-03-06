const appState = {   //userState
    omdbData: {
        loading: false,
        data: []
    },
    selectedOmdb: {
        loading: false,
        data: [],
        urlDetail: 'http://www.omdbapi.com/?apikey=421cb6d2&i=tt0458339'
    }
}


const app = (state = {...appState}, action) => {   // user = ...{...userState}
    switch(action.type) {
        case 'FETCH_OMDB':
            return {
                ...state,
                omdbData: {
                    ...state.omdbData,
                    loading: true
                }
            }
        case 'FETCH_OMDB_SUCCESS' :
            return {
                ...state,
                omdbData: {
                    ...state.omdbData,
                    data: action.payload,
                    loading: false
                }
            }
        case 'FETCH_OMDB_FAILED' :
            return {
                ...state,
                omdbData: {
                    ...state.omdbData,
                    loading: false
                }
            }
        case 'FETCH_OMDB_DETAIL':
            return {
                ...state,
                selectedOmdb: {
                    ...state.selectedOmdb,
                    loading: true
                }
            }
        case 'FETCH_DETAIL_SUCCESS':
            return {
                ...state,
                selectedOmdb: {
                    ...state.selectedOmdb,
                    loading: false,
                    data: action.payload
                }
            }
        case 'FETCH_DETAIL_FAILED':
            return {
                ...state,
                selectedOmdb: {
                    ...state.selectedOmdb,
                    loading: false
                }
            }
        case 'UPDATE_URL_PKNAME' :
            return {
                ...state,
                selectedOmdb: {
                    ...state.selectedOmdb,
                    urlDetail: action.payload
                }
            }

        default :
            return state
    }
}

export default app    //user