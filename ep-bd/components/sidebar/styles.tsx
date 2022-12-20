import React from 'react';
import styled from "styled-components";
import Item from './item';

export const SidebarContainer = styled.div`
  margin: 0;
  background-color: white;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 400px;
  align-items: center;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
`

export const Image = styled.img`
  padding: 50px;
  margin-top: 100px;
  margin-bottom: 70px;
  width: 170px;
`

export const ItensContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
`