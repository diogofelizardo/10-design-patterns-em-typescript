class DatabaseConnection {
  private static instance: DatabaseConnection;
  private connection: any;

  private constructor() {
    // Simulação de conexão com o banco de dados
    this.connection = { /* conexão simulada */ };
    console.log('Conexão com o banco de dados estabelecida.');
  }

  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  public query(sql: string): void {
    // Simulação de execução de uma consulta
    console.log(`Executando consulta: ${sql}`);
  }
}

// Uso
const db1 = DatabaseConnection.getInstance(); // Conexão com o banco de dados estabelecida.
db1.query('SELECT * FROM usuários'); // Executando consulta: SELECT * FROM usuários

const db2 = DatabaseConnection.getInstance();
db2.query('SELECT * FROM produtos'); // Executando consulta: SELECT * FROM produtos

console.log(db1 === db2); // true