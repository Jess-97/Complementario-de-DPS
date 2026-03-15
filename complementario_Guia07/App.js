import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Formulario from './components/Formulario';
import Reserva from './components/Reserva';

export default function App() {
  const [reservas, setReservas] = useState([]);
  const [reservaEditar, setReservaEditar] = useState(null);

  const eliminarReserva = (id) => {
    const nuevasReservas = reservas.filter((r) => r.id !== id);
    setReservas(nuevasReservas);
  };

  const editarReserva = (reserva) => {
    setReservaEditar(reserva);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Esplendor Gourmet</Text>

      <Formulario
        reservas={reservas}
        setReservas={setReservas}
        reservaEditar={reservaEditar}
        setReservaEditar={setReservaEditar}
      />

      <Text style={styles.subtitulo}>Reservas</Text>

      <FlatList
        data={reservas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Reserva
            item={item}
            eliminarReserva={eliminarReserva}
            editarReserva={editarReserva}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 20,
    marginTop: 40,
  },

  titulo:{
fontSize:32,
textAlign:"center",
color:"#FFD700",
fontWeight:"bold",
marginBottom:20,
textShadowColor:"#D4AF37",
textShadowOffset:{width:0,height:0},
textShadowRadius:10,
letterSpacing:2
},

  subtitulo: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
  },
});
