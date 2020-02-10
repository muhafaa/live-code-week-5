'use strict'
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize

  class User extends Model {}

  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'name is required'
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'email is required'
          },
          isEmail: {
            msg: 'Wrong email format'
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'password is required'
          },
          len: {
            args: 6,
            msg: 'Password characters min. 6'
          }
        }
      }
    },
    { sequelize }
  )

  User.associate = function(models) {
    // associations can be defined here
  }
  return User
}
