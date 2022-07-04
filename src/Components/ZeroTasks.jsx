import React from 'react'
import Lista from '../assets/Lista.svg'

const ZeroTasks = () => {
  return (
    <div className='Tasks-list-zero-item'>
        <img src={Lista} alt="Lista" />
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>

    </div>
  )
}

export default ZeroTasks