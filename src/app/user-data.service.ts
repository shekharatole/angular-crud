import { User } from './user-data';
import { InMemoryDbService } from 'angular-in-memory-web-api';


export class UserData implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      { id: 1, fname: 'Chandrashekhar', lname: 'Atole', email: 'shekhar18.atole@gmail.com', mobile: 9975170828, status: 'Active' },
      { id: 2, fname: 'Jonh', lname: 'Cleark', email: 'jonh@gmail.com', mobile: 8805269889, status: 'Active' },
      { id: 3, fname: 'Glenn', lname: 'Smith', email: 'glenn@live.in', mobile: 9766149696, status: 'Active' },
      { id: 4, fname: 'Stive', lname: 'Waugh', email: 'stive@gmail.com', mobile: 9403556868, status: 'Deactive' },
      { id: 5, fname: 'Henry', lname: 'Mitchel', email: 'hmitchel@live.in', mobile: 8888056656, status: 'Active' }

    ];
    return { users };
  }
}
