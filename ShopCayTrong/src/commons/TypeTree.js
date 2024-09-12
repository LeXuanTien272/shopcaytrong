import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TypeTree = (props) => {
    const { type1, type2, presstype1, presstype2} = props;

    return (
        <View style={styles.container}>
            <Pressable>
                <View style={{ marginLeft: 33 }}>
                    {type1 && <Text style={styles.styleText}>{type1}</Text>}
                </View>
            </Pressable>
            <Pressable onPress={() => presstype2()}>
                <View style={{ marginLeft: 8 }}>
                    {type2 && <Text style={styles.styleText}>{type2}</Text>}
                </View>
            </Pressable>


        </View>
    )
}

export default TypeTree

const styles = StyleSheet.create({
    container: {
        width: 375,
        height: 58,
        flexDirection: 'row',
        padding: 15
    },
    styleText: {
        height: 28,
        paddingLeft: 8,
        paddingRight: 8,
        paddingBottom: 4,
        paddingTop: 4,
        backgroundColor: '#009245',
        borderRadius: 4
    }
})