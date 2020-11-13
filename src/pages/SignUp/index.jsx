import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { 
    Container, 
    Form, 
    Input, 
    Button, 
    InputBox, 
    TextContainer,
    Icon,
    Image,
    ContainerBg,
    AnimationContainer
} from './styled';

import LogoImg from '../../assets/logo-horiz.cc507d78.png';


class SignUpForm extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            sobrenome: "",
            email: "",
            passOne: "",
            passTwo: "",
            error: false,
          }
        this.surnameInputRef = React.createRef();
        this.emailInputRef = React.createRef();
        this.passwordInputRef = React.createRef();
        this.confirmPasswordInputRef = React.createRef();
      }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
          })  

    }
    
    handlePressInput = e => {
        if(e.charCode === 13){
           
            switch(e.target.name){
                case 'username': this.surnameInputRef.current.focus(); break;
                case 'sobrenome': this.emailInputRef.current.focus(); break;
                case 'email': this.passwordInputRef.current.focus(); break;
                case 'passOne': this.confirmPasswordInputRef.current.focus(); break;
                default: return '';
            } 
            if(e.target.value === ""){
              this.verifyInput(e)
            }
        }
    }

    verifyInput = e => {  
        if (this.state[e.target.name] === "")
        {
          this.setState({
            error: {
              ...this.state.error,
              [e.target.name]: "Campo não pode estar vazio!"
            }
          })
          return false;
        } else if (e.target.name === "passOne" &&
                  (this.state.passOne.length < 8 || this.state.passOne.length > 20 ||
                  !/[A-Z]/.test(this.state.passOne) || !/[0-9]/.test(this.state.passOne)))
        {
          this.setState({
            error: {
              ...this.state.error,
              passOne: "Sua senha deve ter pelo menos 6 caracteres contendo pelo menos uma letra maíscula e 1 número"
            },
          })
          return false
        } else if (e.target.name === "passTwo" && this.state.passOne !== this.state.passTwo)
          {
          this.setState({
              error: {
                ...this.state.error,
                passTwo: "Suas senhas não batem!"
              },
          })
            return false
        } else {
          if ( () => {for(let o in this.state.error) if(this.state.error[o]) return false;})
          {
            this.setState({
              error: false
            })
            return true;
          } else {
            this.setState({
              error: {
                ...this.state.error,
                [e.target.name]: false
              }
            })
          }
        }

        
      }

    cleanErrors = e => {
        this.setState({
            error: {
                    ...this.state.error,
                    [e.target.name]: false
                }
        })
      }

    register = e => {
        e.preventDefault();
        if (this.state.username !== "")
        {
            //Request para o servidor
            this.props.history.push({
              pathname: '/'
            })
        } else {
            console.log("do not make registration")
        }
    }

    render(){
        return (
            <Container>
              <ContainerBg />

              <AnimationContainer>
                <Link to="/">
                  <Icon size={35} color="#00183C"/>    
                </Link>

                  <Image src={LogoImg} />
                  <Form>
                      <h1>Registrar</h1>
                      <InputBox>
                          <TextContainer>
                              <p>Username</p>
                          </TextContainer>
                          <Input
                              name="username"
                              value={this.state.username}
                              onChange={e => this.handleOnChange(e)}
                              type="text"
                              placeholder="Qual seu nome?"
                              onKeyPress={e => this.handlePressInput(e)}
                              onBlur={(e) => this.verifyInput(e)}
                              onFocus={(e) => this.cleanErrors(e)}
                          />
                          {this.state.error && this.state.error.username && <p>{this.state.error.username}</p>}
                      </InputBox>
                      
                      
                      <InputBox>
                          <TextContainer>
                              <p>Sobrenome</p>
                          </TextContainer>
      
                          <Input
                              ref={this.surnameInputRef}
                              name="sobrenome"
                              value={this.state.sobrenome}
                              onChange={e => this.handleOnChange(e)}
                              type="text"
                              placeholder="E seu último nome?"
                              onKeyPress={e => this.handlePressInput(e)}
                              onBlur={(e) => this.verifyInput(e)}
                              onFocus={(e) => this.cleanErrors(e)}
                          />
                          {this.state.error && this.state.error.sobrenome && <p>{this.state.error.sobrenome}</p>}
                      </InputBox>
      
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
                              onBlur={(e) => this.verifyInput(e)}
                              onFocus={(e) => this.cleanErrors(e)}
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
                              onBlur={(e) => this.verifyInput(e)}
                              onFocus={(e) => this.cleanErrors(e)}
                          />
                          {this.state.error && this.state.error.passOne && <p>{this.state.error.passOne}</p>}
                      </InputBox>
      
                      <InputBox>
                          <TextContainer>
                              <p>Confirmar senha</p>
                          </TextContainer>
                          <Input
                              ref={this.confirmPasswordInputRef}
                              name="passTwo"
                              value={this.state.passTwo}
                              onChange={e => this.handleOnChange(e)}
                              type="password"
                              placeholder="Comfirme sua senha"
                              onBlur={(e) => this.verifyInput(e)}
                              onFocus={(e) => this.cleanErrors(e)}
                          />
                          {this.state.error && this.state.error.passTwo && <p>{this.state.error.passTwo}</p>}
                      </InputBox>
      
                      <Button disabled={!!this.state.error} onClick={e => this.register(e)} type="submit">
                          Registrar
                      </Button>
                      {this.state.error && <p>{this.state.error.message}</p>}
              </Form>
            </AnimationContainer>

            
          </Container>
        );
    }
}


export default withRouter(SignUpForm);