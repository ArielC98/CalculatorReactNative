import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { BotonCalc } from '../components/BotonCalc'

enum Operadores {// Lista de valores mutuamente excluyentes
  sumar, restar, multiplicar, dividir
}

export const CalculadoraScreen = () => {

  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const ultimaOperacion = useRef<Operadores>();

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
  }

  const armarNumero = (numeroTexto: string) => {
    // No aceptar doble punto
    if (numero.includes('.') && numeroTexto === '.') return;

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      //Punto decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);
      }
      //Evaluar si es otro cero y hay un punto
      else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);
      }
      //Evaluar si es diferente de 0 y no tiene un punto
      else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);
      }
      //Evitar 000.0
      else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      }
      else {
        setNumero(numero + numeroTexto);
      }
    }
    else {
      setNumero(numero + numeroTexto);
    }
  }

  const cambiarSigno = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    }
    else {
      setNumero('-' + numero);
    }
  }

  const btnDelete = () => {
    if (numero.length === 1 || (numero.length === 2 && numero.includes('-'))) {
      setNumero('0');
    }
    else {
      setNumero(numero.slice(0, -1))
    }
  }

  const cambiarNumPorAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    }
    else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  }

  const btnDividir = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.dividir;
  }
  const btnMultiplicar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  }
  const btnRestar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.restar;
  }
  const btnSumar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.sumar;
  }

  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);

    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumero(`${num1 + num2}`);
        break;
      case Operadores.restar:
        setNumero(`${num2 - num1}`);
        break;
      case Operadores.multiplicar:
        setNumero(`${num1 * num2}`);
        break;
      case Operadores.dividir:
        setNumero(`${num2 / num1}`);
        break;
      default:
        break;
    }
    setNumeroAnterior('0');
  }

  return (
    <View style={styles.calculadoraContainer}>
      {
        (numeroAnterior !== '0') && (<Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>)
      }
      <Text
        style={styles.resultado}
        numberOfLines={1}
        adjustsFontSizeToFit
      >{numero}</Text>

      <View style={styles.fila}>
        {/* Boton */}
        <BotonCalc texto="C" colorFondo="#9B9B9B" accion={limpiar} />
        <BotonCalc texto="+/-" colorFondo="#9B9B9B" accion={cambiarSigno} />
        <BotonCalc texto="del" colorFondo="#9B9B9B" accion={btnDelete} />
        <BotonCalc texto="÷" colorFondo='#FF9427' accion={btnDividir} />
      </View>
      <View style={styles.fila}>
        {/* Boton */}
        <BotonCalc texto="7" accion={armarNumero} />
        <BotonCalc texto="8" accion={armarNumero} />
        <BotonCalc texto="9" accion={armarNumero} />
        <BotonCalc texto="×" colorFondo='#FF9427' accion={btnMultiplicar} />
      </View>
      <View style={styles.fila}>
        {/* Boton */}
        <BotonCalc texto="4" accion={armarNumero} />
        <BotonCalc texto="5" accion={armarNumero} />
        <BotonCalc texto="6" accion={armarNumero} />
        <BotonCalc texto="−" colorFondo='#FF9427' accion={btnRestar} />
      </View>
      <View style={styles.fila}>
        {/* Boton */}
        <BotonCalc texto="1" accion={armarNumero} />
        <BotonCalc texto="2" accion={armarNumero} />
        <BotonCalc texto="3" accion={armarNumero} />
        <BotonCalc texto="+" colorFondo='#FF9427' accion={btnSumar} />
      </View>
      <View style={styles.fila}>
        {/* Boton */}
        {/*Una propiedad booleana se envia como true si no se le pasa un valor. Es propio de React*/}
        <BotonCalc texto="0" accion={armarNumero} ancho />
        <BotonCalc texto="." accion={armarNumero} />
        <BotonCalc texto="=" colorFondo='#FF9427' accion={calcular} />
      </View>

    </View>
  )
}

