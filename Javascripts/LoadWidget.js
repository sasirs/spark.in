function loadNews() {
  document.getElementById("news").innerHTML = "";
  var script = document.createElement("script");
  script.setAttribute("src", "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js");
  script.text = JSON.stringify({
    market: "stock",
    colorTheme: "light",
    isTransparent: false,
    displayMode: "regular",
    width: "100%",
    height: "1000",
    locale: "in",
  });
  document.getElementById("news").appendChild(script);
}

function loadTrendings(id, symbol) {
  //var temp = "NASDAQ:" + symbol;
  // document.getElementById(id).innerHTML = "";
  var script = document.createElement("script");
  script.setAttribute("src", "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js");
  script.text = JSON.stringify({
    symbol: symbol,
    width: "340",
    height: "190",
    locale: "in",
    colorTheme: "light", // Corrected colorTheme value to "light"
    autosize: false,
    dateRange: "12M", // You might want to specify a valid date range here
  });
  document.getElementById(id).appendChild(script);
}
function PerformanceDataBuilder(symbol) {
  console.log("PerformanceDataBuilder");

  // var json = [{ name: "NASDAQ:AAPL", displayName: "Apple" }, { name: "NASDAQ:MSFT", displayName: "Microsoft" }, { name: "NASDAQ:TSLA", displayName: "Tesla" }, { name: "NASDAQ:AMZN", displayName: "Amazon" }];
  var json = [
    {
      name: "Bonds",
      originalName: "Bonds",
      symbols: symbol,
    },
  ];
  loadPerformance(json);
}

function loadPerformance(json) {
  console.log("Loading loadPerformance" + JSON.stringify(json));
  document.getElementById("performdiv").innerHTML = "";
  var script = document.createElement("script");
  script.setAttribute("src", "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js");
  script.text = JSON.stringify({
    symbolsGroups: json,
    width: "700",
    height: "400",
    locale: "in",
    colorTheme: "light",
    showIntervalTabs: true,
    showSymbolLogo: true,
  });
  document.getElementById("performdiv").appendChild(script);
}

function loadCompProfile(symbol) {
  var temp = "NASDAQ:" + symbol;
  document.getElementById("comprofile").innerHTML = "";
  var script = document.createElement("script");
  script.setAttribute("src", "https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js");
  script.text = "{" + '"symbol": "' + temp + '",' + '"width": "380",' + '"height": "400",' + '"locale": "in",' + '"colorTheme": "light",' + '"showIntervalTabs": true' + "}";
  document.getElementById("comprofile").appendChild(script);
}

function loadStory(symbol) {
  var temp = "NASDAQ:" + symbol;
  document.getElementById("symbolstory").innerHTML = "";
  var script = document.createElement("script");
  script.setAttribute("src", "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js");
  script.text = "{" + '"symbol": "' + temp + '",' + '"chartOnly": false,' + '"isTransparent": false,' + '"width": "100%",' + '"height": "1300",' + '"interval": "1m",' + '"locale": "in",' + '"displayMode": "regular",' + '"colorTheme": "light",' + '"showIntervalTabs": true' + "}";
  document.getElementById("symbolstory").appendChild(script);
}

function loadtargetChart(symbol) {
  // var temp = "NASDAQ:" + symbol;
  document.getElementById("tagetchart").innerHTML = "";
  var script = document.createElement("iframe");
  //script.setAttribute("src", "https://jika.io/embed/forecast-price-target?symbol=AAPL");
  script.setAttribute("src", "https://jika.io/embed/forecast-price-target?symbol=" + symbol);
  script.setAttribute("width", "100%");
  script.setAttribute("height", "400");
  script.setAttribute("style", "background: #FFF; padding: 10px; border: none; border-radius: 15px; box-shadow: 0 2px 4px 0 rgba(0,0,0,.2)");
  document.getElementById("tagetchart").appendChild(script);

  // <iframe width="100%" height="619" style="background: #FFF; padding: 10px; border: none; border-radius: 15px; box-shadow: 0 2px 4px 0 rgba(0,0,0,.2)" src="https://jika.io/embed/forecast-price-target?symbol=AAPL"></iframe>
}
function loadFinancials(symbol) {
  var temp = "NASDAQ:" + symbol;
  document.getElementById("financial").innerHTML = "";
  var script = document.createElement("script");
  script.setAttribute("src", "https://s3.tradingview.com/external-embedding/embed-widget-financials.js");
  script.text = "{" + '"symbol": "' + temp + '",' + '"chartOnly": false,' + '"isTransparent": false,' + '"width": "100%",' + '"height": "830",' + '"interval": "1m",' + '"locale": "in",' + '"displayMode": "regular",' + '"colorTheme": "light",' + '"showIntervalTabs": true' + "}";
  document.getElementById("financial").appendChild(script);
}

