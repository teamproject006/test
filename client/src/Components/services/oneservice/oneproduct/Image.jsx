import React from 'react'
import "./one.css"





const  Image=({images})=> {


    return (
      <div className='images-container'>
        {/* <h1>Images</h1> */}
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {images.split(" ").map((imageUrl, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img className="d-block w-100" src={imageUrl} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    </div>
      );
    }


export default Image


