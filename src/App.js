import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  
  const friends = ["Rumman","Shadman","samiha"];
  const products = [
    {name: 'Photoshop', price:'$90.09'},
    {name: 'Illustrator', price:'$60.09'},
    {name: 'Pdf Reader', price:'$40.09'},
    {name: 'Adobe Reader', price:'$40.09'}
  ]
  // const productName = products.map(e=>e);
  // const friendsName = friends.map(e=>e);
  // console.log(friendsName);
  // // const productPrice = products.map(product=>products.price);
  // console.log(productName);
  return (
    <div className="App">
      <header className="App-header">
      <User></User>
        <ul>
          {
            friends.map(e =><li>{e} </li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
        {
        // /* <Product product={products[0]}></Product>
        // <Product product={products[1]}></Product>
        // <Product product={products[2]}></Product>
        // <Product product={products[3]}></Product> 
        }
        <Counter></Counter>
        <User></User>
      </header>
    </div>
  );
}
function User(){
  const [user,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users: {user.length}</h3>
      <ul>
        {
          user.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '360px',
    width: '300px',
    float: 'left',
    marginTop: '5px'

  }
  const buttonStyle = {
    padding: '5px'
  }
  const {name, price} = props.product;
 return (
   <div style={productStyle}>
     <h2>Name: {name}</h2>
     <h2>Price: {price}</h2>
     <button style={buttonStyle}>Buy Now</button>
   </div>

 )
}
function Counter(){
  const [count, setCount] = useState(10);
  // const handleIncrease = () => {setCount(count+1);};
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => {setCount(count-1)}}> Decrease</button>
      <button onClick={() => {setCount(count+1)}}> Increase</button>
    </div>
  )
}

export default App;
