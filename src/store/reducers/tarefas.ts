import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      titulo: 'Estudar JavaScript',
      descricao: 'Estudar JavaScript revendo o exercicio do modulo 7',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA
    },
    {
      id: 2,
      titulo: 'Estudar typeScript',
      descricao: 'Estudar material de apoio',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE
    },
    {
      id: 3,
      titulo: 'Estudar Bootstrap',
      descricao: 'Praticar a construção de uma landing page responsiva',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.CONCLUIDA
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexdaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      // Se o índice for diferente de 0, significa que a tarefa foi encontrada
      // e podemos atualizá-la. Se for 0, significa que a tarefa não foi encontrada
      // e não devemos fazer nada.
      // Isso é importante para evitar a atualização de uma tarefa inexistente,
      // o que poderia causar problemas no estado da aplicação.
      if (indexdaTarefa >= 0) {
        state.itens[indexdaTarefa] = action.payload
      }
    }
  }
})

export const { remover, editar } = tarefasSlice.actions

export default tarefasSlice.reducer
