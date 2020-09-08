import React from "react";
import { Translation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import i18n from '../../i18n';
import logo from '../../assets/logo.png';
import './header.css';

// Redux
import { connect } from 'react-redux';
import store from '../../redux';
import { getLanguage } from '../../redux/actions/root-actions';

function Header(props) {
  return (
    <div className="header">
      <Row>
        <Col>
            <div className="logo">
              <img src={logo} alt="Company Logo" />
            </div>
        </Col>
      </Row>
    </div>
  );
}

const MapStateToProps = (state) => {
    return state.rootState;
};

export default connect(MapStateToProps)(Header);