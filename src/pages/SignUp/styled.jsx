import styled from 'styled-components';
import { FiArrowLeft } from 'react-icons/fi'
import { shade } from 'polished';

export const Container = styled.div`
    max-width: 700px;
    margin: 50px auto;
    padding: 50px;

    background: #ececec;
    
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 10px;
    position: relative;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;

    text-align: center;

    h1{
        margin-bottom: 36px;
        line-height: 54px;
        color: #00183C;
    }
`;


export const Input = styled.input`
    width: 80%;
    height: 40px;
    padding: 2px 16px;

    border-radius: 10px;
    border: 1px solid  #00183C;
`;

export const Button = styled.button`
    margin-top: 15px;
    width: 46%;
    background: #FBC531;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: none;
    height: 40px;
    transition: background 0.3s;

    font-size: 18px;
    line-height: 28px;
    font-weight: 900;

    &:hover{
        background: ${shade( 0.15, "#FBC531")}
    }
`;

export const InputBox = styled.div`
    width: 100%;
    position: relative;

    & + div{
        margin-top: 25px;
    }
`;

export const TextContainer = styled.div`
    position: absolute;
    top: -13px;
    left: 70px;
    background: #FBC531;
    padding: 2px 16px;
    border-radius: 5px;
`;

export const Icon = styled(FiArrowLeft)`
    position: absolute;
    top: 20px;
    left: 20px;
`;