import styled from "styled-components";

export const StyledHeader = styled.div`
background: linear-gradient(270deg, #2E1746 3.2%, #2E225F 99.98%);
padding: 28px 0;
`
export const StyledInnerHeader = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
    span{
color: var(--text-forms);
text-align: right;
font-family:"Poppins Regular";
font-size: 16px;
line-height: normal;
    }
    button{      
 color: var(--text-forms);
 font-family:"Poppins Regular";
font-size: 16px;
		transition: all 0.2s ease-in-out;
    background: transparent;
    border:none;
	&:hover {
				color: white;
	}
    }
`