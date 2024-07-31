import "../styles/globals.css";
import merge from "lodash/merge";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

// Configure the chains and provider for localhost
const { chains, provider } = configureChains(
  [chain.localhost],
  [publicProvider()]
);

// Set up the default connectors for the local chain
const { connectors } = getDefaultWallets({
  appName: "Custom Dex",
  chains,
});

// Create the Wagmi client with the configured chains and provider
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

// Customize the RainbowKit theme
const myTheme = merge(midnightTheme(), {
  colors: {
    accentColor: "#18181b",
    accentColorForeground: "#fff",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={myTheme}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;


// import "../styles/globals.css";
// import merge from "lodash/merge";
// import "@rainbow-me/rainbowkit/styles.css";
// import {
// getDefaultWallets,
// RainbowKitProvider,
// darkTheme,
// midnightTheme,
// } from "@rainbow-me/rainbowkit";
// import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
// import { infuraProvider } from "wagmi/providers/infura";


// const {chains, provider } = configureChains(
// [chain.polygonMumbai],
// [
// infuraProvider({
// apiKey: "3cb69152f0424d939a70182b8393834f",
// priority: 1,
// }),
// · ]
// );
// const { connectors } = getDefaultWallets({
// 	appName: "Custom Dex",
// 	chains,
	
// });

// const wagmiClient = createClient({
// 	autoConnect: true,
// 	connectors,
// 	provider,
// });

// const myTheme = merge(midnightTheme(), {
// colors: {
// accentColor: "#18181b",
// accentColorForeground: "#fff",
// },
// });
// function MyApp({ Component, pageProps }) {
// return (
// <WagmiConfig client={wagmiClient}>
// <RainbowKitProvider chains={chains} theme={my Theme}>
// <Component {...pageProps} />
// </RainbowKitProvider>
// </WagmiConfig>
// );
// }
