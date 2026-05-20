import { Image } from 'expo-image';
import { Platform, ScrollView, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
// import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { View, } from 'react-native';
import Hero from '@/components/pages/landing/hero';
import Category from '@/components/pages/landing/category';
import Product from '@/components/pages/landing/product';
// import ParallaxScrollView from '@/components/parallax-scroll-view';

export default function HomeScreen() {
  return (
    <ScrollView>
      <Hero />
      <Category />
      <Product />
    </ScrollView>
  );
}
