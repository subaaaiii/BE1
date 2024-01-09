const dbPool = require('../config/database');

const getAllCuti = (sort) => {
    let SQLQuery = 'SELECT * FROM cuti';

        if (sort) {
            SQLQuery += ` ORDER BY ${sort} ASC`;
        }
        console.log('SQLQuery:', SQLQuery);
        return dbPool.execute(SQLQuery);
}
const createNewCuti = (body) => {
    const SQLQuery = `INSERT INTO cuti (no_induk, tanggal_cuti, lama_cuti, keterangan) 
    VALUE ('${body.no_induk}', '${body.tanggal_cuti}', '${body.lama_cuti}', '${body.keterangan}')`;

    return dbPool.execute(SQLQuery);
}

const updateCuti = (body, id) => {
    const SQLQuery = `UPDATE cuti 
    SET tanggal_cuti='${body.tanggal_cuti}' , lama_cuti='${body.lama_cuti}', keterangan='${body.keterangan}'
    WHERE id='${id}'`;

    return dbPool.execute(SQLQuery);
}
const deleteCuti = (id) => {
    const SQLQuery = `DELETE FROM cuti WHERE id='${id}'`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllCuti,
    createNewCuti,
    updateCuti,
    deleteCuti
}

