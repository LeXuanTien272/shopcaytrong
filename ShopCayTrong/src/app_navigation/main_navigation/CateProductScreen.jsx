import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../commons/Header'
import ItemCate from '../../commons/OneItem/ItemCate';
import ItemProduct from '../../commons/OneItem/ItemProduct';

const CateProductScreen = (props) => {
    const { data } = props;
    const { navigation } = props; 

    const BackToDetail = () => {
        navigation.navigate('Detail');
    }

    return (
        <View style={styles.container}>
            <Header
                title={'Spider Plant'}
                imgIconright={null}
                imgIconleft={require('../../resources/images/chevron-left.png')}
                backto={BackToDetail}
                goto={null}
            />

            <FlatList
                data={dataCate}
                style={styles.RowFlatlist}
                renderItem={({item}) => <ItemCate dataCate={item}/>}
                keyExtractor={(item) => item.id}
                horizontal={true}
            />

            <FlatList
                    data={dataTrees}
                    style={styles.FlatListSttle}
                    renderItem={({ item }) => <ItemProduct data={item} />}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={{
                        justifyContent: "space-between"
                    }}
                    
                />

        </View>
    )
}

export default CateProductScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    RowFlatlist: {
        width: 325,
        height: 34
    },
    FlatListSttle: {
        width: 325,
        height: 691,

    },

})

const dataCate = [
    {
        id: 1,
        tag: 'Tất cả'
    },
    {
        id: 2,
        tag: 'Hàng mới'
    },
    {
        id: 3,
        tag: 'Ưa sáng'
    },
    {
        id: 4,
        tag: 'Ưa bóng'
    },
    
]

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
    {
        id: 7,
        image: require('../../resources/images/image1.png'),
        name: 'Spider Plant',
        type: 'Ưa bóng',
        price: '250000'
    },
    {
        id: 8,
        image: require('../../resources/images/image1.png'),
        name: 'Spider Plant',
        type: 'Ưa bóng',
        price: '250000'
    },

]
