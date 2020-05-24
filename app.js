const db = require('./db/index');
const { Movie } = db.models;

// async IIFE
(async () => {
    // force attribute in sync causes tables to be dropped and recreated when sync method runs.
    await db.sequelize.sync({ force: true });

    try {
        // ====== ONE AT A TIME FOR LOGGING ====== //
        console.log("Connection was succesful!");
        // Inserts new data row into movie table.
        const movie = await Movie.create({
            title: "Toy Story 2"
        });

        const movie2 = await Movie.create({
            title: "Pulp Fiction"
        });

        // movie.toJSON() returns json representation of the table's data.
        console.log(movie.toJSON());
        console.log(movie2.toJSON());
        
        // ====== PROMISE ALL WAY FOR LOGGING ====== //

        // const movieInstances = await Promise.all([
        //     Movie.create({
        //         title: 'Toy Story'
        //     }),
        //     Movie.create({
        //         title: 'The Incredibles'
        //     }),
        // ]);
        // const moviesJSON = movieInstances.map(movie => movie.toJSON());
        // console.log(moviesJSON);

    } catch(err) {
        console.log("Error with database connection: " + err);
    }

})();