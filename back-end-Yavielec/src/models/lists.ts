import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

export const List = sequelize.define('list', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    imagen: {
        type: DataTypes.STRING
    }
}, )