# Design Patterns and Proxy Objects

## Module Pattern

The Module Pattern is a design pattern that is used to encapsulate methods and properties into a single object. This pattern is useful for organizing code and keeping it modular.

- It ensures private and public encapsulation in JavaScript, protecting the global namespace and diminishing naming conflicts.
- It relies on the immediate function invocation pattern to create a closure around the object.

```js
const ChickenModule = (() => {
  const eggColor = 'white' // private variable
  const cluck = () => console.log('Cluck!') // private method

  // public interface
  return {
    layEgg: () => console.log(`Laid a ${eggColor} egg`), // public method
    makeSound: () => cluck(), // public method
  }
})()

ChickenModule.layEgg() // Laid a white egg
ChickenModule.makeSound() // Cluck!
```

- The module pattern is useful for creating singletons, as it only creates one instance of the object.
- It can be used to create private variables and methods that are not accessible from the outside.

## Real-World Examples of the Module Pattern

1. **jQuery**: jQuery uses the module pattern to encapsulate its methods and properties. It creates a single object that contains all the jQuery methods and properties, preventing conflicts with other libraries or code.
2. **Node.js Modules/RequireJS**: Node.js uses the module pattern to create modules that can be imported and used in other files. Each module is encapsulated in its own scope, preventing conflicts with other modules.

## Singleton Pattern

The Singleton Pattern is a design pattern that restricts the instantiation of a class to a single instance. It is useful when you want to ensure that only one instance of a class is created and provide a global point of access to that instance.

- It assures that only one instance of a class is created and provides a global point of access to that instance.
- It is useful for managing global state and resources that need to be shared across different parts of an application.

```js
const ChickenFarm = (() => {
  let instance
  const createInstance = () => ({ totalChickens: 100 })

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance()
      }

      return instance
    },
  }
})()

const farm1 = ChickenFarm.getInstance() // { totalChickens: 100 }
const farm2 = ChickenFarm.getInstance() // { totalChickens: 100 }

console.log(farm1 === farm2) // true
```

- The Singleton Pattern is useful for managing shared resources, such as database connections, configuration settings, or caches.
- It can be used to ensure that only one instance of a class is created, preventing multiple instances from being created accidentally.

## Real-World Examples of the Singleton Pattern

1. **Logger**: A logger is a common example of a singleton. You want to have a single logger instance that is shared across different parts of an application to log messages.
2. **Database Connection**: A database connection is another example of a singleton. You want to have a single database connection that is shared across different parts of an application to interact with the database.
3. **Redux Store**: In React applications that use Redux for state management, the Redux store is implemented as a singleton. It ensures that there is only one store instance that manages the application state.
4. **Node.js Module Caching**: Node.js caches modules after the first time they are loaded, so subsequent `require` calls return the same instance of the module. This behavior is similar to the Singleton Pattern.

## Singleton with ES6 Classes

The Singleton Pattern can also be implemented using ES6 classes and static methods. By using a static method to create and return the instance, you can ensure that only one instance of the class is created.

```js
class DatabaseConnection {
  constructor() {
    if (!DatabaseConnection.instance) {
      this.connection = this.createConnection()

      DatabaseConnection.instance = this
    }

    return DatabaseConnection.instance
  }

  createConnection() {
    // logic to create a database connection
    console.log('Creating database connection...')
    return 'I am a database connection object'
  }
}

const db1 = new DatabaseConnection() // Creating database connection...
const db2 = new DatabaseConnection() // (no output)

console.log(db1 === db2) // true
```

In this example, the `DatabaseConnection` class uses a static property `instance` to store the singleton instance. The constructor checks if the instance already exists and creates it if it doesn't. The `createConnection` method is used to create the database connection.

## Observer Pattern

The Observer Pattern is a design pattern in which an object (known as the subject) maintains a list of its dependents (observers) and notifies them of any state changes, usually by calling one of their methods.

- It enables a subscription model where objects (observers) "listen" to events or changes and are notified when they occur.
- It is useful for implementing event handling systems, pub/sub systems, and reactive programming.

```js
class Subject {
  constructor() {
    this.observers = []
  }

  subscribe(fn) {
    this.observers.push(fn)
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((observer) => observer !== fn)
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data))
  }
}

const observer1 = (data) => console.log(`Observer 1 received: ${data}`)
const observer2 = (data) => console.log(`Observer 2 received: ${data}`)

const subject = new Subject()

subject.subscribe(observer1)
subject.subscribe(observer2)

subject.notify('Hello, observers!')
// Observer 1 received: Hello, observers!
// Observer 2 received: Hello, observers!

subject.unsubscribe(observer1)
```

