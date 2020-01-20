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
            background: itm.status === "pending" ? "#ff0000" : "#a8ff3e",
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
          className={classes.tr}
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
          <div className={classes.orders}>
            {orders.length !== 0 && (
              <React.Fragment>
                <h1>Orders</h1>
                <span className={classes.digit}>{orders.length}</span>
              </React.Fragment>
            )}
          </div>
          <div className={classes.items}>
            {totalItems.length !== 0 && (
              <React.Fragment>
                <h1>Items </h1>
                <span className={classes.digit}>{totalItems.length}</span>
              </React.Fragment>
            )}
          </div>
          <div className={classes.messages}>
            {messages.length !== 0 && (
              <React.Fragment>
                <h1>MESSAGES</h1>
                <span className={classes.digit}>{messages.length}</span>
              </React.Fragment>
            )}
          </div>
        </div>
        <div className={classes.latestItems}>
          <table className={classes.table}>
            <tbody>
              <tr
                style={{
                  background: "#333333",
                  height: "50px",
                  color: "white"
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
