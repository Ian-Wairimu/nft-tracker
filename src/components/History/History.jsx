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
              <div className='search'>
           <FormStyle>
            <div>
            <FaSearch/>
            <input type="text" placeholder='Search'/>
            <button className='search'>Search</button>
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
        {/* {data.map((val, key) => {
          return (
            <tr key={key}>
            
            </tr>
          )
        })} */}
      </table>
            </div>

</div>

 


        </div>

  )
}

const FormStyle =styled.form`

div{
    width:100%;
    position:relative;
    margin-top:2rem;
}
input{
  width: 1980px;
  height: 85px;
  padding: 10px 5px;
   
  font: bold 13px 'lucida sans', 'trebuchet MS', 'Tahoma';
  border: 4;
  background: #fff;
  border-radius: 10px;
  
 
}
.search{
  background-color:#FF8E00;
  border:none;
  border-radius:58px;
  width: 368px;
  height: 96px;
  font-weight:600;
    font-size:3rem;
 
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