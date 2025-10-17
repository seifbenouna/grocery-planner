import React from "react";

const Addform = ({
  productName,
  productPrice,
  handleAddProduct,
  setShowAddForm,
}) => {
  return (
    <div className="overlay">
      <form>
        <input type="text" placeholder="product name" ref={productName} />
        <br />
        <input type="number" placeholder="product price" ref={productPrice} />
        <br />
        <button type="button" onClick={handleAddProduct}>
          Add
        </button>
        <button type="button" onClick={() => setShowAddForm(false)}>
          Cancel
        </button>
      </form>{" "}
    </div>
  );
};

export default Addform;
