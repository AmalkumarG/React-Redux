import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import BookScreen from '../screen/BooksScreen'
import CartScreen from '../screen/CartScreen'
import ShoppingCartIcon from '../components/ShoppingCartIcon'
const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name='Books'
          component={BookScreen}
          options={{ headerRight: props => <ShoppingCartIcon {...props} /> ,headerTransparent:true ,title:false}}
        />
                <Stack.Screen name='Cart' component={CartScreen}
                options={{title:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator