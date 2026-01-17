import React from 'react'
import "./HomePage.css"

const HomePage = () => {
  return (
    <>
              <section>
            <h3>Our Products</h3>
            <div class="productList">
                <div class="card">
                    <img src="./assets/strawberry.jpg" alt="icename" />
                    <h4>Strawberry</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quidem.</p>
                    <p><del>₹ 1000</del> <span>₹ 120</span></p>
                    <button class="btnCard">Add To Cart</button>
                    <button class="btnCard">Buy Now</button>
                </div>
                <div class="card">
                    <img src="./assets/mango.jpg" alt="icename" />
                    <h4>Mango</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quidem.</p>
                    <p><del>₹ 1550</del> <span>₹ 220</span></p>
                    <button class="btnCard">Add To Cart</button>
                    <button class="btnCard">Buy Now</button>
                </div>
                <div class="card">
                    <img src="./assets/butterscotch.jpg" alt="icename" />
                    <h4>Butterscotch </h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quidem.</p>
                    <p><del>₹ 100</del> <span>₹ 20</span></p>
                    <button class="btnCard">Add To Cart</button>
                    <button class="btnCard">Buy Now</button>
                </div>
                <div class="card">
                    <img src="./assets/chocolate.jpg" alt="icename" />
                    <h4>Chocolate</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quidem.</p>
                    <p><del>₹ 1111</del> <span>₹ 190</span></p>
                    <button class="btnCard">Add To Cart</button>
                    <button class="btnCard">Buy Now</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default HomePage
