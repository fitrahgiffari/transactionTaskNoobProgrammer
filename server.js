const express = require("express");
const bodyParser = require("body-parser");
const rootRoute = require("./routes/rootRoute");
const registerRoute = require("./routes/registerRoute");
const loginRoute = require("./routes/loginRoute");

const addBarang = require("./routes/barang/addBarang");
const getBarang = require("./routes/barang/getBarang");
const deleteBarang = require("./routes/barang/deleteBarangs");
const editBarang = require("./routes/barang/editBarang");
const addPenjual = require("./routes/penjual/addPenjual");
const getPenjual = require("./routes/penjual/getPenjual");
const deletePenjual = require("./routes/penjual/deletePenjual");
const editPenjual = require("./routes/penjual/editPenjual");
const addPembeli = require("./routes/pembeli/addPembeli");
const getPembeli = require("./routes/pembeli/getPembeli");
const deletePembeli = require("./routes/pembeli/deletePembeli");
const editPembeli = require("./routes/pembeli/editPembeli");

const addTransaksi = require("./routes/transaksi/addTransaksi");
const getTransaksi = require("./routes/transaksi/getTransaksi");
const deleteTransaksi = require("./routes/transaksi/deleteTransaksi");
const editTransaksi = require("./routes/transaksi/editTransaksi");

const addKonfirmasi = require("./routes/konfirmasi/addKonfirmasi");
const getKonfirmasi = require("./routes/konfirmasi/getKonfirmasi");
const deleteKonfirmasi = require("./routes/konfirmasi/deleteKonfirmasi");
const editKonfirmasi = require("./routes/konfirmasi/editKonfirmasii");

const app = express();
app.use(bodyParser.json());

app.use(rootRoute);
app.use(registerRoute);
app.use(loginRoute);

app.use(addBarang);
app.use(getBarang);
app.use(deleteBarang);
app.use(editBarang);
app.use(addPenjual);
app.use(getPenjual);
app.use(deletePenjual);
app.use(editPenjual);
app.use(addPembeli);
app.use(getPembeli);
app.use(deletePembeli);
app.use(editPembeli);

app.use(addTransaksi);
app.use(getTransaksi);
app.use(deleteTransaksi);
app.use(editTransaksi);

app.use(addKonfirmasi);
app.use(getKonfirmasi);
app.use(deleteKonfirmasi);
app.use(editKonfirmasi);

const port = 3001;
app.listen(port, () => {
  console.log(`Backend app is running in http://localhost:${port}`);
});
