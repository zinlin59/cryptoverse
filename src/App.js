import { useEffect } from "react";
import { useState } from "react";
import Cards from "./components/Cards";
import "./App.css"
function App() {
  let arrayOfImages = [
    {
      num: 1,
      img: "https://i.pinimg.com/736x/7a/b7/31/7ab731b9bec5770f9eb11a3c50169040.jpg",
      isMatch : "false"
    },
    {
      num: 2,
      img: "https://w7.pngwing.com/pngs/906/609/png-transparent-single-red-flower-thumbnail.png",
      isMatch : "false"
     },
    {
      num: 3,
      img: "https://toppng.com/uploads/preview/single-flowers-clipart-images-stems-clip-art-dibujo-flower-with-stem-11562885340rindlpdkon.png",
      isMatch : "false"
       },
    {
      num: 4,
      img: "https://e1.pngegg.com/pngimages/106/672/png-clipart-flowers-white-single-petaled-dahlia-flower-art.png",
      isMatch : "false"
    }
  ];
  const [cards, setCards] = useState([]);
const [selectedCards, setSelectedCards] = useState([]);
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

  useEffect(()=>{
    console.log(selectedCards);
    if (selectedCards.length === 2) {
      setSelectedCards([]);
      checkMath();
    }
  },[selectedCards]);

  const checkMath = () => {
    if(selectedCards[0].num === selectedCards[1].num) {
     // console.log("yay");
     let updateCards = cards.map((card)=> {
      if(card.num === selectedCards[0].num) {
        return {...card, isMatch: true};

      }
      return card;
     });
     setCards(updateCards)
    }else{
      console.log("try agaain")
    }
  };
  console.log(cards)
  return (
    <div className="container">
      <div className="cards-container">
        {cards.map((card) => (
          <Cards key={card.id} card={card} setSelectedCards={setSelectedCards} selectedCards={selectedCards}/>
        ))}
      </div>
    </div>
  );

}

export default App;
