import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navigator from './config/routes';

EStyleSheet.build({
  $primaryPink: '#e28383',
  $white: '#FFFFFF',
  $inputText: '#797979',
});

export default () => <Navigator />;