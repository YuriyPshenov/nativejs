
type StreetType = {
    title: string
}

type AddressType = {
    number?: number
    street: StreetType
}

type HousesType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}


export type GovermentBuildingsType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}

export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovermentBuildingsType>
    citizensNumber: number
}

export type StudentType = {
    id: number
    name: string
    isActive: boolean
    address: {
        city: string
    }
    skills: [
        {id: number, title: string}
    ]
}

export const sum = (a: number, b: number) => {
    return a + b
}

export const addSkill = (student: StudentType, skill: string) => {
    student.skills.push({id: student.skills.length + 1, title: skill})
}

export const activeChange = (student: StudentType, newActive: boolean) => {
    student.isActive = newActive
}

export const cityLive = (student: StudentType, city: string) => {
    return student.address.city === city
}

export const addMoneyToBudget = (gb: GovermentBuildingsType, newBudget: number) => {
    gb.budget += newBudget
}

export const repairHouse = (h: HousesType) => {
    h.repaired = true
}

export const toFireStaff = (gb: GovermentBuildingsType, newStaffCount: number) => {
    gb.staffCount -= newStaffCount
}

export const toHireStaff = (gb: GovermentBuildingsType, newStaffCount: number) => {
    gb.staffCount += newStaffCount
}

export const createMessage = (city: CityType) => {
    return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} men.`
}