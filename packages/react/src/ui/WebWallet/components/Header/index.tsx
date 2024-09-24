import type { FuelConnector } from 'fuels';
import { handleCopy, shortAddress } from '../../../../utils';
import { getImageUrl } from '../../../Connect/utils/getImageUrl';
import { CopyButton } from '../CopyButton';
import {
  ConnectorLogo,
  HeaderConnected,
  HeaderWalletAddress,
  HeaderWalletAddressCopy,
  HeaderWalletAddressWrapper,
  HeaderWalletTitle,
  HeaderWrapper,
} from './styles';

export interface HeaderProps {
  address: string;
  currentConnector: FuelConnector | null;
}

export const Header = ({ address, currentConnector }: HeaderProps) => {
  return (
    <HeaderWrapper>
      <ConnectorLogo src={getImageUrl(currentConnector?.metadata ?? '')} />
      <HeaderConnected>
        <HeaderWalletTitle>
          {currentConnector?.name ?? 'Your Wallet'}
        </HeaderWalletTitle>
        <HeaderWalletAddressWrapper>
          <HeaderWalletAddress>{shortAddress(address)}</HeaderWalletAddress>
          <CopyButton size={18} address={address} />
        </HeaderWalletAddressWrapper>
      </HeaderConnected>
    </HeaderWrapper>
  );
};
