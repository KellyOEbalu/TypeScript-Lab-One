let num1: number = 5;
console.log(num1);

let flag: boolean = false;
console.log(flag);

let color:string = "Hello";
console.log(color);

let list: string[] = ["Hi", "Hello", "Hey"];
for(let i=0; i<list.length;i++)
{
    console.log("Array is " +list[i] +".")
}

let notsure: any = 5;
console.log(notsure);

let listany: any[] = [2, true, "test"];
for(let i=0; i<listany.length;i++)
{
    console.log("Array is " +listany[i] +".")
}