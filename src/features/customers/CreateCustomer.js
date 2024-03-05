import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer} from "./customerSlice";
import Web3 from 'web3';
function Customer() {
  const web3 = new Web3(window.ethereum);
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const dispatch=useDispatch()
  function handleClick() {
    if(!fullName||!nationalId)
      return
    dispatch(createCustomer(fullName,nationalId))
  }
  async function connect(){
    // const isRabbyWalletInstalled = await web3.eth.getAccounts();
    // console.log(isRabbyWalletInstalled)
    // const rabbyWalletProvider = await web3.currentProvider.enable();
    // console.log(rabbyWalletProvider)
    if (window.rabby) {

      try {
        // Try to connect Rabby    
        await window.rabby.enable() 
        const rabbyAccounts = await web3.eth.getAccounts()
        
        // Rabby connected successfully
        console.log('Rabby wallet connected', rabbyAccounts)
  
      } catch(err) {
        // Handle error connecting Rabby
        
        console.log('Could not connect to Rabby', err)  
      }
  
    } else {
  
      // Rabby not installed
      console.log('Please install Rabby wallet') 
    }
  }
console.log("hey")
  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>National ID</label>
          <input
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Create new customer</button>
        <button onClick={connect}>conect</button>
      </div>
    </div>
  );
}

export default Customer;
