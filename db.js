const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('thursday', 'tisdalefry', null, {dialect: 'postgres', host: 'localhost'});
sequelize.authenticate()
    .then(result=>console.log("Success!"))
    .then(()=>onceConnected())
    .catch(oops=>console.log("Fuck, it didn't work"));
async function onceConnected() {
    const Pet = sequelize.define('Pet', {
        size: {
            type: DataTypes.STRING,
            allowNull: false
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        petType: {
            type: DataTypes.STRING,
            allowNull: false,
            // defaultValue: "a fucking dog"
        }
    }, {
        timestamps: false
    });
    // const Owner = sequelize.define('Owner', {
    //     name: {
    //         type: DataTypes.STRING,
    //         allowNull: false
    //     },
    //     age: {
    //         type: DataTypes.INTEGER,
    //         allowNull: false
    //     }
    // }, {
    //     timestamps: false
    // });
    // Owner.hasMany(Pet);
    // await sequelize.sync({force: true});  //saves alterations to table
    // await Pet.sync();
    const createPet = await Pet.create({name: 'Raplh', size: 'large', color: 'calico', petType: "cat"})
    // const pets = await Pet.findAll({attributes: ['name']});
    // console.log("All Pets: ", JSON.stringify(pets, null, 2));
}


// demonstrates the power of Promise.all, and shows how they order their responses

// console.log('Starting Work on Promise 1');
// const first = new Promise((resolve, reject)=> {
//     setTimeout(()=> {
//         console.log("Done with work on Promise 1")
//         resolve({tisdale: true})}
//     , 1000);
// });
// console.log('Starting Work on Promise 2');
// const second = new Promise((resolve, reject)=> {
//     setTimeout(()=> {
//         console.log("Done with work on Promise 2")
//         resolve(false)}
//     , 2000);
// });
// console.log('Starting Work on Promise 3');
// const third = new Promise((resolve, reject)=> {
//     setTimeout(()=> {
//         console.log("Done with work on Promise 3")
//         resolve("Three")}
//     , 0);
// });
// Promise.all([first, second, third])
//     .then(results=>console.log(results));