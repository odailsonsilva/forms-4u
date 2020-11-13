import React from 'react';
import { withRouter } from 'react-router-dom';

import { 
    Container, 
    Form, 
    Input, 
    Button, 
    InputBox, 
    TextContainer,
    CreatedAccountBox,
    ButtonCreate,
    LinkRecover,
    Image,
    ContainerBg,
    AnimationContainer
} from './styled';

import LogoImg from '../../assets/logo-horiz.cc507d78.png';


class SignUpForm extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            passOne: "",
            error: false,
          }
        this.passwordInputRef = React.createRef();
      }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
          })  

    }
    
    handlePressInput = e => {
        if(e.charCode === 13){
            switch(e.target.name){
                case 'email': this.passwordInputRef.current.focus(); break;
                default: return '';
            } 

        }
    }

      login = e => {
        e.preventDefault();
        if (this.state.email !== "" && this.state.pass !== "")
        {
          //request para o servidor
          this.setState({
            error: {
              email: this.state.email === "" ? "Seu email nao pode estar vazio" : "",
              passOne: this.state.passOne === "" ? "Sua senha nao pode estar vazia" : ""
            }
          })
        } else {
          this.setState({
            error: {
              email: this.state.email === "" ? "Seu email nao pode estar vazio" : "",
              passOne: this.state.passOne === "" ? "Sua senha nao pode estar vazia" : ""
            }
          })
        }
      }

    render(){
        return (
            <>
            <Container>
                <AnimationContainer>
                        <Image src={LogoImg} />

                        <Form>
                            <h1>Faça seu login</h1>
                            <InputBox>
                                <TextContainer>
                                    <p>E-mail</p>
                                </TextContainer>
                                <Input
                                    ref={this.emailInputRef}
                                    name="email"
                                    value={this.state.email}
                                    onChange={e => this.handleOnChange(e)}
                                    type="text"
                                    placeholder="Seu email"
                                    onKeyPress={e => this.handlePressInput(e)}
                                />
                                {this.state.error && this.state.error.email && <p>{this.state.error.email}</p>}
                            </InputBox>
            
                            <InputBox>
                                <TextContainer>
                                    <p>Senha</p>
                                </TextContainer>
                                <Input 
                                    ref={this.passwordInputRef}
                                    name="passOne"
                                    value={this.state.passOne}
                                    onChange={e => this.handleOnChange(e)}
                                    type="password"
                                    placeholder="Senha entre 8-20 caracteres"
                                    onKeyPress={e => this.handlePressInput(e)}
                                />
                                {this.state.error && this.state.error.passOne && <p>{this.state.error.passOne}</p>}
                            </InputBox>
            
                            
            
                            <Button disabled={!!this.state.error} onClick={e => this.login(e)} type="button">
                                Login
                            </Button>
                            {this.state.error && <p>{this.state.error.message}</p>}

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
            </AnimationContainer>

            <ContainerBg />
          </Container>

         

          </>
        );
    }
}


export default withRouter(SignUpForm);


