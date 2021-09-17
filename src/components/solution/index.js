import React from 'react';
import { 
    WrapSolution, 
    WrapContent, 
    WrapLarge, 
    GreenLarge, 
    Large, 
    WrapListSolution, 
    SolutionCard,
    Elipse, 
    CardDetails, 
    Paragraph,
    SmallText,
    List,
    ItemList,
    PrimaryButton
  } from './styles';


function Solution() {
  return (
    <WrapSolution>
      <WrapContent>
        <WrapLarge>
          <GreenLarge>// </GreenLarge>
          <Large>Nossas soluções</Large>
        </WrapLarge>
        <WrapListSolution>
          <SolutionCard>
            <Elipse>p1</Elipse>
            <CardDetails>
              <Paragraph>Nome do Produto #1</Paragraph>
              <SmallText>Descrição do produto #1</SmallText>
              <List>
                <ItemList>Feature 1</ItemList>
                <ItemList>Feature 2</ItemList>
                <ItemList>Feature 3</ItemList>
              </List>
              <PrimaryButton>Ver solução</PrimaryButton>
            </CardDetails>
          </SolutionCard>
          <SolutionCard>
            <Elipse>p2</Elipse>
            <CardDetails>
              <Paragraph>Nome do Produto #2</Paragraph>
              <SmallText>Descrição do produto #1</SmallText>
              <List>
                <ItemList>Feature 1</ItemList>
                <ItemList>Feature 2</ItemList>
                <ItemList>Feature 3</ItemList>
              </List>
              <PrimaryButton>Ver solução</PrimaryButton>
            </CardDetails>
          </SolutionCard>
          <SolutionCard>
            <Elipse>p3</Elipse>
            <CardDetails>
              <Paragraph>Nome do Produto #3</Paragraph>
              <SmallText>Descrição do produto #1</SmallText>
              <List>
                <ItemList>Feature 1</ItemList>
                <ItemList>Feature 2</ItemList>
                <ItemList>Feature 3</ItemList>
              </List>
              <PrimaryButton>Ver solução</PrimaryButton>
            </CardDetails>
          </SolutionCard>
          <SolutionCard>
            <Elipse>p4</Elipse>
            <CardDetails>
              <Paragraph>Nome do Produto #4</Paragraph>
              <SmallText>Descrição do produto #1</SmallText>
              <List>
                <ItemList>Feature 1</ItemList>
                <ItemList>Feature 2</ItemList>
                <ItemList>Feature 3</ItemList>
              </List>
              <PrimaryButton>Ver solução</PrimaryButton>
            </CardDetails>
          </SolutionCard>
        </WrapListSolution>
      </WrapContent>
    </WrapSolution>
  );
}

export default Solution;