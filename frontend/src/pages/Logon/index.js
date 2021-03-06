import React,{useState} from 'react';

import {Link, useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi'

import './styles.css';
import heroesImg from '../../Assets/heroes.png';
import logoImg from '../../Assets/logo.svg'
import api from '../../services/api';

export default function Logon(){
    const [id,setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        try{
            const responde = await api.post('sessions',{id});
            

            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',responde.data.name);
            history.push('/profile');
        }
        catch(err){
            alert('Falha no Login, tente novamente');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the hero"/> 

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>
                    <input placeholder="Sua ID"
                    value={id}
                    onChange={e=>setId(e.target.value)}/>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não Tenho Cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}