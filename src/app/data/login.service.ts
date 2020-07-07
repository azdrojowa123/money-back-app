export class LoggingService {
    logUserNew(name: string) {
      console.log('A new user is added, name: ' + name);
    }

    logUpdateLoan(id: number) {
        console.log('A loan with id : ' + id  +'is updating');
      }
  }