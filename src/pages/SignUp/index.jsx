import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { 
    Container, 
    Form, 
    Input, 
    Button, 
    InputBox, 
    TextContainer,
    Icon
} from './styled';


const SignUp = () => {
    const [username, setUsername] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [passaword, setPassaword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(false);

    const onChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

    return (
        <Container>
           <Link to="/">
             <Icon size={35} color="#00183C"/>    
           </Link>
            <Form>
                <h1>Registrar</h1>
                <InputBox>
                    <TextContainer>
                        <p>Username</p>
                    </TextContainer>
                    <Input
                        name="username"
                        value={username}
                        onChange={e => onChange(e)}
                        type="text"
                        placeholder="Qual seu nome?"
                    />
                    {/* {error && error.username && <p>{error.username}</p>} */}
                </InputBox>
                
                
                <InputBox>
                    <TextContainer>
                        <p>Sobrenome</p>
                    </TextContainer>

                    <Input
                        name="sobrenome"
                        value={surname}
                        onChange={e => this.onChange(e)}
                        type="text"
                        placeholder="E seu último nome?"
                    />
                    {/* {error && error.surname && <p>{error.surname}</p>} */}
                </InputBox>

                <InputBox>
                    <TextContainer>
                        <p>E-mail</p>
                    </TextContainer>
                    <Input
                        name="email"
                        value={email}
                        onChange={e => this.onChange(e)}
                        type="text"
                        placeholder="Seu email"
                    />
                    {/* {error && error.email && <p>{error.email}</p>} */}
                </InputBox>

                <InputBox>
                    <TextContainer>
                        <p>Senha</p>
                    </TextContainer>
                    <Input
                        name="passOne"
                        value={passaword}
                        onChange={e => this.onChange(e)}
                        type="password"
                        placeholder="Senha entre 8-20 caracteres"
                    />
                    {/* {error && error.passaword && <p>{error.passaword}</p>} */}
                </InputBox>

                <InputBox>
                    <TextContainer>
                        <p>Confirmar senha</p>
                    </TextContainer>
                    <Input
                        name="passTwo"
                        value={confirmPassword}
                        onChange={e => this.onChange(e)}
                        type="password"
                        placeholder="Comfirme sua senha"
                    />
                    {/* {error && error.confirmPassword && <p>{error.confirmPassword}</p>} */}
                </InputBox>

                <Button disabled={!!error} onClick={e => this.register(e)}>
                    Registrar
                </Button>
                {/* {error && <p>{error.message}</p>} */}
        </Form>
      </Container>
    );
}

export default SignUp;

