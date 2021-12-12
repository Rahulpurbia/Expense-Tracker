import React,{useState,useContext,useRef,useEffect} from 'react'
import { Inputcontext } from './context'



const Balance_display = () => {

    
    const [[Transaction,setTransaction],[Income,setIncome],[Expense,setExpense]]=useContext(Inputcontext);
     

    
    return (
      

        <>
           <div className='finalbalance' >Balance: <span>{Income+Expense}</span></div> 
        <div className='income-expense'><span>Income:<span style={{color:'#48cb48'}}>{Income}</span></span> <span>Expense:<span style={{color:'red'}}>{Math.abs(Expense)}</span></span>
        <hr/></div>
        </>
    )
}

export default Balance_display
