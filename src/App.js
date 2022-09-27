// feature 1
import React from "react";
import Products from "./components/Products";
import Data from "./data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: Data.products,
      size: "",
      sort: "",
    };
  }

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
             <Products products={this.state.products}/>
            </div>
            <div className="sidebar">Add To Cart </div>
          </div>
        </main>
        <footer>All right is reserve</footer>
      </div>
    );
  }
}

export default App;
