import { ArweaveWalletApi } from "./wallet";

declare global {
  interface Window {
    arweaveWallet?: ArweaveWalletApi;
  }
}
