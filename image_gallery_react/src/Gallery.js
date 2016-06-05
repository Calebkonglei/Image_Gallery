import React, {Component} from 'react';

const image=[
    ../images/image1.jpg,
    ../images/image2.jpg,
    ../images/image3.jpg,
    ../images/image4.jpg,        
];

export default class Gallery extends Component {
	constructor(props){
		super(props);
		this.state = {
			images:image,
			selectedImage:image[0]
		}
	}

	render(){
        const {images, selectedImage} = this.state;
        return (
           <div className="image-gallery">
               <div className="gallery-image">
                  <div>
                      <img src={selectedImage} />
                  </div>
               </div>
               <div className="image-scroller">
                   {images.map((image,index)=>{
               	      <div key={index}>
               	         <img src={image} />
               	      </div>    
                   })}
               </div>
           </div>   
        	)
	}
}