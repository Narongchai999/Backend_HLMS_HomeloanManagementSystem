module.exports = (sequelize, DataTypes) => {
    const Officer = sequelize.define("officer", {
        officer_id: {//เจ้าหน้าที่
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        code: { //เลขประจำตัวที่ปรึกษา
            type: DataTypes.STRING,
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        license: {
            type: DataTypes.STRING,
            allowNull: false
        },
        team: {
            type: DataTypes.STRING,
            allowNull: false
        },
        commissions: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Officer;
};
