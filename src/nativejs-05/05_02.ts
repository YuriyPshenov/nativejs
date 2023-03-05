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

export const getStreetsTitlesOfGovernmentBuildings = (gb: GovermentBuildingsType[]) => gb.map(b => b.address.street.title)

export const getStreetsTitlesOfHouses = (h: HousesType[]) => h.map(h => h.address.street.title)

export const createMessages = (h: HousesType[]) => h.map(h => `Hello guys from ${h.address.street.title}`)