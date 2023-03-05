
test('should be correct ages', () => {
    const ages = [18, 20, 22, 1, 100, 90, 14]

    const oldAges = ages.filter(m => m > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)

})

test('should be correct chip courses', () => {
    const courses = [
        {title: "css", price: 110},
        {title: "js", price: 200},
        {title: "react", price: 150}
    ]

    const chipCourses = courses.filter(c => c.price < 160)

    expect(chipCourses.length).toBe(2)
    expect(chipCourses[0].price).toBe(110)
    expect(chipCourses[1].price).toBe(150)
    expect(chipCourses[1].title).toBe("react")

})

test('get only completed tasks', () => {
    const tasks = [
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Salt", isDone: false},
        {id: 4, title: "Sugar", isDone: true},
    ]

    const completedTask = tasks.filter(t => t.isDone)


    expect(completedTask[0].title).toBe("Milk")
    expect(completedTask.length).toBe(2)
    expect(completedTask[1].title).toBe("Sugar")
})