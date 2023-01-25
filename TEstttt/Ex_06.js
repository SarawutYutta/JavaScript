const value1 = [1,0,1,0];
const value2 = ["The","big","cat"];
const value3 = ["John","Taylor","John"];

function removeDupa() {
    Array.from(new Set(value1));
    Array.from(new Set(value2));
    Array.from(new Set(value3));
    console.log(value1)
    console.log(value2)
    console.log(value3)
}

removeDupa()

//Remove ตัวซ้ำ