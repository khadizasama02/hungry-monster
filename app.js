const searchButton = document.getElementById('search-button');
const searchBar = searchButton.value;
const foodList = document.getElementById('meal');
// const mealList = foodList.value;



searchButton.addEventListener('click', getFoodItem);

function getFoodItem() {
    let inputText = document.getElementById('food-name').value;
    console.log(inputText);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`)
        .then(res => res.json())
        .then(data => {
            let generateHtml = "";
            console.log(data.meals);
            if (data.meals) {
                data.meals.map(food => {
                    console.log(food);
                    generateHtml += `
                  <div class="second part" style="border: 2px solid #ff6b81;border-radius: 5px; background: white; ">
                <a href="#" onclick="displayingredientDetails(${food.idMeal})">
                    <div class="item-image">
                       <img src="${food.strMealThumb}" alt="">
                    </div>
                  
                   <div class="flex-container"style="background:white">
                       <h1 class="text-center" >${food.strMeal}</h1>
       
                   </div>
                </a>
             </div> 
             `;


                });



            }
            else {
                generateHtml = 'SORRY THERE IS SUCH FOOD';

            }

            foodList.innerHTML = generateHtml;
        });
}
const displayingredientDetails = idMeal => {
    console.log(idMeal);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    //  console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data =>
            // console.log(data)
            foodInfo(data.meals[0])
        )
}
const foodInfo = food => {
    const ingredientsDetails = document.getElementById('food-details');
    ingredientsDetails.innerHTML =
        `
    <div style=" border: 2px solid #ff6b81;border-radius: 5px; background: #81ecec; padding:50px;  " >
    <img src="${food.strMealThumb}" style="width: 400px; ">
    <h3>${food.strMeal}</h3>
    <p>${food.strIngredient1}</p>
    <p>${food.strIngredient2}</p>
    <p>${food.strIngredient3}</p>
    <p>${food.strIngredient4}</p>
    <p>${food.strIngredient5}</p>
    <p>${food.strIngredient6}</p>
    <p>${food.strIngredient7}</p>
    <p>${food.strIngredient8}</p>
    <p>${food.strIngredient9}</p>
    <p>${food.strIngredient10}</p>
    </div>
   
     `;
}



















// const displayFood = food => {
//     const foodCatagory = document.getElementById('catagory-name');
//     const foodName = foodCatagory.value;
//     fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${foodName}`)
//         .then(res => res.json())
//         .then(data => {
//             let html = "";
//             if(data.meals)
//             {
//                 data.meals.forEach(meal => {
//                     html +=
//                     `
//                     <div class ="meal-img">
//                     <img src = "${meal.strMealThumb}">
//                     </div>
//                     <div class = "meal-name">
//                     <h3>'${meal.strMeal}'</h3>
//                     </div>
//                     `

//                 });
//             }
//             meal
            // const foodView = document.getElementById('food-view')

            // food.forEach(foods => {
            //     const foodDiv = document.createElement('div');
            //     foodDiv.className = 'food';
            //     // const foodButton = document.createElement('button');
            //     const newDiv = document.createElement('div');
            //     const name = document.createElement('h3');
            //     name.innerText = foods[0].strMeal;
            //     const image = document.createElement('img');
            //     image.innerHTML = foods[0].strMealThumb;
            //     newDiv.appendChild('name');
            //     newDiv.appendChild('image');
            //     // foodButton.appendChild('newDiv');
            //     foodDiv.appendChild('newDiv');
            //     foodView.appendChild('foodDiv');
            // })





    //     })
    // }        