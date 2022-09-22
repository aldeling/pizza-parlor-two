# Pizza Parlor Two

### Description
This is an application where the user is able to create a personal pizza order and then are given there price based on the different toppings the user picks. Based on what toppings they pick the price of their pizza will change accordingly.
### Technologies Used
* HTML
* JavaScript
* CSS
### Setup Instructions
There are two ways that the user can choose to set up this application
  * First the user can fork the repository from GitHub. Once that is done they can clone the repository to their personal computer. When cloned to their computer they can then open the file, click on index.html and it should open to there default browser.
  * Second the user can open the GitHub pages [link]() and access the webpage through this.

### Known Bugs
* There are no known bugs currently
### Tests
Describe: basePrice()

Test: "It should return 5 when small is put into the function"
Code: if (this.size === "Small") {return 5;}
Expected Output: 5

Test: "It should return 10 when medium is put into the function"
Code: else if (this.size === "Medium") {return 10;}
Expected Output: 10

Test: "It should return 15 when larger is put into the function"
Code: else if (this.size === "Larger") {return 15;}
Expected Output: 15

Test: "It should return 20 when extra larger is put into the function"
Code: else if (this.size === "Extra Larger") {return 20;}
Expected Output: 20

Describe: priceWithCrust()

Test: "It should return 11 when deep dish is added to size small"
Code: if (this.crust === "Deep Dish") {return basePrice("Small")+6;}
Expected Output: 11

Test: "It should return 11 when gluten free is added to size small"
Code: if (this.crust === "Gluten Free") {return basePrice("Small")+6;}
Expected Output: 11

Test: "It should return 9 when thin crust is added to size small"
Code: else if (this.crust === "Thin Crust") {return basePrice("Small")+4;}
Expected Output: 9

Test "It should return 5 when any other crust is selected"
Code: else { return basePrice("Small");}
Expected Output: 5

### License
[GNU GPL 3.0](https://choosealicense.com/licenses/gpl-3.0/) Copyright (c) 09/22/2022 Athea DeLing