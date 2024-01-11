import styled from "styled-components";

export const StyledHeader = styled.div`
background: linear-gradient(270deg, #2E1746 3.2%, #2E225F 99.98%);;
display:flex;
padding: 28px 16px;
flex-direction: row;
justify-content: space-between;
align-items: center;
    span{
color: rgba(255, 255, 255, 0.60);
text-align: right;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
    }
    button{      
 color: rgba(255, 255, 255, 0.60);
		transition: all 0.2s ease-in-out;
    background: transparent;
    border:none;
	&:hover {
				color: white;
	}
    }
    

`