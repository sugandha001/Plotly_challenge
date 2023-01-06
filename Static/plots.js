function init(){
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector.append("option").text(sample).property("value", sample);
    });
  });
}


// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
   
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
      PANEL.append("h6").text(`ID:${result.id}\n`);
      PANEL.append("h6").text(`ETHNICITY:${result.ethnicity}\n`);
      PANEL.append("h6").text(`GENDER:${result.gender}\n`);
      PANEL.append("h6").text(`AGE:${result.age}\n`);
      PANEL.append("h6").text(`LOCATION:${result.id}\n`);
      PANEL.append("h6").text(`BBTYPE:${result.location}\n`);
      PANEL.append("h6").text(`WFREQ:${result.wfreq}\n`);
  

    });
}