import React from 'react';
import GlobalStyles from './global'
import { MainContainer, PageContainer } from './components/container/style';
import { HeroBanner, LogoBar, Solution, Session, ContactInfo, Newsletter, Footer } from './components'

function App() {
  return (
    <MainContainer>
      <GlobalStyles />
      <PageContainer>
        <HeroBanner />
        <LogoBar />
        <Solution />
        <Session />
        <ContactInfo />
        <Newsletter />
        <Footer />
      </PageContainer>
    </MainContainer>
  );
}

export default App;
