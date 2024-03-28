// Smart Contract Details
const contractAddress = '0xD697756424449A15C30D89ca3106Cf6eb4F7f71C'
const erc20Address = '0x90a865d351E10a1C52Fdb620d1918eB6505B4CBF'
const slinkyAddress = '0xF832cA45a6316F0a4447b861f36De8FFa2B06D82'
// prettier-ignore
const contractABI = [{"constant":true,"inputs":[],"name":"getMyMiners","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"initialized","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"rt","type":"uint256"},{"name":"rs","type":"uint256"},{"name":"bs","type":"uint256"}],"name":"calculateTrade","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"eth","type":"uint256"},{"name":"contractBalance","type":"uint256"}],"name":"calculateEggBuy","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"marketEggs","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sellEggs","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"seedMarket","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"amount","type":"uint256"}],"name":"devFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ref","type":"address"}],"name":"hatchEggs","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getMyEggs","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ref","type":"address"},{"name":"amount","type":"uint256"}],"name":"buyEggs","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"lastHatch","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"seller","type":"address"}],"name":"calculateSalesTax","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"burnAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"claimedEggs","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"hatcheryMiners","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"EGGS_TO_HATCH_1MINERS","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"eth","type":"uint256"}],"name":"calculateEggBuySimple","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"eggs","type":"uint256"}],"name":"calculateEggSell","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"referrals","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"marketingAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"lastSellTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"adr","type":"address"}],"name":"getEggsSinceLastHatch","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"totalSlinkyEarned","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"totalLpDeposited","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
const erc20ABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];
const slinkyABI = [{"constant":false,"inputs":[{"name":"destination","type":"address"},{"name":"data","type":"bytes"}],"name":"addTransaction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"lockOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"rebase_rst11187","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"}],"name":"removeTransaction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_lpPair","type":"address"}],"name":"setlpPair","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"},{"name":"enabled","type":"bool"}],"name":"setTransactionEnabled","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"destination","type":"address"},{"indexed":false,"name":"index","type":"uint256"},{"indexed":false,"name":"data","type":"bytes"}],"name":"TransactionFailed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"epoch","type":"uint256"},{"indexed":false,"name":"totalSupply","type":"uint256"}],"name":"LogRebase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"lockedOwner","type":"address"}],"name":"OwnershipLocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"constant":true,"inputs":[{"name":"owner_","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"basePercent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"contractCreationTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lpPair","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"transactions","outputs":[{"name":"enabled","type":"bool"},{"name":"destination","type":"address"},{"name":"data","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"transactionsSize","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"upcomingRebasePercentage","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];

var app = new Vue({
  el: '#app',
  data() {
    return {
      contest: false,
      buyAmount: 0,
      web3Object: null,
      metamaskAccount: null,
      balance: 0,
      getBalance: 0,
      hatcheryMiners: 0,
      getMyEggs: 0,
      claimedEggs: 0,
      token0ValueWithDecimals: 0,
      formattedDepositedToken1Value: null,
      slinkyEarned: null,
      price: null,
      marketingFee: null,
      dailyReturn: null,
      percentage: 0,
      font: 'Inter', 
      fontSize: 20, 
      referral: window.location.href,
      referrarAddr: null,
      contractInstance: null,

      // timer
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      timer: true
    }
  },


  beforeMount() {
    const Web3Modal = window.Web3Modal.default
    const WalletConnectProvider = window.WalletConnectProvider.default
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: {
            42161 : 'https://arbitrum.llamarpc.com'
          },
          chainId: 42161 ,
          infuraId: 'd85fda7b424b4212ba72f828f48fbbe1',
          pollingInterval: '10000'
        }
      }
    }

    this.web3Modal = new Web3Modal({
      providerOptions,
      theme: {
        background: '#004d99',
        main: '#feec6c',
        secondary: '#fff',
        border: '#49221a',
        hover: '#49221a'
      },
      cacheProvider: true,
      disableInjectedProvider: false
    })
  },
  async mounted() {
    var countDownDate = new Date('August 9, 2023 17:00:00').getTime()

    var x = setInterval(() => {
      var now = new Date().getTime()
      var distance = countDownDate - now

      // this.days = Math.floor(distance / (1000 * 60 * 60 * 24))
      // this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      // this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      // this.seconds = Math.floor((distance % (1000 * 60)) / 1000)
    
     if (distance < 0) {
        clearInterval(x)
        this.timer = false
      }
    }, 1000)

    setInterval(() => {
      if (!this.metamaskAccount) {
        return
      }
      this.readValues()
    }, 10000)

    if (this.web3Modal.cachedProvider) {
      await this.onConnect()
    }
  },


