import styled from "styled-components";
import { Link } from 'react-router-dom';

export const WrapHeroBanner = styled.section`
  display: flex;
  justify-content: space-between;
  height: 560px;
  background-color: #03FFA5;
`;

const WrapSide = styled.div`
  width: 50%;
  height: 560px;
`;

export const WrapLeft = styled(WrapSide)``;


export const WrapRight = styled(WrapSide)`
  /* padding-left: 10px; */
`;

export const ExtraLarge = styled.h2`
  margin-top: 80px;
  margin-left: 166px;
  font-family: Barlow;
  font-size: 64px;
  font-style: normal;
  font-weight: 500;
  line-height: 77px;
  letter-spacing: 0em;
  text-align: left;
  text-transform: uppercase;
  color: #000;
`;

export const WrapParagraph = styled.div`
    margin-top: 16px;
    margin-left: 166px;
    width: 329px;
`;

export const Paragraph = styled.p`

  font-family: Barlow;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #000;
`;

export const PrimaryButton = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 24px;
  margin-left: 166px;
  padding: 12px 24px;
  width: 196px;
  height: 48px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 6px;
  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  background-color: transparent;
`;

export const WrapCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 460px;
  height: 480px;
  margin-top: 40px;
`;

export const Card = styled.div`
  width: 209px;
  height: 230px;
  border: 1px solid #F2F2F2;
  box-sizing: border-box;
  box-shadow: 0px 32px 32px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  background-color: #FFF;
`;

export const CardOne = styled(Card)`
  
`;

export const CardTwo = styled(Card)`
  margin-top: 156px;
`;

export const CardThree = styled(Card)``;

export const WrapImage = styled.div``;

export const CardImage = styled.img`
  margin-left: 20px;
`;

export const CardPrimaryButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 24px;
  width: 160px;
  height: 48px;
  /* margin-left: 24px; */
  border: 1px solid #EE0E7D;
  box-sizing: border-box;
  border-radius: 24px;
  background-color: #FFF;
  cursor: pointer;
`;
