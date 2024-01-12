import styled from 'styled-components'

export const ModalWrapper = styled.div`
	position: fixed;
	inset: 0;
	display: flex;
	justify-content: center;
	align-items: center;
		background: rgba(34, 13, 91, 0.23);
backdrop-filter: blur(3.5px);
z-index: 100;
	`

export const ModalContent = styled.div`
	position: relative;
	/* background: var(--Form-color, rgba(255, 255, 255, 0.10)); */
	background: rgba(255, 255, 255, 0.10);
	overflow: hidden;
	max-width: 1000px;
	border-radius: 8px;
	width: 533px;
	/* height: 447px; */
	flex-shrink: 0;
	display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

/* form effects */
box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
backdrop-filter: blur(50px);

img{
	width: 182px;
	height: 76px;
margin-top: 95px;
margin-bottom: 0;
}
p{
	color: #FFF;
font-family:"Poppins Regular";
font-size: 18px;
line-height: normal;
margin:52px auto;
}
`
export const ModalButton = styled.button`
width: 300px;
height: 50px;
flex-shrink: 0;
border:none;
border-radius: 20px;
box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.20);
text-align: center;
/* font-family: Poppins; */
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 1.8px;
text-transform: uppercase;
cursor: pointer;
color: #FFF;
background: var(--button-gradient);
`
export const ModalButtonClose = styled(ModalButton)`
background: #FCFCFC;
color: var(--text-button);
margin-bottom: 60px;
margin-top: 20px;
`