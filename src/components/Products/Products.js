import "./Products.css";
import AddToCart from "../../components/AddToCart/AddToCart";
import { AiFillPlusCircle } from "react-icons/ai";
import pro1 from "../../assets/terra1.jpg";
import pro2 from "../../assets/pro2.jpg";
import pro3 from "../../assets/pro3.jpg";
import pro4 from "../../assets/pro4.jpg";
import pro5 from "../../assets/pro5.jpg";
function Products() {
  return (
    <div className="products products--padding">
      <div className="products__title">
        <h1>Choose your mini forest and decorate your house with plants. </h1>
      </div>
      <div className="products__wrapper">
        <div className="products__product">
          <div className="products__product-img">
            <img src={pro3} />
          </div>
          <div className="products__product-des">
            <div className="products__product-title">
              <h1>7 K.D</h1>
              <p>Size: 18 * 18 cm</p>
            </div>
            <div className="products__addtocart">
              <AddToCart />
            </div>
          </div>
        </div>
        <div className="products__product">
          <div className="products__product-img">
            <img src={pro4} />
          </div>
          <div className="products__product-des">
            <div className="products__product-title">
              <h1>10 K.D</h1>
              <p>Size: 30 * 30 cm</p>
            </div>
            <div className="products__addtocart">
              <AddToCart />
            </div>
          </div>
        </div>
        <div className="products__product">
          <div className="products__product-img">
            <img src={pro5} />
          </div>
          <div className="products__product-des">
            <div className="products__product-title">
              <h1>10 K.D</h1>
              <p>Size: 25 * 25 cm</p>
            </div>
            <div className="products__addtocart">
              <AddToCart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
