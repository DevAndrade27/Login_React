import './Login.css';
import { FaUser, FaLock } from "react-icons/fa";
import { useState, UseState } from 'react';



const Login = () => {

    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h1>Acesse o sistema</h1>
                <div className="input-field" id="email">
                    <input type="email" name="email" id="" placeholder='E-mail' onChange={(e) => setUsername(e.target.value)}/>
                    <FaUser className='icon' />
                </div>
                <div className="input-field" id="senha">
                    <input type="password" name="senha" id="" placeholder='Senha' onChange={(e) => setPassword(e.target.value)}/>
                    <FaLock className='icon' />
                </div>

                <div className="recall-forget">
                    <label>
                        <input type="checkbox" name="" id="" />
                        Lembre de mim
                    </label>
                    <a href="#">Esqueci a senha</a>
                </div>

                <div className="entrar">
                    <button type="submit">Entrar</button>
                </div>

                <div className="signup-link">
                    <p>Não tem uma conta? <a href="#">Crie uma agora</a></p>
                </div>
            </form>
        </div>
    )
}

export default Login