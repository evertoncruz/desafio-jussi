import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WrapHeader = styled.header`
  height: 80px;
  background-color: #FFF;

`;

export const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
`;

const WrapSide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrapLeft = styled(WrapSide)`
  padding: 15px 0px 15px 24px;
`;

export const WrapRight = styled(WrapSide)`
  justify-content: end;
  padding-right: 24px;
`;

export const MenuItem = styled(Link)`
  padding-right: 35px;
`;

export const RightMenuItem = styled(Link)`
  padding-left: 35px;
`;


export const HeaderImage = styled.img`
  align-items: center;
`;

export const Paragraph = styled.span`
  font-family: Barlow;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

export const WrapSearch = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #F2F2F2;
  box-sizing: border-box;
  border-radius: 24px;
`;

export const SearchInput = styled.input`
  width: 240px;
  height: 40px;
  padding-left: 16px;
  background-color: transparent;
  border: none;
  color: #000;
  ::placeholder {
    margin-left: 10px;
    color: #EE0E7D;
  }
  font-family: Barlow;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

export const SearchButton = styled(Link)`
  align-items: center;
  margin-right: 10px;
  background-color: transparent;
  /* cursor: pointer; */
`;

