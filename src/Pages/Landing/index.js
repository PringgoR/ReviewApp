import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import { fetchOmdbAction, fetchMovieDetail } from '../../Redux/action';

class Landing extends React.Component {
    componentDidMount() {
        this.props.fetchOmdbAction()  //This will fetch the API
    }

    selectMovie = (urlDetail) => {
        this.props.fetchMovieDetail(urlDetail)
    }

    render() {
        const { selectedOmdb } = this.props
        const { Meta } = Card;
       
    return(
        <React.Fragment>
           
        {
            this.props.omdbData.map(data => {
                return(
                    <Card
                        hoverable
                        style={{ width: 200 }}
                        cover={<img alt="movieposter" src={ data.Poster } />}
                    >
                        <p src= { data.Title} />
                        {/* <Meta title={data.title} /> */}
                        
                        <button onClick={()=> this.selectMovie(data.imdbID)}>Detail</button>
                    </Card>
                        )}
                    )
            }
         
        </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(Landing)