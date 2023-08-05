import {
  fetchBalance,
  getAccount,
  getNetwork,
} from "@wagmi/core";
import { arbitrum, mainnet } from "@wagmi/core/chains";
import { arbitrumNova } from "@wagmi/chains";

import { chains, web3modal } from "./web3config";
import type { Address } from "viem";

const networkBtn = document.getElementById("wrong-network");
// const swichChainEth = document.getElementById("swich-chain-eth");
// const swichChainNova = document.getElementById("swich-chain-nova");
// const swichChainArbitrum = document.getElementById("swich-chain-arbitrum");
// const wrongNetworkWrapper = document.getElementById("wrong-network-wrapped");
// const cryptoInfo = document.getElementById("cryptoInfo");
// const imgArbinauts = document.getElementById("img-arbinauts");
// const imgSpaceship = document.getElementById("img-spaceship");
// const selectedChainName = document.getElementById("selected-chain-name");
// const fromChainName = document.getElementById("from-chain-name");

const userAccount = document.getElementById("user-account");
const connectModalButton = document.querySelector(
  '[data-bs-target="#connectModal"]'
) as HTMLAnchorElement | null;
connectModalButton?.addEventListener("click", () => {
  web3modal.openModal();
});

let account = getAccount();

const connectWalletButton = document.getElementById("connect-wallet-button");
// connectWalletButton?.addEventListener("click", () => {
//   web3modal.openModal();
// });
if (account.isConnected && connectWalletButton) {
  connectWalletButton.style.display = "none";
  networkBtn!.style.display = "flex";
  userAccount!.style.display = "flex";
}
// if (!account.isConnected) {
//   web3modal.openModal();
// }

web3modal.subscribeEvents(async (newEvent: { type: string; name: string }) => {
  if (newEvent.type === "TRACK" && newEvent.name === "ACCOUNT_CONNECTED") {
    //  setTimeout(()=> window.location.reload(), 2000)
    // await refetchBalances();
    networkBtn!.style.display = "flex";
    userAccount!.style.display = "flex";
    if (!connectWalletButton) return;
    connectWalletButton.style.display = "none";
  }
  if (newEvent.type === "TRACK" && newEvent.name === "ACCOUNT_DISCONNECTED") {
    if (!connectWalletButton) return;
    connectWalletButton.style.display = "initial";
  }
});
web3modal.subscribeModal(async (newState) => {
  if (!newState.open) {
    $("#cryptoInfo").modal("show");

    resetChain();
    // await refetchBalances();
  }
});

let chain = getNetwork().chain;
let chainId = (chain?.id as (typeof chains)[number]["id"] | undefined) ?? 1;
function resetChain() {
  chain = getNetwork().chain;
  chainId = (chain?.id as (typeof chains)[number]["id"] | undefined) ?? 1;
}

type AddressAdaptive = Record<(typeof chains)[number]["id"], Address>;
type AddressAny =
  //  Address |
  AddressAdaptive;

const tokenList = document.getElementById("tokenList") as HTMLDivElement | null;

type Token = {
  symbol: string;
  longName: string;
  address: AddressAny | undefined;
  quantity: number | string;
  /** @example 'assets/arbitrum.png' */
  image?: string;
};

// function addNewTokenToList({
//   symbol,
//   longName,
//   address,
//   quantity,
//   image,
// }: Token) {
//   let newItem = document.createElement("div");

