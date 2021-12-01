import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import './App.css';
import FoodBox from './components/FoodBox';
import {useState} from 'react'
import AddFood from './components/AddFood';
import Search from './components/Search';


function App() {
  let [allFoods, setFoods] = useState(foods)
  let [allFoodsClone, setFoodsClone] = useState(foods)
  let [clicked, setClicked] = useState(false)
  let [todayFoods, setTodayFoods] = useState([])

  function handleToggle() {
  setClicked(!clicked)
}

  function handleSubmit(e) {
    e.preventDefault();
    let newFood = {
      name: e.target.name.value,
      calories: e.target.calories.value,
      image: e.target.image.value,
    };

    setFoodsClone([newFood, ...allFoodsClone]);
    setClicked(!clicked);
  }

  function handleSearch(e) {
    let word = e.target.value
    let wordLower = word.toLowerCase()
    let filteredFoods = allFoods.filter(food => {
      
      return food.name.toLowerCase().includes(wordLower)

    })
    console.log(e.target.value)
    console.log(filteredFoods)
    setFoodsClone(filteredFoods)
  }
  



    function handleAdd(food, quantity) {
      let addedFood = {
        name: food.name,
        quantity: quantity,
        calories: food.calories,
      };
      setTodayFoods([addedFood, ...todayFoods]);
    }

  return (
    <div>
      <div className='column'>
        <Search btnSearch={handleSearch} />
        {clicked ? (
          <AddFood btnSubmit={handleSubmit} />
        ) : (
          <button onClick={handleToggle}>Add Food</button>
        )}
        {allFoodsClone.map((ele, i) => {
          return <FoodBox food={ele} key={i} btnAdd={handleAdd} />;
        })}
      </div>
    </div>
   
  );
}

export default App;
