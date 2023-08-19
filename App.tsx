import Navigation from "./Navigation";
import { RootStoreModel } from "./Stores/RootStore";
import { RootStoreProvider, useInitialRootStore } from "./Stores/useStores";
export default function App() {
  const { rootStore, rehydrated } = useInitialRootStore(() => {
    setTimeout(() => console.log("loading Completed"), 500);
  });

  if (!rehydrated) return null;
  return (
    <RootStoreProvider value={rootStore}>
      <Navigation />
    </RootStoreProvider>
  );
}
