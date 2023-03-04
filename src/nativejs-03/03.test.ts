import {activeChange, addSkill, cityLive, StudentType} from "./03";

let student: StudentType

beforeEach(() => {
    student = {
        id: 1,
        name: 'Yuriy',
        isActive: false,
        address: {
            city: "Minsk"
        },
        skills: [
            {
                id: 1,
                title: "CSS"
            }
        ]
    }
})

test("Skill should be added", () => {

    expect(student.skills.length).toBe(1)

    addSkill(student, "HTML")

    expect(student.skills[1].title).toBe("HTML")
    expect(student.skills[1].id).toBe(2)
})

test("Student should be made active", () => {

    expect(student.isActive).toBe(false)

    activeChange(student, true)

    expect(student.isActive).toBe(true)
})

test("Does live student in city", () => {


    let result = cityLive(student, "Moscow")

    expect(result).toBe(false)
})