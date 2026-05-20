import {
  View,
  Text,
  StyleSheet,
  SectionList,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native'

import React from 'react'
import { useRouter } from 'expo-router'

export default function Product() {
  const router = useRouter();

  const products = [
  {
    title: "New Arrival",
    data: [
      {
        id: 1,
        name: "Product 1",
        price: "$10",
        description: "Comfortable running shoes for daily wear.",
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      },

      {
        id: 2,
        name: "Product 2",
        price: "$20",
        description: "Stylish sneakers with lightweight design.",
        image:
          "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      },

      {
        id: 3,
        name: "Product 3",
        price: "$30",
        description: "Premium sports shoes with extra cushioning.",
        image:
          "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      },

      {
        id: 4,
        name: "Product 4",
        price: "$40",
        description: "Classic casual sneakers for everyday style.",
        image:
          "https://images.unsplash.com/photo-1549298916-b41d501d3772",
      },
    ]
  },

  {
    title: "Top Selling",
    data: [
      {
        id: 5,
        name: "Top Product 1",
        price: "$50",
        description: "Best-selling leather sneakers with modern look.",
        image:
          "https://images.unsplash.com/photo-1514996937319-344454492b37",
      },

      {
        id: 6,
        name: "Top Product 2",
        price: "$60",
        description: "High-quality sneakers built for comfort.",
        image:
          "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      },

      {
        id: 7,
        name: "Top Product 3",
        price: "$70",
        description: "Durable sports shoes with breathable material.",
        image:
          "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      },

      {
        id: 8,
        name: "Top Product 4",
        price: "$80",
        description: "Trendy footwear designed for all occasions.",
        image:
          "https://images.unsplash.com/photo-1543508282-6319a3e2621f",
      },
    ]
  },

  {
    title: "Best Seller",
    data: [
      {
        id: 9,
        name: "Best Seller 1",
        price: "$90",
        description: "Premium sneakers with superior comfort.",
        image:
          "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      },

      {
        id: 10,
        name: "Best Seller 2",
        price: "$100",
        description: "Elegant and stylish shoes for fashion lovers.",
        image:
          "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      },

      {
        id: 11,
        name: "Best Seller 3",
        price: "$110",
        description: "Lightweight shoes perfect for long walks.",
        image:
          "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      },

      {
        id: 12,
        name: "Best Seller 4",
        price: "$120",
        description: "Luxury sneakers with premium finishing.",
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      },
    ]
  }
]


  return (
    <View style={{ marginTop: 40 ,backgroundColor: '#fff' ,flex: 1 }}>

      <SectionList
        sections={products}
        showsVerticalScrollIndicator={false}

        renderSectionHeader={({ section }) => (
          <View style={{ marginBottom: 20 }}>

            <Text style={styles.headerTitle}>
              {section.title}
            </Text>

            <FlatList
              data={section.data}
              horizontal
              showsHorizontalScrollIndicator={false}

              renderItem={({ item }) => (
               <TouchableOpacity 
                style={{ marginRight: 15 }}
                onPress={() => router.push({
                  pathname: "/product/[id]",
                  params: { 
                    id: item.id.toString(),
                    name: item.name,
                    price: item.price,
                    description: item.description,
                    image: item.image,
                  }
                })}
               >
                <View style={styles.card}>

                  <Image
                    source={{ uri: item.image }}
                    style={styles.image}
                  />

                  <Text style={styles.productName}>
                    {item.name}
                  </Text>

                  <Text style={styles.productPrice}>
                    {item.price}
                  </Text>

                </View>
                </TouchableOpacity>
            
              )}
            />

          </View>
        )}

        renderItem={() => null}
      />

    </View>
  )
}

const styles = StyleSheet.create({

  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
    marginHorizontal: 10,
  },

  card: {
    width: 180,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    elevation: 5,
  },

  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },

  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },

  productPrice: {
    fontSize: 14,
    color: '#666',
  }

})