import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {Button} from "react-bootstrap";
import { showAlert} from '../actions';

const HomeContainer = ({ showAlert }) => (
  <div className={'container pt-3 mb-5'}>
    <div className={'mt-5 text-center'}>
      <Button variant={'primary'} onClick={() => showAlert({
        type: 'success',
        title: 'Woot!',
        content: 'You have clicked the button!',
        showCancel: true,
      })}>
        Show an Alert
      </Button>
    </div>
  </div>
);

HomeContainer.propTypes = {
  showAlert: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({
});

export default connect(
  mapStateToProps,
  { showAlert }
)(withRouter(HomeContainer));
