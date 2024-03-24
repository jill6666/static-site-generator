import React, { useState } from 'react';
import { Button as ButtonMarkup } from '../Button/markup';
import { ReloadIcon, LinkBreak2Icon } from '@radix-ui/react-icons';
import { useSendTransaction, useAccount, useConnect, useDisconnect } from 'wagmi';
import { parseEther } from 'viem';
import { Modal, message, Input } from 'antd';
import EthIcon from './eth.svg';

const BuyMeACoffee = ({
  name,
  text = '',
  twStyle = '',
  variant,
  size,
  color,
  background,
  width,
  height,
  padding,
  margin,
  border,
  borderRadius,
  isLoading,
  ownerAddr, // must be 0x-prefixed
  min = 0.000001,
  ...props
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
  return (
    <>
      <div className="w-full flex justify-between items-center p-2 rounded-md gap-2">
        <Input
          type="number"
          className="h-auto py-1"
          prefix={<img src={EthIcon} />}
          suffix="ETH"
          min={min}
          value={value}
          step={0.000001}
          onChange={handleOnChange}
        />
        <ButtonMarkup
          size={size}
          variant={variant}
          className={twStyle}
          style={{
            color,
            background,
            width,
            height,
            padding,
            margin,
            border,
            borderRadius,
          }}
          onClick={handleSupportOnClick}
          {...props}
        >
          {isPending ? <ReloadIcon className="animate-spin" /> : 'Support'}
        </ButtonMarkup>
        {isConnected && <LinkBreak2Icon onClick={handleDisconnect} width={24} height={24} className="cursor-pointer" />}

        {/* Connect Wallect Modal */}
        <Modal
          okButtonProps={{ type: 'default' }}
          title="Connect Wallet"
          open={isModalOpen}
          onOk={handleOnSupport}
          onCancel={() => setIsModalOpen(false)}
          footer={(_, { CancelBtn }) => (
            <div className="flex gap-2">
              <CancelBtn />
              {connectors.map(connector => (
                <ButtonMarkup key={connector.uid} onClick={() => handleWalletConnect({ connector })} type="button">
                  {connector.name}
                </ButtonMarkup>
              ))}
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
