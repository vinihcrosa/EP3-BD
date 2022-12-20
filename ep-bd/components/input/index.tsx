import React, {} from 'react';
import {  } from './styles';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const TextInput = styled(TextField)({
  '.Mui-focused': {
  },
})

export default function Input(props: any) {
  return (
    <TextInput id="outlined-basic" label={props.label} variant="outlined" onChange={() => console.log('oi')} />
  )
}
