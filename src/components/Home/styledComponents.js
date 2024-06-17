import styled from 'styled-components'

export const HomeContainer = styled.div`
     background-color: ${props => props.bgColor};
       min-height:100vh;
       margin-top:60px;
       margin-bottom:60px;
       overflow-y:auto;
        @media screen and (min-width:768px){
        margin-left:250px;
        margin-bottom:0;
    }
`
export const BannerContainer = styled.div`
  background-image: url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
  background-size:cover;
  width:100%;
  height:200px;
  display: ${props => props.display};
  justify-content:space-between;
  padding:20px;
`
export const BannerLeftPart = styled.div`
  width:50%;
`
export const BannerRightPart = styled.div`
  display:flex;
  justify-content:flex-end;
`
export const BannerImage = styled.img`
  width:80px;
  height:30px;
`
export const BannerButton = styled.button`
  padding-left:10px;
    padding-right:10px;
    padding-top:5px;
    padding-bottom:5px;
    color:#000000;
    border:1px solid #000000;
    background:none;
`
export const BannerText = styled.p`
  font-family:"Roboto";
 font-size:15px;
 color:#000000;
 @media screen and (min-width:576px){
  font-size:20px;
 }
`
export const BannerCloseButton = styled.button`
  border:none;
  background:none;
  height:25px;
`
export const SearchContainer = styled.div`
  display:flex;
  border:1px solid #909090;
  border-radius:3px;
  margin:20px;
  width:60%;
  height:40px;
   @media screen and (min-width:576px){
    width:40%;
    }
`
export const SearchIconContainer = styled.button`
   display:flex;
    align-items:center;
    justify-content:center;
    background-color:#909090;
    width:70px;
    border:none;
`
export const SearchInput = styled.input`
  background:none;
  border:none;
  outline:none;
  width:100%;
  padding:5px;
  font-family:"Roboto";
  color: ${props => props.color};
`
export const LoaderContainer = styled.div`
       display:flex;
       justify-content:center;
       align-items:center;
       min-height:80vh;
`
