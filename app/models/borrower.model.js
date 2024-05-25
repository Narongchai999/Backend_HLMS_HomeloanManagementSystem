module.exports = (sequelize, Datatype) => {
    const Borrower = sequelize.define("borrower",{
        borrower_id:{//ผู้ยืม
            type: Datatype.INTEGER,
            autoIncrement: true,
            allowNull:false,
            primaryKey:true
        },
        id_card:{//หมายเลขบัตรประชาชน
            type:Datatype.STRING,
            allowNull:false
        },
        first_name:{
            type:Datatype.STRING,
            allowNull:false
        },
        last_name:{
            type:Datatype.STRING,
            allowNull:false
        },
        phone:{
            type:Datatype.STRING
        },
        gender:{
            type:Datatype.STRING
        },
        age:{
            type:Datatype.INTEGER
        },
        career:{//อาชีพ
            type:Datatype.STRING
        },
        income:{//รายรับรวม
            type:Datatype.INTEGER,
            allowNull:false
        },
        outcome:{//รายจ่ายรวม
            type:Datatype.INTEGER,
            allowNull:false
        },
    });
    return Borrower;
};