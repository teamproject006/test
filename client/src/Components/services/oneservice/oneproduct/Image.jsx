import React from 'react'
import { Carousel } from "react-carousel-minimal";


const  Image=()=> {



    const data = [
        {
          image:
            "https://scontent.ftun4-2.fna.fbcdn.net/v/t39.30808-6/355690757_588562480088658_9089429846926111752_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=uUohUjU7WHgAX-40KAs&_nc_ht=scontent.ftun4-2.fna&oh=00_AfBRHJVARmNarSA8hc9NCUCInLRrbHomuRkn5RLn900Rfg&oe=64AAD195",
         
    
        },
        {
          image:
            "https://scontent.ftun4-2.fna.fbcdn.net/v/t39.30808-6/345557956_640825741197397_1103653337166920604_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=gWsnWz6oz78AX-tgYiT&_nc_ht=scontent.ftun4-2.fna&oh=00_AfBIw_7BT-Y_yfeipPHDYAl4y5Do3wyHvjDaaeL7iow89A&oe=64AB95AD",
          
        },
        {
          image:
            "https://scontent.ftun4-2.fna.fbcdn.net/v/t39.30808-6/343306159_664668205386607_6367017931892160889_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=FeAkgemuPUIAX8rqRCi&_nc_ht=scontent.ftun4-2.fna&oh=00_AfABnVMTpkOMSu3ZJbs3z_r6y5hvu8Jjr_lLkwSD-SIBtg&oe=64AB86C0",
         
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
        
        },
        {
          image:
            "https://scontent.ftun4-2.fna.fbcdn.net/v/t39.30808-6/329962926_965476798165905_1457043618993866665_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=rl3emEyzFuIAX9OREws&_nc_ht=scontent.ftun4-2.fna&oh=00_AfAwYHPpdsabDIfAhFmqBsDYOIx4cKHs4B-gNXjmSFwQvw&oe=64AAF327",
     
        },
    
      ];
    
      const captionStyle = {
        fontSize: "2em",
        fontWeight: "bold",
      };
      const slideNumberStyle = {
        fontSize: "20px",
        fontWeight: "bold",
      };
      return (
        <section id="image">
        <div className="App">
          <div style={{ textAlign: "center" }}>
            <h2>Images</h2>
            <p>
            
            </p>
            <div
              style={{
                padding: "0 20px",
              }}
            >
              <Carousel
                data={data}
           
                width="850px"
                height="500px"
                captionStyle={captionStyle}
                radius="10px"
             
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
              
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnails={true}
                thumbnailWidth="100px"
                showNavBtn={true}
                style={{
                  textAlign: "center",
                  maxWidth: "850px",
                  margin: "40px auto",
                }}
              />
            </div>
          </div>
        </div>
        </section>
      );
    }


export default Image


