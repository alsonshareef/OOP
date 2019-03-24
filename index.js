// Trying to understand OOP.

/*
-- DEFINITION --
Objected-Oriented Programming is an approach to programming, or a programming paradigm that revolves around organising your data and functionality through objects and their methods. This means assigning certain types of information to its own singular object; keeping any relevant information in its own scope. And any kind of functionality that is associated to a particular type of information will be stored in its relevant object as a 'method'. Having too many variables/functions declared within the global scope can increase chances of creating 'spaghetti code' that is incredibly hard to maintain and follow. Organising through objects will at the very least help with maintaining code and understanding what the dependencies are and how everything fits together.
*/


/*
-- WAYS TO IMPLEMENT OOP --

1. Class-based Inheritance (ES6):
    - Classes are essentially 'blue prints' for how an object is going to be built, and every new object will be instantiated through this class(blue print) through a constructor function. These new objects that are instantiated through the class are mutable; meaning that their data will change if the class changes.

    - Sub-classes can be created using the 'extends' keyword and then the name of the parent class. Objects instantiated through the parent class are also mutable, as they will change depending on the sub-class blueprint, which is dependent on the parent class.
*/

// An object created to represent a specific person, based on a blue print for a generic person.
    class Person {
        constructor(firstName, lastName, age, occupation){
            this.firstName = firstName
            this.lastName = lastName
            this.age = age
            this.occupation = occupation
        }
        introduction(){
            return `Hi! my name is ${this.firstName} ${this.lastName}. I am ${this.age} years old and I am a ${this.occupation}.`
        }
    }

    // Instantiation based on Person class.
    let Alson = new Person('Alson', 'Shareef', 23, 'Software Developer')
    // console.log(Alson.introduction())

// An object created by a blueprint that is influenced by another blueprint (subclass)
    class User extends Person {
        constructor(firstName, lastName, age, occupation, email, password){
            super(firstName, lastName, age, occupation)
            this.email = email
            this.password = password
        }
        getUserInfo(){
            return `The user created by ${this.firstName} ${this.lastName} has the following information: \n Email: ${this.email} \n Password: ${this.password}`
        }
    }

    let user = new User('John', 'Doe', 30, 'Accountant', 'john.doe@gmail.com', 'john123')

    console.log(user.getUserInfo())

/*
A big disadvantage with inheritance is that the base class (super class) that has too much influence on its descendants (objects instantiated through it), which makes it very difficult to refactor in an application that has been scaled, as one little change in the base class could potentially break other components that were instantiated through it. And when trying to figure out where the refactoring has to be made, following the connection from descendants all the way up to the base class or in other words, following the inheritance tree to the top can be incredibly tedious.

This means that applications or code that don't require to be changed frequently or to a large extent will not suffer as much as a large application with millions of users would by this particular flaw of OOP; therefore keeping the inheritance tree as shallow as possible is a good practice as a deep inheritance tree can become very unmaintainable.
*/

/*
2. Prototypal Inheritance (ES5):
    - 
*/