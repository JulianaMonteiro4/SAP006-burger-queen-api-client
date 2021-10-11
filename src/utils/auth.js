//import React from "react";
//import { history } from '../routes/history'

const STORAGE_KEY = 'HamburgueriaJesus';

export const isLogged = () => !!localStorage.getItem(STORAGE_KEY);

export const isUserActive = localStorage.getItem(STORAGE_KEY); //localStorage[STORAGE_KEY]; // localStorage.HamburgueriaJesus

export const loginConfirmed = (token) => { //Aqui terei de chamar a função com os parametros infoUser    
    if(localStorage[STORAGE_KEY] === 'undefined'){
        localStorage.clear()        
    } 

    localStorage.setItem(STORAGE_KEY, token)    
};

export const logout = () => {
    localStorage.clear()      
};  

export const registerUser = async (name, emailUser, passwordUser, role) => {
    const url = 'https://lab-api-bq.herokuapp.com/users';
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify({
            name: name,
            email: emailUser,
            password: passwordUser,
            role: role,
            restaurant: 'HamburgueriaJesus'
        }),
    });
    return response;
};

export const loginUser = async (emailUser, passwordUser) => {
    const url = 'https://lab-api-bq.herokuapp.com/auth';
    const responseLogin = await fetch(url, {
        method: 'POST',
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify({
            email: emailUser,
            password: passwordUser
        }),
    });
    return responseLogin;
};