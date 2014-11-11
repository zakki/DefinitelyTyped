// Type definitions for Nashorn extensions
// Project: https://wiki.openjdk.java.net/display/Nashorn/Nashorn+extensions
// Definitions by: Kensuke Matsuzaki <https://github.com/zakki>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
/// <reference path="nashorn.d.ts" />

//var dict = Object.setPrototypeOf({}, null);

var obj = {
    __noSuchProperty__: function(n: string) {
        print("No such property: " + n);
    }
};

(<any>obj).foo;     // prints No such property: foo

var obj2: any = {
    __noSuchMethod__: function() {
        for (var i in arguments) {
            print(arguments[i]);
        }
    }
};

obj2.foo(2, 'hello'); // prints "foo", 2, "hello"


// can load script from files, URLs

try {
    load("foo.js");
    load("http://www.example.com/t.js");
} catch (e) {
}

load({ script: "print('hello')", name: "myscript.js" })

declare var foo: any;
loadWithNewGlobal({
    script: "foo = 333; print(foo)",
    name: "test"
});

// prints undefined as "foo" is defined in the new global and not here
print(typeof foo);


var Vector = Packages.java.util.Vector;

// JavaImporter constructor accepts one or more Java Package objects
var imports: any = new JavaImporter(java.util, java.io);

var map = new imports.HashMap(); // refers to java.util.HashMap
map.put("js", "javascript");
map.put("java", "java");
map.put("cpp", "c++");
print(map);

var f = new imports.File("."); // refers to java.io.File
print(f.getAbsolutePath());

var anArrayList = new (Java.type("java.util.ArrayList"));

var ArrayList = Java.type("java.util.ArrayList");
var anArrayList2 = new ArrayList();
var anArrayListWithSize = new ArrayList(16);


var Timer = Java.type("java.util.Timer");
var timer = new Timer();
timer.schedule(function() { print("Hello World!") }, 1000);

/*
var ArrayList = Java.type("java.util.ArrayList")
var ArrayListExtender = Java.extend(ArrayList)
var printSizeInvokedArrayList = new ArrayListExtender() {
    size: function() { print("size invoked!"); }
}
*/

var Runnable = Java.type("java.lang.Runnable");
var R1 = Java.extend(Runnable, {
    run: function() {
        print("R1.run() invoked!")
  }
});
var r1 = new R1;
var t = new java.lang.Thread(r1);
t.start();
t.join();


var JFile = Java.type("java.io.File")
var listHomeDir = new JFile(".").listFiles()
var jsListHome = Java.from(listHomeDir)
var tsModifiedDates = jsListHome
    .filter(function(val) { return val.getName().endsWith(".ts") })
    .map(function(val) { return val.lastModified() });
print(tsModifiedDates);


var anArray = [1, "13", false];
var javaIntArray = Java.to(anArray, "int[]");
print(javaIntArray[0]);
print(javaIntArray[1]);
print(javaIntArray[2]);
