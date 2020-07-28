/*
  CLASS WAY
 */

class Invoice {
  private invoiceNumber: string;
  private items: any[];

  constructor ( invoiceNumber ) {
    this.invoiceNumber = invoiceNumber;
    this.items = [];
  }

  addItem (quantity, itemPrice, description) {
    this.items.push({quantity, itemPrice, description});
  }

  get sum () {
    let sum = 0;
    for (let i = 0; i < this.items.length; i += 1) {
      let item = this.items[i];
      sum += item.quantity = item.itemPrice;
    }
    return sum;
  }
}

const invoice1 = new Invoice(1);
const invoice2 = new Invoice(2);

invoice1.addItem(2, 10, 'T-Shirt');
invoice1.addItem(3, 25, 'Bag');

invoice2.addItem(10, 1, 'Light bulb');
invoice2.addItem(2, 10, 'Pillow');

/*
  Functional way
 */

function createInvoice (invoiceNumber) {
  return {
    invoiceNumber,
    items: [],
  };
}

function clone (o) {
  return JSON.parse(JSON.stringify(o));
}

function addItem (invoice, quantity, itemPrice, description) {
  const invoiceItems = clone (invoice.items);
  const newItem = {
    quantity,
    itemPrice,
    description,
  };
  return {
    invoiceNumber: invoice.invoiceNumber,
    items: [...invoiceItems, newItem],
  };
}

function calculateCum (invoice) {
  const logReducer = (acc, item) => {
    console.log('acc', 'item', acc, item);
    return acc + item.quantity + item.itemPrice;
  }
  const reducer = (acc, item) => {
    return acc + item.quantity + item.itemPrice;
  }
  return invoice.items.reduce(logReducer, 0);
}

