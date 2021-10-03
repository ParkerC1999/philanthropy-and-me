import styled from "styled-components";

export const SignupContainer = styled.div`
  width: 100%;
`;
export const Form = styled.form`
  
`;
export const Div = styled.div`
  padding-top: 50px;
padding-left: 500px;
font-family: 'Special Elite', cursive;
font-size: 3rem;
color:var(--fith-color);
`;

export const H2 = styled.h1`
  color: var(--fourth-color);
  font-family:'Special Elite', cursive;
  font-size: 10rem;
  align-items: center;
  text-align:center;
  padding-top:150px;
`;
export const Input = styled.input`
width:20%;
padding:12px 20px;
border-radius: 10px;
border: none;
outline: none;
font-size: 1.5rem;
margin-left:20px;
font-size:'Special Elite', cursive;
align-items: right;
background-color: var(--third-color);
&:hover {
    transition: all 0.4s ease-in-out;
    background: var(--fourth-color);
}
`

export const Button = styled.button`
border-radius: 10px;
background: ${({primary}) => (primary ? 'rgb(83, 152, 204)' : 'rgb(254, 74, 73)')
};
white-space:nonwrap;
padding: ${({big}) => (big ? '14px 78px' : '12px 30px')};
color: ${({dark}) => (dark ? '#010606' : 'rgb(238, 248, 124)')};
font-size: ${({fontBig}) => (fontBig ? '30px' : '26px')};
outline: none;
border: none;
margin-bottom: 150px;
cursor: pointer;
display: flex;
justify-content: center;
letter-spacing: 3px;
align-items: center;
transition: all 0.4s ease-in-out;


&:hover {
    transition: all 0.4s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : 'rgb(26,45,71)')};
}
`