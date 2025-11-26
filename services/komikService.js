async function createKomik(database, komikData){
    const {title, description, aouthor, imagesType, imagesName, imaagesData} = komikData;

    if(!title || !description || !author){
        throw new Error('Title, description, and author wajib diisi');
    }
    const newKomik = await database.Komik.create({
        title,
        description,
        author,
        imagesType: imagesType || null,
        imagesName: imagesName || null,
        ImageData: imaagesData || null,
    });
    return newKomik;
}

async function getAllKomik(database){
    const komiks = await database.Komik.findAll();

    return komiks.map(k => {
        if (k.imageData) {
            k.imageData = k.imageData.toString('base64');
        }
        return k;
    });
}

async function getKomikById(database, id){
    const komik = await database.Komik.findByPk(id);
    if (!komik) throw new Error('Komik tidak ditemukan');

    if (komik.imageData) {
        komik.imageData = komik.imageData.toString('base64');
    }
    return komik;
}

async function updateKomik(database, id, komikData){
    const komik = await database.Komik.findByPk(id);
    if (!komik) {
        throw new Error('Komik tidak ditemukan');
    }
    await komik.update(komikData);
    return komik;
}
async function deleteKomik(database, id){
    const komik = await database.Komik.findByPk(id);
    if (!komik) {
        throw new Error('Komik tidak ditemukan');
    }
    await komik.destroy();
    return {message: 'Komik dengan ID ${id} berhasil dihapus'};
}

module.exports = {
    createKomik,
    getAllKomik,
    getKomikById,
    updateKomik,
    deleteKomik
};

