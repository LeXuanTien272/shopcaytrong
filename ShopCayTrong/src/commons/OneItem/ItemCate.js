import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemCate = (props) => {

    const { dataCate } = props;

  return (
    <View>
        <Text style={styles.container}>{dataCate.tag}</Text>
    </View>
  )
}

export default ItemCate

const styles = StyleSheet.create({
    container: {
        width: 'auto',
        height: 26,
        paddingVertical: 4,
        paddingHorizontal: 8,
        
    }
})