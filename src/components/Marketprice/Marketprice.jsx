import React from 'react'
import './Marketprice.css'
import {FaSearch} from 'react-icons/fa';
import styled from "styled-components";

function Marketprice() {
  return (
    <div className='marketprice'>
    <div className='row'>
    <div className='my-asset box'>
        <span><strong>Balance</strong></span>  
    </div>
     <div className='trending box'>
       <span>Trending</span>
       <table className='marketprice-tables'>
       <tr>
        <td>bitcoin (BTC)</td>
        <td>20.43%</td>
        </tr>

        <tr>
        <td>bitcoin (BTC)</td>
        <td>20.43%</td>
        </tr>

        <tr>
        <td>bitcoin (BTC)</td>
        <td>20.43%</td>
        </tr>
       </table>
     
      </div>

      <div className='recently-added box'>
       <span>Recently Added</span>
       <table className='marketprice-tab'>
       <tr>
        <td>bitcoin (BTC)</td>
        <td>20.43%</td>
        </tr>

        <tr>
        <td>bitcoin (BTC)</td>
        <td>20.439%</td>
        </tr>

        <tr>
        <td>bitcoin (BTC)</td>
        <td>20.43%</td>
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
    position:relative;
    margin-top:2rem;
}
input{
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

export default Marketprice