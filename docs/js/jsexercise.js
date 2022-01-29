function evalNumber(){
    var inputValue = parseInt(prompt("Enter any five-digit number without commas"))
    if (isNaN(inputValue)||inputValue>99999||inputValue<10000||!(Number.isInteger(inputValue))) {
      alert(inputValue + " is not a valid 5-digit number.")
    } else if (inputValue%2==0){
      alert(inputValue + " is an even number.")
    } else {
      alert(inputValue + " is an odd number.")
    }
  }
  
  function greetings(){
    var currentHour = new Date().getHours();
    if (currentHour < 10) {
      alert("Good morning!");
    } else if (currentHour < 18) {
      alert("Good day!");
    } else {
      alert("Good evening!");
    }
  }
  
  function howdy(){
    var person = prompt("Please enter your name", "YOUR NAME HERE");
    alert("Howdy " + person);
  }
  
  function scopeValues() {
    if (0==0) {
      var x = 0;
      var y = 1;
    } else {
      alert("Why is 0 not 0?");
    };
  
    const z = x;
    alert("Use Inspect to see the console and inspect the code.")
    console.log("Check the sources to see this code and study the scope of the declarations.")
    console.log("Value of x as originally declared: " + x);
    console.log("Value of y as originally declared: " + y);
    var x = x+2;
    console.log("Value of x + 2: " + x);
    console.log("Value of z: " + z + " does not change.");
  };
  
  
  function changeTitle(){
    let selectedElement = document.getElementById("programCard");
    console.log(selectedElement);
    selectedElement.innerText = "DIGS";
    selectedElement.style.display = "none";
  
  }
  
  function functionSample(number){
    if (number===0) {
      console.log("Number is even.")
    } else if (number===1){
      console.log("Number is odd.")
    } else {
      number = number -2;
      return functionSample(number);
    }
  }
  //console.log(functionSample(36));
  
  function mapLoad(){
    //Define the lat lon coordinate
    var latLng = [41.789649, -87.599702];
  
    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
  
    var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
    var streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
  
    var map = L.map('map', {
      center: latLng,
      zoom: 16,
      layers: [streets]
    });
  
    var baseLayers = {
      "Grayscale": grayscale,
      "Streets": streets
    };
    L.control.layers(baseLayers).addTo(map);
    L.marker(latLng).addTo(map)
    .bindPopup("<b>UChicago<br>Campus</b>").openPopup();
  
    //Click event
    var popup = L.popup();
    function onMapClick(e) {
      popup
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(map);
    }
    map.on('click', onMapClick);
  }
  
  function parentFunction() {
    let a = 1;
    function childFunction() {
      var b = a + 2;
      return b;
    };
    return childFunction();
  }
  
  function searchMusic(){
    var artistName = document.getElementById('artistInput').value;
    var albumName = document.getElementById('albumInput').value;
  
    var url = "https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=" + artistName + "&a=" + albumName;
    //var url = "https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=wilco&a=schmilco";
    var albumDiv = document.getElementById('albumArt');
  
    fetch(url)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
  
        // Examine the text in the response
        response.json().then(function(data) {
          //console.log(data);
          let jsonContent = data.album[0];
          console.log(jsonContent);
          albumDiv.src = jsonContent.strAlbumThumb;
          document.getElementById('albumYear').innerText = jsonContent.intYearReleased;
          document.getElementById('albumGenre').innerText = jsonContent.strGenre;
          document.getElementById('albumDesc').innerText = jsonContent.strDescriptionEN;
  
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
  }
  
  function addElements(){
    var valueArray = ['first', 'second', 'third'];
    for (i in valueArray) {
      var newDiv = document.createElement('div');
      newDiv.setAttribute('class', 'row');
      newDiv.setAttribute('id', 'div '+i);
      document.getElementById('addElements').appendChild(newDiv);
      newDiv.innerText = valueArray[i];
    };
  }
  
  function parseArray(array) {
    var newFruit = prompt("enter a fruit"); //prompt asks for input
    array.push(newFruit); //.push method adds a value to an array
    var x = array.sort(); //.sort method sorts values in an array
    var y = x.length; //.length method accesses the length of an array
    console.log(x[y-1]); //log the last item in the array
    console.log(array); //log the entire array
  }
  //var newArray = ["papaya", "apple", "orange", "banana"];
  
  //Digital chalkboard for Feb 16.
  var userArray = []
  function sortArray(){
    var userInput = document.getElementById('inputTerm').value;
    var userOutput = document.getElementById('outputRow');
    userArray.push(userInput)
    console.log(userArray);
    document.getElementById('tempList').innerHTML = 'Unsorted list: '+userArray.join(", ");
    document.getElementById('inputTerm').value = '';
    if (userArray.length == 4) {
      userArray.sort();
      for (i in userArray) {
        var newLI = document.createElement('li');
        newLI.innerText = userArray[i];
        userOutput.appendChild(newLI);
      }
    };
  }
  
  var longestVal = "";
  function longestValue(){
    var userInput = document.getElementById('inputTerm').value;
    if (userInput.length > longestVal.length) {
      longestVal = userInput;
    };
    document.getElementById('outputRow').innerText = longestVal;
  }