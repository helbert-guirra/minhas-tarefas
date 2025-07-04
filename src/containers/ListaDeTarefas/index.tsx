import Tarefa from '../../components/tarefas'
import { Container } from './styles'
import * as enums from '../../utils/enums/tarefa' // importa os enums

// Funções de conversão segura
function paraPrioridade(valor: string): enums.Prioridade {
  switch (valor.toLowerCase()) {
    case 'urgente':
      return enums.Prioridade.URGENTE
    case 'importante':
      return enums.Prioridade.IMPORTANTE
    case 'normal':
      return enums.Prioridade.NORMAL
    default:
      return enums.Prioridade.NORMAL
  }
}

function paraStatus(valor: string): enums.Status {
  switch (valor.toLowerCase()) {
    case 'pendente':
      return enums.Status.PENDENTE
    case 'concluída':
    case 'concluida': // aceita com e sem acento
      return enums.Status.CONCLUIDA
    default:
      return enums.Status.PENDENTE
  }
}

// Lista de tarefas com dados como string
const tarefas = [
  {
    titulo: 'Estudar TyperScript',
    descricao: 'ver a aula 3 da Ebac',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'pagar a conta da internet',
    descricao: 'Baixar fatura no Gmail',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Ir para a academia',
    descricao: 'fazer treino B',
    prioridade: enums.Prioridade.NORMAL,
    status: enums.Status.PENDENTE
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            titulo={t.titulo}
            descricao={t.descricao}
            prioridade={paraPrioridade(t.prioridade)}
            status={paraStatus(t.status)}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
