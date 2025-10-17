import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// Image URLs
import hongKong from './images/hongkong.jpg';
import macao from './images/macao.webp';
import japan from './images/japan.webp';
import lasVegas from './images/lasvegas.webp';

function App() {
  return (
    <div className="App">
      <h1>Travel Carousel</h1>
      <Carousel showThumbs={true} autoPlay infiniteLoop>
        <div>
          <img src={hongKong} alt="Hong Kong" />
          <p className="legend">Hong Kong</p>
        </div>
        <div>
          <img src={macao} alt="Macao" />
          <p className="legend">Macao</p>
        </div>
        <div>
          <img src={japan} alt="Japan" />
          <p className="legend">Japan</p>
        </div>
        <div>
          <img src={lasVegas} alt="Las Vegas" />
          <p className="legend">Las Vegas</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
