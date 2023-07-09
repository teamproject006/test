
import  React from 'react';


function Aboutus() {


  return (

    <div className='about-container'>
    <section id='about_us' className='about-section'>
      <h3 className='about-heading'>About Us</h3>
      <h2 className='about-subheading'>Why Choose Us?</h2>
      <div className='about-content'>
        <div className='about-description'>
          <h3 className='about-description-heading'>Our Story</h3>
          <p className='about-description-text'>
            We create experiences that tell your story. We love people and are passionate about serving them well. We are here to make the process of planning your wedding just as memorable as your wedding day itself.
          </p>
          <p className='about-description-text'>
            We'll build a strong relationship with you, do a lot of intentional listening, laugh, and earn your trust. As we get to know you, we'll shape your celebration in a way that tells your story.
          </p>
          <button className='about-learn-more-btn'><a href='#'>Learn More</a></button>
        </div>
      </div>
    </section>
  </div>

  );
}

;

      
 

export default Aboutus
