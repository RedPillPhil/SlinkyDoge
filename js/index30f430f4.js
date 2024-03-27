<html lang="en">


<head>
    <meta charset="utf-8">
    <link rel="icon" href="favicon.ico">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="theme-color" content="#000000">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="">
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
        rel="stylesheet">
	<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="../cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Slinky Factory</title>
    <link href="css/global.css" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">

    <style>
        .app__contestmodal {
            position: fixed;
            align-items: center;
            display: flex;
            flex-direction: column;
            height: 100vh;
            width: 100%;
            z-index: 1000;
            background-color: rgba(0, 0, 0, .9);
            top: 0;
            bottom: 0;
        }

        .app__contestmodalmargin {
            margin-bottom: 70px;
            margin-top: 70px;
            overflow-y: scroll;
            width: 70%
        }

        .app__contestmodalmargin>h5 {
            color: #f9c34e;
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 50px;
            text-align: center;
            width: 100%
        }

        .app__contestmodalmargin>h6 {
            color: #f9c34e;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 10px
        }

        .app__contestmodalmargin>h6>span {
            color: #fff;
            font-size: 14px;
            font-weight: 500
        }

        .app__contestmodalmargin>p {
            color: #fff;
            font-size: 14px;
            margin-bottom: 30px
        }

        .app__contestmodalmargin>p>a {
            background: linear-gradient(90deg, currentColor 33.33333%, transparent 0 66.66667%, currentColor 0) 0 100% /300% 1px no-repeat;
            background: linear-gradient(90deg, currentColor 33.33333%, transparent 0 66.66667%, currentColor 0) var(--d, 0) 100% /300% 1px no-repeat;
            color: #fff;
            cursor: pointer;
            font-size: 14px;
            font-weight: 400;
            text-decoration: none;
            transition: .5s
        }

        .app__contestmodalmargin>p>a:hover {
            --d: 100%;
            color: #f9c34e
        }

        .app__contestmodalclose {
            background-color: #f9c34e;
            border: none;
            border-radius: 5px;
            color: #fff;
            cursor: pointer;
            font-weight: 500;
            outline: none;
            padding: 5px 10px;
            position: absolute;
            right: 20px;
            top: 20px;
            transition: .35s
        }

        .app__contestmodalclose:hover {
            -webkit-transform: scale(.98);
            transform: scale(.98)
        }
    </style>
    <style>
        #Days,
        #Hours,
        #Minutes,
        #Seconds {
            text-align:center ;
            color:#f9c34e;
        }

        .time-content {
            width: 100%;
            margin: 0;
            color: white;
        }

        .time-content p {
            font-size: 40px;
            font-weight: 600;
            text-align: center;
            font-family: "Chewy";
            color:white;
        }

        .time-content small {
            display: inline-block;
            width: 60px;
            font-family: sans-serif;
            font-size: 12px;
            font-weight: 800;
            color: white;
            text-align: center;
            border-radius: 3px;
            background-color: #f9c34e;
            margin: 10px 7px 0 8px;
        }

        h2 {
            color: white;
        }

        #dateEnd,
        #action {
            display: block;
            margin: 0 auto;
        }

        .box-time {
            padding: 9px;
            margin: 0 10px;
            position: relative;
            width: 60px;
            height: 60px;
            line-height: 45px;
            border-radius: 4px;
            color: #555555;
            background: rgb(235, 235, 235);
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }

        .box-time:before {
            content: "";
            background: darkgrey;
            position: absolute;
            z-index: 10;
            top: 31px;
            left: 0;
            width: 60px;
            height: 2px;
            border-bottom: 1px solid #fff;
        }

        .timerr span {
            display: grid;
            justify-content: center;
            margin: auto;
            width: 100%;
            text-align: center;
        }
    </style>
</head>

<body>
    <div id="app">
        <div class="App">
            <div class="home">
                <div class="container">
                    <div class="header">
                        <div>
                            <a class="nav-item" href="https://slinkydoge.xyz" target="_blank" rel="noopener noreferrer">
                                 HOME  
                            </a>

                            <a class="nav-item" href="https://traderjoexyz.com/arbitrum/trade?inputCurrency=0xF832cA45a6316F0a4447b861f36De8FFa2B06D82&outputCurrency=0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9" target="_blank" rel="noopener noreferrer">
                                  TRADE  
                            </a>
                           

                            <a class="nav-item" href="https://dexscreener.com/arbitrum/0x90a865d351e10a1c52fdb620d1918eb6505b4cbf" target="_blank" rel="noopener noreferrer">
                                  DEXSCREENER 
                            </a>
                           
    
                        </div>
