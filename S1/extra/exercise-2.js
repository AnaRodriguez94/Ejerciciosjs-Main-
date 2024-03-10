//Usa un for para remplazar todas las comidas que no sean veganas con las comidas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.
```js
const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];
```//

for (let i = 0; i < foodSchedule.length; i++) {
    if (!foodSchedule[i].isVegan) {
      let randomIndex = Math.floor(Math.random() * fruits.length);
      foodSchedule[i].name = fruits[randomIndex];
      fruits.splice(randomIndex, 1);
    }
  }
  
  console.log(foodSchedule);

  //Revisar, no sale bien//