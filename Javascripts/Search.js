$(function () {
  var availableTags = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"];

  console.log(availableTags);
  $("#instrument").autocomplete({
    source: availableTags,
  });
});

document.getElementById("instrument").addEventListener("keyup", function () {
  console.log("searchinig");

  const settings = {
    async: true,
    crossDomain: true,
    url: "https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f567001d02msh03e539ab90e20dfp190f41jsn35ad1072d098",
      "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log("search");
    const symbols = [];
    const shortnames = [];
    for (const quote of response.quotes) {
      availableTags.push(quote.symbol);
      symbols.push(quote.symbol);
      shortnames.push(quote.shortname);
    }
  });
});
