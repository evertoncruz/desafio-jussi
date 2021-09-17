import React from 'react';
import { WrapContactInfo, WrapTitle, Large, Paragraph, Text } from './styles';

function ContactInfo() {
  return (
    <WrapContactInfo>
      <WrapTitle>
        <Large>Essa loja foi construída usando uma das nossas soluções da plataforma VTEX. tenha a sua.</Large>
      </WrapTitle>
      <Paragraph>Entre em contato</Paragraph>
      <Text>comercial@jussi.com.br</Text>
    </WrapContactInfo>
  );
}
export default ContactInfo;