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

var timer = undefined;
function getShowTime() {
    var m = new Date().getMinutes();
    m = (m < 10) ? "0" + m : m;
    return m;
}
function CurrentTime() {
    timer = setTimeout(() => {
        const time = getShowTime();
        document.getElementById("txt").innerText = "The minute now is: " + time;
    });
}

function Disappear() { 
	var text = document.getElementById("txt");
    text.style.display="none"; 
}