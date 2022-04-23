/**
 * https://github.com/standard/eslint-config-standard-with-typescript/issues/10
 */
export declare type Bar = null;
export declare type Foo<Bar> = (a: Bar) => Bar;
/**
 * https://github.com/standard/eslint-config-standard-with-typescript/issues/2
 */
export default class Zoo {
    private readonly name;
    constructor(name: string);
    get greeting(): string;
}
/**
 * https://github.com/standard/eslint-config-standard-with-typescript/issues/3
 */
export interface Boo {
    b_oo: null;
}
