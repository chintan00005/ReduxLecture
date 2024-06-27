
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import TaskList from './components/TaskList'


const stack = createNativeStackNavigator()

const AppNavigator = () => {
  return (
<NavigationContainer>
    <stack.Navigator>
        <stack.Screen name="Home" component={TaskList} />
    </stack.Navigator>
</NavigationContainer>
  )
}

export default AppNavigator

