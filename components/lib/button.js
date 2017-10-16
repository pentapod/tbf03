import React from 'react';
import styled, { css } from 'styled-components';


// function button(color) {
//   return {
//     display: 'inline-block',
//     textAlign: 'center',
//     verticalAlign: 'top',
//     position: 'relative',
//     padding: '.6em 1.2em',
//     cursor: 'pointer',
//     lineHeight: 1.5,
//     fontSize: '90%',
//     borderRadius: '.25em',
//     overflow: 'hidden',
//     color: color,
//     backgroundColor: 'transparent',
//     textDecoration: 'none',
//     border: `1px solid ${color}`,
//     transitionProperty: 'background-color, color',
//     transitionDuration: '.2s',
//     ':hover': {
//       backgroundColor: color,
//       color: '#fff',
//       textDecoration: 'none',
//       borderColor: color,
//     },
//   };
// }

// function buttonInverse(color, hoverColor) {
//   return Object.assign({}, button(color), {
//     color: '#fff',
//     backgroundColor: color,
//     ':hover': {
//       backgroundColor: hoverColor,
//       color: '#fff',
//       textDecoration: 'none',
//       borderColor: hoverColor,
//     },
//   });
// }

const Button = styled.button`
  display: inline-block;
  text-align: center;
  vertical-align: top;
  position: relative;
  padding: .6em 1.2em;
  cursor: pointer;
  line-height: 1.5;
  font-size: 90%;
  border-radius: .25em;
  overflow: hidden;
  color: ${props => props.theme.color};
  background-color: transparent;
  text-decoration: none;
  border: 1px solid ${props => props.theme.color};
  transition-property: background-color, color;
  transition-duration: .2s;

  ${props => props.small && `
    padding: .3em .8em;
  `}

  ${props => props.large && `
    padding: .7em 2em;
    font-size: 120%;
    box-sizing: border-box;
    border-width: 2px;
  `}

  &:focus {
    outline: 0;
  }

  &:hover {
    background-color: ${props => props.theme.color};
    color: #fff;
    text-decoration: none;
    border-color: ${props => props.theme.color};
  }
`;

const ButtonInverse = Button.extend`
  color: #fff;
  background-color: ${props => props.theme.color};

  &:hover {
    background-color: ${props => props.theme.hoverColor};
    color: #fff;
    text-decoration: none;
    border-color: ${props => props.theme.hoverColor};
  }
`;

export {
  Button,
  ButtonInverse,
};
