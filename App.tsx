import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import { Text, View } from 'react-native';
import Header from './context/Header';
import { Tag } from './context/Tag';
import { CustomElement } from './customhooks/CustomElement';
import AppNavigator from './AppNavigator';

export default function App(): React.JSX.Element {

  return (<Provider store={store}>
    <AppNavigator />
    {/* <View>
      <CustomElement /> */}
      {/* <Header>
        <Tag> Hello </Tag>
        <Header>
          <Tag> Hello </Tag>
          <Tag> Hello </Tag>
          <Header>
            <Tag> Hello </Tag>
            <Tag> Hello </Tag>
            <Tag> Hello </Tag>
            <Header>
              <Tag> Hello </Tag>
              <Tag> Hello </Tag>
              <Tag> Hello </Tag>
              <Tag> Hello </Tag>
            </Header>
          </Header>
        </Header>
      </Header> */}
{/* 

    </View> */}
  </Provider>);
}
