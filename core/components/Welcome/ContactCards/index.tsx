import * as S from "./styles"

const ContactCards =()=>{

    return (
    <S.Container>
        
        <a href="https://www.linkedin.com/in/antonio-cristian-a86b0b201/" target="blank">
        <S.Img  alt="Linkedin" width="100px" src="https://img.shields.io/badge/-Linkedin-2361B8?style=for-the-badge&logo=linkedin" />
        </a> 
        <a href="https://github.com/cris-guedes" target="blank">
        <S.Img alt="Github" width="100px" src="https://camo.githubusercontent.com/cca71357fe98ec5f8cd6ebab9044ad2901f4b64ebda379ac81608ed9f1caa1a0/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d47697448756226636f6c6f723d313831373137266c6f676f3d476974487562266c6f676f436f6c6f723d464646464646266c6162656c3d" />
        </a> 
  </S.Container>)
}

export default ContactCards