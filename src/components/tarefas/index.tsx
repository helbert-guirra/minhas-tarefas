import { useState } from 'react'
import * as S from './styles'
import * as enums from '../../utils/enums/tarefa'

type Props = {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
}

const Tarefa = ({ descricao, prioridade, status, titulo }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricaoEditada, setDescricaoEditada] = useState(descricao)

  const cancelarEdicao = () => {
    setDescricaoEditada(descricao)
    setEstaEditando(false)
  }

  const salvarEdicao = () => {
    console.log('Descrição salva:', descricaoEditada)
    setEstaEditando(false)
  }

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>

      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>

      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>

      {estaEditando ? (
        <S.Descricao
          as="textarea"
          value={descricaoEditada}
          onChange={(e) => setDescricaoEditada(e.target.value)}
        />
      ) : (
        <S.Descricao as="textarea" readOnly defaultValue={descricao} />
      )}

      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar onClick={salvarEdicao}>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover>Remover</S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
