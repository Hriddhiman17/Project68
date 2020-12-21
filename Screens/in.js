import React, { Component } from 'react';
import  WebView  from 'react-native-webview';

export default class Instagram extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'www.instagram.com' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}