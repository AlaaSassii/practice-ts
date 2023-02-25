import React from 'react'
import Format from './Format'

const FormAuth = () => {
  return (
    <Format title='FomrmEmail and password      '>
    <label htmlFor="">
            email
            <input type="text" name="" id="" required />
    </label>
    <label htmlFor="">
            password
            <input type="password" name="" id="" required />
    </label>
    </Format>
  )
}

export default FormAuth