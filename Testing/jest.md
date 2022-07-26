# JEST

## file name
File name = "function".test.js;

## imports
import the function
const "function" = require("./functionPath) || import "function" from "function path"

## test
it = test
it.only = only executes one test
describe =  group of tests

it("comment of the expect", () => {
    expect(fn(a,b)).toBe(x);
    callback function with the test
})

it("comment of the expect", () =>{
    //without return doestn work
    return asyncfn(a).then((data) => {
        expect(data).tobe("x");
    })
})

it("comment of th expect", () => {
    return expect(asyncfn(a)).resolves.toBe("x")
})

it("comment of th expect", async () => {
    const r = await asyncPromise(a)
    expect(r).toBe("x")
})


## Matchers
e imbocan sobre el expect y son las respuestas a los expectations

°toBe: igualdad exacta (strings and numbers)
°toEqual: verificacion recursiva (arrays and objets)
°toBeNull || toBeUndefined || toBeDefined
°toBeTruthy: mas o menos true
°toBeFalsy: mas o menos false
°toBeCloseTo || toBeGreaterThan || toBeGreaterThanOrEqual || toBeLessThan || toBeLessTahnOrEqaul: numbers
°toMatch: regular expretions
°toContain || .not.toContain: veri􀁼ca si dentro de un arreglo existe un elemento
°toThrow: verifica si la función arroja un error

## Hooks
°beforeAll(() => {});
°beforeEach(() => {});
°afterEach(() => {});
°afterAll(() => {});

## Mock fn
Lo tengo que ver devuelta porque no entendi un pito

## Supertest
Para hacer test sin tener que levantar el servidor

const request = require('supertest')
const app = require('./serverPath')

°statusCode
°response
°type