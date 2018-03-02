// Reference to tbody element
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datesearch");
var $searchBtn = document.querySelector("#search");
// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);
// Set filteredDates to dataSet initially
var filteredDates = dataSet;


function renderTable(){
    $tbody.innerHTML = "";
    for (var i = 0; i < dataSet.length; i++) {
        //Obtain current object and fields
        var currentObj = dataSet[i];
        var sightingNum = i + 1;
        currentObj[sightingNum] = sightingNum;
        var objFields = Object.keys(currentObj);
        //new row in tbody, index set i + index start
        var $row = $tbody.insertRow(i);
        for (var j = 0; j < objFields.length; j++) {
        // For every field in the address object, create a new cell at set its inner text to be the current value at the current field value
            var field = objFields[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = currentObj[field];
        
        }
    }
};



function handleSearchButtonClick() {
    //remove whitespace on input
    var filterDate = $dateInput.value.trim()
    
    filteredDates = dataSet.filter(function(currentObj) {
        return currentObject.datetime === filterDate;
    });
    renderTable();
  }

//Render table on page load
renderTable();

// Field Properties:

/* datetime: "1/1/2010",
city: "benton",
state: "ar",
country: "us",
shape: "circle",
durationMinutes: "5 mins.",
comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
}, */