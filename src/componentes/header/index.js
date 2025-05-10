import Logo from '../logo'
import OpcoesHeader from '../opcoes-header'
import IconesHeader from '../Icones-header'
import styled from 'styled-components'

// crio o estilo do header 
const HeaderContainer = styled.header`
    background-color: white;
    display: flex;
    justify-content: center;
`

function Header(){
    return (
        <HeaderContainer>
             {/* componente importado da logo */}
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}

export default Header