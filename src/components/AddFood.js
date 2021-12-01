import React from 'react';

export default function AddFood(props) {
  const { btnSubmit } = props;
  return (
    <div>
      <h1>Add an item</h1>
      <form onSubmit={btnSubmit}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              name="name"
              className="input"
              type="text"
              placeholder="Food Name"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Number of Calories</label>
          <div className="control has-icons-left has-icons-right">
            <input
              name="calories"
              className="input is-success"
              type="number"
              placeholder="0"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Image</label>
          <div className="control has-icons-left has-icons-right">
            <input
              name="image"
              className="input is-success"
              type="text"
              placeholder="Enter image URL"
            />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}