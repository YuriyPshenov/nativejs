
let props: {name: string, age: number, lessons: {title: string, name?: string}[], address: {street: {title: string}}}

beforeEach(() => {
    props = {
        name: "Dimych",
        age: 32,
        lessons: [{title: "1"}, {title: "2"}, {title: "3", name: "bibsk"}],
        address: {
            street: {
                title: "Nezavis"
            }
        }
    }
})

test("1", () => {
    let props = {
        name: "Dimych",
        age: 32,
        lessons: [{title: "1"}, {title: "2"}, {title: "3", name: "bibsk"}],
        address: {
            street: {
                title: "Nezavis"
            }
        }
    }

    let array = ['yuriy', 'bigboy', 'pshenov']

    const [first, second, third] = array

    const {name: n, age: a, lessons} = props

    expect(a).toBe(32)
    expect(first).toBe('yuriy')
})


test("2", () => {

    const [, ls2, ...restProps] = props.lessons

    expect(ls2.title).toBe("2")
    expect(restProps[0].title).toBe("3")
    expect(restProps.length).toBe(1)

    expect(restProps[0]).toStrictEqual({name: "bibsk", title: "3"})
})