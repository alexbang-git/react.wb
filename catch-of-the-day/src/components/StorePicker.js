import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  // handleClick() {
  //   alert("Button clicked!");
  // }
  // 2. get the text from the input, create property myInput for the component
  myInput = React.createRef();

  // using custom method like below to handle events won't work becuase it is not bound to 'this'
  // goToStore(event) {
  //
  // instead, create a property for the instance using below syntax to bind it to 'this'
  goToStore = (event) => {
    // 1. stop page from submitting and refreshing the page
    event.preventDefault();
    console.log("this from goToStore property on form submit-->", this);
    // 3. change the page to /store/what-user-entered
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        {/* <button onClick={this.handleClick}>Click me!</button> */}
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
