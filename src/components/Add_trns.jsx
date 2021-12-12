import React,{useState,useContext, useEffect} from 'react'
import { Inputcontext } from './context'

const Add_trns = () => {
  
    const [[Transaction,setTransaction],[Income,setIncome],[Expense,setExpense]]=useContext(Inputcontext);

    const [ChangeAmt, setChangeAmt] = useState(0);
    const [ChangeDes, setChangeDes] = useState(" ")
    useEffect(() => {
       
        localStorage.setItem("Transactions",JSON.stringify(Transaction))
       
    }, [Transaction])
    useEffect(() => {
       
        localStorage.setItem("Income",JSON.stringify(Income))
       
    }, [Income])
    useEffect(() => {
       
        localStorage.setItem("Expense",JSON.stringify(Expense))
       
    }, [Expense])
    const handlechange = () => {
if(!isNaN(ChangeAmt)){
        setTransaction(prevtrans=>([...prevtrans,{Description:ChangeDes,Amount:ChangeAmt}]))}

        if(parseInt(ChangeAmt)>0)
        {
            setIncome(prevIncome=>(parseInt(ChangeAmt)+parseInt(prevIncome))
            )         
        }
    else if(parseInt(ChangeAmt)<=0)
        {
            setExpense(prevexpense=>(parseInt(ChangeAmt)+parseInt(prevexpense))
            )
        }
setChangeAmt('');
setChangeDes('');
    }
    return (
        <> <div className='addtrans'><div className='descriptionipt'>
        <span>Enter Description</span>
           <input type="text" name="Description" id="Description" placeholder='Description' value={ChangeDes} onChange={e=>setChangeDes(e.target.value)}/> 
           </div>
           <div className='amountipt'>
           <span>Enter Amount</span>
           <input type="number" name="Amount" id="Amount" placeholder='Amount' value={ChangeAmt}  onChange={(e)=>setChangeAmt(e.target.value)}/>
          
           </div>
          <button className="addbtn" onClick={handlechange}>Add</button></div>
        </>
    )
}

export default Add_trns
