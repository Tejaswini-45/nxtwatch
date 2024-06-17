import styled from 'styled-components'

export const TrendingContainer = styled.div`
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
export const TrendingVideoTitle = styled.div`
       text-align:center;
       display:flex;
`

export const TrendingTitleIconContainer = styled.div`
       width:40px;
    height:40px;
    border-radius:80px;
    margin-left:10px;
    margin-right:10px;
    display:flex;
    align-items:center;
    justify-content:center;
     @media screen and (min-width:768px){
        margin-left:40px;
        }
`
export const TrendingText = styled.h1`
       font-family:"Roboto";
    font-size:25px;
    color: ${props => props.color};
       @media screen and (min-width:768px){
        font-size:35px;
}
`
export const TrendingVideosList = styled.ul`
        list-styled-type:none;
    display:flex;
    flex-direction:column;
         padding:0px;
      margin:0px;
`
export const LoaderContainer = styled.div`
       display:flex;
       justify-content:center;
       align-items:center;
       min-height:80vh;
`
