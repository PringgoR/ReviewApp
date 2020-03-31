//Disregards this page

// function HomePage() {
//     const[title, setTitle] = useState(null);

//     const fetchData = async () => {
//         const response = await axios.get(
//             'http://www.omdbapi.com/?apikey=421cb6d2&s=avenger'
//         );

//         setTitle(response.data);
//     };

//     return (
//         <div className= "HomePage">
//             <h1>Avengers List</h1>
//             <h2>Fetch a list from API and display it</h2>

//             {/* //Fetching data from API */}
//             <div>
//                 <button className="fetch-button" onClick={fetchData}>
//                 Avengers List
//                 </button>
//                 <br />
//             </div>

//             {/* //Display the data */}
//             <div className="avengers">
//                 {title &&
//                     title.map((title, index) => {
//                         const avengers = title.avengers.join(', ');

//                     return(
//                         <div className="movie" key={index}>
//                             <h3>Movie {index + 1}</h3>
//                             <h2>{title.title}</h2>

//                             <div className="details">
//                                 <p>Title: {avengers}</p>
//                                 <p>Year: {title.year}</p>
//                                 <p>imdbID: {title.imdbID}</p>
//                             </div>
//                           </div>
//                         );
//                     })}
//             </div>
                    
//         </div>
//     );
// }

// const rootElement = document.getElementById('root');
// ReactDOM.render(<HomePage />, rootElement);




// const Avengers = () => {
//     const selector = useSelector(state => ({
//         swapiData: state.swapiData.data
//     }))

//     const dispatch = useDispatch()

//     useEffect(() => {
//         dispatch(fetchSwapiAction())
//     })

//     return(
//         <React.Fragment>

//         </React.Fragment>
//     )
    
// }



class Home extends React.Component {
    render() {
        return(
            <div style = {{ margin: 'auto' }}>
                <p>Welcome to the HomePage</p>
                <p></p>
            </div> 
        )
    }
}

export default Home;

