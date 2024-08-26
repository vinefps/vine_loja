const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

router.post('/', async (req, res) => {
    try {
        const { user, password,email } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        // Armazenar o usuário diretamente no banco de dados usando Prisma
        const newUser = await prisma.user.create({
            data: {
                user: user,
                password: hashedPassword,
                email:email
            },
        });

        res.status(201).json({
            status: 'Usuario registrado com sucesso',
            user: newUser,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao registrar');
    }
});

module.exports = router;