- The Observer Pattern allows for a one-to-many relationship between the subject and observers, where the subject can notify multiple observers of changes.
- Observers can subscribe to and unsubscribe from the subject, allowing for dynamic changes in the list of observers.

Another example of the Observer Pattern using the module pattern:

```js
class Blog {
  constructor() {
    this.subscribers = []
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber)
  }

  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter((s) => s !== subscriber)
  }

  publish(post) {
    this.subscribers.forEach((subscriber) => subscriber.notify(post))
  }
}

class Subscriber {
  constructor(name) {
    this.name = name
  }

  notify(post) {
    console.log(
      `${this.name} received notification: New post published - ${post.title}`
    )
  }
}

const john = new Subscriber('John')
const jane = new Subscriber('Jane')

const blog = new Blog()
blog.subscribe(john)
blog.subscribe(jane)

blog.publish({ title: 'Hello, World!', content: 'This is my first post.' })
// John received notification: New post published - Hello, World!
// Jane received notification: New post published - Hello, World!

blog.unsubscribe(jane)

blog.publish({ title: 'Goodbye, World!', content: 'This is my last post.' })
// John received notification: New post published - Goodbye, World!
```

In this example, the `Blog` class acts as the subject, and the `Subscriber` class acts as the observer. The `Blog` class maintains a list of subscribers and notifies them when a new post is published.

## Real-World Examples of the Observer Pattern

1. **Event Handling in JavaScript**: The Observer Pattern is commonly used in JavaScript for event handling. DOM elements can be observers that listen for events (such as click, mouseover, etc.) and notify the event listeners when the event occurs.
2. **Model-View-Controller (MVC) Architecture**: The Observer Pattern is used in the MVC architecture to decouple the model (subject) from the view (observers). When the model changes, it notifies the views to update their display.
3. **Vue.js and React**: Front-end frameworks like Vue.js and React use the Observer Pattern for reactive programming. Components can be observers that react to changes in the application state.
4. **RxJS**: Reactive Extensions for JavaScript (RxJS) is a library that implements the Observer Pattern for handling asynchronous and event-based programming. It provides observables and observers for reactive programming.

## Registry Pattern

The Registry Pattern is a design pattern that is used to manage objects and resources in a centralized registry. It provides a way to store, access, and manage objects without exposing them directly to the client code.

- It acts as a centralized repository for objects, allowing clients to access and manipulate objects through a common interface.
- It is useful for managing shared resources, global state, and configuration settings in an application.
- It is used to store and retrieve instances of objects by name or key.

Imagine a farm scenario where we need to keep track of all our chickens. Instead of passing around a list of chickens or trying to remember where we last accessed a particular chicken, we can use the registry pattern to provide a centralized way to manage our chickens.

In this example, each chicken will have a unique ID (e.g. a tag number), and some properties like name, age, and breed.

```js
class Chicken {
  constructor(id, name, age, breed) {
    this.id = id
    this.name = name
    this.age = age
    this.breed = breed
  }
}

class ChickenRegistry {
  #chickens = new Map()

  addChicken(chicken) {
    if (!chicken.id) {
      throw new Error('Chicken must have an ID')
    }

    this.#chickens.set(chicken.id, chicken)
  }

  getChicken(id) {
    return this.#chickens.get(id)
  }

  removeChicken(id) {
    this.#chickens.delete(id)
  }

  getAllChickens() {
    return Array.from(this.#chickens.values())
  }
}

const chicken1 = new Chicken(1, 'Henrietta', 2, 'Rhode Island Red')
const chicken2 = new Chicken(2, 'Cluck Norris', 3, 'Barred Plymouth Rock')

const farm = new ChickenRegistry()
farm.addChicken(chicken1)
farm.addChicken(chicken2)

console.log(farm.getAllChickens()) // [Chicken { id: 1, name: 'Henrietta', age: 2, breed: 'Rhode Island Red' }, Chicken { id: 2, name: 'Cluck Norris', age: 3, breed: 'Barred Plymouth Rock' }]

const chicken = farm.getChicken(1)
console.log(chicken) // Chicken { id: 1, name: 'Henrietta', age: 2, breed: 'Rhode Island Red' }

farm.removeChicken(2)
console.log(farm.getAllChickens()) // [Chicken { id: 1, name: 'Henrietta', age: 2, breed: 'Rhode Island Red' }]
```

In this example, the `Chicken` class represents a chicken object with properties like ID, name, age, and breed. The `ChickenRegistry` class acts as a centralized registry for managing chickens. It uses a `Map` to store chickens by their ID and provides methods to add, get, remove, and retrieve all chickens.

