
module.exports= (sequelize, DataTypes) => {
    const Karyawan = sequelize.define('Karyawan',{
      no_induk: {
        type: DataTypes.STRING,
        primaryKey: true,
        // autoIncrement: false,
        allowNull: false
      },
      nama: {
        type: DataTypes.STRING,
        allowNull: false
      },
      alamat: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tanggal_lahir: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      tanggal_bergabung: {
        type: DataTypes.DATEONLY,
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
          tableName : 'karyawan'
          
    });
    Karyawan.associate = models =>{
      Karyawan.hasMany(models.Cuti,
        {foreignKey : 'no_induk',
          onDelete : "CASCADE",
        as: 'cuti'});
      };
    return Karyawan;

}