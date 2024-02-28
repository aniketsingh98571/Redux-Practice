import { useSelector } from "react-redux";
function Customer() {
  //useSelector, creates a subscription to the store.
  const {name}=useSelector(store=>store.customer)
  return <h2>👋 Welcome, {name}</h2>;
}

export default Customer;
