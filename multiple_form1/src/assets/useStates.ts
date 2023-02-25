import {ReactElement, useState  } from 'react'

export const useStates = (forms:ReactElement[]) => {
            const [index ,setIndex] = useState<number>(0) ; 

            const next = () => {
                        setIndex(prevIndex =>{
                                    if(index >= forms.length) return prevIndex 
                                    return prevIndex + 1 
                        })
            }; 
            const last = ():void => {
                        setIndex(prevIndex =>{
                                    if(index <= 0) return prevIndex 
                                    return prevIndex - 1 
                        })
            }; 
            const chooseForm = (number:number):void =>{
                        setIndex(number)
            }; 
            const isFirstIndex:boolean = index === 0 ; 
            const isLastIndex:boolean = index === forms.length - 1 ; 
            const currentForm :ReactElement = forms[index] ; 
            return {
                        forms ,
                        next  , 
                        last , 
                        chooseForm , 
                        isFirstIndex , 
                        isLastIndex , 
                        currentForm , 
                        index
            }
}