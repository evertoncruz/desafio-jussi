import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, SearchPage } from '../../pages';
import { 
  WrapHeader, 
  NavBar, 
  WrapLeft, 
  WrapRight, 
  MenuItem,
  RightMenuItem, 
  HeaderImage, 
  Paragraph,
  WrapSearch,
  SearchInput,
  SearchButton 
  } from './styles';
import jussi from '../../assets/logo-jussi.svg'
import cart from '../../assets/shopping-cart.svg'
import search from '../../assets/search.svg'

function Header() {
  const [path, setPath] = useState('');

  const HandlerSearch = ( change ) => setPath(change.target.value);

  return (
    <>
      <WrapHeader>
        <NavBar>
          <WrapLeft>
            <MenuItem to={ { pathname: 'https://jussi.com.br' } } target='_parent'>
              <HeaderImage src={jussi} alt='jussi logo'/>           
            </MenuItem>
            <MenuItem to={ { pathname: 'https://jussi.com.br/services.html' } } target='_parent'>
              <Paragraph>Nossas soluções</Paragraph>
            </MenuItem>
            <MenuItem to={ { pathname: 'https://jussi.com.br/about.html' } } target='_parent'>
              <Paragraph>Conheça a Jüssi</Paragraph>
            </MenuItem>
          </WrapLeft>
          <WrapRight>
            <WrapSearch>
              <SearchInput placeholder='Buscar por ID entre  (1 e 5000)' onChange={ HandlerSearch }/>
              <SearchButton to={`/search/${path}`}>
                <HeaderImage src={search} alt='ícone buscar' />
              </SearchButton>
            </WrapSearch>
            <RightMenuItem to='/'>
              <Paragraph>Login</Paragraph>
            </RightMenuItem>
            <RightMenuItem to={ { pathname: 'https://www.compradiretaempresas.com.br/#hpa-cart' } } target='_blank'>
              <HeaderImage src={cart} alt='ícone carrinho de compras'/>           
            </RightMenuItem>
          </WrapRight>
        </NavBar>
      </WrapHeader>
      <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/search/:search' component={SearchPage}/>
      </Switch>
    </>
  );
}

export default Header;