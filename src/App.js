import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './global'
import { MainContainer, PageContainer } from './components/container/style';
import { HomePage } from './pages';
import { 
  Header,
  Footer 
  } from './components'

function App() {
  return (
    <Router>
      <MainContainer>
        <GlobalStyles />
        <PageContainer>
          <Header />
          <Footer />
        </PageContainer>
      </MainContainer>
    </Router>
  );
}

export default App;
