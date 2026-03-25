import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import InfoModal from '../components/InfoModal';

const data = [
  { id: '1', title: 'Rechazar', desc: 'Evitar residuos', info: 'Evita productos innecesarios', icon: '🚫' },
  { id: '2', title: 'Reducir', desc: 'Menos consumo', info: 'Compra solo lo necesario', icon: '📉' },
  { id: '3', title: 'Reutilizar', desc: 'Segunda vida', info: 'Reutiliza objetos', icon: '🔁' },
  { id: '4', title: 'Reciclar', desc: 'Transformar', info: 'Convierte residuos', icon: '♻️' },
  { id: '5', title: 'Recuperar', desc: 'Energía', info: 'Genera energía', icon: '⚡' },
];

export default function HomeScreen() {
  const [selected, setSelected] = useState(null);

  const renderItem = ({ item }) => (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => setSelected(item)}
      >
        <Text style={styles.icon}>{item.icon}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🌱 Las 5R del Reciclaje</Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />

      <InfoModal item={selected} onClose={() => setSelected(null)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F8E9',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 20,
    color: '#1B5E20',
  },
  list: {
    paddingHorizontal: 15,
    paddingBottom: 40,
  },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    margin: 10,
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 6,
  },
  icon: {
    fontSize: 45,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  desc: {
    fontSize: 13,
    textAlign: 'center',
    color: '#666',
  },
});