//   newItem.innerHTML = `
//     <div id=${
//       address ? address[chainId] : "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
//     } class="d-flex align-items-center mb-3">
//       <img id=${
//         address
//           ? address[chainId]
//           : "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
//       } src="${image}" alt="" width="40" style="padding-left: 10px;">
//       <div id=${
//         address
//           ? address[chainId]
//           : "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
//       } class="d-flex align-items-center flex-column">
//         <div id=${
//           address
//             ? address[chainId]
//             : "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
//         } class="d-flex flex-row crypto-items">
//           <span id=${
//             address
//               ? address[chainId]
//               : "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
//           } class="span-crypto-name">${symbol}</span>
//           <span id=${
//             address
//               ? address[chainId]
//               : "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
//           } class="span-crypto-name2">${longName}</span>
//         </div>
//         <div id=${
//           address
//             ? address[chainId]
//             : "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
//         } class="d-flex flex-column">
//           <a class="crypto-a textDecoration" href="${
//             address
//               ? `${chain?.blockExplorers?.default.url}/token/${address[chainId]}`
//               : "#"
//           }" target="_blank" rel="noreferrer">${
//     address ? formatEtherAddressToShort(address[chainId]) : "..."
//   }</a>
//           <span id=${
//             address
//               ? address[chainId]
//               : "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
//           } class="card-smallText_selectToken">Arbed Uniswap List and 2 more lists</span>
//         </div>
//       </div>
//       <span id=${
//         address
//           ? address[chainId]
//           : "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
//       } class="span-cost">${formatEtherQuantityShort(quantity)} ${symbol}</span>
//     </div>
//   `;
//   newItem.id = address
//     ? address[chainId]
//     : "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
//   newItem = newItem.children[0] as HTMLDivElement;

//   tokenList?.appendChild(newItem);
// }

function formatEtherQuantityShort(quantity: string | number): string {
  const precision = 4;
  const quantityAsNumber = Number(quantity);

  if (Math.abs(quantityAsNumber) < 1) {
    return removeTrailingZeroesFromNumberString(
      quantityAsNumber.toPrecision(precision)
    );
  }

  return removeTrailingZeroesFromNumberString(
    quantityAsNumber.toFixed(precision)
  );
}
function removeTrailingZeroesFromNumberString(str: string) {
  return String(Number(str));
}

/** Formats a long address as `0x111...c302` */
function formatEtherAddressToShort(address: Address | undefined) {
  if (!address) return "...";
  const firstPart = address.slice(0, 5);
  const secondPart = address.slice(-4);
  return `${firstPart}...${secondPart}`;
}

// const tokens: Token[] = [
//   {
//     symbol: "USDT",
//     longName: "Tether USD",
//     address: {
//       [mainnet.id]: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
//       [arbitrumNova.id]: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
//       [arbitrum.id]: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
//     },
//     quantity: 0,
//     image: getEthplorerTokenImageLink("tether"),
//   },
//   {
//     symbol: "DAI",
//     longName: "Dai Stablecoin",
//     address: {
//       [mainnet.id]: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
//       [arbitrumNova.id]: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",

//       [arbitrum.id]: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
//     },
//     quantity: 0,
//     image: getEthplorerTokenImageLink("mcd-dai"),
//   },
//   {
//     symbol: "USDC",
//     longName: "USD Coin",
//     address: {
//       [mainnet.id]: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
//       [arbitrumNova.id]: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
//       [arbitrum.id]: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
//     },
//     quantity: 0,
//     image: getEthplorerTokenImageLink("usdc"),
//   },
//   {
//     symbol: "ETH",
//     longName: "Ethereum",
//     address: undefined,
//     quantity: 0,
//     image: getEthplorerTokenImageLink("eth"),
//   },
//   {
//     symbol: "WETH",
//     longName: "Wrapped Ether",
//     address: {
//       [mainnet.id]: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
//       [arbitrumNova.id]: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
//       [arbitrum.id]: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
//     },
//     quantity: 0,
//     image: getEtherscanTokenImageLink("weth_28"),
//   },
//   {
//     symbol: "ARB",
//     longName: "Arbitrum",
//     address: {
//       [mainnet.id]: "0xB50721BCf8d664c30412Cfbc6cf7a15145234ad1",
//       [arbitrumNova.id]: "0x912CE59144191C1204E64559FE8253a0e49E6548",
//       [arbitrum.id]: "0x912CE59144191C1204E64559FE8253a0e49E6548",
//     },
//     quantity: 0,
//     image: getEtherscanTokenImageLink("arbitrumone2_32"),
//   },
// ];

let tokensWithBalances: Token[] = [];

// refetchBalances();

// async function refetchBalances() {
//   if (tokenList) {
//     tokenList.innerHTML = "";
//   }

//   const account = getAccount();

//   tokensWithBalances = await Promise.all(
//     tokens.map(async (token) => {
//       if (!account.address) {
//         console.info("Not connected to Web3 Wallet");
//         return token;
//       }

//       try {
//         const fetched = await fetchBalance({
//           address: account.address,
//           token: token.address?.[chainId],
//         });

