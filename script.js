const baseCosts = [
  { item: "Cimento CP-V ARI (saco)", unid: "un", quant: 20.00 },
  { item: "Areia", unid: "m³", quant: 0.50 },
  { item: "Brita", unid: "m³", quant: 0.50 },
  { item: "Aço CA-50 - 12,5mm", unid: "kg", quant: 154.0 },
  { item: "Aço CA-50 - 4,2mm", unid: "kg", quant: 15.70 }
];

function calculateCost() {
  const volumeInput = document.getElementById('volume').value;
  const volume = parseFloatLocale(volumeInput);
  
  if (isNaN(volume) || volume <= 0) {
    alert('Por favor, insira um volume válido.');
    return;
  }

  let resultText = '';

  baseCosts.forEach((cost) => {
    const quant = cost.quant * volume;
    resultText += `\n\n${cost.item}: Qnt: ${quant.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${cost.unid}`;
  });

  document.getElementById('result').value = resultText;
}

function parseFloatLocale(value) {
  // Remove qualquer espaço em branco
  value = value.replace(/\s/g, '');
  // Substitui vírgulas por pontos (se houver vírgulas como separadores decimais)
  value = value.replace(/,/g, '.');
  // Converte para float
  return parseFloat(value);
}
