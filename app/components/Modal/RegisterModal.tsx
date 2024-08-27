import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
//import { Feather } from '@expo/vector-icons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useTheme } from '@react-navigation/native';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import Button from '../Button/Button';
import Input from '../Input/Input';

type Props = {
    close : any;
}

const RegisterModal = ({close} : Props) => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;


    return (
        <View 
            style={{
                backgroundColor:theme.dark ? 'rgba(0,3,3,.95)' :colors.card,
                maxWidth:330,
                width:'100%',
                //paddingHorizontal:20,
                //paddingVertical:20,
                borderRadius:SIZES.radius,
            }}
        >
            <View
                style={{
                    backgroundColor:theme.dark ? 'rgba(255,255,255,0.10)' :colors.card,
                    maxWidth:330,
                    width:'100%',
                    paddingHorizontal:20,
                    paddingVertical:20,
                    borderRadius:SIZES.radius,
                }}
            >
                <View
                    style={{
                        flexDirection:'row',
                        alignItems:'center',
                        paddingBottom:15,
                        marginBottom:20,
                        borderBottomWidth:1,
                        borderBottomColor:colors.border,
                    }}
                >
                    <Text style={{flex:1,...FONTS.h6,color:colors.title}}>Register</Text>
                    <TouchableOpacity
                        onPress={() => close(false)}
                        style={{
                            height:32,
                            width:32,
                            borderRadius:32,
                            backgroundColor:colors.background,
                            alignItems:'center',
                            justifyContent:'center',
                        }}
                    >
                        <FeatherIcon size={20} color={colors.title} name="x"/>
                    </TouchableOpacity>
                </View>
                <View style={{marginBottom:15}}>
                    <Text style={{...FONTS.font,color:colors.title,marginBottom:4}}>Username</Text>
                    <Input
                        //value={''}    
                        placeholder={'Type Username Here'}
                        onChangeText={(value)=> console.log(value)}
                    />
                </View>
                <View style={{marginBottom:15}}>
                    <Text style={{...FONTS.font,color:colors.title,marginBottom:4}}>Email</Text>
                    <Input
                        //value={''}    
                        placeholder={'Type Email Here'}
                        onChangeText={(value)=> console.log(value)}
                    />
                </View>
                <View style={{marginBottom:25}}>
                    <Text style={{...FONTS.font,color:colors.title,marginBottom:4}}>Password</Text>
                    <Input
                       //value={''}   
                        type="password" 
                        placeholder={'Type Password Here'}
                        onChangeText={(value)=> console.log(value)}
                    />
                </View>
                <Button
                    onPress={() => {}}
                    title={'Register'}
                    text={COLORS.title }
                    color={COLORS.secondary}
                />
            </View>
        </View>
    );
};



export default RegisterModal;