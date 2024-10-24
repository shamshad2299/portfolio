import React from 'react'

const Calculator = () => {
  return (
  <>
  <h2 className='todo-header'>Hey ! my name is <strong>Shamshad Ahamad</strong></h2>
<div className="my-calculator">

  <h1 className='calculator'>Lets Understand the Working of my Calculator : </h1>
  <img src="../src/mycalcutor.png" alt="calculator" />
</div>
<div className="information">
  <h1>my Calculator</h1>
  <hr />
  <p>This Calcultor is made from HTML + CSS + JavaScript + React(frameWork of JavaScript).</p>
  <p>As we all know that calculator is used to calculate arithmatic operations such as <strong><u>Addition</u></strong> ,<strong><u>Substraction</u></strong> , <strong><u>Multiplication</u></strong> and <strong><u>Devision.</u></strong></p>
  <h2>Understand the use</h2>
  <hr />
  <p>The above all operation can performed by it by very rapidly , and also an additional feature include it.</p>
  <p>This Calculator can evaluate modulo(reminder) of any number by using modulo operator (%)</p>
  <p style={{color:"black"}}>Example : </p>
  <p>23 % 5  = 3</p>
  <p>(where 3 is reminder after division of 23 by 5)</p>
  <p>This functionality can be use in Discrete Mathematics for calculating modulao operator values</p>
  <p>Link of my Calculator : <a href="#">Calculator</a></p>
  <p>Although all you aware from the use of calculator ,although there are many programble calculators ,</p>
  <p>but my calculator is also working affieciently and you can enjoy yourSelf by using this calculator</p>
</div>
  <p style={{color : "green" , textAlign:"center"}}>Created by <u><strong style={{color :"brown"}}> &copy;Shamshad Ahamad </strong></u></p>
  </>
  )
}

export default Calculator
