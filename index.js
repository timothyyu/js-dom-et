// Loop through array of objects and print the value of the 'name' property for each one
var count = 0

// Reference to tbody element
var $tbody = document.querySelector("tbody");

function renderTable(){
    $tbody.innerHTML = "";
    for (var i = 0; i < dataSet.length; i++) {
        //Obtain current object and fields
        var currentObj = dataSet[i];
        var objFields = Object.keys(currentObj);
        //new row in tbody, index set i + index start
        var $row = $tbody.insertRow(i);
        
        for (var j = 0; j < objFields.length; j++) {
        // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
        var field = objFields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = currentObj[field];
        }
        // count = i;
    }

    //console.log(count);
};

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