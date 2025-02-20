export class AppService {
  static getServerStatus() {
    return { status: "Server is up and running!", timestamp: new Date() };
  }
}
