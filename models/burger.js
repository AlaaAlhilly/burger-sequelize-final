module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define('burgers', {
        'burger_name': {
            'type': DataTypes.STRING,
            'allowNull': false
        },
        'devoured': {
            'type': DataTypes.BOOLEAN,
            'allowNull': false
        }, 
        'eaten_by':{
            type: DataTypes.STRING,
            allowNull: 'false'
        }
    },{
        freezeTableName:true
    }
   );

    return Burger;
}