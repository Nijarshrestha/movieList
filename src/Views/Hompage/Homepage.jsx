import React from 'react';
import axios from 'axios';
import MovieBox from '../../Components/MovieBox/MovieBox';
import Spinner from '../../Components/Common/Spinner/Spinner';

import './Homepage.scss';

export default function Homepage() {
    const [movieList, setMovieList] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [showDescription, setShowDescription] = React.useState(null)

    function _onClickShowDescription(e, index){
        e.stopPropagation();
        setShowDescription(index)
    }

   

    React.useEffect(() => {
        async function fetchMovieData() {
            setLoading((prevState) => !prevState)
            let proxyServer = "https://cors-anywhere.herokuapp.com";
            try {
                let data = await axios(`${proxyServer}/https://www.wpincubator.com/sample-data/movies.json`);
                if (data) {
                    setMovieList(data && data.data)
                    setLoading((prevState) => !prevState)
                } else {
                    setError(data?.message || "Oops! Something went wrong.");
                    setLoading((prevState) => !prevState)

                }
            } catch (err) {
                setError(err?.response?.message || "Oops! Something went wrong.")
                setLoading((prevState) => !prevState)
            }
        }
        fetchMovieData()
    }, [])
    return (
        <div className="homepage__main__container">
            <header className="header__section">
                <h1>
                    Movies List
                </h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elte....</p>
            </header>
            {loading ?
                <div className="loading"><Spinner /></div> :
                <section className="movie__list">
                    {movieList && movieList.map((movie, index) =>
                        <div
                            className="movie__list__wrap">
                            <MovieBox data={movie} index={index}
                                onClickHandler={(e) => _onClickShowDescription(e,index)}
                                showDescription={index === showDescription ? true : false}
                            />
                        </div>)}
                    {error && <p>{error}</p>}
                </section>
            }
        </div>
    )
}
