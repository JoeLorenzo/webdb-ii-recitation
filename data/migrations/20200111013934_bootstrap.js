
exports.up = function(knex) {
    // Decide on a primary key
    // the increments() function provided by knex makes an id an automatically increments each entry.  
  return knex.schema.createTable("books", tbl => {
    tbl.increments();
    tbl.string("title", 255).notNullable();   // string vs text, a strings can specify a limit of characters as a second argument.
    tbl.string("isbn", 15).notNullable().unique(); //the chained knex functions make the column not nullable and unique 
    tbl.string("edition", 10);  //in this case edition is a string and not a number because we don't perform math on editions.  
    tbl.string("publisher", 128).notNullable();
    tbl.float("rating") //here we use float because we could use decimal values for rating if we wanted.  
  })
};

exports.down = function(knex) {
  return knex.dropTableIfExists("books")
};

// cli command for making the database npx knex migrate: latest