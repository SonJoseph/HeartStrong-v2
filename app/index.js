import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import LoginNavigator from './config/loginRoutes';
import './config/global';

EStyleSheet.build({
  $primaryPink: '#e28383',
  $white: '#FFFFFF',
  $inputText: '#797979',
});

export default () => <LoginNavigator />;