import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
display:flex;
`
export const ImgConainer = styled.div`
width:100%;
height:250px;
overflow:hidden;
`
export const Img = styled(Image)`
display: block;
    object-fit: cover;
    border-radius: 0px;
    width: 100%;
    height: 30vh;
    opacity: 1;
`