## Real-World Examples of the Registry Pattern

1. **Service Locator Pattern**: The Registry Pattern is used in the Service Locator Pattern to provide a centralized registry for services in an application. Clients can access services through the service locator without knowing the concrete implementation.
2. **Dependency Injection Containers**: Dependency injection containers use the Registry Pattern to manage dependencies and provide instances of objects to clients. Clients can request objects from the container without creating them directly.
3. **Global State Management**: The Registry Pattern can be used to manage global state in an application. Objects and resources can be stored in a centralized registry and accessed by different parts of the application.
4. **Configuration Settings**: The Registry Pattern can be used to store and manage configuration settings in an application. Settings can be stored in a registry and accessed by different components as needed.

## Mixin Pattern

The Mixin Pattern is a design pattern that allows objects to inherit methods and properties from multiple sources. It is used to extend the functionality of objects by combining multiple mixins into a single object.

- It enables objects to inherit methods and properties from multiple sources, providing a way to compose objects with different behaviors.
- It is useful for creating reusable and composable components that can be combined to create complex objects.

```js
const fly = {
  fly() {
    console.log(`${this.name} is flying!`)
  },
  land() {
    console.log(`${this.name} is landing!`)
  },
}

const swim = {
  swim() {
    console.log(`${this.name} is swimming!`)
  },
}

class Animal {
  constructor(name, species) {
    this.name = name
    this.species = species
  }

  greet() {
    console.log(`${this.name} says hello!`)
  }
}

const bernie = new Animal('Bernie', 'Pelican')
Object.assign(bernie, fly) // Mixin fly methods
Object.assign(bernie, swim) // Mixin swim methods

bernie.greet() // Bernie says hello!
bernie.fly() // Bernie is flying!
bernie.land() // Bernie is landing!
bernie.swim() // Bernie is swimming!
```

In this example, the `fly` and `swim` mixins provide methods for flying, landing, and swimming. The `Animal` class has a `greet` method and is extended with the `fly` and `swim` mixins to add flying and swimming capabilities to the `Animal` object.

## Proxy Pattern With Proxy Objects

The Proxy Pattern is a design pattern that allows you to create a placeholder (proxy) for another object. The proxy object controls access to the real object and can add additional behavior or restrictions.

- It provides a way to control access to an object and add additional functionality without modifying the object itself.
- It is useful for implementing lazy loading, access control, logging, caching, and other cross-cutting concerns.
- Proxy means 'in place of', representing the real object. It acts as an intermediary between the client and the real object.
- Instead of directly interacting with the real object, the client interacts with the proxy object, which can perform additional operations before or after forwarding the request to the real object.

```js
const cat = {
  name: 'Whiskers',
  age: 3,
  breed: 'Tuxedo',
}

// new Proxy(object, handler) // Proxy constructor

const catProxy = new Proxy(cat, {})

// we can access the properties of the real object through the proxy
console.log(catProxy.name) // Whiskers
console.log(catProxy.age) // 3
console.log(catProxy.breed) // Tuxedo

// we can also set properties on the real object through the proxy
catProxy.age = 4
console.log(cat.age) // 4

// we can use the proxy to govern and control access to the real object:
// we pass through a handler object to the Proxy constructor
// the handler object contains traps (methods) that intercept operations on the proxy object
// we can define traps for operations like get, set, deleteProperty, apply, etc.
const handler = {
  get(obj, property) {
    console.log(`Getting property: ${property} from object:`, obj)
    return obj[property]
  },

  set(obj, property, value) {
    if (property === 'age' && value < obj.age) {
      console.log('Age cannot be decreased')
      return
    } else {
      console.log(`Setting property: ${property} to: ${value}`)
      obj[property] = value
      return
    }
  },
}
const anotherCatProxy = new Proxy(cat, handler)

console.log(anotherCatProxy.name) // Getting property: name from object: { name: 'Whiskers', age: 4, breed: 'Tuxedo' } // Whiskers
```

In this example, we create a `cat` object and a `catProxy` object using the `Proxy` constructor. The `catProxy` object acts as a proxy for the `cat` object, allowing us to access and modify the properties of the `cat` object through the proxy. We define a `handler` object with traps for the `get` and `set` operations to intercept and control access to the `cat` object.

- The `get` trap intercepts property access on the proxy object and logs the property being accessed before returning the value from the real object.
- The `set` trap intercepts property assignment on the proxy object and checks if the property is `age` and the new value is less than the current value. If the condition is met, it logs a message and prevents the property from being set.
- The `handler` object is passed to the `Proxy` constructor to define the behavior of the proxy object.
