import {CityType, GovermentBuildingsType} from "../nativejs-03/03";

export const demolishHousesOnTheStreet = (city: CityType, street: string) =>
    ({...city, houses: city.houses.filter(h => h.address.street.title !== street)})

export const getBuildingsWithStaffCountGreaterThen = (gb: GovermentBuildingsType[], value: number) => gb.filter(b => b.staffCount > value)