import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';

export default function InfoModal({ item, onClose }) {
  return (
    <Modal visible={!!item} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.icon}>{item?.icon}</Text>
          <Text style={styles.title}>{item?.title}</Text>
          <Text style={styles.text}>{item?.info}</Text>

          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
  },
  icon: {
    fontSize: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1B5E20',
  },
  text: {
    marginVertical: 15,
    textAlign: 'center',
    color: '#444',
  },
  button: {
    backgroundColor: '#2E7D32',
    padding: 10,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
  },
});