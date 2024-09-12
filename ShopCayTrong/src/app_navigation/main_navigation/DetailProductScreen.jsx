import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../commons/Header'
import TypeTree from '../../commons/TypeTree'
import ButtonCompo from '../../commons/ButtonCompo'
import AxiosInstance from '../../helper/AxiosInstance'
import { addItemToCart, increaseItemDetial, decreaseItemDetial } from '../../redux/Reducer'
import { useDispatch, useSelector } from 'react-redux'


const DetailProductScreen = (props) => {

    const { navigation } = props;
    const { route } = props;
    const id = route?.params?.id;

    
    
    

    const [product, setProduct] = useState({});
    const fetchProduct = async () => {
        try {
            const response = await AxiosInstance().post(`/products/getproductID/${id}`);
            if (response.status) {
                setProduct(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProduct();

        return () => {

        }
    }, [])

    const useAppDispatch = () => useDispatch();
    const dispatch = useAppDispatch();
    const useAppSelector = useSelector;
    const appState = useAppSelector((state) => state.app);

    const [totalPrice, setTotalPrice] = useState(0);

    const addItem = () => {
        
        
        const item = {
            _id: product._id,
            name: product.name,
            price: product.price,
            images: product.images,
            quantity: appState.count,
        }
        dispatch(addItemToCart( item ));
    }

    useEffect(() => {
        setTotalPrice(product.price * appState.count);
    }, [appState.count]);


    const getButtonStyle = () => {
        return {
            width: 327,
            height: 50,
            backgroundColor: appState.count > 0 ? '#007537' : '#ABABAB',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8
        };
    };

    const getTextbutton = () => {
        return {
            fontSize: 16,
            fontWeight: 'bold',
            color: appState.count > 0 ? 'white' : '#000'
        };
    };

    const BackToHome = () => {
        navigation.navigate('Home');
    }

    const TypeTree1 = () => {
        navigation.navigate('TypeTree1');
    }

    


    return (
        <View style={styles.container}>
            <Header
                title={product.name}
                imgIconleft={require('../../resources/images/chevron-left.png')}
                imgIconright={require('../../resources/images/shopping-cart.png')}
                backto={BackToHome}
                goto={() => {navigation.navigate('Cart')}}
            />

            {
                product.images == null
                    ?
                    <Image
                        source={{ uri: 'https://i.pinimg.com/564x/3a/67/19/3a67194f5897030237d83289372cf684.jpg' }}
                        style={{ width: 337, height: 270 }}
                    />
                    :
                    <Image
                        source={{ uri: `${product.images}` }}
                        style={{ width: 337, height: 270 }}
                    />
            }


            <TypeTree
                type1={'Cây trồng'}
                type2={product.category_name}
                presstype2={TypeTree1}
            />

            <View style={styles.stylePrice}>
                <Text style={styles.TextPrice}>{product.price}đ</Text>
            </View>

            <View style={styles.StyleDetail}>
                <View style={{ marginTop: 15 }}>
                    <Text style={[styles.TextDetail, { fontSize: 16 }]}>Chi tiết sản phẩm </Text>
                    <Image
                        source={require('../../resources/images/Line.png')}
                    />
                </View>

                <View style={{ marginTop: 15 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.TextDetail}>Kích cỡ</Text>
                        <Text style={styles.TextDetail}>Nhỏ</Text>
                    </View>
                    <Image
                        source={require('../../resources/images/Line.png')}
                    />
                </View>

                <View style={{ marginTop: 15 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.TextDetail}>Xuất xứ</Text>
                        <Text style={styles.TextDetail}>Châu Phi</Text>
                    </View>
                    <Image
                        source={require('../../resources/images/Line.png')}
                    />
                </View>

                <View style={{ marginTop: 15 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.TextDetail}>Tình trạng</Text>
                        <Text style={[styles.TextDetail, { color: '#007537' }]}>Còn {product.quantity}SP</Text>
                    </View>
                    <Image
                        source={require('../../resources/images/Line.png')}
                    />
                </View>
            </View>

            <View style={styles.PayStyle}>
                <View style={styles.Pay1}>
                    <View style={styles.PayLeft}>
                        <Text style={{ fontSize: 14, }}>Đã chọn {appState.count} sản phẩm</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 3.75 }}>
                            <TouchableOpacity style={{ borderRadius: 5, borderWidth: 1, height: 22.5, width: 22.5, alignItems: 'center', justifyContent: 'center' }}
                                onPress={() => {dispatch(decreaseItemDetial())}}
                            >
                                <Image
                                    source={require('../../resources/images/minus.png')}
                                />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 16, color: 'black' }}>{appState.count}</Text>
                            <TouchableOpacity style={{ borderRadius: 5, borderWidth: 1, height: 22.5, width: 22.5, alignItems: 'center', justifyContent: 'center' }}
                                onPress={() => {dispatch(increaseItemDetial())}}
                            >
                                <Image
                                    source={require('../../resources/images/plus-square.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.PayRight}>
                        <Text style={{ fontSize: 14, textAlign: 'right' }}>Tạm tính</Text>
                        <Text style={{ fontSize: 24, color: 'black', textAlign: 'right' }}> {totalPrice}đ</Text>
                    </View>

                </View>

                <ButtonCompo
                    styles={{
                        Buttonstyle: getButtonStyle(),
                        title: getTextbutton()
                    }}
                    press={addItem}
                    title={'CHỌN MUA'}
                    disabled={appState.count === 0}
                />

            </View>


        </View>
    )
}

export default DetailProductScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    stylePrice: {
        width: 375,
        height: 34,
        paddingLeft: 48,
        paddingRight: 48
    },
    TextPrice: {
        fontSize: 24,
        fontWeight: '500',
        width: 279,
        height: 34,
        color: '#007537'
    },
    StyleDetail: {
        width: 375,
        height: 173.41,
        columnGap: 15,
        alignItems: 'center'
    },
    TextDetail: {
        height: 22,
        fontSize: 14,
        fontWeight: '400',
        color: '#3A3A3A'
    },
    PayStyle: {
        width: 375,
        height: 147,
        alignItems: 'center'
    },
    Pay1: {
        width: 327,
        height: 82,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    PayLeft: {
        width: 132,
        height: 51,
        marginLeft: 5
    },
    PayRight: {
        width: 94,
        height: 57,

    }

})
