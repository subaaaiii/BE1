const Validator = require('fastest-validator');

const v = new Validator();

const { Karyawan } = require('../../models');

const createNewKaryawan = async (req,res)=>{
    const { no_induk } = req.body;

    const existingKaryawan = await Karyawan.findOne({ no_induk });

    if (existingKaryawan) {
        return res.status(400).json({
            message: 'No Induk sudah ada dalam database'
        });
    }
        const schema = {
            no_induk : 'string',
            nama : 'string',
            alamat : 'string',
            tanggal_lahir: {
                type: 'string',
                pattern: /^\d{4}-\d{2}-\d{2}$/, // Regex pattern for YYYY-MM-DD format
            },
            tanggal_bergabung: {
                type: 'string',
                pattern: /^\d{4}-\d{2}-\d{2}$/, // Regex pattern for YYYY-MM-DD format
            },
        }
        const validate = v.validate(req.body, schema);
        if(validate.length){
            return res
            .status(400)
            .json(validate)
        }
        
        const karyawan = await Karyawan.create(req.body);
        res.json({
            message: 'Berhasil menambahkan data karyawan ',
            karyawan
        })   
}

const getAllKaryawan = async (req,res)=>{
    let { sort } = req.query;

    const validSortColumns = ['nama', 'tanggal_lahir']; // Kolom yang bisa diurutkan

    // Pastikan sort yang diterima adalah kolom yang valid
    if (sort && !validSortColumns.includes(sort)) {
        return res
        .status(400)
        .json({ message: 'Invalid sort parameter' });
    }

    // Konstruksi query berdasarkan sort yang diberikan 
    const karyawan = await Karyawan.findAll({
        order: sort ? [[sort, 'ASC']] : [['no_induk', 'ASC']], // atau default ke 'nama'
    });
    if (sort) {
        res.json({
        
            message: `Berhasil mendapatkan data karyawan di sorting berdasarkan ${sort}`,
            karyawan
        })
    }else{
        res.json({
        
        message: 'Berhasil mendapatkan data karyawan',
        karyawan
        })
    }
}

const getKaryawanCuti = async (req,res)=>{
    const {no_induk} = req.params;
    const karyawan = await Karyawan.findByPk(no_induk, {
        include: 'cuti', 
    });
    if(!karyawan){
        return res.json({message: "Karyawan Tidak Ditemukan" })
    }
    res.json({
    message: 'Berhasil mendapatkan data karyawan dan data cuti',
    karyawan
    })
    
}

const updateKaryawan = async (req,res)=>{
    const no_induk = req.params.no_induk;
    let karyawan = await Karyawan.findByPk(no_induk);
    if(!karyawan){
        return res.json({message: "Karyawan Tidak Ditemukan" })
    }
    //ada data
    const schema = {
        nama : 'string|optional',
        alamat : 'string|optional',
        tanggal_lahir: {
            type: 'string',
            optional: true,
            pattern: /^\d{4}-\d{2}-\d{2}$/, // Regex pattern for YYYY-MM-DD format
        },
        tanggal_bergabung: {
            type: 'string',
            optional: true,
            pattern: /^\d{4}-\d{2}-\d{2}$/, 
        },
    }
    const validate = v.validate(req.body, schema);
    if(validate.length){
        return res
        .status(400)
        .json(validate)
    } 
    karyawan = await karyawan.update(req.body);
    res.json({
        message: "Berhasil mengupdate data karyawan",
        karyawan
    })
}

const deleteKaryawan = async (req,res)=>{
    const no_induk = req.params.no_induk;
    const karyawan = await Karyawan.findByPk(no_induk);
    if(!karyawan){
        return res.json({message: "Karyawan Tidak Ditemukan" })
    }
    await karyawan.destroy();
    res.json({
        message: "Berhasil menghapus data karyawan",

    })
}

module.exports = {
    getAllKaryawan,
    createNewKaryawan,
    updateKaryawan,
    deleteKaryawan,
    getKaryawanCuti
}