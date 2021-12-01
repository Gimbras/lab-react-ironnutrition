import { useState } from 'react';

export default function FoodBox(props) {
    let {name, calories, image } = props.food;
    let {food} = props
    let {btnAdd} = props

  const [quantity, setQuantity] = useState(0);

  function handleChange(e) {
    console.log(e.target.value);
    setQuantity(e.target.value);
  }

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
              <small>{calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                onChange={handleChange}
                className="input"
                type="number"
                value={quantity}
              />
            </div>
            <div className="control">
              <button
                onClick={() => {
                  btnAdd(food, quantity);
                }}
                className="button is-info"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}