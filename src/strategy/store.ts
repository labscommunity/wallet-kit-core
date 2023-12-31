import { comparePermissions, PermissionType } from "../wallet";
import Strategy from "./Strategy";

export const STRATEGY_STORE = "wallet_kit_strategy_id";

/**
 * On page mount, sync the logged in strategy
 *
 * @param strategies List of strategies used by the library
 * @param requiredPermissions The permissions required by this app
 * @param enforcePermissions Should the strategy be active only if the required permissions are gived or not
 */
export async function syncStrategies(
  strategies: Strategy[],
  requiredPermissions: PermissionType[],
  enforcePermissions: boolean
) {
  let activeStrategy: string | false =
    localStorage?.getItem(STRATEGY_STORE) || false;

  if (activeStrategy && !!getStrategy(activeStrategy, strategies)) {
    return getStrategy(activeStrategy, strategies);
  } else {
    for (const strategy of strategies) {
      const permissions = await strategy.getPermissions();

      if (!enforcePermissions && permissions.length > 0) {
        saveStrategy(strategy.id);
        return getStrategy(strategy.id, strategies);
      } else if (
        enforcePermissions &&
        comparePermissions(requiredPermissions, permissions)
      ) {
        saveStrategy(strategy.id);
        return getStrategy(strategy.id, strategies);
      }
    }

    return false;
  }
}

/**
 * Save active strategy to localstorage
 */
export function saveStrategy(active: string) {
  if (!localStorage) {
    return;
  }

  localStorage.setItem(STRATEGY_STORE, active);
}

/**
 * Get strategy by id
 */
export function getStrategy(id: string | false, strategies: Strategy[]) {
  return strategies.find((s) => s.id === id);
}
