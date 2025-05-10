
import logo from '../../imagens/logo.svg' 
import styled from 'styled-components'

const DivLogo = styled.div`
    display: flex;
    font-size: 30px;
`
const LogoImg = styled.img`
    margin-right: 10px;
`

function Logo() {
    return (
        <DivLogo>
        {/* //coloca a logo na imagem */}
          <LogoImg src={logo} alt='Logo da Alura books'/>
          <p><strong>Alura</strong> Books</p>

        </DivLogo>
    )
}

export default Logo