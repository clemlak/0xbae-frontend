import * as React from 'react';

import {
  Web3Context,
} from '../../store/web3Wrapper';

import UploadModalView from './uploadModalView';

interface UploadModalProps {
  toggle: Function,
  isOpen: boolean,
}

async function upload(
  url: string,
  username: string,
  address: string,
) {
  if (address.length === 0) {
    return;
  }

  try {
    await fetch('https://0xbae-backend.clemlak.now.sh/add', {
      method: 'POST',
      headers: {
        "Accept": 'application/json',
        "Content-type": 'application/json',
      },
      body: JSON.stringify({
        url,
        model: username,
        address,
      }),
    });
  } catch (err) {
    console.log(err);
  }
}

const UploadModal = (uploadModalProps: UploadModalProps) => {
  const {
    toggle,
    isOpen,
  } = uploadModalProps;

  const state = React.useContext(Web3Context);

  const [picUrl, setPicUrl] = React.useState<string>('');
  const [username, setUsername] = React.useState<string>('');

  const {
    dispatch,
    address,
  } = state;

  return (
    <UploadModalView
      isOpen={isOpen}
      toggle={toggle}
      upload={() => upload(
        picUrl,
        username,
        address,
      )}
      onPicUrlUpdate={(val: string) => setPicUrl(val)}
      onUsernameUpdate={(val: string) => setUsername(val)}
    />
  );
}

export default UploadModal;
