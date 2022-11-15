/* Viagem para Sampa */

const precoGasolina = 4.91;
const kmPorLitroGasolina = 11.2;
const distanciaEmKm = 448;

const litrosConsumidosGasolina = distanciaEmKm / kmPorLitroGasolina; 
const valorGastoGasolina = litrosConsumidosGasolina * precoGasolina;
console.log(valorGastoGasolina);
