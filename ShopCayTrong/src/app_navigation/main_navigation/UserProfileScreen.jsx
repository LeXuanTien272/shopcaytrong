import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../commons/Header'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/Reducer'

const UserProfileScreen = () => {
  const [imageLocal, setImageLocal] = useState('');
  const [imageOnline, setImageOnline] = useState('');

  const useAppDispatch = () => useDispatch();
  const useAppSelector = useSelector;
  const dispatch = useAppDispatch();
  const appState = useAppSelector((state) => state.app);




  return (
    <View style={styles.container}>
      <Header
        title={'PROFILE'}
        imgIconright={null}
        imgIconleft={null}
      />
      <View style={styles.ViewUser}>
        {
          // imageLocal !== '' &&
          // <Image
          //   source={{ uri: imageLocal }}
          //   style={{ width: 39, height: 39 }}
          // />
          <Image
            source={require('../../resources/images/user.png')}
            style={{ width: 39, height: 39, borderRadius: 50 }}
          />
        }

        <View style={{ marginLeft: 26 }}>
          <Text style={{ color: 'black', fontSize: 16 }}>Traanf</Text>
          <Text style={{ fontSize: 14 }}>awfawfaf@gmail.com</Text>
        </View>

      </View>

      <View style={styles.layout}>
        <Text style={{
          width:279,
          height: 25,
          fontSize: 16, 
          borderBottomWidth: 0.8,
          borderColor: 'black',
        }}>Chung</Text>
        </View>

        <Pressable style={styles.pressstyle}>
          <Text style={styles.textinpress}>Chỉnh sửa thông tin</Text>
        </Pressable>

        <Pressable style={styles.pressstyle}>
          <Text style={styles.textinpress}>Cẩm nang trồng cây</Text>
        </Pressable>

        <Pressable style={styles.pressstyle}>
          <Text style={styles.textinpress}>Lịch sử giao dịch</Text>
        </Pressable>

        <Pressable style={styles.pressstyle}>
          <Text style={styles.textinpress}>Q & A</Text>
        </Pressable>

        <View style={styles.layout}>
        <Text style={{
          width:279,
          height: 25,
          fontSize: 16, 
          borderBottomWidth: 0.8,
          borderColor: 'black',
        }}>Bảo mật và Điều khoản</Text>
        </View>

        <Pressable style={styles.pressstyle}>
          <Text style={styles.textinpress}>Điều khoản và điều kiện</Text>
        </Pressable>

        <Pressable style={styles.pressstyle}>
          <Text style={styles.textinpress}>Chính sách quyền riêng tư</Text>
        </Pressable>

        <Pressable style={styles.pressstyle} onPress={() => {dispatch(logout())}}>
          <Text style={[styles.textinpress,{color: 'red'}]}>Đăng xuất</Text>
        </Pressable>
        

    </View>
  )
}

export default UserProfileScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  ViewUser: {
    width: 375,
    height: 72,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 48
  },
  layout: {
    width: 327,
    marginTop: 15,
    height: 42,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  security: {

  },
  pressstyle: {
    width: 327,
    height: 25,
    marginTop: 15,
  },
  textinpress:{
    fontSize: 16,
    marginLeft: 24,
    fontFamily: 'Lato',
    color: 'black',
    fontWeight: '600'
  }
})