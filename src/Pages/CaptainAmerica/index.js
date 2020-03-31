import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { fetchOmdbAction, updateurlDetailAction, clearOmdbAction } from '../../Redux/action';
import { render } from 'react-dom';


const CaptainAmerica = () => {
    const selector = useSelector(state => ({
        OmdbData: state.OmdbData.data
    }))

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchOmdbAction())
    
    return function cleanup(){
        dispatch(clearOmdbAction())
    }
    }, [])

    const selectProfile = (urlDetail) => {
        dispatch(updateurlDetailAction(urlDetail))
    }

    return(
        // <React.Fragment>
            {
                selector.OmdbData.map(data => {
                    return(
                        <ul>
                            <li>
                                <p>Title: {data.title}</p>
                                <p>Year: {data.year}</p>
                                <p>imdbID: {data.imdbID}</p>
                                <p>Runtime: {data.runtime}</p>
                                <p>Actors: {data.actors}</p>
                                <p>Plot: {data.plot}</p>
                                
                                <button onClick={() => selectProfile(data.url)}>Select Profile</button>
                            </li>
                        </ul>
                    )
                })
            }
        // </React.Fragment>
    )
}


export default CaptainAmerica;