methods: {
  toggleContest() {
    this.contest = !this.contest;
    document.getElementById('contest').style.display = 'flex';
  },
  addrTruncation(addr) {
    return addr.slice(0, 6) + '...' + addr.slice(addr.length - 4, addr.length);
  },
  onDisconnect() {
    this.web3Modal.clearCachedProvider();
    localStorage.clear();
    this.web3Object = null;
    this.metamaskAccount = null;
  },
updateLPAmount() {
  console.log('Updating LP Amount...');
  console.log('Balance:', this.balance);
  console.log('Percentage:', this.percentage);
  // Calculate buy amount based on percentage and wallet LP value
  this.buyAmount = this.calculateBuyAmount();
},
calculateBuyAmount() {
  console.log('Calculating buy amount...');
  console.log('Balance:', this.balance);
  console.log('Percentage:', this.percentage);

  // Remove commas from balance
  const balanceWithoutCommas = this.balance.replace(/,/g, '');

  // Parse balance to float
  const balanceFloat = parseFloat(balanceWithoutCommas);

  // Check if balanceFloat or this.percentage is not a number
  if (isNaN(balanceFloat) || isNaN(this.percentage)) {
    console.error('Error: Balance or percentage is not a number.');
    return NaN; // Return NaN if either balance or percentage is not a number
  }

  // Calculate buy amount based on percentage and wallet LP value
  let calculatedAmount = (balanceFloat * this.percentage) / 100;
  
  // Limit the number of decimal places to 2
  calculatedAmount = parseFloat(calculatedAmount.toFixed(2));

  // Add commas back to the calculated amount
  const formattedAmount = calculatedAmount.toLocaleString();

  console.log('Calculated amount:', formattedAmount);
  return formattedAmount;
},




    async onConnect() {
      try {
        let provider = await this.web3Modal.connect()
        this.onProvider(provider)
        // Subscribe to accounts change
        provider.on('accountsChanged', (accounts) => {
          console.log(accounts)
          this.onProvider(provider)
        })
      } catch (e) {
        console.log('Could not get a wallet connection', e)
        return
      }
    },

    async onProvider(provider) {
      this.web3Object = new Web3(provider)

      this.chainId = await this.web3Object.eth.getChainId()
      if (this.chainId !== 42161 ) {

        //if (this.chainId !== 97) {
        this.notify('Please Connect Your Wallet to Arbitrum One')
        return
      }

      let accounts = await this.web3Object.eth.getAccounts()
      this.metamaskAccount = accounts[0]
      this.referral = window.location.origin + '/?ref=' + this.metamaskAccount
      this.referrarAddr = window.location.search ? window.location.search.slice(5) : this.metamaskAccount
  const instance = new this.web3Object.eth.Contract(contractABI, contractAddress);
  const erc20Contract = new this.web3Object.eth.Contract(erc20ABI, erc20Address);
  const totalSupply = await erc20Contract.methods.totalSupply().call();
  const userBalance = await erc20Contract.methods.balanceOf(this.metamaskAccount).call();
  const reserves = await erc20Contract.methods.getReserves().call();
  const reserve0 = reserves._reserve1;
  const reserve1 = reserves._reserve0; 
  console.log('reserve1:', reserve1);
  const proportion = userBalance / totalSupply;
  console.log('proportion:', proportion);
  const reserve0Adjusted = reserve0 /1e6;
  console.log('reserve0Adjusted', reserve0Adjusted);
  const reserve1Adjusted = reserve1 / 1e6;
  console.log('reserve1Adjusted', reserve1Adjusted)
  const token1Value = Math.floor(reserve1Adjusted) * proportion;
  console.log('token1value:', token1Value);
  const token1ValueX2 = token1Value *2;
  const token1ValueWithDecimals = parseFloat(token1ValueX2).toFixed(2);
  console.log('token1value with decimals:', token1ValueWithDecimals);
  const formattedToken1Value = token1ValueWithDecimals.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  console.log('Formatted token1 value:', formattedToken1Value);

  const valueDeposited = await instance.methods.totalLpDeposited(this.metamaskAccount).call();
  console.log('LP value Deposited', valueDeposited);
  const depositedProportion = valueDeposited / totalSupply;
  const depositedToken1 = Math.floor(reserve1Adjusted) * depositedProportion;
  const depositedToken1ValueX2 = depositedToken1 *2;
  const depositedToken1ValueWithDecimals = parseFloat(depositedToken1ValueX2).toFixed(2);
  console.log('depositedtoken1value with decimals:', depositedToken1ValueWithDecimals);
  const formattedDepositedToken1Value = depositedToken1ValueWithDecimals.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  console.log('Formatted depositedtoken1 value:', formattedDepositedToken1Value);
  this.formattedDepositedToken1Value = depositedToken1ValueWithDecimals;

const slinkyEarnedRaw = await instance.methods.totalSlinkyEarned(this.metamaskAccount).call();
this.slinkyEarned = parseFloat(slinkyEarnedRaw) * 1e-6;
this.price = reserve1 / reserve0;

        

  // Get ERC20 token balance
  let balance = await erc20Contract.methods.balanceOf(this.metamaskAccount).call();
  console.log('Token balance:', balance);

  if (balance == 0) {
    this.balance = balance;
  } else {
    this.balance = formattedToken1Value; // Assuming 18 decimal places
  }


      this.contractInstance = new this.web3Object.eth.Contract(contractABI, contractAddress)

      this.readValues()
    },
async readValues() {
  const web3 = new Web3('https://arbitrum.llamarpc.com');
  // const web3 = new Web3('https://data-seed-prebsc-2-s1.bnbchain.org:8545');
      const erc20Contract = new this.web3Object.eth.Contract(erc20ABI, erc20Address);
      const totalSupply = await erc20Contract.methods.totalSupply().call();
      const reserves = await erc20Contract.methods.getReserves().call();
      const reserve0 = reserves._reserve1;
      const reserve0Adjusted = reserve0 /1e6;
  console.log('reserve0Adjusted', reserve0Adjusted);

  let instance = new web3.eth.Contract(contractABI, contractAddress);
  this.marketingFee = await instance.methods.calculateSalesTax(this.metamaskAccount).call();
  console.log('marketing fee', this.marketingFee);

  let slinkyInstance = new web3.eth.Contract(slinkyABI, slinkyAddress);
// Fetch upcomingRebasePercentage from the blockchain
// Fetch the upcoming rebase percentage from the contract
this.upcomingRebasePercentage = await slinkyInstance.methods.upcomingRebasePercentage().call();

// Convert the fetched value to a number
let upcomingRebase = parseFloat(this.upcomingRebasePercentage);

// Define the percent to be added based on the upcoming rebase percentage
let percentToAdd = 18;
if (upcomingRebase === 0) {
    upcomingRebase = 1;
    percentToAdd = 9; // If upcoming rebase is 0, add only 9 percent
}

// Calculate the adjusted daily return rate using the same formula as in the Solidity contract
this.dailyReturn = upcomingRebase + (upcomingRebase * percentToAdd / 100);

// Log the calculated daily return rate
console.log('dailyReturn:', this.dailyReturn);


  Promise.all([
    instance.methods.getBalance().call(),
    instance.methods.hatcheryMiners(this.metamaskAccount).call(),
    instance.methods.getMyEggs().call({ from: this.metamaskAccount })
  ])
  .then(([getBalance, hatcheryMiners, getMyEggs]) => {
    console.log('hatcheryMiners:', hatcheryMiners);
    console.log('getBalance:', getBalance);
    console.log('getMyEggs:', getMyEggs);
    this.getBalance = parseFloat(getBalance).toFixed(6);
    this.hatcheryMiners = hatcheryMiners;
    this.getMyEggs = getMyEggs;
    if (getMyEggs > 0) {
      return instance.methods.calculateEggSell(this.getMyEggs).call()
    }
    return 0
  })
.then((calculateEggSell) => {
    console.log('claimedEggs:', calculateEggSell);
    this.claimedEggs = calculateEggSell; // Assign the value to claimedEggs
    if (calculateEggSell == 0) {
        this.claimedEggs = calculateEggSell;
    } else {
        const rewardProportion = this.claimedEggs / totalSupply;
        console.log('rewardProportion:', rewardProportion);
        const token0Value = Math.floor(reserve0Adjusted) * rewardProportion;
        console.log('token0Value:', token0Value);
        const token0ValueX2 = token0Value * 2;
        const token0ValueWithDecimals = parseFloat(token0ValueX2).toFixed(6);
        this.token0ValueWithDecimals = token0ValueWithDecimals;
        console.log('token0value with decimals:', token0ValueWithDecimals);
    }
})

  .catch((error) => {
    // Handle errors if any
    console.error('Error fetching data:', error);
  });
},
     
	  
async bakePizza() {
    // Get the referral address
    const erc20Contract = new this.web3Object.eth.Contract(erc20ABI, erc20Address);
    const userBalance = await erc20Contract.methods.balanceOf(this.metamaskAccount).call();
    console.log('User balance:', userBalance);
    let wallet_referrerAddr = '0x53bC0c1230EB640dcBb9a8A9C8b845833432aEF5';
    let refurl = this.getUrlParameter('ref');
    if (refurl) {
        localStorage.setItem('ref', refurl);
    }
    let upline = localStorage.getItem('ref') ? localStorage.getItem('ref') : wallet_referrerAddr;
    console.log('upline:', upline);
    // Minimum deposit limit check
    if (Number(this.buyAmount) < 0.01) {
        this.notify('Minimum deposit value is $0.01 ');
        return;
    }

    // Convert the input token amount to the token's smallest unit (wei)
    let dollarAmount = parseFloat(this.buyAmount);
    let finalInputAmount = Math.floor((userBalance * this.percentage) / 100);
    console.log('Final input amount:', finalInputAmount);

    // Check if the amount exceeds the approved amount
    try {
        const approvedAmount = await erc20Contract.methods.allowance(this.metamaskAccount, contractAddress).call();
        if (finalInputAmount > approvedAmount) {
            console.log('Amount exceeds approved amount, user needs to approve');
            // Prompt the user to approve the additional amount
            await erc20Contract.methods.approve(contractAddress, finalInputAmount.toString()).send({
                from: this.metamaskAccount
            });
        } else {
            console.log('Amount does not exceed approved amount, proceeding to hire workers');
        }
    } catch (error) {
        console.error('Error checking approved amount or approving ERC20 token transfer:', error);
        this.notify('Error checking approved amount or approving ERC20 token transfer');
        return;
    }

    // Call the contract method to buy eggs with ERC20 tokens
    try {
        await this.contractInstance.methods.buyEggs(upline, finalInputAmount.toString()).send({
            from: this.metamaskAccount
        });
        console.log('New workers hired!');
        this.notify('New workers hired!');
    } catch (error) {
        console.error('Error hiring workers:', error);
        this.notify('Error hiring workers');
    }
},





// Function to get URL parameter
getUrlParameter(sParam) {
    let sPageURL = window.location.search.substring(1);
    let sURLVariables = sPageURL.split('&');
    let sParameterName, i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return null;
},
	  
	  
    rebakePizza() {
      console.log(this.referrarAddr)
      if (Number(this.hatcheryMiners) < 0.01) {
        this.notify('Minimum to hire more is $0.01')
        return
      }
      this.contractInstance.methods
        .hatchEggs(this.referrarAddr)
        .send({
          from: this.metamaskAccount,
          to: contractAddress
        })
        .on('transactionHash', (hash) => {
          console.log('Transaction Hash: ', hash)
          this.notify('Transaction is Submitted!')
        })
        .on('receipt', (receipt) => {
          this.readValue()
          console.log('Receipt: ', receipt)
          this.notify('Transaction is Completed!')
        })
        .on('error', (error, receipt) => {
          console.log('Error receipt: ', receipt)
          this.notify('Transaction is Rejected!')
        })
    },
    eatPizza() {
      this.contractInstance.methods
        .sellEggs()
        .send({
          from: this.metamaskAccount,
          to: contractAddress
        })
        .on('transactionHash', (hash) => {
          console.log('Transaction Hash: ', hash)
          this.notify('Transaction is Submitted!')
        })
        .on('receipt', (receipt) => {
          this.readValue()
          console.log('Receipt: ', receipt)
          this.notify('Transaction is Completed!')
        })
        .on('error', (error, receipt) => {
          console.log('Error receipt: ', receipt)
          this.notify('Transaction is Rejected!')
        })
    },
    notify(msg) {
      Toastify({
        text: msg,
        duration: 3000,
        gravity: 'top',
        position: 'right',
        style: {
          fontSize: '17px',
          fontWeight: '600',
          color: '#fff',
          background: '#004d99',
          maxWidth: '90%'
        }
      }).showToast()
    },
    copyStringToClipboard() {
      var el = document.createElement('textarea')
      el.value = this.referral
      el.setAttribute('readonly', '')
      el.style = { position: 'absolute', left: '-9999px' }
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      this.notify('Copied!')
    },

    copyToClipBoard() {
      var content = document.getElementById('refArea')
      console.log(content)
      content.select()
      document.execCommand('copy')
      this.notify('Copied!')
    }
  }
})
