import React, { Component } from "react";
import dataPhone from "./../../Data/dataPhone.json";
import ChiTietSanPham from "./ChiTietSanPham";
import DanhSachDienThoai from "./DanhSachDienThoai";
import DienThoai from "./DienThoai";
import GioHang from "./GioHang";

export default class BaiTapDienThoai extends Component {
  state = {
    selectedPhone: dataPhone[0],
    cartList: [],
  };

  showDetail = (phone) => {
    this.setState({
      selectedPhone: phone,
    });
  };

  addToCart = (phone) => {
    const dataCart = [...this.state.cartList];

    const index = dataCart.findIndex((ele) => {
      return ele.maSP === phone.maSP;
    });

    if (index !== -1) {
      dataCart[index].soLuong += 1;
    } else {
      dataCart.push({ ...phone, soLuong: 1 });
    }

    this.setState({
      cartList: dataCart,
    });
  };

  handleQuatity = (phone, isIncrease) => {
    const dataCart = [...this.state.cartList];

    const index = dataCart.findIndex((ele) => ele.maSP === phone.maSP);

    if (index === -1) {
      alert("Không tìm thấy sản phẩm");

      throw new Error("Không tìm thấy sản phẩm");
    }

    if (isIncrease) {
      dataCart[index].soLuong += 1;
    } else if (dataCart[index].soLuong > 1) {
      dataCart[index].soLuong -= 1;
    } else if (window.confirm("Bạn có muốn xóa sp không?")) {
      dataCart.splice(index, 1);
    }

    this.setState({
      cartList: dataCart,
    });
  };

  deletedPhone = (phone) => {
    const dataCart = [...this.state.cartList];

    const index = dataCart.findIndex((ele) => ele.maSP === phone.maSP);

    if (window.confirm("Bạn có muốn xóa sp không?")) {
      dataCart.splice(index, 1);
    }

    this.setState({
      cartList: dataCart,
    });
  };

  render() {
    return (
      <div className="container">
        {/* MODAL */}
        <GioHang
          handleQuatity={this.handleQuatity}
          cartList={this.state.cartList}
          deletedPhone={this.deletedPhone}
        />

        {/* PRODUCT LIST */}
        <DanhSachDienThoai
          addToCart={this.addToCart}
          showDetail={this.showDetail}
        />

        {/* ProductDetail */}
        <ChiTietSanPham selectedPhone={this.state.selectedPhone} />
      </div>
    );
  }
}
