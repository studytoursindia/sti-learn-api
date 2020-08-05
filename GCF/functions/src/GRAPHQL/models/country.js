/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('country', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(500),
			allowNull: false
		}
	}, {
		tableName: 'country',
		timestamps: false
	});
};
