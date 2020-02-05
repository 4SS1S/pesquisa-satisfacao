import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
    Container
} from './styles';
import axios from '../../services/axios';


export default function Login(){

    const dispactch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function login() {
        console.log(username, password)
        dispactch({
            type: 'LOADING',
            state: true
        });

        const url = `/inc/mobile/login_functionario?user=${username}&pass=${password}`;
        console.log(url)

        axios.get(url)
            .then(res => {
                if(typeof(res.data) === 'number'){
                    window.localStorage.setItem('unidade',res.data);
                    window.location.reload();
                }else{
                    alert('NÃO FOI POSSIVEL ACHAR O SEU LOGIN');

                    window.location.reload();
                }
            })
    }

    return(
        <Container>
            <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                autoFocus={true}
                placeholder="Login"/>
            <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Senha"/>
            <button
                style={{visibility: username && password !== '' ? 'visible' : 'hidden'}}
                onClick={() => login()}>Entrar</button>
        </Container>
    )
}