//2.1
//Тип для объекта, все ключи которого опциональны, включая вложенные объекты
type DeepPartial<T> = { [P in keyof T] ? : T[P] extends object ? DeepPartial<T[P]> : T[P]}

const example5 : DeepPartial<Data> = {
    name : "Artem",
    height : 178
}
console.log(example5)


//2.2
//реализация Capitalize<T> из TypeScript
//С помощью Uppercase делаем заглавную букву
type MyCapitalize<T extends string> = T extends `${infer FirstSymb}${infer Other}` ? `${Uppercase<FirstSymb>}${Other}` : T
const example6 : MyCapitalize<"homework"> = "Homework"
console.log(example6)


//2.3
// Тип для объекта, который делает все ключи изменяемыми, включая вложенные объекты
type DeepMutable<T> = { -readonly [P in keyof T]: T[P] extends object ? DeepMutable<T[P]> : T[P] }

interface Person {
    readonly name: string
    readonly age: number
    readonly height : number
}

const example7: DeepMutable<Person> = {
    name: "Vladimir",
    age: 71,
    height : 169 
}

example7.name = "Artem"
example7.age = 20
example7.height = 178
console.log(example7)

//2.4
// Тип, возвращающий перечисление частей строк, являющимися параметрами URL-строки.
// Например для ParseUrlParams<'posts/:id/:user'> ответом будет 'id' | 'user'
type ParseURLParams<StringElem extends string> =
    StringElem extends `${infer _Path}:${infer Param}/${infer Etc}` ? 
    Param | ParseURLParams<`/${Etc}`>
    : StringElem extends `${infer _Start}:${infer Param}` ? Param : never

const example8 : ParseURLParams<'posts/:id/:user'> = 'id'
console.log(example8)
