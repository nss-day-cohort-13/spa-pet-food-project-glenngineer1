// DOG FOOD

function executeThisCodeIfFoodFails () {
  // console.log("An error occurred while loading this file");
}

function executeThisCodeAfterFileIsLoaded () {
  // console.log(this.responseText);

  var data = JSON.parse(this.responseText);
    // console.log("data", data);

  var dogFoodList = document.getElementById("dogFood");

  for(currentFood in data.dog_brands) {
    var dogFoodData = "";
    var volumes;
    var dog = data.dog_brands[currentFood];
    dogFoodData += "<div id='dog-block'>";
    dogFoodData += "<div class='dog-brand'>";
    dogFoodData += "Brand: " + dog.name;
    dogFoodData += "</div>";

    for (i = 0; i < dog.types.length; i++) {
      volumes = dog.types[i].volumes;
      dogFoodData += "<p class='dog-style'>" + "Style: " + dog.types[i].type + "</p>";

    for (j = 0; j < volumes.length; j++) {
      var name = volumes[j].name;
      var price = volumes[j].price;
      dogFoodData += "<p class='dog-volume'>" + "Size/Price: " + name + ": " + price + "</p>";

    }
}
    dogFoodData += "</div>";


    dogFoodList.innerHTML += dogFoodData;
  }
}

var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisCodeIfFoodFails);

myRequest.open("get", "dog_brands.json");

myRequest.send();