//         return {
//           ...token,
//           quantity: fetched.formatted,
//         };
//       } catch (error) {
//         console.warn(`Could not get balance for ${token.symbol}`, error);
//         return token;
//       }
//     })
//   );

//   tokensWithBalances.forEach(addNewTokenToList);
// }

function getEtherscanTokenImageLink<T extends string>(name: T) {
  return `https://etherscan.io/token/images/${name}.png` as const;
}

function getEthplorerTokenImageLink<T extends string>(name: T) {
  return `https://ethplorer.io/images/${name}.png` as const;
}

tokenList?.addEventListener("click", selectToken);

function selectToken(event: MouseEvent) {
  if (event.currentTarget === event.target) return;
  const target = event.target as HTMLElement;
  const closestTokenElement = target.closest(`#${tokenList!.id} > div`);

  const newSelectedTokenSymbol =
    closestTokenElement?.querySelector(".span-crypto-name")?.textContent;
  if (!newSelectedTokenSymbol) {
    throw new Error("Could not get the token symbol to select");
  }

  const newSelectedToken = tokensWithBalances.find(
    (token) => token.symbol === newSelectedTokenSymbol
  );
  if (!newSelectedToken) {
    throw new Error("Could not find the token in the list of tokens");
  }

  const balanceElement = document.querySelector(".crypto-card-text");
  if (!balanceElement) {
    throw new Error("Could not find the balance element");
  }

  console.log(balanceElement);
  console.log(newSelectedToken);
  balanceElement.textContent = `${formatEtherQuantityShort(
    newSelectedToken.quantity
  )} ${newSelectedToken.symbol}`;

  const dropdownMenuSelectTokenElement = document.getElementById(
    "dropdownMenu_selectToken"
  );
  if (!dropdownMenuSelectTokenElement) {
    throw new Error("Could not get dropdownMenuSelectTokenElement");
  }

  const selectedTokenImageElement =
    dropdownMenuSelectTokenElement.querySelector("img");
  if (!selectedTokenImageElement) {
    throw new Error("Could not get selectedTokenImageElement");
  }
  if (!newSelectedToken.image) {
    throw new Error("The selected token does not have an image to display");
  }
  selectedTokenImageElement.src = newSelectedToken.image;
  selectedTokenImageElement.removeAttribute("height");
  selectedTokenImageElement.style.maxHeight = "30px";
  selectedTokenImageElement.style.width = "auto";

  const selectedTokenSymbolElement =
    dropdownMenuSelectTokenElement.querySelector(".crypto-name");
  if (!selectedTokenSymbolElement) {
    throw new Error("Could not get selectedTokenSymbolElement");
  }
  selectedTokenSymbolElement.textContent = newSelectedToken.symbol;
}

//#region network switching
// const chainImages = {
//   [arbitrum.id]: "./assets/arbitrum.png",
//   [mainnet.id]: "./assets/Ethereum.svg",
//   [arbitrumNova.id]: "./assets/nova.png",
// };

