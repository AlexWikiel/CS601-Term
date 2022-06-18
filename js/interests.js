// CS601 Term
// W. Alex Wikiel
// strict is disabled

// Inject callback to fire when all all elements are loaded.
function ready(callback) {
  // in case the document is already rendered
  if (document.readyState !== "loading") {
    callback();
  }
  // modern browsers
  else if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", callback);
  }
}

// Function executes when browser has initialized all elements.
ready(function () {
  var list = "beer";
  getData("../data/beer.json");
});

function changeList() {
  const table = document.getElementById("breweries_table");
  console.log(table.caption)
  if (table.caption.innerText === "Local Rhode Island Breweries") {
    table.parentNode.removeChild(table);
    getData("../data/restaurants.json");
  } else {
    table.parentNode.removeChild(table);
    getData("../data/beer.json");
  }
}

// get the data and process it
function getData(path) {
  fetch(path)
    .then((response) => response.json())
    .then((data) => processData(data))
    .catch((error) => handleError(error));
}

// if we get an error lets throw up an alert
function handleError(error) {
  console.log(error)

  alert(
    "There was an error getting the json file, please check that 'beer.json' file exists.\n\nError Message - " +
    error
  );
}

// Create a table and parse data to table
function processData(data) {
  console.log("My Data ", data);
  const table = createTable(data);

  for (let record of data.breweries) {
    const tr = createRow();
    tr.children.rank.appendChild(document.createTextNode(record.rank));
    tr.children.name.appendChild(document.createTextNode(record.name));
    tr.children.location.appendChild(document.createTextNode(record.location));
    table.appendChild(tr);
  }
  document.getElementById("asideForTable").appendChild(table);
}

// build the table with four columns
function createTable(data) {
  const table = document.createElement("table");
  table.appendChild(createCaption(data));
  const tr = document.createElement("tr");
  tr.appendChild(createColumn("Rank"));
  if (data.title === "Local Rhode Island Breweries"){
    tr.appendChild(createColumn("Brewery Name"));
  } else {
    tr.appendChild(createColumn("Restaurant Name"));
  }
  tr.appendChild(createColumn("Location"));
  table.appendChild(tr);
  table.id = "breweries_table";
  table.className = "beertable"
  return table;
}

// get the title from the json
function createCaption(data) {
  const cap = document.createElement("caption");
  cap.innerText = data.title;
  return cap
}

// build a column
function createColumn(columnName) {
  const th = document.createElement("th");
  th.appendChild(document.createTextNode(columnName));
  return th;
}

//build a row
function createRow() {
  const tr = document.createElement("tr");
  tr.appendChild(createCell("rank"));
  tr.appendChild(createCell("name"));
  tr.appendChild(createCell("location"));
  return tr;
}

// build a cell
function createCell(id) {
  const td = document.createElement("td");
  td.id = id;
  return td;
}
