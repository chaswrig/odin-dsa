//Run DSA projects from here
"use strict";

import { HashMap } from "./hashmap.js";

const hashmap = new HashMap(0.75, 16);
console.log(hashmap);

hashmap.set("Adam", "Smith");
hashmap.set("Betty", "White");
hashmap.set("Chase", "Wright");
hashmap.set("Dustin", "Hoffman");
hashmap.set("Ellen", "Degeneres");
hashmap.set("Frank", "Mann");
hashmap.set("George", "Washington");
hashmap.set("Harry", "Houdini");
hashmap.set("Irma", "Gerd");
hashmap.set("Jack", "Skellington");
hashmap.set("K.K", "Slider");

console.log(hashmap);

hashmap.set("L.L", "Cool J");
hashmap.set("Mario", "Mario");

console.log(hashmap);
