import { View, Text, StyleSheet, FlatList } from 'react-native';

import React from 'react'

export default function Category() {

    const categories = [
        { id: 1, name: 'Electronics' },
        { id: 2, name: 'Clothing' },
        { id: 3, name: 'Books' },
        { id: 4, name: 'Home Appliances' },
      
    ]

    const renderCategoryItem = ({ item }) => (
        <View style={styles.categoryItem}>
            <Text>{item.name}</Text>
        </View>
    );

    return (
        <View style={[styles.container ,{ backgroundColor: '#fff' ,flex: 1 }]}>
            <Text style={styles.headerTitle}>Categories</Text>
            <FlatList
                data={categories}
                renderItem={renderCategoryItem}
                numColumns={4}
                columnWrapperStyle={styles.row}    
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
        marginBottom: 15,
    },
  
    row: {
        flex: 1,
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    categoryItem: {
        height: 100,
        width: '23%', 
        backgroundColor: '#ea2121',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    }
})