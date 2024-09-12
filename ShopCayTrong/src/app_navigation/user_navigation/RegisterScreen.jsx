import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Textcom from '../../commons/Textcom'
import Textinput from '../../commons/Textinput'
import ButtonCompo from '../../commons/ButtonCompo'
import { register } from '../../redux/UserAPI'
import { useDispatch, useSelector } from 'react-redux'

const RegisterScreen = (props) => {

    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');


    const useAppDispatch = () => useDispatch();
    const useAppSelector = useSelector;
    const dispatch = useAppDispatch();
    const appState = useAppSelector((state) => state.app);

    const handleRegister = async () => {
        try {
            const body = {
                email: Email,
                password: Password,
                name: Name
            }
            // Dispatch action đăng ký và đợi kết quả
            dispatch(register(body));

        } catch (error) {
            console.log(error);
        }
    }

    const getText1 = () => {
        return {
            width: 250,
            height: 45,
            marginTop: -18,
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
            textAlign: 'center',
            marginBottom: 2
        }
    }

    const getContainerStyle = () => {
        return {
            width: 300,
            height: 46,
            borderRadius: 10,
            borderWidth: 1,
            alignSelf: 'center',
            marginTop: 10,

        }
    }

    const getInputStye = () => {
        return {
            marginLeft: 14,

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
            marginTop: 20,

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

    const { navigation } = props;

    const ClickBack = () => {
        navigation.navigate('Login');
    }


    return (
        <View>
            <Image
                source={require('../../resources/images/Ellipse2.png')}
                style={{ alignSelf: 'center' }}
            />

            <Textcom
                text={'Đăng ký'}
                styles={{
                    text: getText1(),
                }}
            />
            <Textcom
                text={'Tạo tài khoản '}
                styles={{
                    text: getText2(),
                }}
            />

            <Textinput
                styles={{
                    container: getContainerStyle(),
                    input: getInputStye(),
                }}
                placeholder={'Họ tên'}
                value={Name}
                onChange={setName}
                iconRight={null}

            />
            <Textinput
                styles={{
                    container: getContainerStyle(),
                    input: getInputStye(),
                }}
                placeholder={'E-mail'}
                value={Email}
                onChange={setEmail}
                iconRight={null}
            />
            <Textinput
                styles={{
                    container: getContainerStyle(),
                    input: getInputStye(),
                }}
                placeholder={'Mật khẩu'}
                value={Password}
                onChange={setPassword}
                iconRight={null}
            />
            {/* <Textinput
                styles={{
                    container: getContainerStyle(),
                    input: getInputStye(),
                }}
                placeholder={'Nhập lại mật khẩu'}
                value={null}
                onChangeText={Password}
                iconRight={null}
            /> */}

            <Text style={styles.textStyle}>Để đăng ký tài khoản, bạn đồng ý <Text style={{ color: '#009245' }}> Terms & Conditions </Text>
                and <Text style={{ color: '#009245' }}> Privacy Policy </Text></Text>



            <ButtonCompo
                styles={{
                    Buttonstyle: getStyleButton(),
                    title: getStyleTitle()
                }}
                press={handleRegister}
                title={'Đăng ký'}
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

            <View style={{ width: 183, height: 18, flexDirection: 'row', alignItems: 'center', marginTop: 13, alignSelf: 'center' }}>
                <Text style={{ width: 113, height: 18, color: '#000000', fontSize: 12, fontFamily: 'Poppins', fontWeight: 'normal' }}>Tôi đã có tài khoản</Text>
                <Pressable onPress={() => ClickBack()}>
                    <Text style={{ width: 66, height: 18, color: '#009245', fontSize: 12, fontFamily: 'Poppins', fontWeight: 'normal' }}>Đăng nhập</Text>

                </Pressable>
            </View>

        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    textStyle: {
        width: 290,
        height: 36,
        textAlign: 'center',
        fontSize: 12,
        alignSelf: 'center',
        marginTop: 20
    }

})