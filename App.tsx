/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import ReactNativeFusionCharts from "react-native-fusioncharts";

const Chart = () => {
  const chartData = [
    { label: "Venezuela", value: "250" },
    { label: "Saudi", value: "260" },
    { label: "Canada", value: "180" },
    { label: "Iran", value: "140" },
    { label: "Russia", value: "115" },
    { label: "UAE", value: "100" },
    { label: "US", value: "30" },
    { label: "China", value: "30" },
  ];
  const chartConfig = {
    type: "column2D",
    width: "300",
    height: "300",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Countries With Most Oil Reserves [2017-18]",
        subCaption: "In MMbbl = One Million barrels",
        xAxisName: "Country",
        yAxisName: "Reserves (MMbbl)",
        numberSuffix: "K",
        
      },
      data: chartData,
    },
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
      }}
    >
      <Text>Fusioncharts</Text>
      <ReactNativeFusionCharts chartConfig={chartConfig} />
    </View>
  );
};
export default Chart;