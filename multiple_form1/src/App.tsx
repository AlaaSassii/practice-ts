import { useStates } from './assets/useStates'  ; 
import { FormEvent, useState } from 'react';
import FormName from './form/FormName';
import FormAdress from './form/FormAdress';
import FormAuth from './form/FormAuth';
function App() {
  const {forms ,next  , last , chooseForm ,isFirstIndex , isLastIndex , currentForm , index} = useStates([<FormName/>,<FormAdress/> ,<FormAuth/> ])  ; 
  console.log(index) ; 

  const onSubmit = (e:FormEvent) => {
    e.preventDefault() ; 
    if(!isLastIndex)  next() ; 
    else{
      alert("done!!!")
    }
  }
  return (
    <form >
       <h1 className="text-3xl bg-cyan-500 font-bold underline">
      {currentForm}
     { isFirstIndex || <button onClick={last}>last</button>}
      <button onClick={()=>chooseForm(1)}>1</button>
     { <button type='submit' onClick={e => onSubmit(e)}>{isLastIndex ?"finish" : "next"}</button>}
    </h1>
    </form>
  )
}

export default App
