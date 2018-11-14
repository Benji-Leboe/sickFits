import React, { Component } from 'react';
import Header from './Header.jsx';
import Meta from './Meta.jsx';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
}
theme.lightGrey = theme.lightgrey;

injectGlobal`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') 
      format('woff2');
    font-style: normal;
    font-weight: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

const StyledPage = styled.div`
  background: white;
  color: ${ props => props.theme.black };
`;

const InnerPage = styled.div`
  max-width: ${ props => props.theme.maxWidth };
  margin: 0 auto;
  padding: 2rem;
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={ theme }>
        <StyledPage>
          <Meta />
          <Header />

          <InnerPage>
          {this.props.children}
          </InnerPage>
        
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;