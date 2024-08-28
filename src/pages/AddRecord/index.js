import React, { useCallback, useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { FlashList } from '@shopify/flash-list';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

import colors from '../../theme/colors'
import { supabase } from '../../services/supabase';
import RadioBotao from '../../components/RadioBotao';

export default function index() {
    const [type, setType] = useState(0);
    const data = new Date();
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const hora = data.getHours();
    const minuto = data.getMinutes();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={[styles.title]}>
                        Nova entrada:
                    </Text>
                </View>
            </View>
            <Text style={[{ color: colors.brownDark, marginLeft: 10, fontSize: 16, fontWeight: 'bold' }]}>Valor:</Text>
            <TextInput style={[styles.botaoInput]} placeholder='Informe o valor da entrada' />
            <View>
                <Text style={[{ color: colors.brownDark, marginLeft: 10, fontSize: 16, fontWeight: 'bold', marginVertical: '5%' }]}>Método de depósito bancário?</Text>
                <RadioBotao 
                    selected={type} 
                    onChangeSelect={(type, index) => setType(index)} 
                    horizontal={false} 
                    options={['Pix', 'Credit Card', 'Debit Card', 'Bills']} 
                />
            </View>
            <View>
                <Text style={[{ color: colors.brownDark, marginLeft: 10, fontSize: 16, fontWeight: 'bold', marginVertical: '5%' }]}>Horário da transação:</Text>
                <Text style={[{ color: colors.brownDark, marginLeft: 10 }]}>{hora}:{minuto} - {dia}/{mes}/{ano}</Text>
            </View>
            <TouchableOpacity style={[styles.botaoAcao, { backgroundColor: colors.green }]}>
                <Text style={{ color: colors.white, fontSize: 20, fontWeight: 'bold' }}>Finalizar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botaoAcao, { backgroundColor: colors.red }]}>
                <Text style={{ color: colors.white, fontSize: 20, fontWeight: 'bold' }}>Cancelar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.brownLight,
    },

    header: {
        marginTop: 0,
    },
    botaoInput: {
        padding: 10,
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: colors.brownDark,
        borderRadius: 10,
        width: '95%',
    },

    scrollArea: {
        marginTop: 80,
        color: colors.gray_400,
    },
    botaoAcao: {
        width: '60%',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'row',
        padding: 10,
        marginTop: '5%',
        justifyContent: 'space-evenly',
        borderRadius: 20,
    },

    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: colors.brownDark,
        margin: 14,
        marginTop: 16,
        marginBottom: 16,
        paddingBottom: 8,
        borderBottomWidth: 4,
        borderBottomColor: colors.brownLight,
    },

    list: {
        marginStart: 14,
        marginEnd: 14,
    },
});
