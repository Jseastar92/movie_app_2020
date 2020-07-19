import React from 'react';

function Food({name, picture}){
  return (
    <div>
      <h1> I like {name} </h1>
      <img src={picture} alt={name}/>
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://www.thespruceeats.com/thmb/gqJ0irQmKyBlRujeZh_DtUg79o0=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/kimchi-dish-served-on-a-white-plate-173021127-588b8a945f9b5874ee55f535.jpg',
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://cdn.crowdpic.net/detail-thumb/thumb_d_DB5AFFBD26B41E4934528EB193AF9F49.jpg',
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
        ))}
    </div>
  );
}

export default App;