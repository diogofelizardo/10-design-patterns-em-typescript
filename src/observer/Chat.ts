interface Observer {
  update(message: string): void;
}

class User implements Observer {
  constructor(private name: string) { }

  update(message: string): void {
    console.log(`${this.name} recebeu a mensagem: "${message}"`);
  }
}

class ChatRoom {
  private users: Observer[] = [];

  subscribe(user: Observer): void {
    this.users.push(user);
    console.log('Novo usuário entrou na sala.');
  }

  unsubscribe(user: Observer): void {
    this.users = this.users.filter(u => u !== user);
    console.log('Usuário saiu da sala.');
  }

  broadcast(message: string): void {
    console.log(`Enviando mensagem: "${message}" para todos os usuários.`);
    this.users.forEach(user => user.update(message));
  }
}

// Uso
const chatRoom = new ChatRoom();

const alice = new User('Alice');
const bob = new User('Bob');
const carol = new User('Carol');

chatRoom.subscribe(alice);
chatRoom.subscribe(bob);
chatRoom.subscribe(carol);

chatRoom.broadcast('Bem-vindos à sala de chat!');

chatRoom.unsubscribe(bob);

chatRoom.broadcast('Bob saiu da sala.');