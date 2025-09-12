import { Character } from "types/character";
import { CharacterFilterState } from "reducers/characterFilters";
import { BrowserSettings } from "reducers/browser";
import { createDateObject } from "./dates";
import { sortBy } from "./utils";
import { ElementMap, WeaponMap } from "data/common";

export function filterCharacters(
    characters: Character[],
    filters: CharacterFilterState,
    searchValue: string,
    sortSettings: BrowserSettings
) {
    let chars = [...characters];
    if (filters.element.length > 0) {
        chars = chars.filter((char) => filters.element.includes(char.element));
    }
    if (filters.weapon.length > 0) {
        chars = chars.filter((char) => filters.weapon.includes(char.weapon));
    }
    if (filters.rarity.length > 0) {
        chars = chars.filter((char) => filters.rarity.includes(char.rarity));
    }
    if (filters.roles.length > 0) {
        if (filters.uniqueRoles) {
            chars = chars.filter((char) =>
                filters.roles.every((f) => char.combatRoles.includes(f))
            );
        } else {
            chars = chars.filter((char) =>
                filters.roles.some((f) => char.combatRoles.includes(f))
            );
        }
    }
    if (filters.forgeryMat.length > 0) {
        chars = chars.filter((char) =>
            filters.forgeryMat.includes(char.materials.forgeryMat)
        );
    }
    if (filters.commonMat.length > 0) {
        chars = chars.filter((char) =>
            filters.commonMat.includes(char.materials.commonMat)
        );
    }
    if (filters.ascensionMat.length > 0) {
        chars = chars.filter((char) =>
            filters.ascensionMat.includes(char.materials.ascensionMat)
        );
    }
    if (filters.bossMat.length > 0) {
        chars = chars.filter((char) =>
            filters.bossMat.includes(char.materials.bossMat)
        );
    }
    if (filters.weeklyBossMat.length > 0) {
        chars = chars.filter((char) =>
            filters.weeklyBossMat.includes(char.materials.weeklyBossMat)
        );
    }
    if (searchValue) {
        chars = chars.filter(
            (char) =>
                char.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                char.fullName.toLowerCase().includes(searchValue.toLowerCase())
        );
    }

    const reverse = sortSettings.sortDirection === "desc";

    switch (sortSettings.sortBy) {
        case "name":
            chars = chars.sort((a, b) => a.fullName.localeCompare(b.fullName));
            if (reverse) {
                chars = chars.reverse();
            }
            break;
        case "rarity":
            chars = chars.sort(
                (a, b) =>
                    sortBy(a.rarity, b.rarity, reverse) ||
                    sortBy(b.fullName, a.fullName)
            );
            break;
        case "element":
            chars = chars.sort(
                (a, b) =>
                    sortBy(
                        ElementMap[b.element],
                        ElementMap[a.element],
                        reverse
                    ) ||
                    sortBy(a.rarity, b.rarity) ||
                    sortBy(b.fullName, a.fullName)
            );
            break;
        case "weapon":
            chars = chars.sort(
                (a, b) =>
                    sortBy(WeaponMap[b.weapon], WeaponMap[a.weapon], reverse) ||
                    sortBy(a.rarity, b.rarity) ||
                    sortBy(b.fullName, a.fullName)
            );
            break;
        case "release":
            chars = chars.sort(
                (a, b) =>
                    sortBy(
                        createDateObject({
                            date: a.release.date,
                        }).obj.getTime(),
                        createDateObject({
                            date: b.release.date,
                        }).obj.getTime(),
                        reverse
                    ) ||
                    sortBy(b.rarity, a.rarity, !reverse) ||
                    sortBy(b.fullName, a.fullName, !reverse)
            );
            break;
    }

    return chars;
}
