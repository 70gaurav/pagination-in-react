import React, { useState } from 'react';
import './style.css';
import ListFormat from '../format/ListFormat';
import GenerateKey from '../GenerateKey/GenerateKey';

function MainWindow() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const data = [
    { id:'1026', 
    keyDetail:'rgregegegegergergegergegegegegeg5t5gerg55g54g' ,
    issuedTo:'gaurav',
     issuedOn:'19-09-2023 14:12:45', 
     activatedOn:'19-09-2023 14:12:45' ,
     activated:'yes', macId:'12.12.12.12.12', 
     ipAddress:'192.168.181',
      deleted:'yes',
       daysCount:'1000' ,
       expiredOn:'19-09-2023 14:12:45',
        LicenseType:'standard' },
    { id:'1026', 
    keyDetail:'rgregegegegergergegergegegegegeg5t5gerg55g54g' ,
    issuedTo:'gaurav',
     issuedOn:'19-09-2023 14:12:45', 
     activatedOn:'19-09-2023 14:12:45' ,
     activated:'yes', macId:'12.12.12.12.12', 
     ipAddress:'192.168.181',
      deleted:'yes',
       daysCount:'1000' ,
       expiredOn:'19-09-2023 14:12:45',
        LicenseType:'standard' },
    { id:'1026', 
    keyDetail:'rgregegegegergergegergegegegegeg5t5gerg55g54g' ,
    issuedTo:'gaurav',
     issuedOn:'19-09-2023 14:12:45', 
     activatedOn:'19-09-2023 14:12:45' ,
     activated:'yes', macId:'12.12.12.12.12', 
     ipAddress:'192.168.181',
      deleted:'yes',
       daysCount:'1000' ,
       expiredOn:'19-09-2023 14:12:45',
        LicenseType:'standard' },
    { id:'1026', 
    keyDetail:'rgregegegegergergegergegegegegeg5t5gerg55g54g' ,
    issuedTo:'gaurav',
     issuedOn:'19-09-2023 14:12:45', 
     activatedOn:'19-09-2023 14:12:45' ,
     activated:'yes', macId:'12.12.12.12.12', 
     ipAddress:'192.168.181',
      deleted:'yes',
       daysCount:'1000' ,
       expiredOn:'19-09-2023 14:12:45',
        LicenseType:'standard' },
    { id:'1026', 
    keyDetail:'rgregegegegergergegergegegegegeg5t5gerg55g54g' ,
    issuedTo:'gaurav',
     issuedOn:'19-09-2023 14:12:45', 
     activatedOn:'19-09-2023 14:12:45' ,
     activated:'yes', macId:'12.12.12.12.12', 
     ipAddress:'192.168.181',
      deleted:'yes',
       daysCount:'1000' ,
       expiredOn:'19-09-2023 14:12:45',
        LicenseType:'standard' },
    { id:'1021', 
    keyDetail:'rgregegegegergergegergegegegegeg5t5gerg55g54g' ,
    issuedTo:'gaurav',
     issuedOn:'19-09-2023 14:12:45', 
     activatedOn:'19-09-2023 14:12:45' ,
     activated:'yes', macId:'12.12.12.12.12', 
     ipAddress:'192.168.181',
      deleted:'yes',
       daysCount:'1000' ,
       expiredOn:'19-09-2023 14:12:45',
        LicenseType:'standard' },
    { id:'1022', 
    keyDetail:'rgregegegegergergegergegegegegeg5t5gerg55g54g' ,
    issuedTo:'gaurav',
     issuedOn:'19-09-2023 14:12:45', 
     activatedOn:'19-09-2023 14:12:45' ,
     activated:'yes', macId:'12.12.12.12.12', 
     ipAddress:'192.168.181',
      deleted:'yes',
       daysCount:'1000' ,
       expiredOn:'19-09-2023 14:12:45',
        LicenseType:'standard' },
    { id:'1023', 
    keyDetail:'rgregegegegergergegergegegegegeg5t5gerg55g54g' ,
    issuedTo:'gaurav',
     issuedOn:'19-09-2023 14:12:45', 
     activatedOn:'19-09-2023 14:12:45' ,
     activated:'yes', macId:'12.12.12.12.12', 
     ipAddress:'192.168.181',
      deleted:'yes',
       daysCount:'1000' ,
       expiredOn:'19-09-2023 14:12:45',
        LicenseType:'standard' },
    { id:'1024', 
    keyDetail:'rgregegegegergergegergegegegegeg5t5gerg55g54g' ,
    issuedTo:'gaurav',
     issuedOn:'19-09-2023 14:12:45', 
     activatedOn:'19-09-2023 14:12:45' ,
     activated:'yes', macId:'12.12.12.12.12', 
     ipAddress:'192.168.181',
      deleted:'yes',
       daysCount:'1000' ,
       expiredOn:'19-09-2023 14:12:45',
        LicenseType:'standard' },
    { id:'1025', 
    keyDetail:'rgregegegegergergegergegegegegeg5t5gerg55g54g' ,
    issuedTo:'gaurav',
     issuedOn:'19-09-2023 14:12:45', 
     activatedOn:'19-09-2023 14:12:45' ,
     activated:'yes', macId:'12.12.12.12.12', 
     ipAddress:'192.168.181',
      deleted:'yes',
       daysCount:'1000' ,
       expiredOn:'19-09-2023 14:12:45',
        LicenseType:'standard' },
  ];

  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = data.slice(startIndex, endIndex);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      {isModalOpen && (
        <div className="overlay">
          <GenerateKey onClose={toggleModal} />
        </div>
      )}
      <div className={`content ${isModalOpen ? 'blurred' : ''}`}>
        <div className="generateKey">
          <button onClick={toggleModal}>Generate Key</button>
        </div>
        <div className="windowHeader">
          <ul>
            <li className="action">Action</li>
            <li className="id">ID</li>
            <li className="keyDetail">Key Detail</li>
            <li className="issuedTo">Issued To</li>
            <li className="issuedOn">Issued On</li>
            <li className="activatedOn">Activated On</li>
            <li className="activated">Activated</li>
            <li className="macId">Mac Id</li>
            <li className="ipAddress">Ip Address</li>
            <li className="deleted">Deleted</li>
            <li className="daysCount">Days Count</li>
            <li className="expiredOn">Expired On</li>
            <li className="license">License Type</li>
          </ul>
        </div>

        <div className="dataContainer">
          {currentData.length > 0 ? (
            currentData.map((item) => {
              return <ListFormat  {...item} />;
            })
          ) : (
            <p>NO DATA FOUND</p>
          )}
        </div>

        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainWindow;
