const db = require('./db/index');
const { Movie, Person } = db.models;

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

        const person = await Person.create({
            first_name: 'Eemeli',
            last_name: 'Surakka',
        });
        console.log(person.toJSON());
        
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

    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            const errors = error.errors.map(err => err.message);
            console.error('Validation errors: ', errors);
        } else {
            throw error;
        }
    }
})();