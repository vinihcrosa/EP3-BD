import styled from "styled-components";

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`

export const PopupContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 600px;
  border-radius: 20px;
  padding: 30px;
  overflow-y: scroll;

  .botao {
    display: flex;
    width: 100%;
    justify-content: end;
  }
`

export const SideInputsContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`
