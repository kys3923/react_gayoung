import { useState } from 'react'

const Calculator = (props) => {

  const [display, setDisplay] = useState('Please enter value')
  const [ firstValue, setFirstValue ] = useState()
  const [ secondValue, setSecondValue] = useState()
  const [ operator, setOperator ] = useState()

  const rowStyle = 'grid grid-cols-4 text-center gap-2'
  const cellStyle = 'bg-gray-300 py-2 text-white hover:bg-gray-900 aspect-square flex items-center justify-center text-lg font-bold'

  const buttonClicker = (e, value) => {
    if(!operator) {
      if(!firstValue) {
        setFirstValue(value)
        setDisplay(value)
      }
      if(firstValue) {
        let previousValue = firstValue
        let newValue = previousValue + value
        setFirstValue(newValue)
        setDisplay(newValue)
      }

    }
    if(operator) {
      if(!secondValue) {
        setSecondValue(value)
        setDisplay(value)
      }
      if(secondValue) {
        let previousValue = secondValue
        let newValue = previousValue + value
        setSecondValue(newValue)
        setDisplay(newValue)
      }
    }
  }

  const calculateNumbers = () => {
    let firstNumber = Number(firstValue)
    let secondNumber = Number(secondValue)
    if(operator === '+') {
      let calculatedNumber = firstNumber + secondNumber
      return calculatedNumber.toFixed(2)
    }
    if(operator === '-') {
      let calculatedNumber = firstNumber - secondNumber
      return calculatedNumber.toFixed(2)
    }
    if(operator === '*') {
      let calculatedNumber = firstNumber * secondNumber
      return calculatedNumber.toFixed(2)
    }
    if(operator === '/') {
      let calculatedNumber = firstNumber / secondNumber
      return calculatedNumber.toFixed(2)
    }
  }

  const operatorClicker = (e, value) => {
    if(value !== '=') {
      setOperator(value)
    }
    if(value === '=') {
      setDisplay(calculateNumbers())
    }
  }

  const clearHandler = (e) => {
    setDisplay('Please enter value')
    setFirstValue()
    setSecondValue()
    setOperator()
  }


  return (
    <section className="flex flex-col items-center">
      <p>React Calculator</p>
      <div className="w-full flex flex-col gap-2 max-w-sm p-4">
          {/* Display */}
          <div className="text-center text-2xl mb-4 font-bold">
            <p>{display}</p>
          </div>
          {/* 1st row */}
        <div className={rowStyle}>
          <div className={cellStyle} onClick={(e) => buttonClicker(e, '1')}>
            <p>1</p>
          </div>
          <div className={cellStyle} onClick={(e) => buttonClicker(e, '2')}>
            <p>2</p>
          </div>
          <div className={cellStyle} onClick={(e) => buttonClicker(e, '3')}>
            <p>3</p>
          </div>
          <div className={cellStyle} onClick={(e) => operatorClicker(e, '+')}>
            <p>+</p>
          </div>
        </div>

        <div className={rowStyle}>
          <div className={cellStyle} onClick={(e) => buttonClicker(e, '4')}>
            <p>4</p>
          </div>
          <div className={cellStyle} onClick={(e) => buttonClicker(e, '5')}>
            <p>5</p>
          </div>
          <div className={cellStyle} onClick={(e) => buttonClicker(e, '6')}>
            <p>6</p>
          </div>
          <div className={cellStyle} onClick={(e) => operatorClicker(e, '-')}>
            <p>-</p>
          </div>
        </div>

        <div className={rowStyle}>
          <div className={cellStyle} onClick={(e) => buttonClicker(e, '7')}>
            <p>7</p>
          </div>
          <div className={cellStyle} onClick={(e) => buttonClicker(e, '8')}>
            <p>8</p>
          </div>
          <div className={cellStyle} onClick={(e) => buttonClicker(e, '9')}>
            <p>9</p>
          </div>
          <div className={cellStyle} onClick={(e) => operatorClicker(e, '*')}>
            <p>*</p>
          </div>
        </div>

        <div className={rowStyle}>
          <div className={cellStyle} onClick={(e) => buttonClicker(e, '.')}>
            <p>.</p>
          </div>
          <div className={cellStyle} onClick={(e) => buttonClicker(e, '0')}>
            <p>0</p>
          </div>
          <div className={cellStyle} onClick={(e) => operatorClicker(e, '=')}>
            <p>=</p>
          </div>
          <div className={cellStyle} onClick={(e) => operatorClicker(e, '/')}>
            <p>/</p>
          </div>
        </div>

        <div className='w-full flex justify-center' onClick={clearHandler}>
          <p>clear all</p>
        </div>
      </div>
    </section>
  );
}
export default Calculator;