interface Product {
  getDescription(): string;
  getPrice(): number;
}

class BasicProduct implements Product {
  constructor(private name: string, private price: number) { }

  getDescription(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }
}

class ProductDecorator implements Product {
  constructor(protected product: Product) { }

  getDescription(): string {
    return this.product.getDescription();
  }

  getPrice(): number {
    return this.product.getPrice();
  }
}

class GiftWrapDecorator extends ProductDecorator {
  getDescription(): string {
    return `${super.getDescription()} com Embalagem para Presente`;
  }

  getPrice(): number {
    return super.getPrice() + 5;
  }
}

class EcoFriendlyDecorator extends ProductDecorator {
  getDescription(): string {
    return `${super.getDescription()} com Embalagem Eco-Friendly`;
  }

  getPrice(): number {
    return super.getPrice() + 3;
  }
}

// Uso
let product: Product = new BasicProduct('Caneca', 20);
console.log(`${product.getDescription()} - R$${product.getPrice()}`);

product = new GiftWrapDecorator(product);
console.log(`${product.getDescription()} - R$${product.getPrice()}`);

product = new EcoFriendlyDecorator(product);
console.log(`${product.getDescription()} - R$${product.getPrice()}`);
