import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}){
  return (
    <div>
      <h1> I like {name} </h1>
      <h4> {rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://www.thespruceeats.com/thmb/gqJ0irQmKyBlRujeZh_DtUg79o0=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/kimchi-dish-served-on-a-white-plate-173021127-588b8a945f9b5874ee55f535.jpg',
    rating: 4,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://cdn.crowdpic.net/detail-thumb/thumb_d_DB5AFFBD26B41E4934528EB193AF9F49.jpg',
    rating: 4.5,
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} 
        rating={dish.rating} />
        ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;