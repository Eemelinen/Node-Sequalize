const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class Movie extends Sequelize.Model {}
    Movie.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please provide a value for "title"',
                },
                notEmpty: true,
            }
        },
        runtime: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please provide a value for "runtime"',
                },
                min: {
                    args: 1,
                    msg: 'Please provide a value greater than "0" for "runtime"',
                },
                notEmpty: true
            }

        },
        releaseDate: {
            type: Sequelize.DATEONLY,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please provide a value for "releaseDate"',
                },
                isAfter: {
                    args: '1895-12-27',
                    msg: 'Please provide a value on or after "1895-12-28" for "releaseDate"',
                },
                notEmpty: true
            }

        },
        isAvailableOnVHS: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
            validate: {
                notNull: {
                    msg: 'Please provide a value for "title"',
                },
                notEmpty: true
            }
        },
    }, { sequelize });
    return Movie;
}

