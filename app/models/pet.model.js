module.exports = (sequelize, Sequelize) => {
    const Pet = sequelize.define("Pet", {
        size: {
            type: Sequelize.STRING,
            allowNull: false
        },
        color: {
            type: Sequelize.STRING,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        petType: {
            type: Sequelize.STRING,
            allowNull: false,
            // defaultValue: "a fucking dog"
        },
        petImage: {
            type: Sequelize.STRING
        }
        // needs comments association: One-to-Many => https://bezkoder.com/sequelize-associate-one-to-many/

        // to sequelize a Many-to-Many association => https://bezkoder.com/sequelize-associate-many-to-many/
    });
  
    return Pet;
  };