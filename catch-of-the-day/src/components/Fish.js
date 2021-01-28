import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  handleClick = () => {
    this.props.addToOrder(this.props.index);
  };

  render() {
    // destructure and set short variables
    // const image = this.props.details.image;
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === "available";
    return (
      <li className="menu-fish">
        {/* <img src={this.props.details.image} alt={this.props.details.name}></img> */}
        <img src={image} alt={name}></img>
        <h3 className="fish=name">
          {name}
          <span className="price">{formatPrice(price)}</span>
          <p>{desc}</p>
          <button disabled={!isAvailable} onClick={this.handleClick}>
            {isAvailable ? "Add To Order" : "Sold Out!"}}
          </button>
        </h3>
      </li>
    );
  }
}

export default Fish;
