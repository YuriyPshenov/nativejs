const ages = [18, 20, 22, 1, 100, 90, 14]

const predicate = (age: number) => {
    return age > 90
}

const oldAges = [100] // > 90

const courses = [
    {title: "css", price: 110},
    {title: "js", price: 200},
    {title: "react", price: 150}
]

// < 160
const chipPredicate = (course: Array<{title: string, price: number}>) => {

}

const chipCourses = [
    {title: "css", price: 110},
    {title: "react", price: 150}
]

