var ssymbol;
var scompName;

const autoCompleteJS = new autoComplete({
  name: "symbol",
  data: {
    src: async () => {
      try {
        // Loading placeholder text

        console.log("search");

        document.getElementById("search").setAttribute("placeholder", "Loading...");
        // Fetch External Data Source
        const source = await fetch("./db/generic.json");
        const data = await source.json();
        // Post Loading placeholder text
        document.getElementById("search").setAttribute("placeholder", autoCompleteJS.placeHolder);
        //document.querySelector(".autoComplete").setAttribute("placeholder", autoCompleteJS.placeHolder);
        // Returns Fetched data
        return data;
      } catch (error) {
        return error;
      }
    },
    keys: ["Company", "Symbol"],
    cache: true,
    filter: (list) => {
      // Filter duplicates
      // incase of multiple data keys usage
      const filteredResults = Array.from(new Set(list.map((value) => value.match))).map((symbol) => {
        return list.find((value) => value.match === symbol);
      });

      return filteredResults;
    },
  },
  placeHolder: "What are you looking for today?",
  resultsList: {
    element: (list, data) => {
      const info = document.createElement("p");
      if (data.results.length) {
        info.innerHTML = `Displaying <strong>${data.results.length}</strong> out of <strong>${data.matches.length}</strong> results`;
      } else {
        info.innerHTML = `Found <strong>${data.matches.length}</strong> matching results for <strong>"${data.query}"</strong>`;
      }
      list.prepend(info);
    },
    noResults: true,
    maxResults: 15,
    tabSelect: true,
  },
  resultItem: {
    element: (item, data) => {
      // Modify Results Item Style
      item.style = "display: flex; justify-content: space-between;";
      // Modify Results Item Content
      item.innerHTML = `
      <span style="text-overflow: ellipsis; white-space: nowrap; overflow: hidden; font-weight: 600">
        ${data.match}
      </span>
      <span style="display: flex; align-items: center; font-size: 10px; font-weight: 600; text-transform: uppercase; color: #3B71CA;">
        ${data.key}
      </span>`;
    },
    // highlight: true,
  },
  events: {
    input: {
      focus() {
        if (autoCompleteJS.input.value.length) autoCompleteJS.start();
      },
      selection(event) {
        const feedback = event.detail;
        console.log(feedback);
        autoCompleteJS.input.blur();
        // Prepare User's Selected Value
        const selection = feedback.selection.value[feedback.selection.key];
        // Render selected choice to selection div
        document.querySelector(".selection").innerHTML = selection;
        // Replace Input value with the selected value
        autoCompleteJS.input.value = selection;
        // Console log autoComplete data feedback
        console.log("selection " + selection);
        // console.log(feedback.selection.value.symbol + " " + feedback.selection.value.name);
        //var symbol = findSymbol(selection);
        // OpenScripDetailsModal(symbol, selection);
        // OpenScripDetailsModal("aapl", "Apple");
        ssymbol = feedback.selection.value.Symbol;
        scompName = feedback.selection.value.Company;
        OpenScripDetailsModal(feedback.selection.value.Symbol, feedback.selection.value.Company);
      },
    },
  },
});
