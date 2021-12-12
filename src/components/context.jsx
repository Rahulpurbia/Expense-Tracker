import React,{createContext,useState} from 'react'
export const Inputcontext=createContext();
const Context = (props) => {
    const Datahere=JSON.parse(localStorage.getItem("Transactions"));
    let intialIncome=JSON.parse(localStorage.getItem("Income"));
    let initialExpense=JSON.parse(localStorage.getItem("Expense"));
    let initialvalue=[{Description:" ",Amount:0}];
    if(Datahere){
        initialvalue=Datahere;
      }
      if(!intialIncome){
          intialIncome=0;
      }
      if(!initialExpense){
          initialExpense=0;
      }
    const [Transaction, setTransaction] = useState(initialvalue)
    const [Income,setIncome]=useState(intialIncome)
    const [Expense,setExpense]=useState(initialExpense)
 
  
    return (
       <Inputcontext.Provider value={[[Transaction,setTransaction],[Income,setIncome],[Expense,setExpense]]}>
       {props.children}
       </Inputcontext.Provider>
    )
}

export default Context
