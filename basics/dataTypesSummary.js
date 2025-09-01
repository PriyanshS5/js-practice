//Stack (primitive) && Heap (Non - Primitive)

let userName = "priyansh@gmail.com"
let anotherName = userName;
anotherName = "Best"

console.log(userName);
console.log(anotherName);

let heap = {
    email : " hahha@g.c",
    upi : "pri@pay"
}

let heappy = heap;

heappy.email = "haha.gmail.com"

console.log(heappy);
console.log(heap);