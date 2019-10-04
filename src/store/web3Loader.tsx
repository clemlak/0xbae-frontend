import * as React from 'react';
import Web3 from 'web3';

import {
  Web3Context,
} from './web3Wrapper';

import App from '../components/app';

interface Ethereum {
  selectedAddress: string,
  autoRefreshOnNetworkChange?: boolean,
  isMetaMask?: boolean,
  enable: () => Promise<void>,
  send: () => Promise<void>,
  on?: (eventName: string, listener: Function) => void,
  removeListener?: (eventName: string, listener: Function) => void,
}

declare global {
  interface Window {
    ethereum: Ethereum,
    web3: any,
  }
}

const Web3Loader = () => {
  const state = React.useContext(Web3Context);

  const {
    dispatch,
    address,
    web3,
  } = state;

  React.useEffect(() => {
    async function init() {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);

        try {
          await window.ethereum.enable();

          dispatch({
            target: 'web3',
            value: window.web3,
            action: 'set',
          });

          console.log('Account enabled');
        } catch (err) {
          console.log(err);
          console.log('Account error');
        }
      } else if (window.web3) {
        window.web3 = new Web3(window.web3);

        dispatch({
          target: 'web3',
          value: window.web3,
          action: 'set',
        });
      }
    }

    init();
  }, [dispatch]);

  React.useEffect(() => {
    console.log('Fetching data');

    async function getAccountData() {
      if (web3) {
        const accounts = await web3.eth.getAccounts();
        console.log(accounts);
      } else {
        console.log('Web3 is not defined');
      }
    }

    getAccountData();
  }, [web3]);

  return <App />;
};

export default Web3Loader;
