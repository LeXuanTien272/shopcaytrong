import { FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../commons/Header'
import ItemSearch from '../../commons/OneItem/ItemSearch'
import { useDispatch, useSelector } from 'react-redux'
import AxiosInstance from '../../helper/AxiosInstance'


const SearchScreen = (props) => {

    const { navigation } = props;

    const useAppDispatch = () => useDispatch();
    const useAppSelector = useSelector;
    const dispatch = useAppDispatch();
    const appState = useAppSelector((state) => state.app);

    const [keySearch, setKeySearch] = useState('');
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
          const body = {
              name: keySearch,
          }
          const response = await AxiosInstance().post(`/products/find_product`, body);
          console.log('Get products successfully: ', response);
          if (response.status === true) {
            setProducts(response.data);

          } else {
            console.log("Lấy data từ API thất bại!");
          }
        } catch (error) {
          console.log('Get products error: ', error.message || error);
        }
      }

    useEffect(() => {
        getProducts();
        console.log(products);
      }, []);
      



    return (
        <View style={styles.container}>
            <Header
                title={'TÌM KIẾM'}
                imgIconright={null}
                imgIconleft={require('../../resources/images/chevron-left.png')}
                backto={() => {navigation.navigate('Home')}}
                goto={null}
            />

            <View style={styles.SearchStyle}>
                <View style={styles.SearchChild}>
                    <TextInput
                        style={{ fontSize: 16, color: '#221F1F'}}
                        placeholder='Tìm kiếm'
                        value={keySearch}
                        onBlur={getProducts}
                        onChangeText={setKeySearch}
                    />
                    <Image
                        source={require('../../resources/images/search.png')}
                    />
                </View>
            </View>


            <FlatList
                data={products}
                style={styles.flatlist}
                renderItem={({item}) => <ItemSearch data={item}/>}
                keyExtractor={(item) => item._id}
                showsVerticalScrollIndicator={false}
                
            />


        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    SearchStyle: {
        width: 325,
        height: 33,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    SearchChild: {
        width: 279,
        height: 42,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    flatlist: {
        width: 279,
        marginTop: 40
    }

})

const dataTest = [
    {
        id: 1,
        image: require('../../resources/images/image1.png'),
        name: 'Panse Đen | Hybrid',
        price: '250000',
        quantity: '156'
    }
]