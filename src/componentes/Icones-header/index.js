import Perfil from '../../imagens/perfil.svg'
import Sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`
    margin-right: 40px;
    width: 20px;
`
const IconesContainer = styled.ul`
    display: flex;
    align-items: center;
  
` 

const icones = [Perfil, Sacola]

function IconesHeader(){
    return(
          /* cria a lista dos icones */
        <IconesContainer>
          { icones.map( (icone) => (
            <Icone><img src={icone}></img></Icone>
          ) )}
        </IconesContainer>
    )
}

export default IconesHeader