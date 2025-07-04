import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Procurar" />
      <S.Filtros>
        <FiltroCard contador={1} legenda={'pendentes'} />
        <FiltroCard contador={2} legenda={'concluidas'} />
        <FiltroCard contador={3} legenda={'urgentes'} />
        <FiltroCard contador={4} legenda={'importantes'} />
        <FiltroCard contador={5} legenda={'normal'} />
        <FiltroCard contador={10} legenda={'todas'} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
