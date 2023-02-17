import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

import { contractABI, contractAdrress } from "../utils/constants";

export const TransactionContext = React.createContext();
const { ethereum } = window;

// SPECIAL FUNCTION TO FETCH ETHEREUM CONTRACT

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
  console.log({
    provider,
    signer,
    transactionContract,
  });
};

export const TransactionProvider = ({ children }) => {
  return (
    <TransactionContext.Provider value={{ value: "test" }}>
      {children}
    </TransactionContext.Provider>
  );
};
