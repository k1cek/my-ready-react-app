import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.notes};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  /* box-shadow: 0 10px 40px -6px rgb(77, 77, 77); */
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  :active {
    box-shadow: 0 10px 40px -6px rgb(77, 97, 277);
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: hsl(0, 0%, 90%);
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;

// 1 sposob na przekazanie propsów: background-color: ${(props) => (props.secondary ? '#E6E6E6' : '#ffd82b')};
// 2 sposób na propsy: tworzymy ponizej co ma byc zmienione, ladniej wyglada ;)
// background-color: ${({color}) => color || '#ffd82b'}; jesli kolor istnieje to daj kolor, jak nie daj domyslny
