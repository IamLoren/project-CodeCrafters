import Container from 'components/Container/Container';
import Logo from 'components/Logo/Logo';
import ModalExit from 'components/ModalExit/ModalExit';
import React, { useEffect, useState } from 'react';
import { StyledHeader } from './Header.styled';
import { selectUserName } from '../../redux/selectors';
import { useSelector } from 'react-redux';


export const Header = ({ children }) => {

  const [isOpenModal, setIsOpenModal] = useState(false);
  const userName = useSelector(selectUserName)

  useEffect(() => {
    isOpenModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible'
  }, [isOpenModal])
  const handleShowModal = (modalImage) => {
    setIsOpenModal(true);
  }

  const handleCloseModal = () => {
    setIsOpenModal(false);
  }

  return (<>
    <Container>
      <StyledHeader>
        <Logo />
        < >
          {userName && <span>{userName} |</span>}
          <button onClick={handleShowModal}>Exit</button>
        </>
      </StyledHeader>
    </Container>
    {isOpenModal ? <ModalExit handleCloseModal={handleCloseModal} /> : null
    }
  </>
  )
}

export default Header;

