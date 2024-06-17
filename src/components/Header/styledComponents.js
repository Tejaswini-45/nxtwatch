import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarHeader = styled.nav`
    display:flex;
    align-items:center;
    justify-content:space-between;
    position:fixed;
    top:0;
    padding:10px;
    height:60px;
    width:100%;
    background-color: ${props => props.bgColor};
     @media screen and (min-width:768px){
        padding-left:30px;
        padding-right:30px;
     }
    
`

export const LogoLink = styled(Link)`
    text-decoration:none;
`

export const HeaderLogo = styled.img`
    height:30px;
    width:80px;
     @media screen and (min-width:768px){
         height:40px;
        width:100px;
     }
`

export const ActionsContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-end;
`

export const ThemeButton = styled.button`
    background:none;
    border:none;
    margin-right:10px;
`

export const CloseButton = styled.button`
    background-color:transparent;
     padding-right:12px;
 padding-left:12px;
 padding:8px;
  border:1px solid grey;
  color:grey;
  margin:12px;
  outline:none;
  cursor:pointer;
  border-radius:5px;
  font-size:12px;
 font-family:"Roboto";
 font-weight:bold;
   @media screen and (min-width:768px){
        padding-right:20px;
 padding-left:20px;
 padding:13px;
 font-size:15px;
   }

`

export const ConfirmButton = styled.button`
background-color:#3b82f6;
align-self:flex-end;
     padding-right:12px;
 padding-left:12px;
 padding:8px;
  border:1px solid #3b82f6;
  color:white;
  margin:10px;
  outline:none;
  cursor:pointer;
  border-radius:5px;
  font-size:12px;
 font-family:"Roboto";
 font-weight:bold;
   @media screen and (min-width:768px){
        padding-right:20px;
 padding-left:20px;
 padding:13px;
 font-size:15px;
   }`

export const LogoutButton = styled.button`
 background-color: ${props => props.bgColor};
 color: ${props => props.color};
 font-size:15px;
 font-family:"Roboto";
 font-weight:normal;
 border:1px solid;
 border-radius:5px;
 border-color: ${props => props.color};
  margin-left:5px;
 padding-right:10px;
 padding-left:10px;
 padding-top:5px;
 padding-bottom:5px;
    @media screen and (min-width:768px){
        display:none;
    }
`

export const LogoutIconButton = styled.button`
    background:none;
    border:none;
    @media screen and (min-width:768px){
        display:none;
    }
`

export const ModalContainer = styled.div`
    dispaly:flex;
    flex-direction:column;
    justify-content:space-between;
    width:250px;
 height:150px;
 border-radius:10px;
 background-color:#cbd5e1;
 padding:20px;
@media screen and (min-width:768px){
         height:200px;
        width:400px;
     }
`

export const ProfileImage = styled.img`
 width:30px;
 height:30px;
 margin-right:10px;
`

export const ModalDesc = styled.p`
    font-size:15px;
 font-family:"Roboto";
 color:black;
 margin:10px;
 text-align:center;
 @media screen and (min-width:768px){
    font-size:20px;
 }

`

export const ButtonsContainer = styled.div`
     display:flex;
     flex-direction:row;
     justify-content:space-between;
`
