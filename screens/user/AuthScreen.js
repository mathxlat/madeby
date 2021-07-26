import React, { useReducer, useCallback, useState, useEffect } from 'react'
import { StyleSheet, Text, Button, TouchableWithoutFeedback, View, KeyboardAvoidingView, Keyboard, Alert, TouchableOpacity } from 'react-native'
import Input from '../../components/Input'
import { useDispatch } from 'react-redux';
import { signup, login } from '../../store/actions/auth.actions';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE){ 
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };

    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    }

    let updateFormIsValid = true;
    for (const key in updateFormIsValid){
      updateFormIsValid = updateFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updateFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues
    }
  } 

  return state;
}

const AuthScreen = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState(null)

    useEffect(()=>{
      if(error) {
        Alert.alert("Ha ocurrido un error", error, [{text: 'Ok'}])
      }
    }, [error])

    const [formState, dispatchFormState] = useReducer(formReducer,{
      inputValues: {
        email: '',
        password: '',
      },
      inputValidities: {
        email: false,
        password: false,
      },
      formIsValid: false,
    });

    const onInputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        input: inputIdentifier,
        value: inputValue,
        isValid: inputValidity
      })
    }, [dispatchFormState] )

    const onLoginHandler = async () => {
      try{
        await dispatch(login(formState.inputValues.email, formState.inputValues.password))
      } catch(err){
        setError(err.message)
      }
    }

    const onSignupHandler = async () => {
      try{
        await dispatch(signup(formState.inputValues.email, formState.inputValues.password));
      } catch (err) {
        setError(err.message);
      }
    }


    return (
      <TouchableWithoutFeedback 
        onPress={()=> Keyboard.dismiss()}
      >
        <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={50}
            style={styles.screen} 
            >
            <View style={styles.container}>
                <Text style={styles.title}>madeby</Text>
                <View>
                  <Input
                    id="email"
                    label="Email"
                    keyboardType="email-address"
                    required
                    email
                    autoCapitalize="none"
                    errorText="Por favor ingrese un email valido"
                    onInputChange={onInputChangeHandler}
                    initialValue=""
                    />
                  <Input 
                    id="password"
                    label="Clave"
                    keyboardType="default"
                    secureTextEntry
                    required
                    minLength={6}
                    autoCapitalize="none"
                    errorText="Por favor ingrese una clave de mas de 6 caracteres"
                    onInputChange={onInputChangeHandler}
                    initialValue=""
                    />
                </View>
                <View style={styles.footer}>
                  <TouchableOpacity style={styles.button} onPress={onLoginHandler}>
                      <Text style={styles.textButton}>INICIAR SESIÓN</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={onSignupHandler}>
                      <Text style={styles.textButton}>REGISTRARSE</Text>
                  </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 24,
        marginBottom: 18,
        fontFamily: 'poppins-medium'
      },
      container: {
        width: '80%',
        maxWidth: 400,
        height: '50%',
        maxHeight: 400,
        padding: 12,
      },
      footer: {
        marginTop: 24,
      },
      button:{
        paddingVertical: 11,
        paddingHorizontal: 30,
        borderRadius: 30,
        backgroundColor: '#8855FF',
        marginBottom: 10,
        alignItems: 'center',
      },
      textButton: {
          fontSize: 18,
          fontFamily: 'poppins-medium',
          color: '#ffffff'
      },
})

export default AuthScreen;