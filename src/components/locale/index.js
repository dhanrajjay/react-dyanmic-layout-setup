import React, { useState, Component } from 'react';
import  { ButtonGroup, Button } from 'react-bootstrap';
import { Translation } from 'react-i18next';
import i18n from '../../i18n';
import './locale.css';

// Redux
import store from '../../redux';
import { updateLanguage } from '../../redux/actions/root-actions';

function Locale() {
	const [language, setLanguage] = useState('en');
	const changeLanguage = lang => {
		i18n.changeLanguage(lang)
		window.localStorage.setItem('locale', lang);
	};
	const onStateChange = lang => {
		setLanguage(lang);
		store.dispatch(updateLanguage(lang));
	};

	const updateLang = lang => {
		changeLanguage(lang);
		onStateChange(lang);
	}
	return(
	    <>
	    <Translation>
          {
            t =>
            <>
                <div className="locale-container">
                    <div>{t('language.switch')}</div>
                    { language === 'fr' && <span className="language" active={(language === 'en').toString()} onClick={() => updateLang('en')} >English</span>}
                    { language === 'en' && <span className="language" active={(language === 'fr').toString()} onClick={() => updateLang('fr')} >Francias</span> }
                </div>
            </>
          }
        </Translation>
	    </>
	)
}

export default Locale;