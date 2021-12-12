
import React,{useState,useContext} from 'react'
import { Inputcontext } from './context'


const History = () => {

    const [[Transaction,setTransaction],[Income,setIncome],[Expense,setExpense]]=useContext(Inputcontext);

    const deleteTrans=(e)=>{
        const trans=Transaction[e.target.id];
        //deleting transaction
    setTransaction(prevtrans=>(prevtrans.filter((elem,index,arr)=>index!=e.target.id)))
    //update Income and Expense and Balance while deleting a transaction
   if(trans.Amount>0){
    setIncome(prevInc=>(prevInc-trans.Amount))
   }
   else if(trans.Amount<=0){
    setExpense(preExp=>(preExp-trans.Amount))
}
    }

    return (
    
            <div className="transactions">
                <h4>Transactions</h4>
                {
                    Transaction.map((transaction,index)=> <div className='transaction' key={index}>
                        <span>{transaction.Description}</span>
                        <span>{Math.abs(transaction.Amount)}</span>
                        <i className="far fa-trash-alt deletebtn"  onClick={deleteTrans} id={index}></i>
                        <span className={transaction.Amount<0?"red":"green"}>.</span>
                        </div>)
               
                }
                </div>
     
    )
}

export default History
