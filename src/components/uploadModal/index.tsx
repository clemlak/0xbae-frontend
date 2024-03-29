import * as React from 'react';
import axios from 'axios';

import {
  Web3Context,
} from '../../store/web3Wrapper';

import UploadModalView from './uploadModalView';

interface UploadModalProps {
  toggle: Function,
  isOpen: boolean,
}

function getUploadButtonText(
  web3: any,
  isReady: boolean,
  uploadStatus: string,
) {
  if (!web3) {
    return 'Wallet not found';
  }

  if (!isReady) {
    return 'Unlock your account';
  }

  if (uploadStatus === 'done') {
    return 'Upload was successful! Close';
  }

  if (uploadStatus === 'error') {
    return 'An error occurred...';
  }

  return 'Upload';
}

function isUploadButtonDisabled(
  web3: any,
  url: string,
  username: string,
  uploadStatus: string,
) {
  if (!web3) {
    return true;
  }

  if (uploadStatus === 'pending' || uploadStatus === 'error') {
    return true;
  }

  if (username.length === 0 || url.length === 0) {
    return true;
  }

  return false;
}

async function upload(
  url: string,
  username: string,
  isReady: boolean,
  address: string,
  dispatch: Function,
  uploadStatus: string,
  setUploadStatus: Function,
  toggle: Function,
) {
  if (uploadStatus === 'done' || uploadStatus === 'error') {
    toggle();
    document.location.replace('/');
    return;
  }

  if (!isReady) {
    try {
      await window.ethereum.enable();

      dispatch({
        target: 'isReady',
        value: true,
        type: 'set',
      });
    } catch (e) {
      console.log(e);
    }

    return;
  }

  setUploadStatus('pending');

  try {
    const data = await axios({
      method: 'post',
      url: 'https://0xbae-backend.clemlak.now.sh/add',
      data: {
        url,
        model: username,
        address,
      },
    });

    console.log(data);

    setUploadStatus('done');
  } catch (err) {
    console.log(err);
    setUploadStatus('error');
  }

    /*

    const res = await fetch(, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        Origin: 'https://0xbae.gq/',
      },
      body: JSON.stringify({

      }),
    });



    const status = await res.json();

    if (status.status === 'OK') {
      setUploadStatus('done');
    } else {
      setUploadStatus('error');
    }
  } catch (err) {
    console.log(err);

  } */
}

const UploadModal = (uploadModalProps: UploadModalProps) => {
  const {
    toggle,
    isOpen,
  } = uploadModalProps;

  const state = React.useContext(Web3Context);

  const [picUrl, setPicUrl] = React.useState<string>('');
  const [username, setUsername] = React.useState<string>('');
  const [uploadStatus, setUploadStatus] = React.useState<string>('');

  const {
    isReady,
    web3,
    dispatch,
    address,
  } = state;

  React.useEffect(() => {
    if (!isOpen) {
      setPicUrl('');
      setUsername('');
      setUploadStatus('');
    }
  }, [isOpen]);

  return (
    <UploadModalView
      isOpen={isOpen}
      toggle={toggle}
      upload={() => upload(
        picUrl,
        username,
        isReady,
        address,
        dispatch,
        uploadStatus,
        setUploadStatus,
        toggle,
      )}
      picUrl={picUrl}
      username={username}
      onPicUrlUpdate={(val: string) => setPicUrl(val)}
      onUsernameUpdate={(val: string) => setUsername(val)}
      buttonText={getUploadButtonText(
        web3,
        isReady,
        uploadStatus,
      )}
      isUploadButtonDisabled={isUploadButtonDisabled(
        web3,
        picUrl,
        username,
        uploadStatus,
      )}
    />
  );
};

export default UploadModal;
