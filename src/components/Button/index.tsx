import { ButtonContainer } from "./styles"
import { IButton } from "./types"

export function Button({ label, onClick }: IButton) {
  return (
    <ButtonContainer onClick={onClick}>
      {label}
    </ButtonContainer>
  )
}
