import { configureStore } from '@reduxjs/toolkit'

import TarefasReducer from './reducers/tarefas'
import FiltroReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    tarefas: TarefasReducer,
    filtro: FiltroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
