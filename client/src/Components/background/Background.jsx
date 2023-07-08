import React from 'react'
import "./background.css"

const BackGround = () => {
  return (

    <div>
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" data-interval="2000">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src="https://www.eleganceweddingcars.co.uk/wp-content/uploads/2021/04/LWB-Silver-Cloud-Rolls-Royce-1750x1013.jpg"  alt="Third slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="https://www.wedding-spot.com/blog/sites/wsblog/files/styles/webp_desktop/public/images/migrated/167-wedding%2Barch%2Bwith%2Bflowers%2Boverlooking%2Bocean.jpg.webp?itok=H9Tkcsbi" alt="First slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="https://ruffledblog.com/wp-content/uploads/2020/03/matchinggroomlook-weddingtheme-_003.jpg" alt="Second slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="https://www.airtasker.com/blog/wp-content/uploads/2023/04/wedding-cake-ideas-scaled.jpg" alt="forth slide"/>
      </div>
    </div>
</div>
<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
<div>
<p className="w"> Welcome to Farrahni </p>
</div>
</div>
  )
}

export default BackGround
