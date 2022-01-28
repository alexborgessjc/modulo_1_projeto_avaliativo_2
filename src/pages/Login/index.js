import { FormDefault,ScreenLogin,ImageDiv,FormDiv,TitleLogin} from './styles';
import { useNavigate } from 'react-router-dom';
import Container from '../../components/Container';
import Fundo from '../../assets/image/logo.jpg';
import Logo from '../../assets/image/logo.png';

import React, {useState,useEffect} from 'react';
import Input from '../../components/Input';

function Login() {      

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const [user, setUser] = useState([]);

    useEffect(() => {
        async function userAPI() {
                const response = await fetch(
                `http://localhost:3333/user`
            );
            const data = await response.json();
            setUser(data);
        }
        userAPI();        
      }, []);       

    function handleSubmit(event) {
        event.preventDefault();  
         
        let currentErrors = {};
           
        if (!email) {
            currentErrors.email = 'E-mail é obrigatório';
        }
    
        if (!password) {
            currentErrors.password = 'Senha é obrigatório';        
        }
        
        // Yup    
        setErrors(currentErrors);  
        
        if (email == user.email && password == user.password){            
            navigate('/dashboard');            
        } 
        if (email !== "" && password !== ""){   
            currentErrors.email = 'Incorreto';
            currentErrors.password = 'Incorreto'; 
        }                       
    }       
      
    return (
        <Container>
            <ScreenLogin>  
                <ImageDiv>
                    <img src={Fundo} width="100%" alt="Fundo Solar Energy"/>
                </ImageDiv>   
                <FormDiv>
                    <FormDefault onSubmit={handleSubmit}>  
                        <img src={Logo} width="30%" alt="Logo Solar Energy"/>  
                        <TitleLogin>Seja bem vindo </TitleLogin>            
                        <Input                            
                            label="E-mail"                            
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            errorMessage={errors.email}
                            placeholder="E-mail"
                        />                              
                        <Input
                            type="password"
                            label="Senha"                            
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            errorMessage={errors.password}
                            placeholder="Password"
                        />
                        <button type="submit">Entrar</button>
                    </FormDefault> 
                </FormDiv>          
            </ScreenLogin>   
        </Container>
    );
}
    
export default Login;