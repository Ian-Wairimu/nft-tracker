import React from 'react'
import { FaSearch } from 'react-icons/fa';
import styled from "styled-components";
import "./History.css";
import Table from 'react-bootstrap/Table';
import celo from "../../images/celo.png";
import tether from "../../images/tether.png";
import eth from "../../images/eth.png";
import bitcoin from "../../images/bitcoin.png";

function History() {
  return (

    <div className='trans-history'>
      <div className='row'>
        <div className='my-assets box'>
          <span>My Assets</span>
          <Table className="asset-table">
            <tr>

              <td>Tether<span style={{ color: "#C4C4C4", marginLeft: 10 }}>USDT</span> </td>
              <td>$223.34</td>
            </tr>

            <tr>
              <td>Ethereum <span style={{ color: "#C4C4C4", marginLeft: 3 }}>ETH</span></td>
              <td>$234.34</td>
            </tr>

            <tr>
              <td>Celo <span style={{ color: "#C4C4C4", marginLeft: 20 }}>CSD</span> </td>
              <td>$224.34</td>
            </tr>

            <tr>
              <td>Filecoin <span style={{ color: "#C4C4C4", marginLeft: 10 }}>BTC</span> </td>
              <td>$224.34</td>
            </tr>
            <tr>
              <td>Bitcoin <span style={{ color: "#C4C4C4", marginLeft: 10 }}>BTC</span></td>
              <td>$224.34</td>
            </tr>
          </Table>
        </div>
        <div className='history box'>
          <span>Transaction History</span>
          <div className='searchclass'>
            <div className='searchinput'>
     

                {/* <FaSearch/> */}
                <input 
                id='searchcl'
                  type="text"
                  placeholder='Search'
                  style={{
                    backgroundcolor: 'white',
                    border: "none",
                    borderRadius: "100px",
                    height: "4.6vh",
                    fontSize: "20px",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}

                />
            <input type="button" id='button-search' value="Search" />
          
         
            </div>
          </div>

          <Table className='history-table'>
            <tr>
              <th>Coin</th>
              <th>Price</th>
              <th>1h</th>
              <th>24h</th>
            </tr>
          </Table>
        </div>

      </div>
    </div>

  )
}

const FormStyle = styled.form`

div{
    width:100%; 
    margin-top:2rem;
}

searchclass{
  width: 100px;
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