export type ManType = {
    name: string
    age: number
}

const people: ManType[] = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18},
]



export let devs: {stack: string[], firstName: string, lastName: string}[]

devs = people.map(p => ({stack: ["css", "html", "js", "tdd", "react"], firstName: p.name.split(' ')[0], lastName: p.name.split(' ')[1]}))

export const createGreetingMessage = (people: ManType[]) => people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to IT-Incubator!`)
