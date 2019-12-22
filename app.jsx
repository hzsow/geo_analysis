import "@babel/polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import {addLocaleData, IntlProvider, defineMessages, injectIntl, intlShape} from 'react-intl';
import enLocaleData from 'react-intl/locale-data/ru';
import enMessages from './data/ru';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {tko, mss} from './modules/LayersPanel';
import {init} from "./modules/geoserverLog";
import store from "./store/store"
import { Provider } from 'react-redux';
import App from "./modules/main"


init();
injectTapEventPlugin();

addLocaleData(
  enLocaleData
);

ReactDOM.render(<Provider store={store}><IntlProvider locale='en' messages={enMessages}><App/></IntlProvider></Provider>, document.getElementById('main'));

tko.setVisible(false);
mss.setVisible(false);


