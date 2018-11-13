import styled from 'styled-components';

const Button = styled.button`
  background: red;
  font-size: ${props => (props.huge ? '100px' : '50px')};
`;

export default Button;