import { useState } from "react";

function App() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    "./images/2.jpg",
    "./images/3.jpg",
    "./images/4.jpg",
    "./images/1.jpg",
  ];

  const oldingaClick = () => {
    const newIndex = (imageIndex + 1) % images.length;
    setImageIndex(newIndex);
  };
  const orqagaClick = () => {
    const newIndex = (imageIndex - 1) % images.length;
    setImageIndex(newIndex);
  };

  return (
    <div>
      <img src={images[imageIndex]} alt="Rasm" width={400} />
      <button onClick={oldingaClick}>Start</button>
      <button onClick={orqagaClick}>Back</button>
    </div>
  );
}

export default App;
