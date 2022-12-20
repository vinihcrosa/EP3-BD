import React, {} from 'react';
import {  } from './styles';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';


const NormalButton = styled(Button)({
  backgroundColor: '#3AB137',
  width: 200,
  height: 60,
  borderRadius: '16px',

  '&:hover': {
    backgroundColor: '#58C655',
  },
})

export default function Botao(props: any) {
  return (
    <NormalButton variant={props.variant} onClick={props.onPress}>{props.label}</NormalButton>
  )
}
