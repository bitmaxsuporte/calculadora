const baseCosts = [
    { item: "Cimento CP-V ARI (saco)", unid: "un", quant: 10.00 },
    { item: "Areia", unid: "m³", quant: 0.50 },
    { item: "Brita", unid: "m³", quant: 0.50 },
    { item: "Aço CA-50 - 12,5mm", unid: "kg", quant: 77.0 },
    { item: "Aço CA-50 - 4,2mm", unid: "kg", quant: 7.85 }

  ];
  
  function calculateCost() {
    const volume = parseFloat(document.getElementById('volume').value);
    if (isNaN(volume) || volume <= 0) {
      alert('Por favor, insira um volume válido.');
      return;
    }
  
    let resultText = '';
  
    baseCosts.forEach((cost) => {
      const quant = cost.quant * volume;
      resultText += `\n\n${cost.item}: Qnt: ${quant.toFixed(2)} ${cost.unid}`;
    });
  
    
    document.getElementById('result').value = resultText;
  }
  