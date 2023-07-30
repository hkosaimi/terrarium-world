import "./Products.css";
import AddToCart from "./AddToCart";
import { pro1, pro2, pro3, pro4, pro5, pro6, pro7 } from "./import";
function Products() {
  return (
    <div className="products products--padding">
      <div className="products__title">
        <h1>Choose your mini forest and decorate your house with plants. </h1>
      </div>
      <div className="products__wrapper">
        <div className="products__product">
          <div className="products__product-img">
            <img src={pro1} />
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
            <img src={pro2} />
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
            <img src={pro3} />
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
        <div className="products__product">
          <div className="products__product-img">
            <img src={pro4} />
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
        <div className="products__product">
          <div className="products__product-img">
            <img src={pro6} />
          </div>
          <div className="products__product-des">
            <div className="products__product-title">
              <h1>15 K.D</h1>
              <p>Size: 40 * 40 cm</p>
            </div>
            <div className="products__addtocart">
              <AddToCart />
            </div>
          </div>
        </div>
        <div className="products__product">
          <div className="products__product-img">
            <img src={pro7} />
          </div>
          <div className="products__product-des">
            <div className="products__product-title">
              <h1>20 K.D</h1>
              <p>Size: 40 * 40 cm</p>
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
