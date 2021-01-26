import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  // get the text from the input
  myInput = React.createRef();

  goToStore = (event) => {
    console.log("button clicked");
    // stop page from submitting and refreshing the page
    event.preventDefault();

    console.log("this-->", this);

    // change the page to /store/what-they-entered
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store -></button>
      </form>
    );
  }
}

export default StorePicker;
