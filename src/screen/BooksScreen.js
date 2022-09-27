import React from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { books } from '../utils/Data'

import { useDispatch } from 'react-redux'

import { ADD_TO_CART } from '../redux/CartItem'
function Separator() {
  return <View style={{ borderBottomWidth: 2, borderBottomColor: '#a9a9a9' }} />
}

function BookScreen() {
  const dispatch = useDispatch()
  const addItemToCart = item => dispatch({ type: ADD_TO_CART, payload: item })

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
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
              <TouchableOpacity onPress={() => addItemToCart(item)} style={styles.button}>
                              <Text style={styles.buttonText}>Add to cart</Text>
              </TouchableOpacity>
                
              </View>
            </View>
          </View>
        )}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'black'
  },
  bookItemContainer: {
    flexDirection: 'row',
    padding: 10,borderRadius:30,backgroundColor:"white",marginTop:10,elevation:20
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
    fontWeight: 'bold'
  },
  buttonContainer: {
    position: 'absolute',
    top: 110,
    left: 10
  },
  button: {
    borderRadius: 8,
    backgroundColor: 'green',
    padding: 5
  },
  buttonText: {
    fontSize: 22,
    color: '#fff'
  }
})

export default BookScreen