var User = require('../model/User');


async function createUser(req, res) {
    var { nombres, apellidos, correo, celular, empresa, genero } = req.body;
    try {
        var newUser = await User.create({
            nombres, apellidos, correo, celular, empresa, genero
        }, {
            fields: ['nombres', 'apellidos', 'correo', 'celular', 'empresa', 'genero']
        }
        );
        if (newUser) {
            res.json(newUser)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error creando el usuario",
            data: {}
        })
    }
}
async function getAllUsers(req, res) {
    var users = await User.findAll();
    res.json(users)
}

async function getUser(req, res) {
    var { id } = req.params;

    var user = await User.findOne({
        where: {
            id
        }
    });
    res.json(user);
}

async function deleteUser(req, res) {
    var { id } = req.params;
    var rowCount = await User.destroy({
        where: {
            id
        }
    })
    res.json(rowCount);
}

async function updateUser(req, res) {
    var { id } = req.params;
    var { nombres, apellidos, correo, celular, empresa, genero } = req.body;
    var user = await User.findOne({
        where: {
            id
        }
    });
    user.update({
        nombres, apellidos, correo, celular, empresa, genero
    });
    res.json(user);
}

module.exports = { createUser, getAllUsers, getUser, deleteUser, updateUser };
