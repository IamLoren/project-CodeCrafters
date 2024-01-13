import styled from "styled-components";

export const StyledHeader = styled.div`
background: linear-gradient(270deg, #2E1746 3.2%, #2E225F 99.98%);
padding:16px;
display:flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
max-width: 1440px;
margin: 0 auto;
@media (max-width: 1279px) {
    padding: 16px 32px;
  }
  @media (max-width: 767px) {
    padding: 12px 20px;
  }
div{
    display: flex;
    align-items: center;
}
span, svg{
  color: var(--text-forms);
  text-align: right;
  font-family:"Poppins Regular";
  font-size: 16px;
  line-height: normal;
}
`

export const StyledExitButton = styled.div`
display: flex;
border-left: 1px solid var(--text-forms);
padding-left: 12px;
margin-left: 12px;
@media (max-width: 1279px) {
    
  }
@media (max-width: 767px) {
    border: none;
    margin-left:8px;
    padding:0;
  }
  button{      
  color: var(--text-forms);
  font-family:"Poppins Regular";
  font-size: 16px;
  transition: all 0.2s ease-in-out;
  background: transparent;
  border:none;
  @media (max-width: 1279px) {
    margin-left: 8px;
    padding: 0;
  }
  @media (max-width: 767px) {
    display: none;
  }
  	&:hover {
		color: white;
	}
    }
`

