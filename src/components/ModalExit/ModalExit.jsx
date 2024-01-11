import React, { useEffect } from 'react'
import { ModalButton, ModalButtonClose, ModalContent, ModalWrapper } from './ModalExit.styled'
import { useDispatch } from 'react-redux'
import { logoutThunk } from '../../redux/auth/operations'
import { useNavigate } from 'react-router'


const ModalExit = ({ handleCloseModal }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logout = () => dispatch(logoutThunk()).unwrap().then(() => { navigate('/') }).catch()
  const clickOutside = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal()
    }
  }
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleCloseModal()
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    return (() =>
      document.removeEventListener('keydown', handleKeyDown)
    )
  }, [handleCloseModal])
  return (
    <ModalWrapper onClick={clickOutside}>
      <ModalContent >
        <h3>Money Guard</h3>
        <p>Are you sure you want to log out?</p>
        <ModalButton onClick={logout}>Logout</ModalButton>
        <ModalButtonClose onClick={handleCloseModal}>cancel</ModalButtonClose>
      </ModalContent>
    </ModalWrapper>
  )
}

export default ModalExit