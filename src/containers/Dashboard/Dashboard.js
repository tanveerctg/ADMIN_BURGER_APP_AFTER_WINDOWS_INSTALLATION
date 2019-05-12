import React, { Component } from "react";
import classes from "./Dashboard.module.scss";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    const { orders, totalItems, messages } = this.props;
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
        <div className={classes.latestItems} />
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
