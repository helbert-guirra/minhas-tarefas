import { configureStore } from '@reduxjs/toolkit'

import TarefasReducer from './reducers/tarefas'

const store = configureStore({
  reducer: {
    tarefas: TarefasReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
