import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
display:flex;
`
export const ImgConainer = styled.div`
width:100%;
height:250px;
display:flex ; 
align-items:center;
justify-content:center;
overflow:hidden;
`
export const Img = styled(Image)`
    border-radius: 0px;
    width: 100%;
    opacity: 1;
`