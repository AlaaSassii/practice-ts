import {ReactNode} from 'react'

type FormType = {
            title : string  ,
            children : ReactNode 
}
const Format = ({title , children }:FormType) => {
  return (
    <>
            <h2>{title}</h2>
            <div>
            {children}
            </div>
    </>
  )
}

export default Format