import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import App from './config/NavContainer';
import './config/global';



EStyleSheet.build({
  $primaryPink: '#e28383',
  $white: '#FFFFFF',
  $inputText: '#797979',
});

export default () => <App />;
