import React, { useEffect, useState } from "react";

import './App.css';

function App() {
  const [passaDig, setPassadig] = useState(null);

  useEffect(() => {
    const initiate = async () => {
      await initStates();
    }

    initiate();
  }, [])

  const initStates = async () => {
    setPassadig(createPassadigItem());
  }

  return (
    <div className="App">
      <div className="main-container">
        {
          !passaDig ?
            <p>Loading</p>
            :
            <div>
              <h1>{passaDig.name} {passaDig.quote}</h1>
              <img src={passaDig.image} />
            </div>
        }
      </div>
    </div>
  );
}

const createPassadigItem = () => {
  const randomPassadigItem = getRandomPassadigItem();
  const randomQuote = getRandomQuote();

  var item = {
    name: randomPassadigItem.name,
    image: randomPassadigItem.image,
    quote: randomQuote
  }

  return item;
}

const getRandomPassadigItem = () => {
  const randomNumber = Math.floor(Math.random() * 14);

  const items = getPassadigItems();
  return items[randomNumber];
}

const getRandomQuote = () => {
  const randomNumber = Math.floor(Math.random() * 5);

  const items = getPassadigQuotes();
  return items[randomNumber];
}

const getPassadigItems = () => {
  const items = [
    {
      name: 'Balogh',
      image: '/img/balogh.png'
    },
    {
      name: 'Balogh',
      image: '/img/balogh2.png'
    },
    {
      name: 'Balogh',
      image: '/img/balogh3.png'
    },
    {
      name: 'David',
      image: '/img/david.png'
    },
    {
      name: 'David',
      image: '/img/david2.png'
    },
    {
      name: 'Erik',
      image: '/img/erik.png'
    },
    {
      name: 'Love',
      image: '/img/love.png'
    },
    {
      name: 'Love',
      image: '/img/love2.png'
    },
    {
      name: 'Oscar',
      image: '/img/oscar.png'
    },
    {
      name: 'Oscar',
      image: '/img/oscar2.png'
    },
    {
      name: 'Pascal',
      image: '/img/pascal.png'
    },
    {
      name: 'Pascal',
      image: '/img/pascal2.png'
    },
    {
      name: 'Pascal',
      image: '/img/pascal3.png'
    },
    {
      name: 'Mattias',
      image: '/img/mattias.png'
    },
    {
      name: 'Mattias',
      image: '/img/mattias2.png'
    },
  ]

  return items;
}

const getPassadigQuotes = () => {
  const quotes = [
    'ber dig vänligen att PASSA DIG!!!',
    'tycker starkt att du ska ta och PASSA DIG!!!',
    'tycker att du gör bäst i att PASSA DIG snarast!',
    'insisterar att du nu måste PASSA DIG!!!',
    'undviker helst att bli förbannad. Så du måste PASSA DIG!!!',
    'håller med resten och säger: PASSA DIG!!!',
    ': Passa dig!'
  ]

  return quotes;
}



export default App;
