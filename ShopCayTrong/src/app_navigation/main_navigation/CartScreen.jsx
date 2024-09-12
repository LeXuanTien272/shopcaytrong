import { FlatList, Image, Pressable, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../../commons/Header'
import ItemCarts from '../../commons/OneItem/ItemCarts'
import ButtonCompo from '../../commons/ButtonCompo'
import CheckBox from 'react-native-check-box'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseItemQuantity, increaseItemQuantity, removeItemFromCart, clearCart } from '../../redux/Reducer'
import AxiosInstance from '../../helper/AxiosInstance'



const CartScreen = (props) => {

    const { navigation } = props;

    const useAppDispatch = () => useDispatch();
    const dispatch = useAppDispatch();
    const useAppSelector = useSelector;
    const appState = useAppSelector((state) => state.app);

    const [isCheckBoxChecked, setIsCheckBoxChecked] = useState(false);

    const handleCheckBoxClick = () => {
        // Khi checkbox được chọn, cập nhật giá trị của state isCheckBoxChecked
        setIsCheckBoxChecked(!isCheckBoxChecked);
    };

    const checkout = async () => {
        if (appState.cart.length === 0) {
            // Giỏ hàng đang trống, không thực hiện thanh toán
            alert('Giỏ hàng đang trống');
            return;
        }
        if (appState.cart.length === 0) {
            // Giỏ hàng đang trống, không thực hiện thanh toán
            alert('Giỏ hàng đang trống');
            return;
        }
        try {
            const body = {
                user: appState.user._id,
                products: appState.cart.map((item) => {
                    return {
                        _id: item._id,
                        quantity: item.quantity
                    }
                })
            }
            const result = await AxiosInstance().post('/carts', body);
            if (result.status == true) {
                // thông báo thành công
                // quay về màn hình chính
                navigation.navigate('Home');
                // xóa giỏ hàng
                dispatch(clearCart());
            } else {

            }
            console.log(body);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <Header
                title={'GIỎ HÀNG'}
                imgIconleft={require('../../resources/images/chevron-left.png')}
                imgIconright={require('../../resources/images/trash.png')}
                backto={() => { navigation.navigate('Home') }}
                goto={null}
            />
            {/* <FlatList
                data={datatest}
                style={styles.StyleFlastlist}
                renderItem={({ item }) => <ItemCarts data={item} />}
                keyExtractor={(item) => item._id}
            /> */}
            <View style={styles.StyleFlastlist}>
                {
                    appState.cart.map((item) => {
                        return (
                            <View style={styles.container2}>

                                <CheckBox
                                    isChecked={isCheckBoxChecked}
                                    onClick={() => handleCheckBoxClick()}
                                />
                                {/* Nút thanh toán */}

                                <Image
                                    source={{ uri: `${item.images}` }}
                                    style={{ width: 77, height: 77, marginLeft: 28, borderRadius: 8, backgroundColor: 'blue' }}
                                />
                                <View style={styles.styleInfo}>
                                    <Text style={{ fontSize: 14 }}><Text style={{ color: 'black', fontSize: 16 }}>{item.name}</Text> |</Text>
                                    <Text style={{ fontSize: 16, color: '#007537' }}>{item.price}đ</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 13 }}>
                                        <View style={styles.FrameButton}>
                                            <TouchableOpacity style={styles.buttonstyle} onPress={() => dispatch(decreaseItemQuantity(item._id))}>
                                                <Image
                                                    source={require('../../resources/images/minus-square.png')}
                                                />
                                            </TouchableOpacity>
                                            <Text style={{ color: 'black', fontSize: 14 }}>{item.quantity}</Text>
                                            <TouchableOpacity style={styles.buttonstyle} onPress={() => dispatch(increaseItemQuantity(item._id))}>
                                                <Image
                                                    source={require('../../resources/images/plus-square2.png')}
                                                />
                                            </TouchableOpacity>
                                        </View>

                                        <Pressable style={{ marginLeft: 38, borderBottomWidth: 1 }}
                                            onPress={() => { }}
                                        >
                                            <Text style={{ color: 'black', fontSize: 16 }} onPress={() => dispatch(removeItemFromCart(item._id))}>Xóa</Text>
                                        </Pressable>


                                    </View>


                                </View>

                            </View>
                        )
                    })
                }
            </View>



            <View style={styles.FramePay}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text>Tạm tính</Text>
                    <Text>{appState.cart.reduce((total, item) => {
                        return total + item.price * item.quantity;
                    }, 0)}
                    </Text>
                </View>
                <Pressable
                    style={[styles.buttonPay, { opacity: isCheckBoxChecked ? 1 : 0.5 }]}
                    onPress={checkout}
                    disabled={!isCheckBoxChecked}
                >
                    <Text style={styles.texttile}>Tiến hành thanh toán</Text>
                    <Image
                        source={require('../../resources/images/chevron-right.png')}
                    />
                </Pressable>
            </View>

        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    StyleFlastlist: {
        width: 375,
    },
    FramePay: {
        width: 326,
        height: 93,
        justifyContent: 'flex-end',
        position: 'absolute',
        marginTop: 740
    },
    buttonPay: {
        width: 326,
        height: 50,
        borderRadius: 8,
        backgroundColor: '#007537',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginTop: 22,
        flexDirection: 'row',
        paddingLeft: 30,
        paddingRight: 13
    },
    texttile: {
        fontSize: 18,
        fontFamily: 'Poppins',
        fontWeight: '300',
        color: 'white',
    },
    container2: {
        flexDirection: 'row',
        width: 375,
        height: 107,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10
    },
    styleInfo: {
        width: 199,
        height: 77,
        marginLeft: 15
    },
    buttonstyle: {
        width: 20,
        height: 20
    },
    FrameButton: {
        flexDirection: 'row',
        width: 86,
        height: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

const datatest = [
    {
        "_id": 1,
        "name": "Spider Plant",
        "type": "Ưa bóng",
        "price": 250000,
        "quantity": 2
    }
]