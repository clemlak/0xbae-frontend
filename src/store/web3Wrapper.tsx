import * as React from 'react';

import Web3Loader from './web3Loader';

const initialState = {
  isReady: false,
  address: '',
  ethBalance: 0,
  daiBalance: 0,
  spankBalance: 0,
};

const Web3Context = React.createContext<StateInterface>(initialState);

interface StateInterface {
  isReady: boolean,
  address: string,
  ethBalance: number,
  daiBalance: number,
  spankBalance: number,
  dispatch?: Function,
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
