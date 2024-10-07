interface ImageFilterStrategy {
  applyFilter(image: string): string;
}

class BlackAndWhiteFilter implements ImageFilterStrategy {
  applyFilter(image: string): string {
    return `${image} com filtro Preto e Branco aplicado.`;
  }
}

class SepiaFilter implements ImageFilterStrategy {
  applyFilter(image: string): string {
    return `${image} com filtro Sépia aplicado.`;
  }
}

class ImageProcessor {
  private filterStrategy: ImageFilterStrategy;

  constructor(filterStrategy: ImageFilterStrategy) {
    this.filterStrategy = filterStrategy;
  }

  setFilterStrategy(filterStrategy: ImageFilterStrategy): void {
    this.filterStrategy = filterStrategy;
  }

  process(image: string): string {
    return this.filterStrategy.applyFilter(image);
  }
}

// Uso
const processor = new ImageProcessor(new BlackAndWhiteFilter());
console.log(processor.process('Imagem1.jpg'));
processor.setFilterStrategy(new SepiaFilter());
console.log(processor.process('Imagem2.jpg'));