import { useEffect } from "react";
import { useState } from "react";
import Cards from "./components/Cards";
import "./App.css"
function App() {
  let arrayOfImages = [
    {
      num: 1,
      img: "https://i.pinimg.com/736x/7a/b7/31/7ab731b9bec5770f9eb11a3c50169040.jpg"
    },
    {
      num: 2,
      img: "https://w7.pngwing.com/pngs/906/609/png-transparent-single-red-flower-thumbnail.png"
    },
    {
      num: 3,
      img: "https://toppng.com/uploads/preview/single-flowers-clipart-images-stems-clip-art-dibujo-flower-with-stem-11562885340rindlpdkon.png"
    },
    {
      num: 4,
      img: "https://e1.pngegg.com/pngimages/106/672/png-clipart-flowers-white-single-petaled-dahlia-flower-art.png"
    }
  ];
  const [cards, setCards] = useState([]);

  const shuffleImage = () => {
    //double array
    let shuffleImage = [...arrayOfImages, ...arrayOfImages]
      // add id
      .map((item, index) => ({ ...item, id: index + 1 }))
      //shuffle
      .sort((a, b) => 0.5 - Math.random());
    setCards(shuffleImage);
  };
  //console.log(cards);
  useEffect(() => {
    shuffleImage();
  }, []);
  return (
    <div className="container">
      <div className="cards-container">
        {cards.map((card) => (
          <Cards key={card.id} card={card} />
        ))}
      </div>
    </div>
  );

}

export default App;
