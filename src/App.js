import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Products />
      <Footer />
    </>
  );
}

export default App;
