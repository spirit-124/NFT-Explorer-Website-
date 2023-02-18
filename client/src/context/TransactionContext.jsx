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
    contractAdrress,
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
  // const [connectedAccount, setconnectedAccount] = useState();
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });

  const handlechanges = (e, name) => {
    setFormData((prevState = { ...prevstate, [name]: e.target.value }));
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please connect metamask Wallet");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        // Get all Transactions
      } else {
        console.log("No accounts found");
      }
      console.log(accounts);
    } catch (err) {
      console.log(err);

      throw new Error("No Ethereum object.");
    }
  };

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert("Please connect metamask Wallet");

      // get the data from the form
    } catch (err) {
      console.log(err);
      throw new Error("No Ethereum object.");
    }
  };

  const connenctWallet = async () => {
    try {
      if (!ethereum) return alert("Please connect metamask Wallet");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
      // window.location.reload();
    } catch (error) {
      console.log(error);

      throw new Error("No Ethereum object.");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider value={{ connenctWallet, currentAccount }}>
      {children}
    </TransactionContext.Provider>
  );
};
