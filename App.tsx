import React, { useRef } from 'react';
import { SafeAreaView, View, Platform, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { WebViewMessageEvent } from 'react-native-webview/lib/WebViewTypes';
 
const chartConfig = {
  type: 'column2D',
  width: '100%',
  height: '100%',
  dataFormat: 'json',
  dataSource: {
    chart: {
      caption: "Countries With Most Oil Reserves [2017-18]",
      subCaption: "In MMbbl = One Million barrels",
      xAxisName: "Country",
      yAxisName: "Reserves (MMbbl)",
      numberSuffix: "K",
      theme: "fusion"
    },
    data: [
      { label: "Venezuela", value: "250" },
      { label: "Saudi", value: "260" },
      { label: "Canada", value: "180" },
      { label: "Iran", value: "140" },
      { label: "Russia", value: "115" },
      { label: "UAE", value: "100" },
      { label: "US", value: "30" },
      { label: "China", value: "30" },
    ]
  }
};
 
 
const App = () => {
  const webViewRef = useRef<WebView>(null);
 
  const onWebViewLoadEnd = () => {
    console.log('✅ WebView loaded, sending chart config');
    const configStr = JSON.stringify(chartConfig);
    setTimeout(() => {
      webViewRef.current?.postMessage(configStr);
    }, 500); // delay ensures page is ready
  };
 
  const onMessage = (event: WebViewMessageEvent) => {
    console.log('📥 Message from WebView:', event.nativeEvent.data);
  };
 
  const getHtmlPath = () => {
    return Platform.select({
      ios: 'fusioncharts.html',
      android: 'file:///android_asset/fusioncharts.html',
    }) || 'fallback.html';
  };
 
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        ref={webViewRef}
        source={{ uri: getHtmlPath() }}
        originWhitelist={['*']}
        javaScriptEnabled
        domStorageEnabled
        allowFileAccess
        allowUniversalAccessFromFileURLs
        mixedContentMode="always"
        onMessage={onMessage}
        onLoadEnd={onWebViewLoadEnd}
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
};
 
export default App;