<div style="text-align: center;">
    <img src="images/logo.png" alt="logo" class="logo">
</div>

                        <button v-if="metamaskAccount" @click.prevent="onDisconnect" type="button"
                            class="walletWrapper">
                            <span class="address">Disconnect</span>
                        </button>
                        <button v-else @click.prevent="onConnect" type="button" class="walletWrapper">
                            <span class="address">Connect Wallet</span>
                        </button>
                    </div>
<h1 class="slogan">SLINKY FACTORY</h1>



                    <div style="text-align:center">
                    </div>
                    <div class="mainContent">
                        <div class="box leftBox">
                           <!-- <div class="dataRow">
                                <div class="name">Contract Value</div>
                                <div class="value">{{getBalance}} SLINKY</div>
                            </div>-->
<div class="dataRow">
  <div class="name">Wallet LP Value</div>
  <div class="value">${{ balance }}</div>
</div>
<div class="dataRow">
  <div class="name">Your Workers</div>
  <div class="value">{{ Math.round(hatcheryMiners / 1000) }}</div>
</div>
<div class="slider-container">
  <input type="range" min="1" max="100" v-model="percentage" @input="updateLPAmount" class="slider glowing-slider" style="width: 80%; margin-bottom: 20px;">
  <span :style="{ fontFamily: font, fontSize: fontSize + 'px', color: 'white' }">{{ percentage }}%</span>
</div>
<span class="ant-input-affix-wrapper antInput">
  <span class="ant-input-prefix">
    <span class="prefix">$</span>
  </span>
  <input class="ant-input" v-model="buyAmount" type="text" readonly>
</span>


                            <button class="buyButton" @click.prevent="bakePizza">Hire Workers</button>
                            <div class="actionWrapper">
                                <div class="dataRow">
                                    <div class="name">Slinky's Produced</div>
                                    <div class="value">
                                        <span> {{token0ValueWithDecimals}} SLINKY</span>
                                    </div>
                                </div>
                                <div class="actionButtons">
                                    <button @click.prevent="rebakePizza">Hire More</button>
                                    <button @click.prevent="eatPizza">Claim Slinky</button>
                                   
                                </div>
                            </div>
                        </div>
                        <div class="box rightBox">
                            <div class="referral">
                                <h1>Referral Link</h1>
                                <p>Refer a user and get a bonus boost to your mining power of 15% of the amount they add</p>
                                <div class="refWrapper">
                                    <input v-if="metamaskAccount" id="refArea" class="referralLink" :value="referral" />
                                    <div v-else @click.prevent="onConnect" class="copyButton"
                                        style="width:100%; margin-right: 20px;text-align: center;">Connect Wallet</div>
                                    <button class="copyButton" @click.prevent="copyStringToClipboard">COPY</button>
                                </div>
                            </div>
                            <div class="contractInfo">
                                <img src="images/grillgif.gif" alt="grill">
                                <div class="data">
                                    <h1>Factory Info</h1>
               
<div class="dataRow">
    <div class="name">Daily Return</div>
    <div class="value" v-if="dailyReturn !== null">{{ dailyReturn.toFixed(2) }}%</div>
    <div class="value" v-else>N/A</div>
</div>
<div class="dataRow">
    <div class="name">APR</div>
    <div class="value" v-if="dailyReturn !== null">{{ dailyReturn.toFixed(0) *365 }}%</div>
    <div class="value" v-else>N/A</div>
</div>
<div class="dataRow">
    <div class="name">Marketing Fee</div>
    <div class="value" v-if="marketingFee !== null">{{ ((1000 - marketingFee) / 10).toFixed(1) }}%</div>
    <div class="value" v-else>N/A</div>
</div>
<div class="dataRow">
    <div class="name">Value Deposited</div>
    <div class="value" v-if="dailyReturn !== null">${{formattedDepositedToken1Value}}</div>
    <div class="value" v-else>N/A</div>
