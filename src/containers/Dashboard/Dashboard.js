import React, { Component } from "react";
import classes from "./Dashboard.module.scss";
import { connect } from "react-redux";
import moment from "moment";

class Dashboard extends Component {
  // this.props.history.push({pathname:`edit_burger/${this.props.id}`,state:{...this.props.burgerInfo}})
  orders = () => {
    return this.props.orders.map((itm, index) => (
      <tbody>
        <tr
          id={itm.id}
          key={itm.id}
          style={{
            background: itm.status === "pending" ? "#ee4540" : "#eeeeee",
            height: "50px",
            color: itm.status === "pending" ? "white" : "black",
            border: "none"
          }}
          onClick={() => {
            this.props.history.push({
              pathname: `confirmOrder`,
              state: { ...itm }
            });
          }}
        >
          <td>{itm.CustomerInfo.name}</td>
          <td>{itm.CustomerInfo.table ? "Restaurant" : "Home/Office"}</td>
          <td>{moment(itm.orderTime).fromNow()}</td>
          <td>{itm.status}</td>
        </tr>
      </tbody>
    ));
  };

  render() {
    const { orders, totalItems, messages } = this.props;
    console.log(orders);
    return (
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.item}>
            {orders.length !== 0 && <h1>Total Orders :{orders.length}</h1>}
          </div>
          <div className={classes.item}>
            {totalItems.length !== 0 && (
              <h1>Total Items :{totalItems.length}</h1>
            )}
          </div>
          <div className={classes.item}>
            {messages.length !== 0 && <h1>MESSAGES :{messages.length}</h1>}
          </div>
        </div>
        <div className={classes.latestItems}>
          <table>
            <tbody>
              <tr
                style={{
                  background: "#c7f2e3",
                  height: "50px",
                  color: "black"
                }}
              >
                <th>Name</th>
                <th>Location</th>
                <th>Order Time</th>
                <th>Status</th>
              </tr>
            </tbody>
            {this.orders()}
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    orders: state.orderReducer,
    totalItems: state.burgerReducer,
    messages: state.messages
  };
};
export default connect(mapStateToProps)(Dashboard);
