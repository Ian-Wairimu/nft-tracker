import React from 'react'
import {FaSearch} from 'react-icons/fa';
import styled from "styled-components";
import "./History.css";

function History() {
  return (
    
<div className='trans-history'>
<div className='row'>
<div className='my-assets box'>
    <span>My Assets</span>
<table className = "asset-table" >
<tr>
<td>Bitcoin BTC</td>
<td>$223.34</td>
</tr>

<tr>
<td>Ethererum</td>
<td>$234.34</td>
</tr>

<tr>
<td>Celo</td>
<td>$224.34</td>
</tr>

<tr>
<td>Filecoin</td>
<td>$224.34</td>
</tr>
<tr>
<td>Bitcoin</td>
<td>$224.34</td>
</tr>
</table>
</div>
 <div className='history box'>
   <span>Transaction History</span>
     <div className='searchclass'>
         <FormStyle>
            <div>
            {/* <FaSearch/> */}
            <input type="text" placeholder='Search'/>
            <button id='search'>Search</button>
            </div>
        </FormStyle>
    
          </div>      

     <table className='history-table'>
        <tr>
          <th>Coin</th>
          <th>Price</th>
          <th>1h</th>
          <th>24h</th>
        </tr>
      </table>
            </div>

</div>
   </div>

  )
}

const FormStyle =styled.form`

div{
    width:100%; 
    margin-top:2rem;
}

searchclass{
  width: 300px;
  position: relative;
}

input{
  margin: 0px;
  padding: 0px;
  width: 100%;
  outline: none;
  height: 30px;
  border-radius: 5px;
}
button{
  position: absolute;
  top: 0;
  border-radius: 5px;
  right: 0px;
  z-index: 2;
  border: none;
  top: 2px;
  height: 30px;
  cursor: pointer;
  color: white;
  background-color: #1e90ff;
  transform: translateX(2px);
 
}
svg{
    position:absolute;
    top:50%;
    left:0%;
    transform:translate(10% ,-20%);
    color:black;
    width:40px;
    height:40px;
}
`

export default History