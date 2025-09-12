import { isTBA } from "./utils";
import { BannerOption, BannerType } from "types/banner";
import { Character } from "types/character";
import { Weapon } from "types/weapon";
import { Rarity } from "types/_common";

export function createBannerData(
    name: string,
    type: BannerType,
    characters: Character[],
    weapons: Weapon[]
) {
    let data: BannerOption = {
        id: -1,
        name: "TBA",
        displayName: "TBA",
        rarity: 3,
        weapon: "",
    };
    if (type === "character") {
        let char = characters.find((char) => char.name === name);
        if (char) {
            data.id = char.id;
            data.name = char.name;
            data.displayName = char.fullName;
            data.rarity = char.rarity;
            data.element = char.element;
            data.weapon = char.weapon;
        }
    } else {
        let wep = weapons.find((wep) => wep.name === name);
        if (wep) {
            data.id = wep.id;
            data.name = wep.name;
            data.displayName = wep.displayName;
            data.rarity = wep.rarity;
            data.weapon = wep.type;
        }
    }
    return data;
}

export const getRarity = (name: string, rarity: Rarity) =>
    !isTBA(name) ? rarity : 3;
