import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { BotonCalc } from '../components/BotonCalc'
import { useCalculadora } from '../hooks/useCalculadora';


export const CalculadoraScreen = () => {

  const { numero, numeroAnterior, limpiar, cambiarSigno, calcular, btnDelete, btnDividir, btnMultiplicar, btnRestar, btnSumar, armarNumero } = useCalculadora();

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

