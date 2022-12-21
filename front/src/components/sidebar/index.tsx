import React, { useState } from 'react';
import { SidebarContainer, Image, ItensContainer } from './styles';
import Botao from '../botao';
import Item from './item';
import Popup from '../../components/popup';

import logo from '../../images/logo.svg';
import dash from '../../images/dash.svg';
import gun from '../../images/gun.svg';
import warning from '../../images/warning.svg';
import mala from '../../images/mala.svg';
import group from '../../images/group.svg';
import world from '../../images/world.svg';

export default function Sidebar(props: any) {
  const [open, setOpen] = useState(false);
  let { onClick } = props;
  let teste = '';

  function brigaDeGalo(event: any) {
    teste = event;
  }

  function handleOpenPopup() {
    setOpen(true);
  }

  function handleClosePopup() {
    setOpen(false);
  }

  return (
    <SidebarContainer>
      <Image src={logo} alt="logo"/>
      <ItensContainer onClick={() => onClick(teste)}>
        <Item onClick={brigaDeGalo} label="Visão Geral" image={dash}></Item>
        <Item onClick={brigaDeGalo} label="Tabelas" image={gun}></Item>
        <Item onClick={brigaDeGalo} label="Países" image={world}></Item>
      </ItensContainer>
      <Botao variant="contained" label="Adicionar" onPress={handleOpenPopup}>Botao</Botao>

      {open === true && <Popup onPress={handleClosePopup}/>}
      
    </SidebarContainer>
  )
}
