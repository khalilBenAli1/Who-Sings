import { applySnapshot, onSnapshot } from "mobx-state-tree";
import type { RootStore } from "./RootStore";
import * as storage from "../Utils/Storage/storage";

const ROOT_STATE_STORAGE_KEY = "root";

let _disposer: any;
export async function setupRootStore(rootStore: RootStore) {
  let restoredState: any;

  try {
    restoredState = (await storage.load(ROOT_STATE_STORAGE_KEY)) || {};
    applySnapshot(rootStore, restoredState);
  } catch (e) {
    console.error(e);
  }
  if (_disposer) _disposer();

  _disposer = onSnapshot(rootStore, (snapshot) =>
    storage.save(ROOT_STATE_STORAGE_KEY, snapshot),
  );

  const unsubscribe = () => {
    _disposer();
    _disposer = undefined;
  };

  return { rootStore, restoredState, unsubscribe };
}
