type Subject = {
    day: string,
    breakfast: string,
    fruitsnack: string,
    lunch: string,
    afternoonsnack: string
}

type mealsData = { [key: string]: Subject[] }

export const meals: mealsData = {
    week1: [
        {
            day: "Monday",
            breakfast: "Semolina, bread with cheese, tea",
            fruitsnack: "Seasonal fruits",
            lunch: "Chicken soup, chicken in béchamel sauce, pasta, cucumber and cabbage salad, pear compote",
            afternoonsnack: "Charlotte cake with tea/milk"
        },
        {
            day: "Tuesday",
            breakfast: "Boiled eggs, corn, bread with butter, tea",
            fruitsnack: "Seasonal fruits",
            lunch: "Chicken soup, cauliflower and sausage gratin, cabbage salad, compote",
            afternoonsnack: "Semolina cake, tea/milk"
        },
        {
            day: "Wednesday",
            breakfast: "Oat porridge, bread with cheese, tea",
            fruitsnack: "Seasonal fruits",
            lunch: "Chicken soup, beef stroganoff, pasta, salad, compote",
            afternoonsnack: "Pancakes (oladushki), tea"
        },
        {
            day: "Thursday",
            breakfast: "Omlette with cheese, bread with butter, cocoa",
            fruitsnack: "Seasonal fruits",
            lunch: "Chicken soup, chicken cutlets with rice and broccoli, salad, compote",
            afternoonsnack: "Marble biscuit, cocoa"
        },
        {
            day: "Friday",
            breakfast: "Cornflakes with milk, bread with cheese, tea",
            fruitsnack: "Seasonal fruits",
            lunch: "Chicken soup with vermicelli, fish sticks, mashed potatoes, salad, compote",
            afternoonsnack: "Pumpkin pie, tea"
        },
    ],
    week2: [
        {
            day: "Monday",
            breakfast: "Semolina, bread with cheese, tea",
            fruitsnack: "Seasonal fruits",
            lunch: "Chicken soup, chicken in béchamel sauce, pasta, cucumber and cabbage salad, pear compote",
            afternoonsnack: "Charlotte cake, lemonade"
        },
        {
            day: "Tuesday",
            breakfast: "Boiled eggs, corn, bread with butter, tea",
            fruitsnack: "Seasonal fruits",
            lunch: "Chicken soup, meatballs and buckwheat, tomato salad, compote",
            afternoonsnack: "Homemade yogurt with fresh fruits, biscuits"
        },
        {
            day: "Wednesday",
            breakfast: "Oat porridge, bread with cheese, tea",
            fruitsnack: "Seasonal fruits",
            lunch: "Chicken soup, Mac and cheese, Cucumber-tomato-paprika salad, compote",
            afternoonsnack: "Pancakes (oladushki), tea"
        },
        {
            day: "Thursday",
            breakfast: "Omlette with cheese, bread with butter, cocoa",
            fruitsnack: "Seasonal fruits",
            lunch: "Chicken soup, Bolognese pasta, carrot salad, compote",
            afternoonsnack: "Marble biscuit, cocoa"
        },
        {
            day: "Friday",
            breakfast: "Cornflakes with milk, bread with cheese, tea",
            fruitsnack: "Seasonal fruits",
            lunch: "Vegetable soup, Fish, mashed potatoes, beet and pickles salad, cocoa",
            afternoonsnack: "Pancakes (traditional), milk"
        },
    ],
}
