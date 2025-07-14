import { useSelector } from 'react-redux'
import Tarefa from '../../components/tarefas'
import { MainContainer, Titulo } from '../../styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  // Função que filtra a lista de tarefas com base nos filtros atuais (termo, criterio, valor)
  const filtraTarefas = () => {
    // Começa com todos os itens, como se fosse a matéria-prima da fábrica
    let tarefasFiltradas = itens

    // 1️⃣ Primeiro filtro: busca por termo no título
    // Se tiver um termo digitado pelo usuário, filtra as tarefas cujo título contém esse termo
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )
    }

    // 2️⃣ Segundo filtro: baseado no critério selecionado
    // Se o critério for 'prioridade', filtra para manter só as tarefas com a prioridade escolhida
    if (criterio === 'prioridade') {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.prioridade === valor
      )
    }
    // Se o critério for 'status', filtra para manter só as tarefas com o status escolhido
    else if (criterio === 'status') {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.status === valor
      )
    }

    // Retorna a lista final filtrada
    return tarefasFiltradas
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''

    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: todas ${complementacao}`
    } else {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: ${`${criterio}=${valor}`}" ${complementacao}`
    }
    return mensagem
  }

  const tarefas = filtraTarefas()
  const mensagem = exibeResultadoFiltragem(tarefas.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              descricao={t.descricao}
              titulo={t.titulo}
              status={t.status}
              prioridade={t.prioridade}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeTarefas
