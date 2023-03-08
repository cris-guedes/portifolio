import * as S from "./styles"

type Props = {
    img:string
}
const Banner =({img}:Props)=>{

    return (
    <S.Container>
        <S.ImgConainer>
        <S.Img quality={70} priority alt="" width={1500} height={400} src={img}/>
        </S.ImgConainer>  
    </S.Container>
  )
}

export default Banner