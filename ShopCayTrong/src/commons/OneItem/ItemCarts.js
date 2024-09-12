import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import CheckBox from 'react-native-check-box'
import { useDispatch, useSelector } from 'react-redux'

const ItemCarts = (props) => {

    const { navigation } = props;
    const { data } = props;

    const useAppDispatch = () => useDispatch();
    const dispatch = useAppDispatch();
    const useAppSelector = useSelector;
    const appState = useAppSelector((state) => state.app);

    return (
        <View>
            {
                appState.cart.map((item) => {
                    return (
                        <View style={styles.container}>

                            <CheckBox
                                style={{ flex: 1, padding: 10 }}
                                onClick={() => {

                                }}

                            />
                            <Image
                                source={null}
                                style={{ width: 77, height: 77, marginLeft: 28, borderRadius: 8, backgroundColor: 'blue' }}
                            />
                            <View style={styles.styleInfo}>
                                <Text style={{ fontSize: 14 }}><Text style={{ color: 'black', fontSize: 16 }}>{data.name}</Text> | {data.type}</Text>
                                <Text style={{ fontSize: 16, color: '#007537' }}>{item.price}đ</Text>
                                <View style={{ flexDirection: 'row', marginTop: 13 }}>
                                    <View style={styles.FrameButton}>
                                        <TouchableOpacity style={styles.buttonstyle}>
                                            <Image
                                                source={require('../../resources/images/minus-square.png')}
                                            />
                                        </TouchableOpacity>
                                        <Text style={{ color: 'black', fontSize: 14 }}>1</Text>
                                        <TouchableOpacity style={styles.buttonstyle}>
                                            <Image
                                                source={require('../../resources/images/minus-square.png')}
                                            />
                                        </TouchableOpacity>
                                    </View>

                                    <Pressable style={{ marginLeft: 38, borderBottomWidth: 1 }}>
                                        <Text style={{ color: 'black', fontSize: 16 }}>Xóa</Text>
                                    </Pressable>


                                </View>


                            </View>

                        </View>
                    )
                })
            }
        </View>

    )
}

export default ItemCarts

const styles = StyleSheet.create({
    container: {
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