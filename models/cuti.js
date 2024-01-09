module.exports= (sequelize, DataTypes) => {
    const Cuti = sequelize.define('Cuti',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
           no_induk: {
            type: DataTypes.STRING,
            allowNull: false,
            // references: {
            //   model: 'karyawan',
            //   key: 'no_induk',
            // },
            // onUpdate: 'CASCADE', 
            // onDelete: 'CASCADE',
          },
          tanggal_cuti: {
            type: DataTypes.DATEONLY,
            allowNull: false
          },
          lama_cuti: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          keterangan: {
            type: DataTypes.TEXT,
            allowNull: false
          },
          createdAt: {
            type: DataTypes.DATEONLY,
            allowNull: false
          },
          updatedAt: {
            type: DataTypes.DATEONLY,
            allowNull: false
          }
        }, {
          tableName : 'cuti'
          
    });
    Cuti.associate = models =>{
      Cuti.belongsTo(models.Karyawan,
        {foreignKey : 'no_induk'});
      };
    return Cuti;
}