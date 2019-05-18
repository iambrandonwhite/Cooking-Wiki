// Get references to page elements
var searchButton = $("#searchButton");
var addButton = $("#addButton");
var newRecipeSubmit = $("#newRecipeSubmit");
var deleteRecipeButton = $(".deleteRecipe");

searchButton.on("click", function() {
  let query = $("#searchInput").val().trim();
  // search with "query"
});

deleteRecipeButton.on("click", function(){
  alert("Are you sure you want to delete this recipe?");
});