import React from 'react';
import { 
  WrapHeroBanner, 
  WrapLeft, 
  WrapRight, 
  ExtraLarge, 
  WrapParagraph, 
  Paragraph, 
  PrimaryButton, 
  WrapCard, 
  CardOne,
  CardTwo,
  CardThree, 
  CardImage,
  WrapImage,
  CardPrimaryButton 
  } from './styles';

  import geladeira from '../../assets/geladeira.svg'
  import batedeira from '../../assets/batedeira.svg'
  import wiskey from '../../assets/wiskey.svg'

function HeroBanner() {
  return (
    <WrapHeroBanner>
      <WrapLeft>
          <ExtraLarge>Criamos <br/>lojas que <br/>vendem mais.</ExtraLarge>
          <WrapParagraph>
            <Paragraph>
              A Jüssi é especialista na criação de lojas usando a plataforma 
              VTEX. Precisa criar sua loja ou migrar de plataforma?
            </Paragraph>
          </WrapParagraph>
          <PrimaryButton>Veja nossas soluções</PrimaryButton>
      </WrapLeft>
      <WrapRight>
        <WrapCard>
          {/* <CardOne>
            <WrapImage>
              <CardImage src={geladeira} alt='foto de geladeira' />
              <CardPrimaryButton>Mais Detalhes</CardPrimaryButton>
            </WrapImage>
          </CardOne>
          <CardTwo>
            <WrapImage>
              <CardImage src={batedeira} alt='foto de batedeira' />
              <CardPrimaryButton>Comprar em 12x</CardPrimaryButton>
            </WrapImage>
          </CardTwo>
          <CardThree>
            <WrapImage>
              <CardImage src={wiskey} alt='foto de wiskey' />
              <CardPrimaryButton>Adicionar à sacola</CardPrimaryButton>
            </WrapImage>
          </CardThree> */}
        </WrapCard>
      </WrapRight>
    </WrapHeroBanner>
  );
}

export default HeroBanner;