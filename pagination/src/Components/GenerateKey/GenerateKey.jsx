import React, { useContext } from 'react'
import close from "../../images/cross.png"
import "./style.css"

function GenerateKey({ onClose }) {
  
    const submitHandler = (e) => {
      e.preventDefault();
      
      onClose();
    };
  
    return (
      <div className="generateKeyform">
        <img
          className="close"
          src={close}
          alt="close"
          title="close"
          onClick={onClose}
        />
        <form onSubmit={(e) => submitHandler(e)}>
          <label htmlFor="Enter Name">Enter Name</label>
          <input type="text" />
          <label htmlFor="Enter Count">Enter Count</label>
          <input type="number" />
          <br />
          <label htmlFor="Enter Days Count">Enter Days Count</label>
          <input type="number" />
          <label htmlFor="select license type">Select License Type</label>
          <select name="select license type" id="">
            <option value="" disabled>
              Select license type
            </option>
            <option value="standard">Standard</option>
            <option value="lite">Lite</option>
          </select>
          <button type="submit">OK</button>
          <button onClick={onClose}>Cancel</button>
        </form>
      </div>
    );
  }
  
  export default GenerateKey;