import React, {useState} from "react"
import {Text, TouchableOpacity, View, StyleSheet} from "react-native"
import { colors } from "react-native-elements"

export default ({options=[], horizontal, onChangeSelect, selected}) => { 

    if (horizontal == true){
        return (    
        
            <View style={style.alinhamento} >
                {options.map((opcao, index) => (
                            <TouchableOpacity 
                            onPress={()=>onChangeSelect(opcao,index)} 
                            style={style.container}
                            key={index}>
                                <View 
                                style={[style.contorno, {borderColor: '#182128'},]}>
                                    {selected == index && <View style={[style.preenchimento, ]}/>}
                                </View>
                                <Text style={[{marginLeft: 10, color: colors.dark_purple}, style.Montserrat]}>{opcao}</Text>
                            </TouchableOpacity>
                    )
                    )}
            </View>
        )        
    } else {
        return (    
        
            <View style={style.alinhamentoVertical} >
                {options.map((opcao, index) => (
                            <TouchableOpacity 
                            onPress={()=>onChangeSelect(opcao,index)} 
                            style={style.container}
                            key={index}>
                                <View 
                                style={[style.contorno, {borderColor: '#182128'}]}>
                                    {selected == index && <View style={[style.preenchimento]}/>}
                                </View>
                                <Text style={[{marginLeft: 10, color: colors.dark_purple}, style.Montserrat]}>{opcao}</Text>
                            </TouchableOpacity>
                    )
                    )}
            </View>
        )
    }

} 

const style = StyleSheet.create( {
    alinhamento: {
        flexDirection: 'row',
    },
    alinhamentoVertical: { 
        flexDirection: 'column'
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: '10%',
        marginTop: '2%'
    },
    contorno: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    preenchimento: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: 'blue'
    },
    Montserrat: {
        fontFamily: 'Montserrat'
    }
})