const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const clienteRoutes = require('./routes/clienteRoutes');
const produtoRoutes = require('./routes/produtoRoutes');
const compraRoutes = require('./routes/compraRoutes');
const authRoutes = require('./routes/authRoutes');
const relatorioRoutes = require('./routes/relatorioRoutes');

app.use(express.json());
app.use(cors());

// Rotas da API (devem vir antes dos arquivos estáticos)
app.use('/api/clientes', clienteRoutes);
app.use('/api/produtos', produtoRoutes);
app.use('/api/compras', compraRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/relatorios', relatorioRoutes);

// Servir arquivos estáticos do frontend (deve vir depois das rotas da API)
app.use(express.static(path.join(__dirname, '../frontEnd')));

module.exports = app;


 

