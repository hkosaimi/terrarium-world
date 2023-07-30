import React from "react";
import { BiPlus } from "react-icons/bi";
import "./AddToCart.css";
function AddToCart() {
  return (
    <div className="addtocart">
      <button class="addtocart__btn">
        <span class="IconContainer">
          <BiPlus className="BsFillPlusCircleFill" />
        </span>
        <p class="text">Add To Cart</p>
      </button>
    </div>
  );
}

export default AddToCart;
