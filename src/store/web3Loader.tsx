import * as React from 'react';
import Web3 from 'web3';

import {
  Web3Context,
} from './web3Wrapper';

import App from '../components/app';

import {
  getBalanceOf,
} from '../utils/utils';

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

        dispatch({
          target: 'web3',
          value: window.web3,
          type: 'set',
        });

        try {
          await window.ethereum.enable();

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

        // const networkId: number = await web3.eth.net.getId();

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

        const daiBalance = await getBalanceOf(
          web3,
          '0x2cD829003d746E57118a6153BdFa71039f0b8d78',
          address,
        );

        dispatch({
          target: 'daiBalance',
          value: daiBalance,
          type: 'set',
        });

        const spankBalance = await getBalanceOf(
          web3,
          '0x2cD829003d746E57118a6153BdFa71039f0b8d78',
          address,
        );

        dispatch({
          target: 'spankBalance',
          value: spankBalance,
          type: 'set',
        });
      }
    }

    getAccountData();
  }, [isReady]);

  return <App />;
};

export default Web3Loader;
