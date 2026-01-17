import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <>
     <header class="hero">
        <div class="hero-content">
            <h1 class="hero-title">Scoops of Happiness 🍦</h1>
            <p class="hero-subtitle">
                Fresh • Creamy • Delicious Ice Cream
            </p>
            <a href="#" class="hero-btn">Explore Flavors</a>
        </div>

        <div class="floating ice1">🍦</div>
        <div class="floating ice2">🍨</div>
        <div class="floating ice3">🍧</div>
    </header>
    </>
  )
}

export default Header
