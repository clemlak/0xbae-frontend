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
  on: (eventName: string, listener: Function) => void,
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
    isReady,
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
            type: 'set',
          });

          dispatch({
            target: 'isReady',
            value: true,
            type: 'set',
          });
        } catch (err) {
          console.log(err);
        }
      } else if (window.web3) {
        window.web3 = new Web3(window.web3);

        dispatch({
          target: 'web3',
          value: window.web3,
          type: 'set',
        });

        dispatch({
          target: 'isReady',
          value: true,
          type: 'set',
        });
      }
    }

    init();
  }, [dispatch]);

  React.useEffect(() => {
    async function getAccountData() {
      if (web3) {
        const accounts = await web3.eth.getAccounts();
        const address = accounts[0];

        dispatch({
          target: 'address',
          value: address,
          type: 'set',
        });

        const ethBalance = await web3.eth.getBalance(address);

        dispatch({
          target: 'ethBalance',
          value: parseFloat(web3.utils.fromWei(ethBalance.toString())),
          type: 'set',
        });

        const data = web3.eth.abi.encodeFunctionCall({
          name: 'balanceOf',
          type: 'function',
          inputs: [{
            type: 'address',
            name: '_owner',
          }],
        }, [address]);

        const daiBalance = await web3.eth.call({
          to: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
          data,
        });

        dispatch({
          target: 'daiBalance',
          value: parseFloat(web3.utils.fromWei(daiBalance.toString())),
          type: 'set',
        });

        const spankBalance = await web3.eth.call({
          to: '0x42d6622dece394b54999fbd73d108123806f6a18',
          data,
        });

        dispatch({
          target: 'spankBalance',
          value: parseFloat(web3.utils.fromWei(spankBalance.toString())),
          type: 'set',
        });
      }
    }

    getAccountData();
  }, [isReady]);

  return <App />;
};

export default Web3Loader;
