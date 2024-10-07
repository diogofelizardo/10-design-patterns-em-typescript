class ReportExample {
  public title: string = '';
  public content: string = '';
  public charts: string[] = [];
  public tables: string[] = [];

  public display(): void {
    console.log(`Título: ${this.title}`);
    console.log(`Conteúdo: ${this.content}`);
    if (this.charts.length > 0) {
      console.log('Gráficos:');
      this.charts.forEach(chart => console.log(` - ${chart}`));
    }
    if (this.tables.length > 0) {
      console.log('Tabelas:');
      this.tables.forEach(table => console.log(` - ${table}`));
    }
  }
}

interface ReportBuilder {
  setTitle(title: string): void;
  setContent(content: string): void;
  addChart(chart: string): void;
  addTable(table: string): void;
  getReportExample(): ReportExample;
}

class DetailedReportBuilder implements ReportBuilder {
  private report: ReportExample;

  constructor() {
    this.report = new ReportExample();
  }

  setTitle(title: string): void {
    this.report.title = title;
  }

  setContent(content: string): void {
    this.report.content = content;
  }

  addChart(chart: string): void {
    this.report.charts.push(chart);
  }

  addTable(table: string): void {
    this.report.tables.push(table);
  }

  getReportExample(): ReportExample {
    return this.report;
  }
}

class ReportDirector {
  private builder: ReportBuilder;

  constructor(builder: ReportBuilder) {
    this.builder = builder;
  }

  construct(title: string, content: string, charts: string[], tables: string[]): void {
    this.builder.setTitle(title);
    this.builder.setContent(content);
    charts.forEach(chart => this.builder.addChart(chart));
    tables.forEach(table => this.builder.addTable(table));
  }
}

// Uso
const builder = new DetailedReportBuilder();
const director = new ReportDirector(builder);

director.construct(
  'Relatório de Vendas',
  'Este relatório apresenta as vendas do último trimestre.',
  ['Gráfico de Vendas por Região', 'Gráfico de Crescimento Mensal'],
  ['Tabela de Vendas por Produto']
);

const report = builder.getReportExample();
report.display();