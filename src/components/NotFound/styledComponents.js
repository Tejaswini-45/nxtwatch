import styled from 'styled-components'

export const NotFoundContainer = styled.div`
      display:flex;
    align-items:center;
    justify-content:center;
    background-color: ${props => props.bgColor};
    min-height:90vh;
    margin-top:60px;
    margin-bottom:60px;
    overflow-y:auto;
    @media screen and (min-width:768px){
        margin-left:250px;
        margin-bottom:0;
    }
    `
export const NotFoundVideosView = styled.div`
      display:flex;
      flex-direction:column;
    align-items:center;
    justify-content:center;
    background:none;
`
export const NotFoundVideosImage = styled.img`
    width:200px;
     @media screen and (min-width:768px){
        width:450px;
     }
`
export const NotFoundVideosHeading = styled.h1`
 color:${props => props.headingColor}
 font-family:"Roboto";
 font-size:25px;
 text-align:center;
`
export const NotFoundVideosNote = styled.p`
     color:${props => props.noteColor}
 font-family:"Roboto";
 font-size:18px;
 text-align:center;
`
