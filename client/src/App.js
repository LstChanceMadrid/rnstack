import React from 'react'
import { Provider } from 'react-redux'
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import configureStore from './store/configureStore';
const store = configureStore();
registerScreens(store, Provider);