// let networkSwitchers = Array.from(
//   document.getElementsByClassName("network-switcher")
// );
// const cryptoBtnIcon = document.getElementById("crypto-custom-btn_icon");
// const circleSvg = document.getElementById("circle-svg");
// const chainsAction = () => {
//   networkSwitchers.forEach((networkSwitcher) => {
//     networkSwitcher.innerHTML = "";
//     const networkSwitcherButtonElement =
//       networkSwitcher.parentElement!.querySelector("a.crypto-custom-btn_link");
//     const networkSwitcherImageElement =
//       networkSwitcher.parentElement!.querySelector(
//         "img.crypto-custom-btn_icon"
//       ) as HTMLImageElement | null;
//     function replaceChainNameInButton(newChain: typeof chain) {
//       if (networkSwitcherButtonElement) {
//         const chainNameToSet =
//           newChain?.id == 1
//             ? "Mainnet"
//             : newChain?.id == 42161
//             ? "Arbitrum"
//             : newChain?.id == 42170
//             ? "Arbitrum Nova"
//             : "Wrong network";
//         networkSwitcherButtonElement.textContent =
//           networkSwitcherButtonElement.textContent
//             ?.replace("Mainnet", chainNameToSet)
//             .replace(chain?.name ?? "Mainnet", chainNameToSet) ?? "";
//         if (chainNameToSet === "Wrong network" && networkBtn && circleSvg) {
//           cryptoInfo!.style.display = "none";
//           networkBtn.style.backgroundColor = "#762716";
//           circleSvg.style.display = "flex";
//           cryptoBtnIcon!.style.display = "none";
//           if (account.address) {
//             wrongNetworkWrapper!.style.display = "flex";
//             imgArbinauts!.style.display = "none";
//             imgSpaceship!.style.display = "flex";
//           } else {
//             wrongNetworkWrapper!.style.display = "none";
//             imgArbinauts!.style.display = "flex";
//             imgSpaceship!.style.display = "none";
//           }
//         } else if (circleSvg) {
//           circleSvg.style.display = "none";
//           cryptoBtnIcon!.style.display = "block";
//           cryptoInfo!.style.display = "block";
//         }
//       }
//       if (networkSwitcherImageElement && newChain) {
//         networkSwitcherImageElement.src =
//           chainImages[newChain.id as keyof typeof chainImages];
//       }
//       if (!account.address && networkBtn) {
//         networkBtn.style.display = "none";
//         userAccount!.style.display = "none";
//       } else {
//         networkBtn!.style.display = "flex";
//         userAccount!.style.display = "flex";
//       }
//     }
//     replaceChainNameInButton(chain);

//     chains
//       .filter((ch) => ch.id !== chain?.id)
//       .forEach((aChain) => {
//         const liElement = document.createElement("li");
//         liElement.innerHTML = `
//       <li class="d-flex align-items-center mb-2 network">
//         <img src="${
//           chainImages[aChain.id]
//         }" alt="" width="40px" style="padding-left: 10px; max-height: 32px;">
//         <a class="dropdown-item network" href="#">${aChain.name}</a>
//       </li>
//     `;

//         liElement.addEventListener("click", async () => {
//           const switchNetworkResult = await switchNetwork({
//             chainId: aChain.id,
//           });

//           replaceChainNameInButton(switchNetworkResult);
//         });
//         networkSwitcher.appendChild(liElement);
//       });
//   });
// };
// chainsAction();
// swichChainArbitrum!.onclick = async () => {
//   await switchNetwork({ chainId: arbitrum.id });
// };
// swichChainEth!.onclick = async () => {
//   await switchNetwork({ chainId: mainnet.id });
// };
// swichChainNova!.onclick = async () => {
//   await switchNetwork({ chainId: arbitrumNova.id });
// };

// setInterval(async () => {
//   networkSwitchers = Array.from(
//     document.getElementsByClassName("network-switcher")
//   );
//   chainsAction();
//   console.log(account.address, chain?.id);
//   if (
//     account.address &&
//     chain?.id !== mainnet.id &&
//     chain?.id !== arbitrum.id &&
//     chain?.id !== arbitrumNova.id
//   ) {
//     wrongNetworkWrapper!.style.display = "flex";
//     imgArbinauts!.style.display = "none";
//     imgSpaceship!.style.display = "flex";
//   } else if (
//     account.address &&
//     (chain?.id === mainnet.id ||
//       chain?.id === arbitrum.id ||
//       chain?.id === arbitrumNova.id)
//   ) {
//     networkBtn!.style.backgroundColor = "#1A1C1D";
//     const chainNameToSet =
//     chain?.id == 1
//             ? "Mainnet"
//             : chain?.id == 42161
//             ? "Arbitrum"
//             : chain?.id == 42170
//             ? "Arbitrum Nova"
//             : "Wrong network";
//     selectedChainName!.innerHTML = chainNameToSet;
//     fromChainName!.innerHTML = "From: " + chainNameToSet;
//     networkBtn!.style.display = "flex";
//     userAccount!.style.display = "flex";
//     wrongNetworkWrapper!.style.display = "none";
//     imgArbinauts!.style.display = "flex";
//     imgSpaceship!.style.display = "none";
//   } else {
//     if (!chain) {
//       chain = getNetwork().chain;
//     }
//     account = getAccount();
//     wrongNetworkWrapper!.style.display = "none";
//     imgArbinauts!.style.display = "flex";
//     imgSpaceship!.style.display = "none";
//   }
// }, 1000);

//#endregion
