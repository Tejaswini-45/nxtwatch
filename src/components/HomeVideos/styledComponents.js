import styled from 'styled-components'

export const NoVideosView = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background:none;
`
export const NoVideosImage = styled.img`
     width:200px;
     @media screen and (min-width:768px){
        width:450px;
     }
`
export const NoVideosHeading = styled.h1`
    color:${props => props.headingColor}
 font-family:"Roboto";
 font-size:25px;
`
export const NoVideosNote = styled.p`
    color:${props => props.noteColor}
 font-family:"Roboto";
 font-size:18px;
`
export const RetryButton = styled.button`
    border:none;
    background-color: #4f46e5;
    color:#ffffff;
    border-radius:5px;
    padding-left:10px;
    padding-right:10px;
    padding-top:5px;
    padding-bottom:5px;
     font-family:"Roboto";
 font-size:15px;
`
export const VideosCardList = styled.ul`
     list-styled-type:none;
    display:flex;
    padding:0;
    flex-wrap:wrap;
    justify-content:fkex-start;
    @media screen and (min-width:768px){
        margin-left:20px;
        }
`
