
const dbPool = require('../config/database');

const getAllKaryawan = (sort) => {
        let SQLQuery = 'SELECT * FROM karyawan';

        if (sort) {
            SQLQuery += ` ORDER BY ${sort} ASC`;
        }
        console.log('SQLQuery:', SQLQuery);
        return dbPool.execute(SQLQuery);
}
const getKaryawanCuti = (no_induk) => {

    const SQLQuery = `SELECT karyawan.*, cuti.* FROM Karyawan 
    INNER JOIN cuti ON karyawan.no_induk=cuti.no_induk 
    WHERE cuti.no_induk='${no_induk}' && karyawan.no_induk='${no_induk}'`;

    return dbPool.execute(SQLQuery);
}
const createNewKaryawan = (body) => {
    const SQLQuery = `INSERT INTO karyawan (no_induk, nama, alamat, tanggal_lahir, tanggal_bergabung) 
    VALUE ('${body.no_induk}', '${body.nama}', '${body.alamat}', '${body.tanggal_lahir}', '${body.tanggal_bergabung}')`;

    return dbPool.execute(SQLQuery);
}

const updateKaryawan = (body, no_induk) => {
    const SQLQuery = `UPDATE karyawan 
    SET nama='${body.nama}' , alamat='${body.alamat}', tanggal_lahir='${body.tanggal_lahir}', tanggal_bergabung='${body.tanggal_bergabung}'
    WHERE no_induk='${no_induk}'`;

    return dbPool.execute(SQLQuery);
}

const deleteKaryawan = (no_induk) => {
    const SQLQuery = `DELETE FROM karyawan WHERE no_induk='${no_induk}'`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllKaryawan,
    createNewKaryawan,
    updateKaryawan,
    deleteKaryawan,
    getKaryawanCuti
}

