import "./App.css";
import CartLoad from "./component/Cart/CartLoad";
import Collection from "./component/Collection/Collection";
import Footer from "./component/Footer/Footer";
import Header from "./component/header/Header";
import Home from "./component/Home/Home";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Collection></Collection>
      <CartLoad></CartLoad>
      <Footer></Footer>
    </div>
  );
}

export default App;
