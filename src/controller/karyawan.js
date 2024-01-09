const karyawanModel = require('../models/karyawan');

const createNewKaryawan = async (req,res)=>{
    const {body} = req;
    try {
        await karyawanModel.createNewKaryawan(body);
        res.json({
            message: 'Berhasil menambahkan data karyawan ',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
    
}

const getAllKaryawan = async (req,res)=>{
    try {
        const { sort } = req.query;
        const [data] = await karyawanModel.getAllKaryawan(sort);

    res.json({
        message: 'Berhasil mendapatkan data karyawan',
        data : data
    })
    }catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
    
}

const getKaryawanCuti = async (req,res)=>{
    const {no_induk} = req.params;
    try {
        const [data] = await karyawanModel.getKaryawanCuti(no_induk);

    res.json({
        message: 'Berhasil mendapatkan data karyawan dan data cuti',
        data : data
    })
    }catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
    
}

const updateKaryawan = async (req,res)=>{
    const {no_induk} = req.params;
    const {body} = req;
    try {
        await karyawanModel.updateKaryawan(body, no_induk);
        res.json({
            message : "Berhasil mengupdate data karyawan",
            data : {
                no_induk: no_induk,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const deleteKaryawan = async (req,res)=>{
    const {no_induk} = req.params;
    try {
        await karyawanModel.deleteKaryawan(no_induk);
        res.json({
            message : "Berhasil menghapus data karyawan"
        }) 
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
    
}

module.exports = {
    getAllKaryawan,
    createNewKaryawan,
    updateKaryawan,
    deleteKaryawan,
    getKaryawanCuti
}