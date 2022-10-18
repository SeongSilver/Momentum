import React from 'react'
import Main from './components/Main'
import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import img4 from './img/4.jpg'
import img5 from './img/5.jpg'
import img6 from './img/6.jpg'
import img7 from './img/7.jpg'
import img8 from './img/8.jpg'

function App() {
  const backgroundArr = [img1, img2, img3, img4, img5, img6, img7, img8];
  const randomIndex = Math.floor(Math.random() * backgroundArr.length);

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      backgroundImage: `url(${backgroundArr[randomIndex]})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-reat",
      backgroundPosition: "top center",
    }}>
      <Main />
    </div>
  )
}

export default App