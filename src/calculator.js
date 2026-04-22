export function calculateTip(billAmount, tipPercentage) {
  if (typeof billAmount !== 'number' || billAmount < 0) {
    throw new Error('Bill amount must be a non-negative number');
  }
  if (typeof tipPercentage !== 'number' || tipPercentage < 0) {
    throw new Error('Tip percentage must be a non-negative number');
  }
  
  const tip = (billAmount * tipPercentage) / 100;
  const total = billAmount + tip;
  
  return {
    bill: billAmount,
    tipPercentage,
    tipAmount: Math.round(tip * 100) / 100,
    total: Math.round(total * 100) / 100
  };
}

export function splitBill(totalAmount, numberOfPeople) {
  if (typeof totalAmount !== 'number' || totalAmount < 0) {
    throw new Error('Total amount must be a non-negative number');
  }
  if (!Number.isInteger(numberOfPeople) || numberOfPeople < 1) {
    throw new Error('Number of people must be a positive integer');
  }
  
  const perPerson = totalAmount / numberOfPeople;
  
  return {
    total: totalAmount,
    numberOfPeople,
    perPerson: Math.round(perPerson * 100) / 100
  };
}