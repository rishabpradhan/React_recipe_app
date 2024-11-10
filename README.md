Food Recipe Search App
This project is a React application that allows users to search for food recipes and view their details, including nutrition, recipes, and ingredients. The app utilizes the Spoonacular API to fetch food data based on user search queries.

Features
Search for food recipes by keywords
Display recipe information with ingredients and nutritional data
Responsive layout with animated elements
Technologies Used
React
CSS Modules for styling
Spoonacular API for food recipe data
Prerequisites
To run this project locally, you need to have the following installed:

Node.js (version 12 or later)
npm or yarn (Node package managers)
Getting Started
Clone the repository:

bash
Copy code
git clone https://github.com/rishabpradhan/food-recipe-search-app.git
cd food-recipe-search-app
Install dependencies:

bash
Copy code
npm install
Sign up for Spoonacular API:

Go to the Spoonacular API website.
Sign up or log in to your account.
After logging in, go to the API section and get your API key.
Configure API key:

Create a .env file in the root of your project.

Add the following line to your .env file:

plaintext
Copy code
VITE_API_KEY=your_spoonacular_api_key_here
Run the application:

bash
Copy code
npm start
Open the app:

Open this URL in your browser to use the app.
Project Structure
src/components: Contains reusable React components like Search, FoodList, and FoodDetails.
src/styles: Contains CSS module files for styling components.
.env: Stores sensitive data like the API key.
Usage
Type in a keyword in the search bar (e.g., "pizza" or "salad").
Press the search button to retrieve food recipes from the Spoonacular API.
View the search results in the list, and click a recipe for more details.
