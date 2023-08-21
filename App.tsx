import Navigation from "./Navigation";
import { RootStoreProvider, useInitialRootStore } from "./Stores/useStores";
import React, { useEffect, useState } from "react";
import { loadFonts } from "./Utils/fontLoader";

export default function App() {
  const { rootStore,rehydrated } = useInitialRootStore(() => {
    setTimeout(() => console.log("loading Completed"), 500);
  });

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function fetchFonts() {
      await loadFonts();
      setFontsLoaded(true);
    }
    fetchFonts();
  }, []); 

  if (!rehydrated || !fontsLoaded) return null;

  return (
    <RootStoreProvider value={rootStore}>
      <Navigation />
    </RootStoreProvider>
  );
}
