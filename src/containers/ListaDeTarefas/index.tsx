// Importa o hook useSelector do react-redux para acessar o estado global da aplicação
import { useSelector } from 'react-redux'

// Importa o componente Tarefa, que será usado para exibir cada tarefa individualmente
import Tarefa from '../../components/tarefas'

// Importa o componente estilizado Container para estruturar o layout da lista
import { Container } from './styles'

// Importa todos os enums relacionados a tarefas (por exemplo, status, prioridade)
import * as enums from '../../utils/enums/tarefa'

// Importa o tipo RootReducer para tipar corretamente o estado global
import { RootReducer } from '../../store'

// Define o componente funcional ListaDeTarefas
const ListaDeTarefas = () => {
  // Usa o useSelector para acessar o estado de tarefas no Redux
  const { itens } = useSelector((state: RootReducer) => state.tarefas)

  // Renderiza o componente
  return (
    <Container>
      {/* Exibe uma mensagem fixa sobre tarefas filtradas (pode ser dinâmica futuramente) */}
      <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
      <ul>
        {/* Percorre a lista de tarefas e renderiza cada uma usando o componente Tarefa */}
        {itens.map((t) => (
          // Usa o título da tarefa como chave única (idealmente, use um id se disponível)
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
    </Container>
  )
}

// Exporta o componente para ser usado em outros lugares da aplicação
export default ListaDeTarefas
