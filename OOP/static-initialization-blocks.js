// Static Initialization Blocks

class DatabaseConnection {
  static connection

  static loadProdConnection() {}
  static loadDevConnection() {}

  static {
    if (process.env.NODE_ENV === 'production') {
      DatabaseConnection.connection = DatabaseConnection.loadProdConnection()
    } else {
      DatabaseConnection.connection = DatabaseConnection.loadDevConnection()
    }
  }
}
