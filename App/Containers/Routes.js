import React, {Component} from 'react';
import { Router, Scene} from 'react-native-router-flux';
import FormLogin from '../Components/Common/FormLogin';
import FormSignUp from '../Components/Common/FormSignUp';


export default props => (
    <Router>
        <Scene key='formLogin' component={FormLogin} title="Login" />
        <Scene key='formSignUp' component={FormSignUp} title="Sign Up" />
    </Router>    
);
