import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const ItemSearch = (props) => {

    const { data } = props;
    const navigation = useNavigation();


    return (
        <TouchableOpacity onPress={() => navigation.navigate('Detail', { id: data._id })}>
            <View style={styles.container}>
                <Image
                    source={data.images ? { uri: `${data.images}` } : require('../../resources/images/error404.jpg')}
                    style={{ width: 77, height: 77, borderRadius: 8, backgroundColor: '#F6F6F6' }}
                    resizeMode="cover"
                />

                <View style={styles.textStyle}>
                    <Text style={[styles.text, { fontWeight: '400' }]}>{data.name}</Text>
                    <Text style={[styles.text, { fontWeight: '400' }]}>{data.price}đ</Text>
                    <Text style={[styles.text, { fontSize: 14 }]}>Còn {data.quantity} sp</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ItemSearch

const styles = StyleSheet.create({
    container: {
        width: 279,
        height: 77,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textStyle: {
        width: 187,
        height: 77,
        justifyContent: 'center'
    },
    text: {
        fontSize: 16,
        color: 'black'
    }
})