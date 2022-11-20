import { Container, Content, Column, Row } from './styles'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { useState } from 'react'

function App() {
  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')

  function handleClear() {
    setCurrentNumber('0')
    setOperation('')
  }

  function handleAddNumber(number: string) {
    setCurrentNumber((prev) => `${prev === '0' ? '' : prev}${number}`)
  }

  function handleSumNumbers() {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('+')
    } else {
      console.log(Number(firstNumber), Number(currentNumber))
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setFirstNumber('0')
    }
  }

  function handleSubtractNumbers() {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('-')
    } else {
      console.log(Number(firstNumber), Number(currentNumber))
      const sum = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sum))
      setFirstNumber('0')
    }
  }

  function handleMultiplyNumbers() {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('x')
    } else {
      console.log(Number(firstNumber), Number(currentNumber))
      const sum = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(sum))
      setFirstNumber('0')
    }
  }

  function handleDivideNumbers() {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('÷')
    } else {
      console.log(Number(firstNumber), Number(currentNumber))
      const sum = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(sum))
      setFirstNumber('0')
    }
  }

  function handleResult() {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch(operation) {
        case '+':
          handleSumNumbers()
          break
        case '-':
          handleSubtractNumbers()
          break
        case 'x':
          handleMultiplyNumbers()
          break
        case '÷':
          handleDivideNumbers()
          break
        default:
          break
      }
    } 
  }

  return (
    <div className="App">
      <Container>
        <Content>
          <Input value={currentNumber}/>
          <Row>
            <Button label="÷" onClick={handleDivideNumbers}/>
            <Button label="C" onClick={handleClear}/>
            <Button label="<x" onClick={() => handleAddNumber('')}/>
          </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber('7')}/>
            <Button label="8" onClick={() => handleAddNumber('8')}/>
            <Button label="9" onClick={() => handleAddNumber('9')}/>
            <Button label="x" onClick={handleMultiplyNumbers}/>
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber('4')}/>
            <Button label="5" onClick={() => handleAddNumber('5')}/>
            <Button label="6" onClick={() => handleAddNumber('6')}/>
            <Button label="-" onClick={handleSubtractNumbers}/>
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber('1')}/>
            <Button label="2" onClick={() => handleAddNumber('2')}/>
            <Button label="3" onClick={() => handleAddNumber('3')}/>
            <Button label="+" onClick={handleSumNumbers}/>
          </Row>
          <Row>
            <Button label="0" onClick={() => handleAddNumber('0')}/>
            <Button label="." onClick={() => handleAddNumber('.')}/>
            <Button label="=" onClick={handleResult}/>
          </Row>
        </Content>
      </Container>
    </div>
  )
}

export default App
