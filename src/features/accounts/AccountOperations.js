import { useState } from "react";
import { deposit,withdraw,requestLoan,payLoan } from "./accountSlice";
import { useDispatch, useSelector } from "react-redux";
function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");
  const{loan} = useSelector(store=>store.account)
  const dispatch=useDispatch()
  function handleDeposit() {
    if(!depositAmount)
      return
    dispatch(deposit(depositAmount,currency))
    
  }

  function handleWithdrawal() {
    if(!withdrawalAmount)
      return
    dispatch(withdraw(withdrawalAmount))
  }

  function handleRequestLoan() {
    if(!loanPurpose||!loanAmount)
      return
    dispatch(requestLoan(loanAmount,loanPurpose))
  }

  function handlePayLoan() {
    dispatch(payLoan())
  }

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          <button onClick={handleDeposit}>Deposit {depositAmount}</button>
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button onClick={handleWithdrawal}>
            Withdraw {withdrawalAmount}
          </button>
        </div>

    {
      !loan?
        <div>
          <label>Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            placeholder="Loan amount"
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
          />
          <button onClick={handleRequestLoan}>Request loan</button>
        </div>:null
   }
    {
      loan?
        <div>
          <span>Pay back ${loan} </span>
          <button onClick={handlePayLoan}>Pay loan</button>
        </div>:null
}
      </div>
    </div>
  );
}

export default AccountOperations;
