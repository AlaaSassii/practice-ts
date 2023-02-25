import { useState } from 'react'
import Select from './components/Select'
const options = [
  {label:"First" , value:1} ,
  {label:"Second" , value:2},
  {label:"third" , value:3},
  {label:"Forth" , value:4},
  {label:"fifth" , value:5},
]
type SelectOption = {
  label: string  
  value : number 
}

function App() {
  const [value , setValue] = useState<typeof options[0] | undefined>(options[0]) ; 

  return (
    <>
      <Select options={options} value={value} onChange={(value:SelectOption | undefined) =>{setValue(value)}}  />
    </>
  )
}

export default App
