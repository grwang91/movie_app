import React from 'react';
import PropTypes from "prop-types";

let Food = ({name,picture,rating}) => {
  
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
  </div>
}

let renderFood = (dish) => {
  return (
  <Food 
    key={dish.id}
    name={dish.name} 
    picture={dish.image} 
    rating={dish.rating}
  />)
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

const foodILike = [
  {
    id:1,
    name: "kimchi",
    image: "https://ohyena.files.wordpress.com/2015/02/ec8aa4ed81aceba6b0ec83b7-2015-02-23-21-38-58.png",
    rating: 5.0
  },
  {
    id:2,
    name: "ramen",
    image: "https://i.pinimg.com/originals/95/13/d9/9513d9288e24a6381c1bd464735cb8f5.png",
    rating: 4.6
  }
];

function App() {
  return (
    <div>
      {foodILike.map(renderFood)};
    </div>
  );
}

export default App;
