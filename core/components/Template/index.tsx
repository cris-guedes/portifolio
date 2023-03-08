import Banner from "../Banner"
import * as S from "./styles"

type Props = {
    img:string
    children:React.ReactNode
    icon?:string
}
const Template =({img,children,icon}:Props)=>{
    

    return (
    <S.Container>
        {img&&
        <>
            <Banner img={img}/>
        </>
        }
        <S.Main>
            {icon&&
                <S.Icon>
                    {icon}
                </S.Icon>
            }
            <S.Content>
                {children}
            </S.Content>
        </S.Main>
    </S.Container>
  )
  
}

export default Template