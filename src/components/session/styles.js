import styled from 'styled-components';

export const WrapSession = styled.section`
  display: flex;
  justify-content: space-between;
  height: 648px;
  background-color: #FFF;

`;

const WrapSide = styled.div`
  display: flex;
  width: 50%;
  padding-top: 64px; 
`;

export const WrapLeft = styled(WrapSide)`
  display: flex;
  flex-direction: column;
  width: 38.611111111%;
  padding-left: 208px;
`;

export const WrapRight = styled(WrapSide)`
  width: 61.388888889%;
  padding-right: 208px;
  background-color: #FFF;
`;

export const GraySquare = styled.div`
  width: 720px;
  height: 648px;
  background-color: red;
  /* background-color: #F2F2F2; */
  z-index: 9999;
`;

export const Large = styled.h3`
  font-family: Barlow;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
`;

export const WrapParagraph = styled.div`
  width: 241px;
  margin-bottom: 24px;
`;

export const PrimaryButton = styled.button`
  padding: 12px 24px;
  width: 162px;
  height: 48px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 6px;
  font-family: Barlow;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  cursor: pointer;
`;

export const Paragraph = styled.p`
  font-family: Barlow;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 24px;
`;

export const Image = styled.img`
  height: 520px;
`;