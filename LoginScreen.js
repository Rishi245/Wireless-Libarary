import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Alert, KeyboardAvoidingView} from 'react-native';
import { nativeViewProps } from 'react-native-gesture-handler/lib/typescript/handlers/NativeViewGestureHandler';

export default class LoginScreen extends React.Component{
    render(){
        return(
            <KeyboardAvoidingView style = {{alignItems: 'center', marginTop: 20}}>
<View>
    <Image source = {{require('../assets/booklogo.jpg')}}
    style = {{width: 200, height: 200}}/>
    <Text style = {{textAlign: 'center', fontSize: 30}}>Wily</Text>
</View>
<View>
    <TextInput style = {styles.loginBox}
    placeholder = 'abc@example.com'
    keyboardType = 'email-address'
    onChangeText = {(text)=>{
        this.setState({
            emailId: text
        })
    }}
    />
    <TextInput
    style = {styles.loginBox}
    secureTextEntry = {true}
    placeholder = {(text)=>{
        this.setState({
            password: text
        })
    }}
    />

</View>
<View>
    <TouchableOpacity style = {{height: 30, width: 90, borderWidth: 1, marginTop: 20, paddingTop: 5, borderRadius: 10}}
    onPress={()=>{this.Login(this.state.emailId, this.state.password)}}>
    <Text style = {{textAlign: 'center'}}>Login</Text>
    </TouchableOpacity>
</View>
            </KeyboardAvoidingView>

        )
    }
}
const styles = StyleSheet.create({
    loginBox: {
        width: 300,
        height: 40,
        borderWidth: 1.5,
        fontSize: 20,
        margin: 10,
        paddingLeft: 10
    }
})