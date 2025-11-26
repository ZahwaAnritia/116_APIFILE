// Export fungsi yang menerima dua parameter utama dari Sequelize:
// sequelize = koneksi database, DataTypes = tipe data untuk kolom
module.exports = (sequelize, DataTypes) => {

    // Definisikan model bernama "Komik"
    const Komik = sequelize.define("Komik", {

        // Kolom id (Primary Key)
        id: {
            type: DataTypes.INTEGER,   // Tipe data: integer (angka)
            primaryKey: true,          // Jadi primary key
            autoIncrement: true        // Naik otomatis (1, 2, 3, ...)
        },

        // Kolom judul komik
        judul: {
            type: DataTypes.STRING,    // String = teks pendek
            allowNull: false           // Tidak boleh kosong
        },

        // Kolom penulis komik
        penulis: {
            type: DataTypes.STRING,    // Teks pendek
            allowNull: false           // Wajib diisi
        },

        // Kolom deskripsi komik
        deskripsi: {
            type: DataTypes.TEXT,      // TEXT = teks panjang
            allowNull: false           // Wajib diisi
        }, imagesType: DataTypes.STRING,
        imagesName: DataTypes.STRING,
        ImageData: DataTypes.BLOB('long'),

        }, {

    }, {
        // Opsi tambahan untuk model:

        tableName: "Komik", 
    });

    // Kembalikan model Komik agar bisa dipakai di file lain
    return Komik;
};
