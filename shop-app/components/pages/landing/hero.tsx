import { View, Text, StyleSheet, ScrollView ,Image } from 'react-native'
import React from 'react'
import { SafeAreaFrameContext } from 'react-native-safe-area-context'
import { SafeAreaView } from 'react-native-safe-area-context'

const Hero = () => {
    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View >
                  
                    <Image source={require('@/assets/project_image/images.jpg')} style={{ width: '100%', height: 200 }} />
                </View>
            </SafeAreaView>
        </ScrollView>

    )
}

export default Hero

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
})