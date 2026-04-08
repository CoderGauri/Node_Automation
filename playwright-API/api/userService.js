export class UserService {
  constructor(request) {
    this.request = request;
  }

  async getUsers() {
    return await this.request.get('/users');
  }
}