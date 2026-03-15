import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const Formulario = ({
  reservas,
  setReservas,
  reservaEditar,
  setReservaEditar,
}) => {
  const [nombre, setNombre] = useState('');
  const [personas, setPersonas] = useState('');
  const [seccion, setSeccion] = useState('');

  const [fecha, setFecha] = useState(new Date());
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    if (reservaEditar) {
      setNombre(reservaEditar.nombre);
      setPersonas(reservaEditar.personas);
      setSeccion(reservaEditar.seccion);
    }
  }, [reservaEditar]);

  const cambiarFecha = (event, selectedDate) => {
    const currentDate = selectedDate || fecha;
    setMostrar(false);
    setFecha(currentDate);
  };

  const guardarReserva = () => {
    if (nombre === '' || personas === '') {
      alert('Completa los campos');
      return;
    }

    const nuevaReserva = {
      id: reservaEditar ? reservaEditar.id : Date.now().toString(),
      nombre,
      personas,
      seccion,
      fecha: fecha.toLocaleDateString(),
    };

    let nuevasReservas;

    if (reservaEditar) {
      nuevasReservas = reservas.map((r) =>
        r.id === reservaEditar.id ? nuevaReserva : r
      );

      setReservaEditar(null);
    } else {
      nuevasReservas = [...reservas, nuevaReserva];
    }

    setReservas(nuevasReservas);

    setNombre('');
    setPersonas('');
    setSeccion('');
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        placeholderTextColor="#aaa"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Personas"
        keyboardType="numeric"
        placeholderTextColor="#aaa"
        value={personas}
        onChangeText={setPersonas}
      />

      <TouchableOpacity
        style={styles.fechaBtn}
        onPress={() => setMostrar(true)}>
        <Text style={styles.fechaTexto}>
          Fecha: {fecha.toLocaleDateString()}
        </Text>
      </TouchableOpacity>

      {mostrar && (
        <DateTimePicker
          value={fecha}
          mode="date"
          display="default"
          onChange={cambiarFecha}
        />
      )}

      <View style={styles.botones}>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => setSeccion('Fumadores')}>
          <Text style={styles.texto}>Fumadores</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.boton}
          onPress={() => setSeccion('No fumadores')}>
          <Text style={styles.texto}>No fumadores</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.seccion}>Sección: {seccion}</Text>

      <TouchableOpacity style={styles.agregar} onPress={guardarReserva}>
        <Text style={styles.textoAgregar}>
          {reservaEditar ? 'Actualizar Reserva' : 'Agregar Reserva'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#D4AF37',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    color: 'white',
  },

  fechaBtn: {
    backgroundColor: '#D4AF37',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },

  fechaTexto: {
    textAlign: 'center',
    fontWeight: 'bold',
  },

  botones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  boton: {
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 8,
    width: '48%',
  },

  texto: {
    color: 'white',
    textAlign: 'center',
  },

  seccion: {
    color: '#D4AF37',
    textAlign: 'center',
    marginVertical: 10,
  },

  agregar: {
    backgroundColor: '#D4AF37',
    padding: 14,
    borderRadius: 8,
    marginBottom: 20,
  },

  textoAgregar: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Formulario;
