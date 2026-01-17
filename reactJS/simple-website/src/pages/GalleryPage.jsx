import React from 'react'
import "./GalleryPage.css"

const GalleryPage = () => {
  return (
 <section>
        <div className="imageGallery">
            <div className="imgOne"><img src="./assets/heroSection.jpg" alt="" className="imgGal"/></div>
            <div className="imgTwo"><img src="./assets/butterscotch.jpg" alt="" className="imgGal"/></div>
            <div className="imgThree"><img src="./assets/contactPageBG.jpg" alt="" className="imgGal"/></div>
            <div className="imgFour"><img src="./assets/mango.jpg" alt="" className="imgGal"/></div>
            <div className="imgFive"><img src="./assets/strawberry.jpg" alt="" className="imgGal"/></div>

        </div>
    </section>
  )
}

export default GalleryPage
