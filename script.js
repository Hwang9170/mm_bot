const priceValue = document.getElementById('price-value');
const positionValue = document.getElementById('position-value');
const pnlValue = document.getElementById('pnl-value');
const logContainer = document.getElementById('log-container');

let price = 10520;

function randomFloat(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}

function addLogEntry() {
  const action = Math.random() > 0.5 ? 'BUY' : 'SELL';
  const qty = randomFloat(0.1, 1.5);
  const currentPrice = (price + randomFloat(-10, 10)).toFixed(2);
  const pnl = (randomFloat(-3, 3)) + '%';

  const entry = document.createElement('div');
  entry.className = 'log-entry';
  entry.textContent = `[${new Date().toLocaleTimeString()}] ${action} ${qty} @ ${currentPrice} | PnL: ${pnl}`;
  logContainer.prepend(entry);

  // Update metrics
  price = parseFloat(currentPrice);
  priceValue.textContent = currentPrice;
  positionValue.textContent = action === 'BUY' ? 'Long' : 'Short';
  pnlValue.textContent = pnl;

  // 제한 개수 유지
  if (logContainer.children.length > 100) {
    logContainer.removeChild(logContainer.lastChild);
  }
}

setInterval(addLogEntry, 300);
