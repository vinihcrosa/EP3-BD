import React, { useState } from 'react';
import Image from 'next/image'

import { SidebarContainer, ItensContainer } from './styles';

import logo from '../../images/logo.svg';
import dash from '../../images/dash.svg';
import gun from '../../images/gun.svg';
import warning from '../../images/warning.svg';
import mala from '../../images/mala.svg';
import group from '../../images/group.svg';
import world from '../../images/world.svg';
import Link from 'next/link';
import Item from './item';

export default function Sidebar(props: any) {
  return (
    <SidebarContainer>
      <Image src={logo} alt="logo"/>
      <ItensContainer>
        <Item title='Graficos' icon={dash} url='/graficos'/>
        <Item title='Tabelas' icon={gun} url='/tabelas'/>
        <Item title='' icon={gun} url='/tabelas'/>
      </ItensContainer>
    </SidebarContainer>
  )
}
