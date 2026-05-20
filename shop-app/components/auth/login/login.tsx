import { StyleSheet, Button } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    // Use replace to prevent the user from going back to the login screen
    router.replace('/(tabs)');
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Login</ThemedText>
      <ThemedText style={styles.subtitle}>Welcome to the Shop App</ThemedText>
      
      <Button title="Login" onPress={handleLogin} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  subtitle: {
    marginBottom: 20,
  },
});