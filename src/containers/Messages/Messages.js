import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./Messages.module.scss";

class Messages extends Component {
  messages = () => {
    return this.props.messages.map((itm, index) => (
      <tbody className={classes.tbody}>
        <tr key={index} className={classes.row}>
          <td>{itm.name}</td>
          <td>{itm.email}</td>
          <td>{itm.message}</td>
        </tr>
      </tbody>
    ));
  };

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr
              style={{ background: "#c7f2e3", height: "50px", color: "black" }}
            >
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </tbody>
          {this.messages()}
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Messages);
