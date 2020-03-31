import React from 'react';
import { connect } from 'react-redux';
import { fetchOmdbAction, fetchMovieDetail } from '../../Redux/action';
import { Card } from 'antd';
import history from '../History';
// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Landing from '../Landing';


class MovieDetails extends React.Component {
    componentDidMount() {
        this.props.fetchMovieDetail()
    }

    selectMovie = (urlDetail) => {
        this.props.fetchMovieDetail(urlDetail)
    }

    render() {
        const { selectedOmdb } = this.props
        
    // const history = useHistory()
    
    return(
        <React.Fragment>
                    <div>Hello this is the moviedetails page    
                    <img src={selectedOmdb.Poster}></img>
                    <p>Title: {selectedOmdb.Title}</p> <br />
                    <p>Year: {selectedOmdb.Year}</p>
                        {selectedOmdb.Title},
                        {selectedOmdb.Year} <br />
                    <Link to='/'>Go Back </Link>
                    {/* <button onClick={() => props.history.push('/Landing')}>Go Back</button> */}
                    </div>
                        )}
                    )
            }
        </React.Fragment>     
        
        

            /* <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg"
                        title="Captain America"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            First Avenger Movie
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Captain America: The First Avenger
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Movie Details
                    </Button>
                </CardActions>
            </Card> */
    )
    }
}

const mapStateToProps = state => ({
    omdbData: state.omdbData.data,
    loadingProfile: state.selectedOmdb.loading,
    selectedOmdb: state.selectedOmdb.data,
    urlDetail: state.selectedOmdb.urlDetail
})

const mapDispatchToProps = {
    fetchOmdbAction,
    fetchMovieDetail
}

export default connect (mapStateToProps, mapDispatchToProps)(MovieDetails)