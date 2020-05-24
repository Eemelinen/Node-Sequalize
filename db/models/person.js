const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class Person extends Sequelize.Model {}
    Person.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            first_name: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'Please provide a value for "first_name"',
                    },
                    notEmpty: true,
                }
            },
            last_name: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'Please provide a value for "last_name"',
                    },
                    notEmpty: true,
                }
            },
        },
        // Model Object options
        { sequelize });
    return Person;
}
