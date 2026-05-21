import React from 'react';
import {View,   Text, StyleSheet, FlatList, Image} from 'react-native';

export default function Category() {

    const shoeCategories = [
        {
            id: 1,
            name: 'Running Shoes',
            image:
                'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
        },
        {
            id: 2,
            name: 'Sneakers',
            image:
                'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77',
        },
        {
            id: 3,
            name: 'Sports Shoes',
            image:
                'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519',
        },
        {
            id: 4,
            name: 'Casual Shoes',
            image:
                'https://images.unsplash.com/photo-1543508282-6319a3e2621f',
        },
        {
            id: 5,
            name: 'Formal Shoes',
            image:
                'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4',
        },
        {
            id: 6,
            name: 'Boots',
            image:
                'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77',
        },
    ];

    const renderCategoryItem = ({ item }: any) => {
        return (
            <View style={styles.categoryItem}>
                <Image
                    source={{ uri: item.image }}
                    style={styles.categoryImage}
                />

                <Text style={styles.categoryText}>
                    {item.name}
                </Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>
                Categories
            </Text>

            <FlatList
                data={shoeCategories}
                renderItem={renderCategoryItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}

            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },

    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginBottom: 20,
    },
categoryItem: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 12,
    marginRight: 12,
},

    categoryImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 8,
    },

    categoryText: {
        color: '#000000',
        fontSize: 12,
        fontWeight: '600',
        textAlign: 'center',
    },
});