import styled from "styled-components";
import { Alert } from "../Alert";
import Button from "../Button";

type Props = {
  title: string;
  confirmButtonText: string;
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};

export default function DangerAlert({
  title,
  confirmButtonText,
  isOpen,
  onCancel,
  onConfirm,
}: Props) {
  if (!isOpen) return null;

  return (
    <Alert>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <ButtonsContainer>
        <Button
          variant="plain"
          style={{ textAlign: "center", padding: 0 }}
          onClick={(e) => {
            e.stopPropagation();
            onCancel();
          }}>
          취소
        </Button>
        <Button
          variant="plain"
          style={{ padding: 0 }}
          onClick={(e) => {
            e.stopPropagation();
            onConfirm();
          }}>
          <ConfirmText>{confirmButtonText}</ConfirmText>
        </Button>
      </ButtonsContainer>
    </Alert>
  );
}

const TitleContainer = styled.div`
  width: 100%;
  padding: 24px 32px;
  display: flex;
  box-sizing: border-box;
`;

const Title = styled.p`
  color: ${({ theme: { color } }) => color.neutral.textStrong};
  font: ${({ theme: { font } }) => font.displayStrong16};
  height: 24px;
`;

const ButtonsContainer = styled.div`
  width: 100%;
  height: 24px;
  padding: 24px 32px;
  display: flex;
  justify-content: flex-end;
  gap: 32px;
  box-sizing: border-box;

  > button {
    font: ${({ theme: { font } }) => font.displayDefault16};
  }
`;

const ConfirmText = styled.span`
  font: ${({ theme: { font } }) => font.displayStrong16};
  color: ${({ theme: { color } }) => color.system.warning};
`;
