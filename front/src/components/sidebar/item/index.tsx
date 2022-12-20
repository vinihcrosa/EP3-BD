import React, {} from 'react';
import {  } from './styles';
import Button from '@mui/material/Button';
import dash from '../../../images/dash.svg';
import { styled } from '@mui/material/styles';

const ItemButton = styled(Button)({
  marginRight: '16px',
  justifyContent: 'left',
  width: 220,
  height: 60,
  borderRadius: '16px',
  fontSize: 14,
  color: '#222222',
  paddingLeft: '24px',

  '&:hover': {
    backgroundColor: '#F2FFF2',
  },
})

export default function Item(props: any) {
  const { onClick } = props;

  return (
    <ItemButton onClick={() => onClick(props.label)} variant={props.variant} startIcon={<img src={props.image} alt="" style={{
      width: '24px',
      marginRight: '16px',
      justifyContent: 'left',
      padding: 0
    }} />}>
      
      {props.label}
    </ItemButton>
  )
}
