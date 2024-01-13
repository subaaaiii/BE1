'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.createTable('karyawan', {
       no_induk: {
        type: Sequelize.STRING,
        primaryKey: true,
        // autoIncrement: false,
        allowNull: false
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false
      },
      alamat: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tanggal_lahir: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      tanggal_bergabung: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },

      });

     await queryInterface.createTable('cuti', {
       id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
       no_induk: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'karyawan',
          key: 'no_induk',
        },
        onUpdate: 'CASCADE', 
        onDelete: 'CASCADE',
      },
      tanggal_cuti: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      lama_cuti: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      keterangan: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },

      });
     
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.dropTable('cuti');
    
     await queryInterface.dropTable('karyawan');
  }
};
