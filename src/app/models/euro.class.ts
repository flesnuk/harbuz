const CENTS_IN_EURO = 100;

export class Euro {
  price: number;
  cents: number;
  precision = 2;

  formatter = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: this.precision,
  });

  constructor (price: string = '0', centsOpt?: number) {
    if (centsOpt != null) { // case for when is passed the exact amount in cents (used internally for avoiding parsing)
      this.cents = centsOpt;
      return;
    }

    price = price.replace(',', '.').replace(/[^\d.-]/g, ''); // price as	"4.1234" / ".25" / 		"1."
    const priceFloat = isNaN(parseFloat(price)) ? 0 : parseFloat(price); // 4.1234 /  0.25 / 		 1
    const priceString = priceFloat.toFixed(this.precision); // eg: 					"4.12" ,  "0.25",	 	"1.00"

    const [euro, cents] = priceString.split('.'); // eg:				["4", "12"], ["0","25"],   ["1", "00"]
    this.cents =  parseInt(euro, 10) * CENTS_IN_EURO;
    this.cents += parseInt(cents, 10);

  }

  setPrice(priceString: string = '0') {
    console.log('set');
    this.constructor(priceString);
  }

  getPrice(): string {
    console.log('get');
    return (this.cents / 100 ).toString();
  }

  sum(other: Euro): Euro {
    return new Euro('', this.cents + other.cents);
  }

  sub(other: Euro): Euro {
    return new Euro('', this.cents - other.cents);
  }

  scale(mult: number): Euro {
    return new Euro('', this.cents * mult);
  }

  toString() {

    return this.formatter.format(this.cents / 100);
  }

}
