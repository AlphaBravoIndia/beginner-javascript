const endpoint = `https://api.apilayer.com/exchangerates_data/latest`;
const ratesByBase = {};
const myHeaders = new Headers();
myHeaders.append('apikey', '');
const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};

export async function fetchRates(base = 'USD') {
  const res = await fetch(`${endpoint}?base=${base}`, requestOptions);
  const rates = await res.json();
  return rates;
}

export async function convert(amount, from, to) {
  // first check if we even have the rates to convert from that currency
  if (!ratesByBase[from]) {
    console.log(
      `Oh no, we don't have ${from} to convert to ${to}. So let's go get it!`
    );

    const rates = await fetchRates(from);
    console.log(rates);
    // store rates for next time
    ratesByBase[from] = rates;
  }

  // convert the amount that they passed in
  const rate = ratesByBase[from].rates[to];
  const convertedAmount = rate * amount;
  console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
  return convertedAmount;
}
