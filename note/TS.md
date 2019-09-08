## 类型

boolean、number、string、null、undefined
Array、Tuple、enum、any、void、never、object、Type assertions 

null和undefined可以赋值给number，如果指定了--strictNullChecks标记，null和undefined只能赋值给void和它们自己。  
never类型表示的是那些永不存在的值的类型。 never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型。  
当你比TypeScript更了解某个值的详细信息。通过类型断言这种方式可以告诉编译器类型。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。它没有运行时的影响，只是在编译阶段起作用。
```
// Array
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];

// Tuple
let x: [string, number];
x = ['hello', 10];

// enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

// Type assertions 
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let strLength: number = (someValue as string).length;
```

type声明

```
type C = {a: string, b?: number}

```
