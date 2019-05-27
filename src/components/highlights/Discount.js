import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../utils/MyButton";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  percentage = () => {
    const { discountStart, discountEnd } = this.state;
    if (discountStart < discountEnd) {
      this.setState({
        discountStart: discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 30);
  }

  render() {
    const { discountStart } = this.state;
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.percentage()}>
            <div className="discount_percentage">
              <span>{discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 20th June</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
                eligendi voluptatum omnis quia consequuntur distinctio
                necessitatibus rem sapiente amet sed quisquam deserunt pariatur,
                corrupti quam debitis ipsam possimus animi ullam?
              </p>
              <MyButton text="Purchase tickets" bck="#ffa800" color="#fff" />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
