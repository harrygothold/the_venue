import React, { Component } from "react";
import MyButton from "../utils/MyButton";

import Zoom from "react-reveal/Zoom";

class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Balcony", "Medium", "Star"],
    desc: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est incidunt hic, fuga quaerat accusamus commodi error doloribus placeat in amet!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est incidunt hic, fuga quaerat accusamus commodi error doloribus placeat in amet!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est incidunt hic, fuga quaerat accusamus commodi error doloribus placeat in amet!"
    ],
    linkto: ["http://sales/b", "http://sales/m", "http://sales/s"],
    delay: [500, 0, 500]
  };

  showBoxes = () => {
    const { prices, positions, desc, linkto, delay } = this.state;
    return prices.map((box, i) => (
      <Zoom delay={delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>£{prices[i]}</span>
              <span>{positions[i]}</span>
            </div>
            <div className="pricing_description">{desc[i]}</div>
            <div className="pricing_buttons">
              <MyButton
                text="Purchase Tickets"
                bck="#ffa800"
                color="#fff"
                link={linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));
  };

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
