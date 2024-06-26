import styled from 'styled-components'

export const SavedContainer = styled.div`
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
export const SavedVideoTitle = styled.div`
    display:flex;
    align-items:center;
`
export const SavedTitleIconContainer = styled.div`
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
export const SavedText = styled.h1`
    font-family:"Roboto";
    font-size:20px;
    color: ${props => props.color};
       @media screen and (min-width:768px){
        font-size:35px;
}
`
export const SavedVideoList = styled.ul`
    list-styled-type:none;
    display:flex;
    flex-direction:column;
    margin:0px;
    padding:0px;
`
export const NoSavedVideosView = styled.div`
     display:flex;
      flex-direction:column;
    align-items:center;
    justify-content:center;
    background:none;
`
export const NoSavedVideosImage = styled.img`
    width:200px;
     @media screen and (min-width:768px){
        width:450px;
     }
`
export const NoSavedVideosHeading = styled.h1`
    color:${props => props.headingColor}
 font-family:"Roboto";
 font-size:25px;
 text-align:center;
`
export const NoSavedVideosNote = styled.p`
     color:${props => props.noteColor}
 font-family:"Roboto";
 font-size:18px;
 text-align:center;
`
