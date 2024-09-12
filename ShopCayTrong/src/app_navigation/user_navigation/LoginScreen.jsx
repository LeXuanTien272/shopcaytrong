import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Textcom from '../../commons/Textcom'
import Textinput from '../../commons/Textinput'
import ButtonCompo from '../../commons/ButtonCompo'
import { login } from '../../redux/UserAPI'
import { useDispatch, useSelector } from 'react-redux'

const LoginScreen = (props) => {

    const [email, setEmail] = useState('binh0@gmail.com');
    const [password, setPassword] = useState('12');

    const useAppDispatch = () => useDispatch();
    const useAppSelector = useSelector;
    const dispatch = useAppDispatch();
    const appState = useAppSelector((state) => state.app);

    const handleLogin = async () => {
        try {
            const body = {
                email: email,
                password: password
            }
            dispatch(login(body));
        } catch (error) {
            console.log(error);
        }
    }


    const getText1 = () => {
        return {
            width: 250,
            height: 45,
            marginTop: 4,
            fontSize: 30,
            fontFamily: 'Poppins',
            fontWeight: 'bold',
            color: 'black',
            alignSelf: 'center',
            textAlign: 'center'
        }
    }

    const getText2 = () => {
        return {
            width: 186,
            height: 27,
            fontSize: 18,
            fontFamily: 'Poppins',
            fontWeight: '300',
            color: 'black',
            alignSelf: 'center',
            textAlign: 'center'
        }
    }

    const getContainerStyle = () => {
        return {
            width: 300,
            height: 46,
            borderRadius: 10,
            borderWidth: 1,
            alignSelf: 'center',
            marginTop: 20,

        }
    }

    const getInputStye = () => {
        return {
            marginLeft: 14,

        }
    }
    const getContainerStyle2 = () => {
        return {
            width: 300,
            height: 46,
            borderRadius: 10,
            borderWidth: 1,
            alignSelf: 'center',
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingRight: 14
        }
    }

    const getInputStye2 = () => {
        return {
            marginLeft: 14,
            width: 200
        }
    }

    const getStyleButton = () => {
        return {
            width: 300,
            height: 50,
            borderRadius: 15,
            backgroundColor: '#007537',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 22,

        }
    }

    const getStyleTitle = () => {
        return {
            fontSize: 20,
            fontFamily: 'Poppins',
            fontWeight: 'bold',
            color: 'white',

        }
    }

    // const checkName = (value) => {
    //     console.log('checkName: ', value)
    //     // bắt lỗi khi nhập tên
    //     setName(value)
    // }

    const { navigation } = props;

    const Clicklogin = () => {
        navigation.navigate('Tab1');
    }

    


    return (
        <View>

            <Image
                source={require('../../resources/images/Ellipse1.png')}
                style={{ alignSelf: 'center' }}
            />



            <Textcom
                text={'Chào Mừng Bạn'}
                styles={{
                    text: getText1(),
                }}
            />
            <Textcom
                text={'Đăng Nhập Tài Khoản'}
                styles={{
                    text: getText2(),
                }}
            />
            <Textinput
                styles={{
                    container: getContainerStyle(),
                    input: getInputStye(),
                }}
                placeholder={'Nhập email hoặc số điện thoại'}
                value={email}
                onChange={setEmail}
                iconRight={null}
            />

            <Textinput
                styles={{
                    container: getContainerStyle2(),
                    input: getInputStye2(),
                }}
                placeholder={'Mật Khẩu'}
                value={password}
                onChange={setPassword}
                iconRight={require('../../resources/images/eye-invisible.png')}
            />

            <View style={{ width: 300, flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', marginTop: 13, alignSelf: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        source={require('../../resources/images/ri_checkbox-circle-line.png')}
                    />
                    <Text>Nhớ Tài Khoản</Text>
                </View>
                <Text style={{ color: '#009245', fontSize: 11, fontFamily: 'Poppins', fontWeight: '500' }}>Forgot Password ? </Text>
            </View>

            <ButtonCompo
                styles={{
                    Buttonstyle: getStyleButton(),
                    title: getStyleTitle()
                }}
                press={handleLogin}
                title={'Đăng Nhập'}
            />

            <View style={{ width: 300, flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', marginTop: 13, alignSelf: 'center' }}>
                <Image
                    source={require('../../resources/images/LineGreen.png')}
                />
                <Text style={{ color: '#000000', fontSize: 12, fontFamily: 'Poppins', fontWeight: '500' }}>Hoặc</Text>
                <Image
                    source={require('../../resources/images/LineGreen.png')}
                />
            </View>

            <View style={{ width: 95, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 13, alignSelf: 'center', marginTop: 35 }}>
                <Image
                    source={require('../../resources/images/flat-color-icons_google.png')}
                />

                <Image
                    source={require('../../resources/images/logos_facebook.png')}
                />
            </View>

            <View style={{ width: 242, height: 18, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 13, alignSelf: 'center' }}>
                <Text style={{ width: 139, height: 18, color: '#000000', fontSize: 12, fontFamily: 'Poppins', fontWeight: 'normal' }}>Bạn không có tài khoản</Text>
                <Pressable onPress={() =>  navigation.navigate('Regis')}>
                    <Text style={{ width: 95, height: 18, color: '#009245', fontSize: 12, fontFamily: 'Poppins', fontWeight: 'normal' }}>Tạo tài khoán</Text>
                </Pressable>
            </View>

        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})