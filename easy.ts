//1.1
// реализация Pick из TypeScript
// создается новый тип, выбирается из существующего типа только нужные свойства
type MyPick <T,K extends keyof T> = {
    [P in K]: T[K]
}
//Пример
interface Data {
    name:string
    age : number
    height : number
}

const Example1 : MyPick<Data, 'name' | 'age'> = {
    name : "Artem",
    age : 20
}
console.log(Example1)


//1.2
// дженерик для массива, возвращающий тип его N элемента
// по индексу элемента в массиве определяется его тип
type NOfArray<ArrayObj extends any[], N extends number> = ArrayObj[N]
//Пример
const array : any[] = [1,'2',3,'4',5]
let example2 : NOfArray<typeof array,2> = 2
example2 = '2'
example2 = true
console.log(example2)
//можно присвоить любое значение,потому что массив any


//1.3
// Дженерик для массива, первый элемент которого имеет тип Elem,
// а остальные элементы - тип массива в первом переданном параметре
type Unshift<ArrayType, Elem> = [Elem, ...ArrayType[]]
//Пример
const ar : number[] = [1,2,4,5]
const example3 : Unshift<typeof ar[0],string> = ['word',1,2,3,4,5]
console.log(example3)


//1.4
// реализация Exclude из TypeScript
type MyExclude<T, U> = T extends U ? never : T
//Пример
type one = number | boolean | string | any[]
type two = any[]
const example4: Exclude<one,two> = "b"
console.log(example4)
