import { AddTransactionButton } from 'components/TransactionsModal/TransactionsModal.styled'
import React from 'react'

const Button = ({title}) => {
  return (
    <AddTransactionButton
          onClick={() => {
            /* handle adding transaction */
          }}
        >
          {title}
        </AddTransactionButton>
  )
}

export default Button