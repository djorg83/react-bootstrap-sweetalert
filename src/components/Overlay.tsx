import React  from "react";
import { overlay as overlayStyle } from "../styles/SweetAlertStyles";

export default class Overlay extends React.Component<{
  show: boolean;
  onClick: Function;
  onKeyDown: Function;
}> {

  private overlayElement: HTMLDivElement = null;

  componentDidMount() {
    if (this.overlayElement) {
      this.overlayElement.scrollTop = 0;
    }
  }

  setOverlayElementRef = (element: HTMLDivElement) => {
    this.overlayElement = element;
  };

  render() {
    const { show, onClick, onKeyDown, children } = this.props
    return show ? (
      <div
        ref={this.setOverlayElementRef}
        style={overlayStyle}
        onClick={(e) => onClick(e)}
        tabIndex={0}
        onKeyDown={(e) => onKeyDown(e)}
      >
        {children}
      </div>
    ) : (
      <div tabIndex={0} onKeyDown={(e) => onKeyDown(e)}>
        {children}
      </div>
    )
  }
}