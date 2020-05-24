const db = require('./db/index');
const { Movie } = db.models;

// async IIFE
(async () => {
    // force attribute in sync causes tables to be dropped and recreated when sync method runs.
    await db.sequelize.sync({ force: true });

    try {
        const movie = await Movie.create({
            title: 'Toy Story',
            runtime: 81,
            releaseDate: '1995-11-22',
            isAvailableOnVHS: true,
        });
        console.log(movie.toJSON());

        const movie2 = await Movie.create({
            title: 'The Incredibles',
            runtime: 115,
            releaseDate: '2004-04-14',
            isAvailableOnVHS: true,
        });
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