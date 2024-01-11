import { CancelTransactionButton } from 'components/TransactionsModal/TransactionsModal.styled'
import React from 'react'

const AccentButton = ({title}) => {
  return (
    <CancelTransactionButton
          onClick={() => {
            /* handle cancelling transaction */
          }}
        >
          {title}
        </CancelTransactionButton>
  )
}

export default AccentButton