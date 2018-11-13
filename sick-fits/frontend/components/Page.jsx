import React, { Component } from 'react';
import Header from './Header.jsx';
import Meta from './Meta.jsx';
import styled from 'styled-components';

const StyledPage = styled.div`
  background: white;
  color: black;
`;

const InnerPage = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

class Page extends Component {
  render() {
    return (
      <StyledPage>
        <Meta />
        <Header />

        <InnerPage>
        {this.props.children}
        </InnerPage>
      
      </StyledPage>
    );
  }
}

export default Page;