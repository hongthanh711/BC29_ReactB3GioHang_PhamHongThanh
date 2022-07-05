import React, { Component } from "react";
import DienThoai from "./DienThoai";
import dataPhone from "./../../Data/dataPhone.json";

export default class DanhSachDienThoai extends Component {
  renderPhone = () => {
    return dataPhone.map((ele) => {
      return (
        <DienThoai
          addToCart={this.props.addToCart}
          showDetail={this.props.showDetail}
          phone={ele}
        />
      );
    });
  };
  render() {
    return (
      <div>
        <h4>PRODUCT LIST</h4>
        <div className="row">{this.renderPhone()}</div>
      </div>
    );
  }
}
