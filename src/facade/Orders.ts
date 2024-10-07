class InventoryService {
  checkStock(productId: number, quantity: number): boolean {
    console.log(`Verificando estoque para produto ${productId}: quantidade ${quantity}`);
    // Simulação de verificação de estoque
    return true;
  }

  reserveStock(productId: number, quantity: number): void {
    console.log(`Reservando ${quantity} unidades do produto ${productId}`);
  }
}

class PaymentService {
  processPayment(amount: number): boolean {
    console.log(`Processando pagamento de R$${amount}`);
    // Simulação de processamento de pagamento
    return true;
  }
}

class ShippingService {
  arrangeShipping(productId: number, quantity: number): void {
    console.log(`Organizando envio de ${quantity} unidades do produto ${productId}`);
  }
}

class OrderFacade {
  private inventoryService: InventoryService;
  private paymentService: PaymentService;
  private shippingService: ShippingService;

  constructor() {
    this.inventoryService = new InventoryService();
    this.paymentService = new PaymentService();
    this.shippingService = new ShippingService();
  }

  placeOrder(productId: number, quantity: number, amount: number): void {
    if (this.inventoryService.checkStock(productId, quantity)) {
      this.inventoryService.reserveStock(productId, quantity);
      if (this.paymentService.processPayment(amount)) {
        this.shippingService.arrangeShipping(productId, quantity);
        console.log('Pedido realizado com sucesso!');
      } else {
        console.log('Falha no processamento do pagamento.');
      }
    } else {
      console.log('Estoque insuficiente para o pedido.');
    }
  }
}

// Uso
const orderFacade = new OrderFacade();
orderFacade.placeOrder(101, 2, 150);