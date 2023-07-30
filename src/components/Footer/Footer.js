import "./Footer.css";
import { BsFillHeartFill } from "react-icons/bs";
function Footer() {
  return (
    <>
      <div id="contact" className="footer footer--padding footer--margin">
        <div className="footer__title">
          <h1>Terrarium World</h1>
          <p>
            Feel free to share your suggestions with us using the contact links
            below. We are more than happy to answer your concerns 24 hours a
            day. Thank you for your time.
          </p>
        </div>
        <div className="footer__subscribe">
          <div class="card">
            <span class="card__title">Subscribe</span>
            <p class="card__content">
              Get continuous notifications about our offers and discounds
              throughout the month. You will recieve emails from us and be aware
              of our new products and new features.
            </p>
            <div class="card__form">
              <input placeholder="Your Email" type="text" />
              <button class="sign-up"> Join</button>
            </div>
          </div>
        </div>
        <div className="footer__links">
          <button>FAQ</button>
          <button>Delivary</button>
          <button>Policy</button>
          <button>Suggestions</button>
          <button>Comming soon</button>
        </div>
        <div className="footer__copyright">
          <p>&copy; Copyright 2023. Made with </p>
          <BsFillHeartFill className="BsFillHeartFill" />
        </div>
      </div>
    </>
  );
}

export default Footer;
