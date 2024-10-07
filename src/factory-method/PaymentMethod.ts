interface PaymentMethod {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Pagando R$ ${amount} com Cartão de Crédito.`);
  }
}

class PayPalPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Pagando R$ ${amount} com PayPal.`);
  }
}

class BoletoPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Pagando R$ ${amount} com Boleto.`);
  }
}

abstract class PaymentFactory {
  abstract createPaymentMethod(): PaymentMethod;

  public processPayment(amount: number): void {
    const paymentMethod = this.createPaymentMethod();
    paymentMethod.pay(amount);
  }
}

class CreditCardFactory extends PaymentFactory {
  createPaymentMethod(): PaymentMethod {
    return new CreditCardPayment();
  }
}

class PayPalFactory extends PaymentFactory {
  createPaymentMethod(): PaymentMethod {
    return new PayPalPayment();
  }
}

class BoletoFactory extends PaymentFactory {
  createPaymentMethod(): PaymentMethod {
    return new BoletoPayment();
  }
}

// Uso
const paymentFactories: PaymentFactory[] = [
  new CreditCardFactory(),
  new PayPalFactory(),
  new BoletoFactory(),
];

paymentFactories.forEach(factory => factory.processPayment(150));