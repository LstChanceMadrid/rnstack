import { Navigation } from 'react-native-navigation'
import Home from './components/appscreens/Home'

export const registerScreens = (store, Provider) => {
    Navigation.registerComponent('app.Home', () => Home, store, Provider)
}