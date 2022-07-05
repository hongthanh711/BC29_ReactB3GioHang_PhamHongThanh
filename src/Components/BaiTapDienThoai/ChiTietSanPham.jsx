import React, { Component } from "react";

export default class ChiTietSanPham extends Component {
  render() {
    return (
      <div className="row mt-5">
        <div className="col-5">
          <h4>{this.props.selectedPhone.tenSP}</h4>
          <img
            src={this.props.selectedPhone.hinhAnh}
            className="img-fluid"
            alt="phone"
          />
        </div>
        <div className="col-7">
          <h4 className="mb-5">THÔNG SỐ KỸ THUẬT</h4>
          <table className="table">
            <tbody>
              <tr>
                <td>Màn hình</td>
                <td>{this.props.selectedPhone.manHinh}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>{this.props.selectedPhone.heDieuHanh}</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>{this.props.selectedPhone.cameraTruoc}</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>{this.props.selectedPhone.cameraSau}</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>{this.props.selectedPhone.ram}</td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>{this.props.selectedPhone.rom}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