</div>
                                    <div class="dataRow">
                                        <div class="name">Value Earned</div>
                                        <div class="value">N/A</div>
                                    </div>
                                    <div class="dataRow">
                                        <div class="name">Net P/L</div>
                                        <div class="value">N/A</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <div class="buttonGroup">
                            <a class="nav-item" href="https://slinkydoge.xyz" target="_blank" rel="noopener noreferrer">
                                HOME
                            </a>
                            <a class="nav-item" href="https://traderjoexyz.com/arbitrum/trade?inputCurrency=0xF832cA45a6316F0a4447b861f36De8FFa2B06D82&outputCurrency=0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb" target="_blank" rel="noopener noreferrer">
                                TRADE
                            </a>

                            <a class="nav-item" href="https://dexscreener.com/arbitrum/0x90a865d351e10a1c52fdb620d1918eb6505b4cbf" target="_blank" rel="noopener noreferrer">
                                  DEXSCREENER 
                            </a>
                           

                        <div class="socialMedias">
                            <a href="https://arbiscan.io"
                                target="_blank" rel="noopener noreferrer">
                                <img src="data:image/png;base64,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" style="filter: grayscale(100%)"
                                    alt="arbscan">
                            </a>
                            <a href="https://twitter.com/slinkydogey" target="_blank" rel="noopener noreferrer">
                                <img src="data:image/png;base64,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" style="filter: grayscale(100%)"
                                    alt="twitter">
                            </a>
                            <a href="https://t.me/slinkydoge" target="_blank" rel="noopener noreferrer">
                                <img src="data:image/png;base64,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" style="filter: grayscale(100%)"
                                    alt="telegram">
                            </a>

							
							
                        </div>
                    </footer>
                </div>
            </div>
        </div>
        <div v-show="contest" id="contest" class="app__contestmodal" style="display:none">
            <button class="app__contestmodalclose" @click.prevent="toggleContest">Close</button>
            <div class="app__contestmodalmargin">
                <h5>Creators Contest</h5>
                <p>Win a juicy BNB price pool without the need of a huge following!</p>
                <h6>For who is this competition?</h6>
                <p>For anyone who has a social following on Tiktok, Youtube, Twitter, Reddit,.... Small to medium sized
                    accounts. This is for all of us.<br>
                    <br>We will have different measures in place to value your
                    content individually depending on many KPIs such as views, comments, likes, post quality and
                    quantity.<br>
                    <br>
                    <span style="color: rgb(232, 65, 66); font-weight: 600; font-size: 16px;">Prize
                        pool:</span> 15% of the total marketing wallet fees taken by 20th of September. The total prize pool
                    amount will be announced on September 20th.
                </p>
                <h6>Competition Start: <span>07 of August</span>
                </h6>
                <h6>Competition End: <span>10 of septembr</span>
                </h6>
                <h6>Prize pool distribution:</h6>
                <p>#1 - 30%<br>#2 - 20%<br>#3 - 15%<br>#4 - 10%<br>#5 - 8%<br>#6 - 6%<br>#7 - 4%<br>#8 - 3%<br>#9 -
                    2%<br>#10 - 2%<br>
                </p>
                <h6>Competition Details &amp; Rules:</h6>
                <p>• Put our website link (<a href="index-2.html" rel="noreferrer"
                        target="_top">https://www.bakedPizza.app</a>) in your post, bio or clearly mention it in
                    the video, otherwise your post will not be valued.<br>• Submit your material to <a
                        href="#" rel="noreferrer" target="_blank">@Robart_harry</a> on TG
                    <br>• Post as many times as you wish to increase your chances to win. Not only the quality
                    counts, but also the quantity.</p>
            </div>
        </div>
    </div>
    <script src="cdn.jsdelivr.net/npm/vue%402/dist/vue.js">
    </script>
    <link rel="stylesheet" type="text/css" href="cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css">
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js">
    </script>
    <script type="text/javascript" src="unpkg.com/web3%401.2.11/dist/web3.min.js">
    </script>
    <script type="text/javascript" src="unpkg.com/web3modal%401.9.0/dist/index.js">
    </script>
    <script type="text/javascript" src="unpkg.com/%40walletconnect/web3-provider%401.2.1/dist/umd/index.min.js">
    </script>
    <script type="text/javascript" src="js/index30f430f4.js?v=3">
    </script>
</body>




</html>
