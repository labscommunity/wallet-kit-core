import { AppInfo, GatewayConfig, PermissionType } from "../wallet";

/** Global config for the kit */
export interface Config {
  /** The permissions your app requires */
  permissions: PermissionType[];
  /**
   * This will ensure that all required permissions are
   * given to your app. If not, the kit will not
   * consider the strategy "connected"
   */
  ensurePermissions?: boolean;
  /** Information about your application */
  appInfo?: AppInfo;
  /** Custom Arweave gateway configuration */
  gatewayConfig?: GatewayConfig;
}
