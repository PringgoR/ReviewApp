import axios from 'axios';

export const fetchOmdb = () => ({
    type: 'FETCH_OMDB'
})

export const fetchOmdbAction = () => {
    return (dispatch) => {
        dispatch(fetchOmdb())
        axios.get('https://www.omdbapi.com/?apikey=421cb6d2&s=avenger')
        .then(res => {
            dispatch({
                type: 'FETCH_OMDB_SUCCESS',
                payload: res.data.Search
            })
        })
        .catch(err => {
            dispatch({
                type: 'FETCH_OMDB_FAILED'
            })
            throw err
        })
    }
}

export const fetchMovieDetail = (params) => {
    return dispatch => {
        dispatch({
            type: 'FETCH_OMDB_DETAIL'
        })
        let link = 'https://www.omdbapi.com/?apikey=421cb6d2&i=tt0458339'+params
        axios.get(link)
        .then(res => {
            console.log(res,`<==== Res ====>`)
            dispatch({
                type: 'FETCH_DETAIL_SUCCESS',
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: 'FETCH_DETAIL_FAILED'
            })
            throw err
        })
    }
}

export const updateurlDetailAction = urlDetail => ({
    type: 'UPDATE_URL_DETAIL',
    payload: urlDetail
})

export const clearOmdbAction = () => ({
    type: 'CLEAR_OMDB_DATA'
})

