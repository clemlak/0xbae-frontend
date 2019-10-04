import * as React from 'react';

import {
  Web3Context,
} from './web3Wrapper';

import App from '../components/app';

interface StateInterface {
  isReady: boolean,
  address: string,
  ethBalance: number,
  daiBalance: number,
  spankBalance: number,
  dispatch?: Function,
}

const Web3Loader = () => {
  const state = React.useContext<StateInterface>(Web3Context);

  const {
    dispatch,
  } = state;

  React.useEffect(() => {
    async function init() {

    }

    init();
  }, []);

  return <App />;
};

export default Web3Loader;
