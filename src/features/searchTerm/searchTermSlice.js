/*
Extra Credit:
1. Create a function called searchTermReducer that can handle the following action types:
    * 'searchTerm/setSearchTerm'
    * 'searchTerm/clearSearchTerm'
    * Don't forget to set the initial state and return state by default!

2. Create a function called setSearchTerm
    * It has one parameter, term
    * It returns an action object whose payload is the term value
    * See SearchTerm.js for how this will be used.

3. Create a function called clearSearchTerm
    * It returns an action object with no payload
    * See SearchTerm.js for how this will be used.

*/


/*

Well done! You’ve gone through the entire process of making action creators, setting up a slice reducer, creating the store object, and plugging in the store data into React components. If you’d like to keep working on this project, try implementing this bonus feature:

Add a search feature (like in the Recipes app) to filter the products shown in the inventory.

The src/features/searchTerm/ directory has already been created for you with a completed SearchTerm.js component file. It is up to you to

Complete searchTermSlice.js by creating and exporting the slice reducer and action creators.
Add the slice reducer to the rootReducer for the store.
Render the component in the <App /> with the appropriate data.
To filter out the inventory values, you can use this function:

function getFilteredItems(items, searchTerm) {
  return items.filter(items => items.name.toLowerCase().includes(searchTerm.toLowerCase()));
}

*/

