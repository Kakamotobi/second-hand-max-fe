import useOutsideClick from "@hooks/useOutsideClick";
import { zModal } from "@styles/constants/zIndex";
import React from "react";
import ReactDOM from "react-dom";
import { styled } from "styled-components";

type Props = {
  onClose: () => void;
  children: React.ReactNode;
};
export default function Modal({ onClose, children }: Props) {
  const modalRoot = document.getElementById("modal-root");

  const containerRef = useOutsideClick(onClose);

  return ReactDOM.createPortal(
    <StyledModal ref={containerRef}>{children}</StyledModal>,
    modalRoot!
  );
}

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;

  width: 320px;
  height: 700px;
  border-radius: 16px;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme: { color } }) => color.neutral.background};
  overflow: hidden;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${zModal};
`;
