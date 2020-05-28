const state = {
    todos: [
        {
            id: 1,
            text: 'todo 1',
            status: 'active'
        },
    ],
    products: [
        {
            id: 1,
            quantity: 2
        },
        {
            id: 2,
            quantity: 3
        }
    ]
}

// add a todo to this state (via mutation)

// add a todo to this state via cloning and addition

// add a key to this state (total) that gives me the total count of todos in state

// give me the count of todos which have a status of active

// create a function which toggles the todo status given the state and id of the todo

// create a function which takes the state, id, key, and value which will update a todo

// create a function which takes the state and id and gives the state back without that todo

// create a function which increments the quantity of the product given an id (returning a copy of the entire product state)

// create a function which decrements the quantity of the product given an id (returning a copy of the entire product state)

// create a function which increments/decrements the quantity of the product given an id (returning a copy of the entire product state)
// and a boolean value (true means increment, false means decrement)

// create a function which tells me if a key exists in the state

// create a function which gives me the value of the state given a key, if it cant find it - default it to the second argument

// create a function which takes the state and logs every key that the state has (see Object.keys(), for in operator)

// create a function which takes the state and returns an array of all the keys inside it


const obj = {test: true}

// add the key of name and value of john to this object without directly adding it

// create a function which takes this object, a key, and a value, and returns a new copy of this object with those on it

// remove the key test from this object
