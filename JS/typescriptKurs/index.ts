const isBoolean = true; 

//isBoolean= false; //  type boolean cant change if is const

//---------------------------------------------------------

const decimalNumber = 10;

//decimalNumber = '10' // we cant change type number to string and change 10 to other number

//----------------------------------------------------------

 const exampleString = 'radoslaw';

//exmapleString = 'moskwa'// we cannot change this string because he have const

 let exapmle: string | null;

// exapmle = 'radek';
// exapmle = null;  

//-----------------------------------------------------------

const namesArray: string[] = [];

namesArray.push('mateusz');

namesArray.map(name => name.length);

const myName= namesArray[5]; // Type script not find problem with array. Array dont have 6 elements

myName.split(''); // TS still didnt se problem with array

//-----------------------------------------------------------

let tupleExample: [number, string] = [2, 'a']; 

const firstElement = tupleExample[0];
const secondExample = tupleExample[1];
//const thirgExample = tupleExample [2]; // if we use tuple array with 2 elements and we try use third element on arry, TS show use a problem.

//----------------------------------------------------------

enum UserTypes{
    ADMIN,
    MODERATOR,
    MODERATOR_NEWS,
    USER,
    BANNED
};

let myAccess: UserTypes = UserTypes.MODERATOR;

const adminKey = UserTypes[0];

enum StringExampleEnum {
    EVENT_CLICK = 'click',
    EVENT_CHANGE = 'change',
}

const stringExampleObject = {
    EVENT_CLICK: 'click',
    EVENT_CHANGE: 'change',
} as const

//-----------------------------------------------------------
let unknown: unknown = true; // still will be unknown
let unknownExample: unknown = 'text';

if( typeof unknownExample === 'string') {
    namesArray.push(unknownExample);      // now we can push unknow because ts now its a string
}

