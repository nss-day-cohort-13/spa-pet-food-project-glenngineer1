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
    var breedOfCat;
    var types;
    var volumes;
    // var types;
    var cat = data.cat_brands[currentFood];
    catFoodData += "<div class='cat-block'>";
    catFoodData += "<div class='cat-brand'>";
    catFoodData += "Brand: " + cat.name;
    catFoodData += "</div>";

    for (k = 0; k < cat.breeds.length; k++) {
      breedOfCat = cat.breeds[i].types;
      catFoodData += "<p class='cat-breed'>" + "Breed: " + cat.breeds[k].breed + "</p>";

    for (l = 0; l < breedOfCat.length; l++) {
      volumes = breedOfCat[l].volumes;
      catFoodData += "<p class='cat-type'>" + "Style: " + breedOfCat[l].type + "</p>";

    for (m = 0; m < volumes.length; m++) {
      var name = volumes[m].name;
      var price = volumes[m].price;
      catFoodData += "<p class='cat-volume'>" + "Size/Price: " + name + ": " + price + "</p>";
    }
  }
}

    catFoodList.innerHTML += catFoodData;
  }
  catFoodData += "</div>";
}

var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisCodeIfFoodFails);

myRequest.open("get", "cat_brands.json");

myRequest.send();


