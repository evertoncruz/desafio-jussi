import React from 'react';
import { WrapNewsletter, WrapTitle, Title, WrapSubmit, Input, Button } from './styles';

function Newsletter() {
  return (
    <WrapNewsletter>
      <WrapTitle>
        <Title>receba novidades da nossa área de produtos digitais.</Title>
      </WrapTitle>
      <WrapSubmit>
        <Input placeholder='Digite seu email' />
        <Button>cadastrar</Button>
      </WrapSubmit>
    </WrapNewsletter>
  );
}
export default Newsletter;