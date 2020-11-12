import React, { useState } from 'react';

import { 
    Container, 
    Form, 
    Input, 
    Button, 
    InputBox, 
    TextContainer,
    LinkRecover,
    CreatedAccountBox,
    ButtonCreate
} from './styled';


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [passaword, setPassaword] = useState("");
    const [error, setError] = useState(false);

    const onChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

    return (
        <Container>
            <Form>
                <h1>Faça seu login</h1>
                
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
                       name="pass"
                       value={passaword}
                       onChange={e => this.onChange(e)}
                       type="password"
                       placeholder="Senha entre 8-30 caracteres"
                    />
                    {/* {error && error.passaword && <p>{error.passaword}</p>} */}
                </InputBox>

                <Button disabled={!!error} onClick={e => this.register(e)}>
                    Login
                </Button>
                {/* {error && <p>{error.message}</p>} */}

                <LinkRecover>
                    Esqueceu a senha?
                </LinkRecover>
        </Form>

        <CreatedAccountBox>
            <p>Você ainda não tem sua conta?</p>

            <ButtonCreate to="/signup">
                Cadastre-se
            </ButtonCreate>
        </CreatedAccountBox>
      </Container>
    );
}

export default SignUp;

