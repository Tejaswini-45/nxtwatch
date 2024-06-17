import styled from 'styled-components'

export const AppContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    min-height:100vh;
`
export const FormContainer = styled.form`
    display:flex;
    flex-directiom:column;
    padding:30px;
    border-radius:8px;
    box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width:350px;
`
export const LoginLogo = styled.img`
    width:180px;
    align-self:center;
    margin-bottom:15px;
`
export const InputContainer = styled.div`
    width:100%;
    margin-top:15px;
`
export const LoginButton = styled.button`
    width:100%;
    height:30px;
    background-color: #4f46e5;
    color:#ffffff;
    font-family:"Roboto";
    font-size:18px;
    border-radius:5px;
    border:none;
    margin-top:20px;
`
export const SubmitError = styled.p`
    color:#ff0b37;
    font-family:"Roboto";
    font-size:12px;
`
export const InputLabel = styled.label`
     color: #475569;
    font-family:"Roboto";
    font-size:12px;
    font-weight:500;
`
export const UserInput = styled.input`
    color: #475569;
    font-family:"Roboto";
    font-size:12px;
    padding:8px;
    border-radius:5px;
    border: 1px solid #94a3b8 ;
    outline:none;
    width:100%;
    margin-top:5px;
`
export const CheckboxContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    margin:12px;
`
export const Checkbox = styled.input`
width:15px;
height:15px;
margin-right:8px;
`
export const ShowPassword = styled.label`
    color:#1e293b;
    font-family:"Roboto";
    font-size:16px;
`
