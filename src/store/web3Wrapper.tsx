import * as React from 'react';

import Web3Loader from './web3Loader';

interface StateInterface {
  isReady: boolean,
  networkId: number,
  address: string,
  ethBalance: number,
  daiBalance: number,
  spankBalance: number,
  web3: any,
}

interface Web3ContextInterface extends StateInterface {
  dispatch: React.Dispatch<any>,
}

interface ActionInterface {
  type: string,
  target: string,
  value: number | string,
}

function updateState(state: StateInterface, action: ActionInterface) {
  switch (action.type) {
    case 'set':
      return {
        ...state,
        [action.target]: action.value,
      };
    default:
      throw new Error('Unexpected action...');
  }
}

const initialState = {
  isReady: false,
  networkId: 0,
  address: '',
  ethBalance: 0,
  daiBalance: 0,
  spankBalance: 0,
  web3: null,
};

const Web3Context = React.createContext({} as Web3ContextInterface);

const Web3Wrapper = () => {
  const [state, dispatch] = React.useReducer(updateState, initialState);

  return (
    <Web3Context.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      <Web3Loader />
    </Web3Context.Provider>
  );
};

export {
  Web3Wrapper,
  Web3Context,
};
