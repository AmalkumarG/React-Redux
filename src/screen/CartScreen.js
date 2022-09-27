import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { REMOVE_FROM_CART } from '../redux/CartItem'
function Separator() {
  return <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />
}
  
function CartScreen() {
  const cartItems = useSelector(state => state)
  const dispatch = useDispatch()

  const removeItemFromCart = item =>
    dispatch({
      type: REMOVE_FROM_CART,
      payload: item
    })
  return (
    <View
      style={{
        flex: 1
      }}>
      {cartItems.length !== 0 ? (
        <FlatList
          data={cartItems}
          keyExtractor={item => item.id.toString()}
          
          renderItem={({ item }) => (
            <View style={styles.bookItemContainer}>
              <Image source={{ uri: item.imgUrl }} style={styles.thumbnail} />
              <View style={styles.bookItemMetaContainer}>
                <Text style={styles.textTitle} numberOfLines={1}>
                  {item.name}
                </Text>
                <Text style={styles.textAuthor}>by {item.author}</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    onPress={() => removeItemFromCart(item)}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Remove from cart </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      ) : (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartMessage}>Cart is Empty add item :</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  bookItemContainer: {
    flexDirection: 'row',
    padding: 10,borderRadius:20,elevation:20,backgroundColor:"white",marginTop:20
  },
  thumbnail: {
    width: 150,
    height: 200
  },
  bookItemMetaContainer: {
    padding: 5,
    paddingLeft: 10
  },
  textTitle: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  textAuthor: {
    fontSize: 18,
    fontWeight: '200'
  },
  buttonContainer: {
    position: 'absolute',
    top: 110,
    left: 10,width:200
  },
  button: {
    borderRadius: 8,
    backgroundColor: 'red',
    padding: 5
  },
  buttonText: {
    fontSize: 22,
    color: '#fff'
  },
  emptyCartContainer: {
    marginTop: 250,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyCartMessage: {
    fontSize: 28,color:"red"
  }
})

export default CartScreen