import "./AddToCart.css";
import { BiPlus } from "react-icons/bi";
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
