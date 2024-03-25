import React, { useState } from 'react';
import { Button as ButtonMarkup } from '../Button/markup';
import { ReloadIcon, LinkBreak2Icon } from '@radix-ui/react-icons';
import { useSendTransaction, useAccount, useConnect, useDisconnect } from 'wagmi';
import { parseEther } from 'viem';
import { Modal, message, Input } from 'antd';
import EthIcon from './eth.svg';

const BuyMeACoffee = ({
  ownerAddr, // must be 0x-prefixed
  min = 0.000001,
  darkMode,
  title = '☕️ Buy Me A Coffee',
  description = 'Thank you for supporting me! 🙏',
  titleColor,
  background,
  buttonColor,
  buttonBackground,
  buttonBorder,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState('0.000001');
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();
  const { sendTransactionAsync, isPending } = useSendTransaction();
  const isConnected = account.status === 'connected';

  const handleOnChange = e => {
    setValue(e.target.value);
  };
  const handleOnSupport = async () => {
    try {
      const result = await sendTransactionAsync({
        to: ownerAddr,
        value: parseEther(value),
      });

      message.success(`Transaction sent! ${result}`);
    } catch (e) {
      console.log('Error: ', e);
      message.error('Oops, something went wrong!');
    }
    setIsModalOpen(false);
  };
  const handleSupportOnClick = async () => {
    if (!isConnected) setIsModalOpen(true);
    else await handleOnSupport();
  };
  const handleWalletConnect = ({ connector }) => {
    setIsModalOpen(false);
    connect({ connector });
    message.success('Connected!');
  };
  const handleDisconnect = () => {
    disconnect();
    message.success('Disconnected!');
  };
  const titleColorFinal = titleColor || (darkMode ? 'white' : 'black');
  const inputBackground = darkMode ? '#666' : '#eee';
  const inputColor = darkMode ? 'white' : '#555';
  const infoInputBackground = darkMode ? '#999' : '#eee';
  return (
    <>
      <div className="w-full flex flex-col justify-between items-center p-2 rounded-md gap-4">
        <div
          className="p-2 rounded-md w-full flex flex-col gap-2"
          style={{
            color: titleColorFinal,
            background: background || (darkMode ? '#333' : 'white'),
            border: darkMode ? '1px solid #555' : '1px solid #eee',
          }}
        >
          <p className="text-2xl font-bold">{title}</p>
          <Input
            type="number"
            className="h-auto py-1 border-none"
            style={{ background: inputBackground, color: inputColor }}
            prefix={<img src={EthIcon} />}
            suffix="ETH"
            min={min}
            value={value}
            step={0.000001}
            onChange={handleOnChange}
          />
          <p className="" style={{ color: titleColorFinal, opacity: 0.8 }}>
            {description}
          </p>
        </div>
        <Input
          type="text"
          className="h-auto py-1 border-none"
          placeholder="Name"
          style={{ background: infoInputBackground, color: inputColor }}
        />
        <Input.TextArea
          className="h-auto py-1 border-none"
          placeholder="Say something nice."
          style={{ background: infoInputBackground, color: inputColor }}
        />
        <button
          style={{
            width: '100%',
            borderRadius: '.5rem',
            color: buttonColor,
            background: buttonBackground,
            border: buttonBorder,
            padding: '.5rem',
          }}
          onClick={handleSupportOnClick}
        >
          {isPending ? <ReloadIcon className="animate-spin" /> : 'Support'}
        </button>
        {isConnected && <LinkBreak2Icon onClick={handleDisconnect} width={24} height={24} className="cursor-pointer" />}

        {/* Connect Wallect Modal */}
        <Modal
          okButtonProps={{ type: 'default' }}
          title="Connect Wallet"
          open={isModalOpen}
          onOk={handleOnSupport}
          onCancel={() => setIsModalOpen(false)}
          footer={(_, { CancelBtn }) => (
            <div className="w-full flex gap-2 justify-end">
              {connectors.map(connector => (
                <ButtonMarkup key={connector.uid} onClick={() => handleWalletConnect({ connector })} type="button">
                  {connector.name}
                </ButtonMarkup>
              ))}
              <CancelBtn />
            </div>
          )}
        >
          <p>Connect a wallet to support.</p>
        </Modal>
      </div>
    </>
  );
};
export default BuyMeACoffee;
