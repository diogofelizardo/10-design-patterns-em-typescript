interface ExampleNotification {
  send(message: string): void;
}

class SMSService {
  sendSMS(message: string): void {
    console.log(`Enviando SMS: ${message}`);
  }
}

class SMSAdapter implements ExampleNotification {
  private smsService: SMSService;

  constructor(smsService: SMSService) {
    this.smsService = smsService;
  }

  send(message: string): void {
    this.smsService.sendSMS(message);
  }
}

class NotificationManager {
  constructor(private notifier: ExampleNotification) { }

  notify(message: string): void {
    this.notifier.send(message);
  }
}

// Uso
const smsService = new SMSService();
const smsAdapter = new SMSAdapter(smsService);
const notifier = new NotificationManager(smsAdapter);

notifier.notify('Olá! Sua compra foi realizada com sucesso.'); 