import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function ProductDetail() {
    const params = useLocalSearchParams();
    const router = useRouter();

    const { name, price, description, image } = params;

    return (
        <ScrollView style={styles.container}
            showsVerticalScrollIndicator={false}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: image as string }} style={styles.image} />
                <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}>{price}</Text>

                <View style={styles.divider} />

                <Text style={styles.descriptionTitle}>Description</Text>
                <Text style={styles.description}>{description}</Text>
                <View style={styles.buyButton}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buyButtonText}>Add to Cart</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buyButtonText}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    imageContainer: { position: 'relative' },
    image: { width: '100%', height: 400, resizeMode: 'cover' },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 25,

    },
    infoContainer: {
        padding: 25,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#fff',
        marginTop: -30,
    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 8
    },
    price: {
        fontSize: 24,
        fontWeight: '700',
        color: '#ea2121',
        marginBottom: 20
    },
    divider: {
        height: 1,
        backgroundColor: '#eee',
        marginBottom: 20
    },
    descriptionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10
    },
    description: {
        fontSize: 16,
        color: '#666',
        lineHeight: 24,
        marginBottom: 40
    },
    buyButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 15,
        marginTop: 20,
    },

    button: {
        flex: 1,
        backgroundColor: '#000',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
    },

    buyButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
})