function loadTechAnalysis(symbol) {
  var temp = "NASDAQ:" + symbol;
  document.getElementById("techananysis").innerHTML = "";
  var script = document.createElement("script");
  script.setAttribute("src", "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js");
  script.text = "{" + '"symbol": "' + temp + '",' + '"chartOnly": false,' + '"isTransparent": false,' + '"width": "100%",' + '"height": "400",' + '"interval": "1m",' + '"locale": "in",' + '"colorTheme": "light",' + '"showIntervalTabs": true' + "}";
  document.getElementById("techananysis").appendChild(script);
}
function loadScripChart(symbol, compName) {
  document.getElementById("scripChart").innerHTML = "";
  var script = document.createElement("script");
  script.setAttribute("src", "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js");
  script.text = "{" + '"symbols": [["' + compName + '", "' + symbol + '"]],' + '"chartOnly": false,' + '"width": "100%",' + '"height": "430",' + '"locale": "in",' + '"colorTheme": "light",' + '"autosize": false' + "}";
  document.getElementById("scripChart").appendChild(script);
}

function loadTopGainersandLossers(desti, imgs, symbol, url) {
  console.log("loading " + desti);
  var isIndex = 0;
  if (imgs === null || imgs === "") {
    isIndex = 1;
  }
  document.getElementById(desti).innerHTML = "";

  if (isIndex != 1) {
    var image = document.createElement("div");
    image.className = "complogo mt-4 ms-3 mb-3";
    image.innerHTML = '<img src="' + imgs + '" alt="" srcset="" style="width: 2.5rem;">';
    document.getElementById(desti).appendChild(image);
  }
  var script = document.createElement("script");
  script.setAttribute("src", url);
  script.text = "{" + '"width": "100%",' + '"height": "100%",' + '"symbol": "' + symbol + '",' + '"locale": "in",' + '"interval": "1D"' + "}";

  document.getElementById(desti).appendChild(script);
}

var sector = [];
function loadtopsectors() {
  sector = [{ name: "Consumer Non-Durables" }, { name: "Health Services" }, { name: "Non-Energy Minerals" }, { name: "Consumer Services" }, { name: "Finance" }, { name: "Construction" }, { name: "Information" }, { name: "Finance and Insurance" }, { name: "Educational Services" }, { name: "Health Care and Social Assistance" }, { name: "Accommodation and Food Services" }, { name: "Industrial Services" }, { name: "Energy Minerals" }, { name: "Health Technology" }, { name: "Process Industries" }, { name: "Information" }, { name: "Miscellaneous" }, { name: "Manufacturing" }, { name: "Commercial Services" }, { name: "Technology Services" }, { name: "Distribution Services" }, { name: "Other Services (except Public Administration)" }, { name: "Consumer Durables" }, { name: "Wholesale Trade" }, { name: "Electronic Technology" }, { name: "Public Administration" }, { name: "Producer Manufacturing" }, { name: "Mining, Quarrying, and Oil and Gas Extraction" }, { name: "Government" }, { name: "Communications" }, { name: "Arts, Entertainment, and Recreation" }, { name: "Professional, Scientific, and Technical Services" }, { name: "Retail Trade" }];
  for (var i = 1; i < 7; i++) {
    console.log(sector[i].name);
    document.getElementById("topsector" + i).innerHTML = sector[i].name;
  }
}

function OpenScripDetailsModal(symbol, comp) {
  //  var val = val.substring(0, val.indexOf("-"));

  // var iframe = document.getElementById('scripChart');
  // let url = 'https://jika.io/embed/area-chart?symbol=';
  // url = url + val + '&selection=one_month&closeKey=close';
  // iframe.src = url;

  // var values = val.split("-");
  loadScripChart(symbol + "|1D", comp);

  document.getElementById("scripcontainer").style.display = "";
  document.getElementById("nonscripcontainer").style.display = "none";

  loadTechAnalysis(symbol);
  loadFinancials(symbol);
  loadCompProfile(symbol);
  loadStory(symbol);
  loadtargetChart(symbol);
}
