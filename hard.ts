
//3.1
//дженерик для конвертации свойств объекта из snake_case в camelCase, включая вложенность
type CamelCase<T extends string> = T extends `${infer Cap}_${infer Other}` ? 
        `${Cap}${Capitalize<CamelCase<Other>>}`: T

export type Camelize<ObjType> = {
    [P in keyof ObjType as CamelCase<P & string>]:
    ObjType[P] extends object ? Camelize<ObjType[P]> : ObjType[P]
}

interface Iexample8 {
    snake_case1 : string
    snake_case2 : string
    snake_case3 : string
}

const example9 : Camelize<Iexample8> = {
    snakeCase1 : "hello",
    snakeCase2 : "world",
    snakeCase3 : "!",
}
console.log(example9)


//3.2
// Реализация Pick из TypeScript, но Paths может включать вложенные объекты
export type DeepPick<T, Paths extends string> = {}
