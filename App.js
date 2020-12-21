import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Facebook from './Screens/fb';
import Instagram from './Screens/in';

export default class App extends Component{
  render(){
    return (
      <AppContainer/>
    );
  }
}
const TabNavigator = createBottomTabNavigator({
  fb: {Screens: Facebook},
  in: {Screens: Instagram},
});
const AppContainer = createAppContainer(TabNavigator);