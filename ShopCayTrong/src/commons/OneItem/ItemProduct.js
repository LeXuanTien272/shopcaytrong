import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const ItemProduct = (props) => {

    const { data } = props;
    const navigation = useNavigation();


    const getData = () => {
        if (data.category === 'null' || !data.category) {
            return null;
        } else {
            return data.category_name;
        }
    }



    return (
        <TouchableOpacity onPress={() => navigation.navigate('Detail', { id: data._id })}>
            <View style={{ width: 155, height: 217, marginTop: 15 }}>
                {/* {
                    data.images == null
                        ?
                        <Image
                            source={{ uri: 'https://i.pinimg.com/564x/3a/67/19/3a67194f5897030237d83289372cf684.jpg'}}
                            style={{ width: 155, height: 134, backgroundColor: '#F6F6F6' }}
                        />
                        :
                        <Image
                            source={{ uri: `${data.images}` }}
                            style={{ width: 155, height: 134, backgroundColor: '#F6F6F6' }}
                        />
                } */}

                <Image
                    source={data.images ? { uri: `${data.images}` } : null}
                    style={{ width: 155, height: 134, backgroundColor: '#F6F6F6' }}
                    resizeMode="cover"
                />

                <View>
                    <Text style={[{ fontSize: 16, color: '#221F1F' }]}>{data.name}</Text>
                    {getData() && <Text style={{ fontSize: 14 }}>{getData()}</Text>}
                    <Text style={[{ fontSize: 16, color: '#007537' }]}>{data.price} đ</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ItemProduct

const styles = StyleSheet.create({

})