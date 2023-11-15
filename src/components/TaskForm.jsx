import { useState } from "react";

const TaskForm = () => {
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const add = () => {
    console.log(`Price is ${price} and description is ${description}`);
  };

  return (
    <form>
      <label htmlFor="price">Price</label>
      <input
        type="number"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <label htmlFor="description">Description</label>
      <input type="text" onChange={(e) => setDescription(e.target.value)} />
      <button type="button" onClick={add}>
        Add +
      </button>
    </form>
  );
};

export default TaskForm;
