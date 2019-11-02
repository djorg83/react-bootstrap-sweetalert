import React from 'react';
import {Navbar} from 'react-bootstrap';
import {connect} from "react-redux";
import HeaderNav from "../components/HeaverNav";

class HeaderContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { navExpanded: false };
  }

  componentDidMount() {
    document.addEventListener('click', this.onClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClickOutside);
  }

  onClickOutside = (event) => {
    const closestCollapse = event.target.closest('.navbar-collapse');
    const closestToggler = event.target.closest('.navbar-toggler');

    if (closestCollapse || closestToggler) return;

    if (this.state.navExpanded) {
      this.setNavExpanded(false);
    }
  };

  setNavExpanded = (expanded) => {
    this.setState({ navExpanded: expanded });
  };

  closeNav = () => {
    this.setNavExpanded(false);
  };

  render() {

    return (
      <Navbar
        bg="primary"
        variant={'dark'}
        expand="lg"
        sticky="top"
        onToggle={this.setNavExpanded}
        expanded={this.state.navExpanded}
      >
        <Navbar.Brand href="/">
          <div>
            {'Example'}
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="header-nav" />

        <HeaderNav {...this.props} onSelect={this.closeNav} />
      </Navbar>
    );
  }
}

HeaderContainer.propTypes = {
};

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  {}
)(HeaderContainer);
