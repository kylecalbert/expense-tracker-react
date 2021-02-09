import React,{useState} from 'react'

function AddTransaction() {
    const[text,setText] = useState('');
    const[amount,setAmount] = useState('')
  
   
    // const setText =(e)=>{
    //     setText(e.target.value)
    //     e.preventDefault();
    //   }
    
    
    return (
        <div>
         <h3>Add New Transaction</h3>
         <form>
             <div className="form-control">
            <label htmlFor="text">Text</label>
             <input onChange={(e)=>setText(e.target.value)} value={text} type="text" placeholder="Enter Text"/>
             </div>

             <div className="form-control">
                 <label htmlFor="amount">Amount <br />
                 (negative-expense,positive-income)
                 </label>
                 
                 <input type="number" onChange ={(e)=>setAmount(e.target.value)} value={amount} id="amount" placeholder="Enter amount..." />
                </div>
        <button className="btn">Add transaction</button>

         </form>
            
        </div>
    )
}

export default AddTransaction
