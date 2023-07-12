import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
  texto: string;
  colorFondo?: string;
  ancho?: boolean;
}

export const BotonCalc = ({ texto, colorFondo = "#2D2D2D", ancho = false }: Props) => {
  return (
    <TouchableOpacity>
      <View style={{
        ...styles.boton,
        backgroundColor: colorFondo,
        width: (ancho ? 180 : 80)
      }}>
        <Text style={{
          ...styles.botonTexto,
          color: (colorFondo === "#9B9B9B" ? "black" : "white")
        }}>{texto}</Text>
      </View>
    </TouchableOpacity>
  )
}

//Seria mas logico dejar los estilos del boton en este componente

const styles = StyleSheet.create({
  boton: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 8
  },
  botonTexto: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '400'
  }
});
