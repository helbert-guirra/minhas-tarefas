import { useDispatch, useSelector } from 'react-redux'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as S from './styles'
import * as enums from '../../utils/enums/tarefa'
import { RootReducer } from '../../store'

// Tipo das props recebidas pelo card de filtro
export type Props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

// Componente FiltroCard recebe legenda, criterio e valor
const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()

  // Pega o estado global do Redux (filtro atual e tarefas)
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  // Verifica se este card é o filtro atualmente ativo
  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor
    return mesmoCriterio && mesmoValor
  }

  // Conta quantas tarefas se encaixam neste filtro
  const contarTarefa = () => {
    if (criterio === 'todas') return tarefas.itens.length
    if (criterio === 'prioridade') {
      return tarefas.itens.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'status') {
      return tarefas.itens.filter((item) => item.status === valor).length
    }
    return 0 // segurança caso nada se encaixe
  }

  // Dispara ação para alterar o filtro no Redux
  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const contador = contarTarefa()
  const ativo = verificaEstaAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
