import React, { useEffect, useState } from 'react' ; 
import  styles from '../styles.module.css' ; 
type SelectOption = {
            label: string  
            value : number 
}
type selectProps = {
            value ?: SelectOption | undefined
            options : SelectOption[]
            onChange : (value: SelectOption | undefined) => void 
}

export default function Select({value , onChange , options}:selectProps) {
            const [isOpen , setIsOpen] = useState(false) ;  
            const [highlightedIndex , setHighlightedIndex] = useState(0) ; 
            const clearValue = (e: React.MouseEvent<HTMLButtonElement>) => {
                        e.stopPropagation()  ; 
                        onChange(undefined)
            }
            const chooseValue = (e:React.MouseEvent<HTMLElement> , option:SelectOption | undefined) => {
                        e.stopPropagation()  ; 
                        onChange(option)  ; 
                        setIsOpen(false)
            }
            const isOptionSelected = (option:SelectOption) => {
                       return option === value
            }
            useEffect(()=>{
                        if(isOpen) setHighlightedIndex(0) ;
            },[isOpen])
            return (<div
            onBlur={()=>setIsOpen(false)}
            onClick={()=>{setIsOpen(prevValue => !prevValue)}} tabIndex={0} 
            className={styles.container}>
                        <span className={styles.value}>{value?.label}</span>
                        <button onClick={clearValue} className={styles["clear-btn"]}>&times;</button>
                        <div className={styles.devider} ></div>
                        <div className={styles.caret}></div>
                        <ul className={`${styles.options} ${isOpen ? styles.show : ''}`}>
                        {options.map((option , index) => (
                                    <li
                                    onMouseEnter={() => setHighlightedIndex(index)}   
                                    onClick={e =>chooseValue(e , option)} key={option.value} className={`${styles.option} ${
                                                isOptionSelected(option) ? styles.selected : "" 
                                    } 
                                    ${highlightedIndex === index ?  styles.highlighted : "" }`}>{option.label}</li>
                        ))}
                        </ul>
            </div>)
}