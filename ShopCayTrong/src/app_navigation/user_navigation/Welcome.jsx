import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Welcome = (props) => {
  const { navigation } = props;
  useEffect(() => {
    setTimeout(() => {
        navigation.navigate('Login')
    }, 3000)

  }, [])


  return (
    <View>
      <Text>Welcome</Text>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({})