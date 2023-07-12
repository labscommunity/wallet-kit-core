/**
 * Arweave wallet permission types
 */
export type PermissionType =
  | "ACCESS_ADDRESS"
  | "ACCESS_PUBLIC_KEY"
  | "ACCESS_ALL_ADDRESSES"
  | "SIGN_TRANSACTION"
  | "ENCRYPT"
  | "DECRYPT"
  | "SIGNATURE"
  | "ACCESS_ARWEAVE_CONFIG"
  | "DISPATCH";

/**
 * Dispatch function result
 */
export interface DispatchResult {
  id: string;
  type?: "BASE" | "BUNDLED";
}

/**
 * Application info
 */
export interface AppInfo {
  name?: string;
  logo?: string;
}

/**
 * Arweave gateway configuration
 */
export interface GatewayConfig {
  host: string;
  port: number;
  protocol: "http" | "https";
}
