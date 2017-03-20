var jsonURL = "https://braykion.herokuapp.com/api/gestures/";
var baseURL = "http://braykion.herokuapp.com";
var nextURL = "";
var prevURL = "";
var searchTerm = "";
var searchURL = baseURL + "/api/items/search/" + searchTerm;


function loadJSON(file, callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4) {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

 function sendJSON(url, data, callback)
 {
    var xobj = new XMLHttpRequest();
    xobj.open('PUT', url, true);
    xobj.setRequestHeader('Content-Type', 'application/json');
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4) {
             callback(xobj.responseText);
          }
    };
    console.log(JSON.stringify(data));
    xobj.send(JSON.stringify(data));
 }

var Item = function Item(_id, label, description) {
    this.id = id;
    this.label = label
    this.description = description;
};

function load() {
    loadJSON(jsonURL, function(response) {
        var itemsJson = JSON.parse(response);
        loadItemsTable(itemsJson)
    });
    
    
}

function clearTable()
{
	var table = document.getElementById("itemsTable");
while(table.rows.length > 0) {
  table.deleteRow(0);
}
}

function next() {
	clearTable();
	jsonURL = baseURL + nextURL;
	load();
}

function previous() {
	clearTable();
	jsonURL = baseURL + prevURL;
	load();
}

function search()
{
    searchTerm = document.getElementById("searchBox").value;
    clearTable();
    jsonURL = searchURL + searchTerm;
    load();
    //console.log(jsonURL);
}

function loadItemsTable(itemsJson)
{
	var paginationObj = itemsJson["pagination"];
	if(paginationObj != null)
	{
	nextURL = paginationObj["next_page_endpoint"];
	prevURL = paginationObj["prev_page_endpoint"];


	var total_items = paginationObj["total_records"];
	var total_items_text = document.getElementById("total_items_text");
	total_items_text.innerHTML = "Total Items: " + total_items;

	var current_page = paginationObj["current_page"];
	var current_page_text = document.getElementById("current_page");
	current_page_text.innerHTML = current_page;
	}
	// We've got our items.  Let's parse and update the table!
	var itemsObj = itemsJson["gestures"];
	var output = document.querySelector('#itemsTable tbody');

itemsObj.forEach(function (item) {
    var row = document.createElement('tr');
    row.setAttribute('data-id', item["_id"]);

    ['description', 'barcode', 'price', 'taxable'].forEach(function (prop) {
        var td = document.createElement('td');
        td.setAttribute('data-label', prop);

        td.onclick = function() {

        	var tr = this.parentNode;

        	var OriginalContent = $(this).text();
        	
        	$(this).addClass("cellEditing");
        	$(this).html("<input type='text' value='" + OriginalContent + "' />");
        	$(this).children().first().focus();
            var label = $(this).attr("data-label");
            var id = tr.getAttribute("data-id");

        	$(this).children().first().keypress(function (e) 
                { 
                    
                    if (e.which == 13) 
                    {
                		var td = $(this).children().first();
                		{ 
                            var value = $(this).val(); 
                            $(this).parent().text(value); 
                			$(this).parent().removeClass("cellEditing"); 
                			save(id, label, value);
                		} 
                    }
        	   });

 $(this).children().first().blur(function(){
        $(this).parent().text(OriginalContent);
        $(this).parent().removeClass("cellEditing");
    });
        }

        td.appendChild(document.createTextNode(item[prop]));
        row.appendChild(td);
    });

    output.appendChild(row);
});

	console.log(itemsObj);
}

function save(id, label, value)
{
	// PUT api.grabngo.market/api/items/id/:id
    // First, let's construct our PUT URL

    var putURL = "https://braykion.herokuapp.com/api/gestures/id/" + id;

    var jsonBody = { };
    jsonBody[label] = value;

    sendJSON(putURL, jsonBody, function(response)
    {
        console.log(response);
    })
}