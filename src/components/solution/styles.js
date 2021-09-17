import styled from 'styled-components';

export const WrapSolution = styled.section`
  display: flex;
  justify-content: center;
  height: 557px;
  background-color: #FFF;

`;

export const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1024px;
  height: 500px;
`;

export const WrapLarge = styled.h3`
  margin-top: 56px;
`;

export const Large = styled.span`
  font-family: Barlow;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
  color: #000;
  text-transform: uppercase;
`;

export const GreenLarge = styled(Large)`
  font-weight: bold;
  color: #03FFA5;
`;

export const WrapListSolution = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1024px;
  height: 381px;
  margin-top: 24px;
`;

export const SolutionCard = styled.article`
  width: 241px;
  height: 381px;
  padding-top: 47px;
  border: 1px solid #F2F2F2;
  box-sizing: border-box;
  border-radius: 4px;
`;

export const Elipse = styled.span`
  width: 100px;
  height: 100px;
  margin-top: 16px;
  padding: 32px 33px;
  border-radius: 50%;
  font-family: Barlow;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
  text-transform: uppercase;
  background-color: #F2F2F2;
`;

export const CardDetails = styled.div`
  width: 100%;
  max-width: 209px;
  height: 196px;
  margin-top: 53px;
`;

export const WrapParagraph = styled.polygon`
font-family: Barlow;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
text-align: left;

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

export const SmallText = styled.small`
  font-family: Barlow;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 16px;
  color: #EE0E7D;
`;

export const List = styled.ul``;

export const ItemList = styled.li`
  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #5B5B5B;
  ::before {content: "• "; color: #5B5B5B}

`;

export const PrimaryButton = styled.button`
  width: 209px;
  height: 48px;
  background: #03FFA5;
  border: none;
  border-radius: 6px;
  margin: 16px 0px;
  cursor: pointer;
`;