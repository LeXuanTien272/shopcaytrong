import { FlatList, Image, ScrollView, StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import ItemProduct from '../../commons/OneItem/ItemProduct'
import { useDispatch, useSelector } from 'react-redux'
import AxiosInstance from '../../helper/AxiosInstance'

const HomeScreen = (props) => {
    const { navigation } = props;

    const useAppDispatch = () => useDispatch();
    const useAppSelector = useSelector;
    const dispatch = useAppDispatch();
    const appState = useAppSelector((state) => state.app);
    const [refreshing, setRefreshing] = useState(false);
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            setRefreshing(true);
            const response = await AxiosInstance().get(`/products/getallproduct`);
            if (response.status) {
                setProducts(response.data);
            }
            setRefreshing(false);
        } catch (error) {
            console.log(error);
            setRefreshing(false);
        }
    }

    useEffect(() => {
        fetchProducts();
        return () => { }
    }, [])



    return (

        <ScrollView>
            <View style={styles.container}>
                <View style={{ backgroundColor: '#F6F6F6' }}>
                    <View style={{ height: 69, }}></View>
                    <Image
                        source={require('../../resources/images/imgmainhome.png')}
                    />
                    <Text style={styles.text1}>Planta - toả sáng không gian nhà bạn</Text>
                    <View style={styles.text2}><Text style={{ fontSize: 16, color: '#007537', marginRight: 4 }}>Xem hàng mới về</Text><Image source={require('../../resources/images/fi_arrow-right.png')} /></View>
                    <Pressable style={{ width: 48, height: 46, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', borderRadius: 25, position: 'absolute', marginTop: 31, marginRight: 25, alignSelf: 'flex-end' }}
                        onPress={() => navigation.navigate('Cart')}
                    >
                        <Image
                            source={require('../../resources/images/shopping-cart.png')}
                        />
                    </Pressable>
                </View>



                {/* ---------------------------------------------------------------------------------------------- */}

                <View style={styles.title1}>

                    <Text style={{ fontSize: 24, fontWeight: '400', color: 'black', marginTop: 30 }}>Cây trồng</Text>
                </View>


                <FlatList
                    data={products}
                    style={styles.FlatListSttle}
                    renderItem={({ item }) => <ItemProduct data={item} />}
                    keyExtractor={(item) => item._id.toString()}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={{
                        justifyContent: "space-between"
                    }}
                    scrollEnabled={false}
                    refreshing={refreshing}
                    onRefresh={fetchProducts}
                />
                <View style={{ width: 325, height: 25, alignItems: 'flex-end', marginTop: 15 }}>
                    <Text style={{ fontSize: 16, color: '#221F1F', borderBottomWidth: 1 }}>Xem thêm Cây trồng</Text>
                </View>

                {/* ---------------------------------------------------------------------------------------------- */}


                <View style={{ width: 325, height: 49, marginTop: 15 }}>

                    <Text style={{ fontSize: 24, fontWeight: '400', color: 'black', marginTop: 20 }}>Chậu cây</Text>
                </View>



                <FlatList
                    data={dataPots}
                    style={styles.FlatListSttle}
                    renderItem={({ item }) => <ItemProduct data={item} />}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={{
                        justifyContent: "space-between"
                    }}
                    scrollEnabled={false}
                />
                <View style={{ width: 325, height: 25, alignItems: 'flex-end', }}>
                    <Text style={{ fontSize: 16, color: '#221F1F', borderBottomWidth: 1 }}>Xem thêm Chậu cây</Text>
                </View>

                {/* ---------------------------------------------------------------------------------------------- */}


                <View style={{ width: 325, height: 49, marginTop: 15 }}>

                    <Text style={{ fontSize: 24, fontWeight: '400', color: 'black', marginTop: 20 }}>Phụ kiện chăm sóc</Text>
                </View>

                <FlatList
                    data={dataTools}
                    style={styles.FlatListSttle}
                    renderItem={({ item }) => <ItemProduct data={item} />}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={{
                        justifyContent: "space-between"
                    }}
                    scrollEnabled={false}
                />
                <View style={{ width: 325, height: 25, alignItems: 'flex-end', }}>
                    <Text style={{ fontSize: 16, color: '#221F1F', borderBottomWidth: 1 }}>Xem thêm Phụ kiện</Text>
                </View>

                {/* ---------------------------------------------------------------------------------------------- */}

                <View style={styles.footer}>
                    <View style={{ width: 217, alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                        <Text style={{ width: 176, fontSize: 16, color: '#221F1F', fontWeight: '400' }}>Lemon Balm Grow Kit </Text>
                        <Text style={{ width: 176, fontSize: 14, color: '#7D7B7B', }}>Gồm: hạt giống Lemon Balm, gói đất hữu cơ, chậu Planta, marker đánh dấu...</Text>
                    </View>
                    <Image
                        source={require('../../resources/images/grow-kit.png')}
                        style={{ borderBottomRightRadius: 8, borderTopRightRadius: 8 }}
                    />
                </View>

            </View>


        </ScrollView>

    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text1: {
        width: 223,
        height: 77,
        fontSize: 24,
        fontWeight: '400',
        color: 'black',
        position: 'absolute',
        marginTop: 31,
        marginLeft: 25
    },
    text2: {
        width: 153,
        height: 24,
        flexDirection: 'row',
        position: 'absolute',
        marginTop: 112,
        marginLeft: 25,
        //@ts-ignore
        cursor: 'pointer'
    },
    title1: {
        width: 325,
        height: 64
    },
    FlatListSttle: {
        width: 325,
        height: 691,

    },
    footer: {
        width: 325,
        height: 134,
        borderRadius: 8,
        backgroundColor: '#F6F6F6',
        flexDirection: 'row',
        margin: 20
    }
})



const dataTrees = [
    {
        id: 1,
        image: require('../../resources/images/image1.png'),
        name: 'Spider Plant',
        type: 'Ưa bóng',
        price: '250000'
    },
    {
        id: 2,
        image: require('../../resources/images/image1.png'),
        name: 'Spider Plant',
        type: 'Ưa bóng',
        price: '250000'
    },
    {
        id: 3,
        image: require('../../resources/images/image1.png'),
        name: 'Spider Plant',
        type: 'Ưa bóng',
        price: '250000'
    },
    {
        id: 4,
        image: require('../../resources/images/image1.png'),
        name: 'Spider Plant',
        type: 'Ưa bóng',
        price: '250000'
    },
    {
        id: 5,
        image: require('../../resources/images/image1.png'),
        name: 'Spider Plant',
        type: 'Ưa bóng',
        price: '250000'
    },
    {
        id: 6,
        image: require('../../resources/images/image1.png'),
        name: 'Spider Plant',
        type: 'Ưa bóng',
        price: '250000'
    },

]


const dataPots = [
    {
        id: 1,
        image: require('../../resources/images/image2.png'),
        name: 'Planta Lemon Balm',

        price: '250000'
    },
    {
        id: 2,
        image: require('../../resources/images/image2.png'),
        name: 'Planta Lemon Balm',

        price: '250000'
    },
    {
        id: 3,
        image: require('../../resources/images/image2.png'),
        name: 'Planta Lemon Balm',

        price: '250000'
    },
    {
        id: 4,
        image: require('../../resources/images/image2.png'),
        name: 'Planta Lemon Balm',

        price: '250000'
    },
    {
        id: 5,
        image: require('../../resources/images/image2.png'),
        name: 'Planta Lemon Balm',

        price: '250000'
    },
    {
        id: 6,
        image: require('../../resources/images/image2.png'),
        name: 'Planta Lemon Balm',

        price: '250000'
    },

]


const dataTools = [
    {
        id: 1,
        image: require('../../resources/images/image3.png'),
        name: 'Bình tưới Sierra lớn',

        price: '250000'
    },
    {
        id: 2,
        image: require('../../resources/images/image3.png'),
        name: 'Bình tưới Sierra lớn',

        price: '250000'
    },
    {
        id: 3,
        image: require('../../resources/images/image3.png'),
        name: 'Bình tưới Sierra lớn',

        price: '250000'
    },
    {
        id: 4,
        image: require('../../resources/images/image3.png'),
        name: 'Bình tưới Sierra lớn',

        price: '250000'
    },
    {
        id: 5,
        image: require('../../resources/images/image3.png'),
        name: 'Bình tưới Sierra lớn',

        price: '250000'
    },
    {
        id: 6,
        image: require('../../resources/images/image3.png'),
        name: 'Bình tưới Sierra lớn',

        price: '250000'
    },

]