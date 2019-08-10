import React  from "react";
import * as styles from "../styles/SweetAlertStyles";

export default class Overlay extends React.Component {
  componentDidMount() {
    if (this.refs.overlay) {
      this.refs.overlay.scrollTop = 0;
    }
  }

  render() {
    const { show, onClick, onKeyDown, children } = this.props
    return show ? (
      <div ref="overlay" style={styles.overlay} onClick={onClick} tabIndex="0" onKeyDown={onKeyDown}>
        {children}
      </div>
    ) : (
      <div tabIndex="0" onKeyDown={onKeyDown}>
        {children}
      </div>
    )
  }
}