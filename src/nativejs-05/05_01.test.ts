import {createGreetingMessage, ManType} from "./05_01";

let people: ManType[] = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18},
]

beforeEach(() => {
    people = [
        {name: "Andrew Ivanov", age: 33},
        {name: "Alexander Petrov", age: 24},
        {name: "Dmitry Sidorov", age: 18},
    ]
})

test("should get array of greeeting messages", () => {

    const messages = createGreetingMessage(people)


    expect(messages[0]).toBe("Hello Andrew. Welcome to IT-Incubator!")
    expect(messages[1]).toBe("Hello Alexander. Welcome to IT-Incubator!")
    expect(messages[2]).toBe("Hello Dmitry. Welcome to IT-Incubator!")
})