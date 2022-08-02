const order = {
  name: 'Luiz Silva',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 50,
  },
};

const customerInfo = (order) => {
  const textPt1 = `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name},`;
  const textPt2 = `Telefone: ${order.phoneNumber},`;
  const textPt3 = `${Object.values(order.address)}`;
  return console.log(`${textPt1} ${textPt2} ${textPt3}`);
}
customerInfo(order);

const orderModifier = (order) => {
  const textPt1 = `Olá ${order.order.delivery.deliveryPerson}`;
  const textPt2 = `o total do seu pedido de ${Object.keys(order.order.pizza)} e`
  const textPt3 = `${Object.keys(order.order.drinks)} é R$ ${order.payment.total}.`;
  return console.log(`${textPt1} ${textPt2} ${textPt3}`);
}

orderModifier(order);