import React, { Component } from 'react';
import { Translation } from 'react-i18next';
import i18n from '../../i18n';
import Locale from '../locale';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <Translation>
        {
          t =>
            <div className="footer container">
              <Locale />
              <ul>
                <li><a href="#">{t('footer.termsofuse')}</a></li>
                <li><a href="#">{t('footer.privacy')}</a></li>
              </ul>
              <p className="copyright">{t('footer.copyright')}</p>
            </div>
        }
      </Translation>
    )
  }
}

export default Footer;