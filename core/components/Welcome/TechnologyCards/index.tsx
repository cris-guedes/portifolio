
import * as S from "./styles"

type Props ={ techs:Tech[]}
type Tech ={
    title:string,
    src:string
}

const TechnologyCards = ({techs}:Props)=>{
    

    return <S.Container>
        {techs&&techs.map((tech)=>(
           
                <S.Img alt={tech.title } src={tech.src}/>
            
        ))}
    </S.Container>
}

export default TechnologyCards