import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WrapFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  height: 80px;
  background-color: #000;

`;

const WrapSide = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

export const WrapLeft = styled(WrapSide)`
  justify-content: start;
  padding-left: 208px;
`;

export const WrapRight = styled(WrapSide)`
  justify-content: end;
  padding-right: 208px;
`;

export const WrapIcons = styled.div``;

export const LinkImage = styled(Link)``; 

export const FooterIcons = styled.img``;