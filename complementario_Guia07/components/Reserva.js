import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Reserva = ({ item, eliminarReserva, editarReserva }) => {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.texto}>Cliente: {item.nombre}</Text>
      <Text style={styles.texto}>Personas: {item.personas}</Text>
      <Text style={styles.texto}>Fecha: {item.fecha}</Text>
      <Text style={styles.texto}>Sección: {item.seccion}</Text>

      <View style={styles.botones}>
        <TouchableOpacity
          style={styles.editar}
          onPress={() => editarReserva(item)}>
          <Text style={styles.btnTexto}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.eliminar}
          onPress={() => eliminarReserva(item.id)}>
          <Text style={styles.btnTexto}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#1c1c1c',
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#D4AF37',
    shadowColor: '#D4AF37',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },

  texto: {
    color: 'white',
    marginBottom: 2,
  },

  botones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  editar: {
    backgroundColor: '#D4AF37',
    padding: 10,
    borderRadius: 8,
    width: '48%',
  },

  eliminar: {
    backgroundColor: '#8B0000',
    padding: 10,
    borderRadius: 8,
    width: '48%',
  },

  btnTexto: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Reserva;
