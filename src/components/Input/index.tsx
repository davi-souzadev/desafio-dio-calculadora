import { InputContainer } from "./styles"
import { IValue } from "./types"

export function Input({ value }: IValue) {
  return (
    <InputContainer>
      <input type="text" disabled value={value}/>
    </InputContainer>
  )
}
