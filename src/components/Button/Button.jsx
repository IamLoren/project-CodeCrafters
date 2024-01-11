import { AddTransactionButton } from 'components/TransactionsModal/TransactionsModalStyled'
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