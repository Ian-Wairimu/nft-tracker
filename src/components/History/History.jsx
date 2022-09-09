import React from 'react'
import {FaSearch} from 'react-icons/fa';

function History() {
  return (
    <div>
        <div className='trans-history'>
            <div className='my-assets'>
                
            </div>
        <FormStyle>
        <div>
        <FaSearch/>
        <input onChange={(e) =>setInput(e.target.value)} type="text" value={input}/>
        <button>Search</button>
        </div>


</FormStyle> 

<table>
        <tr>
          <th>Coin</th>
          <th>Price</th>
          <th>1h</th>
          <th>24h</th>

        </tr>
        {/* {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
            </tr>
          )
        })} */}
      </table>
        </div>


    </div>
  )
}

export default History