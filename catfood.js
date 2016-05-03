// CAT FOOD

function executeThisCodeIfFoodFails () {
  // console.log("An error occurred while loading this file");
}

function executeThisCodeAfterFileIsLoaded () {
  // console.log(this.responseText);

  var data = JSON.parse(this.responseText);
    // console.log("data", data);

  var catFoodList = document.getElementById("catFood");

  for(currentFood in data.cat_brands) {
    var catFoodData = "";
//     var volumes;
    var cat = data.cat_brands[currentFood];
    catFoodData += "<div class='cat-block'>";
    catFoodData += "<div>";
    catFoodData += cat.name;
    catFoodData += "</div>";
    catFoodData += "<div>";
    catFoodData += cat.breeds[i].breed;
    catFoodData += "</div>";
    catFoodData += "<div>";
//     for (i = 0; i < dog.types.length; i++) {
//       volumes = dog.types[i].volumes;
//       dogFoodData += "<p>" + dog.types[i].type + "</p>";
//     for (j = 0; j < volumes.length; j++) {
//       var name = volumes[j].name;
//       var price = volumes[j].price;
//       dogFoodData += "<p>" + name + ": " + price + "</p>";
//     }
// }

    catFoodData += "</div>";
    catFoodData += "</div>";

    catFoodList.innerHTML += catFoodData;
  }
}

var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisCodeIfFoodFails);

myRequest.open("get", "cat_brands.json");

myRequest.send();


