import React from 'react';
import { WrapSession, WrapLeft, WrapRight, Large, WrapParagraph, Paragraph, PrimaryButton, Image } from './styles';
import jussi from '../../assets/jussi.png'


function Session() {
  return (
    <WrapSession>
      <WrapLeft>
        <Large>Olá, somos <br/> a Jüssi</Large>
        <WrapParagraph>
          <Paragraph>
            A Jüssi é uma agência integrante do grupo global WPP que vem há 10 
            anos consolidando o pensamento voltado para produtos e resolução de problemas. 
            Nosso área dedicada exclusivamente para Produtos Digitais é organizada
            em 6 especialidades: Product Managamenet, User Experience Design, SEO
            , Tecnologia, Agile e User Behavior Analytics.
          </Paragraph>
        </WrapParagraph>
        <PrimaryButton>Conheça a Jüssi</PrimaryButton>
      </WrapLeft>
      <WrapRight>
        {/* <GraySquare /> */}
        <Image src={jussi} alt='Jussi' />
      </WrapRight>
    </WrapSession>
  );
}

export default Session;