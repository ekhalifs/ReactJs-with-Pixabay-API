import React from "react";

const ImageList = (props) =>{
    console.log(props)
    const images = props.images.map((image) =>{
        return (
            <div className="ui card">
                <div className="ui image">
                    <img src={image.webformatURL} alt={image.tags}/>
                    <div className="ui content">
                        <span className="right floated">
                         <i className="heart outline like icon"></i>
                         {image.likes}
                        </span>
                        <i className="comment icon"></i>
                        {image.comments}
                    </div>
                    <div className="ui extra content">
                        <a href={image.pageURL}><button className="ui basic green button">Learn More</button></a>
                    </div>
                </div>

            </div>
        )
    })
    return(
        <div>
            {images}
        </div>
    )
}

export default ImageList;