import React from 'react';
import {renderRandomImages, randomMovieImages } from '../../Utils/RandomImageGenerator';
import Modal from '../Common/Modal/Modal';

import './MovieBox.scss';

export default function MovieBox({data, index, onClickHandler, showDescription}) {
    const [directorDetail, setDirectorDetail] = React.useState(null);

    function _onHandleDirectorPopUp(e,data){
        e.stopPropagation();
        setDirectorDetail(data);
    }

    function _onClickClosePopUp(e){
        e.stopPropagation();
        setDirectorDetail(null)

    }

  
   
    
    return (
        <div key={index} className="movie__box__container" onClick={onClickHandler}>
            <div className="movie__overview">
            <section>
                <img src={renderRandomImages(randomMovieImages, index)} alt="movie"
                />
            </section>
            <section>
                <h3>{data?.Title}</h3>
                <p>Genre: {data && data["Major Genre"] ? data["Major Genre"] : "N/A"}</p>
                <p>Release Date: {data && data["Release Date"] ? data["Release Date"]: "N/A"}</p>
                <p onClick={(e)=>_onHandleDirectorPopUp(e,data?.Director)}>  
                Director:  <span className={`${data?.Director && 'underline__text'}`}>{data&& data.Director? data.Director : "N/A"}</span> </p>
            </section>
            </div>
            {showDescription && 
            <>
            <hr className="divider"/>
            <div className="movie__description">
                <h4>Description</h4>
                <p>{data && data.Storyline}</p>
            </div>
            </>
             }
             {directorDetail && <Modal director={directorDetail} onClose = {(e)=> _onClickClosePopUp(e)}/>}
        </div>
    )
}
