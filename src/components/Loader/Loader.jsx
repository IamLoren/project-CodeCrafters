import React from 'react';
import {
  StyledLoader,
  StyledLoaderCoin,
  StyledLoaderHand,
  StyledLoaderImage,
} from './LoaderStyled';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { FaHandHolding } from 'react-icons/fa6';

const Loader = () => {
  return (
    <>
      <StyledLoader>
        <StyledLoaderImage>
          <StyledLoaderCoin>
            <AiOutlineDollarCircle size={100} />
          </StyledLoaderCoin>
          <StyledLoaderHand>
            <FaHandHolding size={120} />
          </StyledLoaderHand>
        </StyledLoaderImage>
      </StyledLoader>
    </>
  );
};

export default Loader;
