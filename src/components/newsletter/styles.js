import styled from "styled-components";

export const WrapNewsletter  = styled.section`
  display: flex; 
  flex-direction: column;
  align-items: center;
  padding-top: 136px; 
  height: 436px;
  background-color: #000;
`;

export const WrapTitle  = styled.div`
  max-width: 676px;
  height: 80px;
`;

export const Title = styled.h3`
  //styleName: large;
  font-family: Barlow;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: center;
  text-transform: uppercase;
  color: #FFF;
`;

export const WrapSubmit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  width: 502px;
  border-bottom: 1px solid #03FFA5;
`;

export const Input = styled.input`
  width: 320px;
  height: 60px;
  background-color: transparent;
  border: none;
  color: #FFF;
  ::placeholder {
    color: #FFF;
  }
`;

export const Button = styled.button`
  height: 40px;
  border: none;
  background-color: transparent;
  text-transform: uppercase;
  cursor: pointer;
  color: #03FFA5;
`;