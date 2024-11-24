import { useWallets, useAccount } from "@particle-network/connectkit";

const useWeb3 = () => {
  // 返回钱包数组，第一个钱包为主钱包

  const [primaryWallet] = useWallets();

  // 获取当前钱包地址
  const { address } = useAccount();

  // 签名消息
  const signMessage = async (nonce: any) => {
    // 获取当前钱包的客户端
    const walletClient = primaryWallet.getWalletClient();
    // 使用钱包客户端签名消息
    //@ts-ignore
    const signature = await walletClient.signMessage({
      message: nonce,
    });

    return signature;
  };

  return {
    address,
    signMessage,
  };
};

export { useWeb3 };
