import React, { Component } from 'react';
import  WebView  from 'react-native-webview';

export default class Facebook extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'www.facebook.com' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}
