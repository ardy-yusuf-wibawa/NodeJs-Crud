const knex = require('../models/knex')

exports.getUser = (req, res, next) => {
    res.send({
        data: [
            {
                pesan: 'Ini tugas API express JS Kelompok 9',
                nama: 'Guntur',
                asal: 'Jakarta',
                kendaraan: ['sepeda', 'mobil', 'motor']
            },
            {
                pesan: 'Ini tugas API express JS Kelompok 9',
                nama: 'Angga',
                asal: 'Jakarta'
            },
            {
                pesan: 'Ini tugas API express JS Kelompok 9',
                nama: 'Anang',
                asal: 'Jakarta'
            },
            {
                pesan: 'Ini tugas API express JS Kelompok 9',
                nama: 'Ardy',
                asal: 'Jakarta'
            }
        ]
    });
};

exports.register = async (req, res, next) => {
    try {
        const insertData = req.body

        let regis = await knex('users').insert({

            name: insertData.name,
            email: insertData.email,
            content: insertData.content

        }).then(insertedId => {
            return insertedId
        })

        res.status(201).send({

            message: 'user created',
            id: regis[0]
        })

        console.log(insertData);
    } catch (error) {
        return res.status(500).send({
            error: error
        })
    }
}

exports.getDetailUser = async (req, res, next) => {
    try {
        const params = req.params.id


        let getUserData = await knex('users').where({
            id: params
        }).select('*')

        res.status(200).send({
            message: 'data user retrived',
            data: getUserData[0]
        })

    } catch (error) {
        return res.status(500).send({
            error: error
        })
    }

}

exports.deleteUser = async (req, res, next) => {
    try {
        const params = req.params.id


        let deleteData = await knex('users').where({
            id: params
        }).del('')

        res.status(200).send({
            message: 'data user deleted',
            data: deleteData[0]
        })

    } catch (error) {
        return res.status(500).send({
            error: error
        })
    }

}

exports.updateUser = async (req, res, next) => {
    try {
        const params = req.params.id
        const update = req.body


        let updateData = await knex('users').where({
            id: params
        }).update({ name: update.name })

        res.status(200).send({
            message: 'data user updated',
            data: updateData
        })

    } catch (error) {
        return res.status(500).send({
            error: error
        })
    }

}