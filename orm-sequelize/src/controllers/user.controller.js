const { user } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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

        const hashedPassword = bcrypt.hashSync(insertData.password, 8)

        const regis = await user.create({
            name: insertData.name,
            email: insertData.email,
            password: hashedPassword,
            content: insertData.content
        })


        res.status(201).send({

            message: 'user created',
            id: regis.id
        })

        console.log(insertData);
    } catch (error) {
        return res.status(500).send({
            error: error
        })
    }
}

exports.login = async (req, res, next) => {
    try {
        const payload = req.body

        const getUser = await user.findOne({
            where: { email: payload.email }
        })

        if (!getUser) return res.status(404).send(`user not found`)

        const comparePassword = bcrypt.compareSync(payload.password, getUser.dataValues.password)


        if (comparePassword) {
            const token = jwt.sign({ id: getUser.dataValues.id, email: getUser.dataValues.email }, process.env.JWT_SECRET, { expiresIn: 3600 })

            return res.status(200).send({
                message: `login success`,
                token: token
            })
        } else {
            return res.status(400).send(`invalid password`)
        }

    } catch (error) {
        return res.status(500).send({
            error: error
        })
    }
}

exports.getDetailUser = async (req, res, next) => {
    try {
        const params = req.params.id



        const getUser = await user.findOne({
            where: { email: req.user.email }

        })
        if (req.user.id == !params) return res.status(403).send(`cannot acces another user details`)

        res.status(200).send({
            message: `data user retrieved`,
            data: getUser
        })

    } catch (error) {
        return res.status(500).send({
            error: error
        })
    }
}


exports.deleteUser = async (req, res, next) => {
    try {
        const id = req.params.id;

        const deletedUser = await user.destroy({
            where: { id: id }
        });

        if (deletedUser === 0) {
            return res.status(404).send({
                message: 'User not found'
            });
        }

        res.status(200).send({
            message: 'User deleted successfully'
        });

    } catch (error) {
        return res.status(500).send({
            error: error
        });
    }
};


exports.updateUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const update = req.body;

        const updatedUser = await user.update(update, {
            where: { id: id },
            returning: true,
            plain: true
        });

        res.status(200).send({
            message: `data user update`,
            data: updatedUser[1]
        });

    } catch (error) {
        return res.status(500).send({
            error: error
        });
    }
};