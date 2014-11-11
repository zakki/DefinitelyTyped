// Type definitions for Nashorn extensions
// Project: https://wiki.openjdk.java.net/display/Nashorn/Nashorn+extensions
// Definitions by: Kensuke Matsuzaki <https://github.com/zakki>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Nashorn {
    interface JavaPackage {
        [i: string]: any;
    }
    interface Java {
        type(n: string): any;
        extend(obj: any): any;
        extend(obj: any, ex?: any): any;// UNDOCUMENTED
        from(array: any): any[];
        to(array: any[], type: string): any;
        super(obj: any): any;
    }
}

interface Object {
    __noSuchProperty__: (n: string) => void;
    __noSuchMethod__: (id: string, ...args: any[]) => void;
}

// declare interface ObjectStatic {
//   function setPrototypeOf<T>(obj: T, prototype: any): T;
//   function bindProperties(obj: any, obj2: any): void;
// }

interface String {
    trimLeft(): string;
    trimRight(): string;
}

declare var __FILE__: string;
declare var __LINE__: number;
declare var __DIR__: string;

declare function print(...args: any[]): void;

declare function load(file: string): void;
declare function load(s: { script: string; name: string }): void;

declare function loadWithNewGlobal(file: string): void;
declare function loadWithNewGlobal(s: { script: string; name: string }): void;

declare var Packages: any;

declare var java: any;

declare class JavaImporter {
    constructor(...args: Nashorn.JavaPackage[]);
}

declare var Java: Nashorn.Java;
