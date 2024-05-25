module.exports = (sequelize, Datatype) => {
    const Project = sequelize.define("project", {
    project_id: {
            type: Datatype.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        owner: { //ชื่อบริษัท
            type: Datatype.STRING,
            allowNull: false
        },
        name: { //ชื่อบริษัทย่อย
            type: Datatype.STRING,
            allowNull: false
        },
        loan_for: {//วัตถุประสงค์เงินกู้
            type: Datatype.STRING,
            allowNull: false
        },
        type: { //ประเภทโครงการ
            type: Datatype.STRING,
            allowNull: false
        },
        amount: {//จำนวน ยูนิต
            type: Datatype.INTEGER,
            allowNull: false
        },
        min_price: {//ราคาน้อยสุด
            type: Datatype.INTEGER,
            allowNull: false
        },
        max_price: { //ราคามากสุด
            type: Datatype.INTEGER,
            allowNull: false
        },
        progress: {//ความคืบหน้าของโครงการ
            type: Datatype.INTEGER,

            allowNull: false
        },
        deal: {//ข้อมูลการตกลง
            type: Datatype.INTEGER,
            allowNull: false
        },
        sale_name: { //ชื่อพนักงานขายบ้าน
            type: Datatype.STRING,
            allowNull: false
        },
        phone: { //เบอร์มือถือพนักงานขายบ้าน
            type: Datatype.STRING,
            allowNull: false
        },
        date_careate: {//วันที่สร้าง
            type: Datatype.DATE,
            allowNull: false
        },
        
    });
    return Project;
};