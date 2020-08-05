/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('destinations', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		img: {
			type: DataTypes.STRING(500),
			allowNull: false
		},
		description: {
			type: DataTypes.STRING(2000),
			allowNull: false
		}
	}, {
		tableName: 'destinations',
		timestamps: false
	});
};
