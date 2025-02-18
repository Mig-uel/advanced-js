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
