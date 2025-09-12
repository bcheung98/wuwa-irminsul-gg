import { Weapon } from "types/weapon";
import { WeaponFilterState } from "reducers/weaponFilters";
import { BrowserSettings } from "reducers/browser";
import { sortBy } from "./utils";
import { WeaponMap } from "data/common";

export const filterWeapons = (
    weapons: Weapon[],
    filters: WeaponFilterState,
    searchValue: string,
    sortSettings: BrowserSettings
) => {
    let weps = [...weapons];
    if (filters.weaponType.length > 0) {
        weps = weps.filter((wep) => filters.weaponType.includes(wep.type));
    }
    if (filters.rarity.length > 0) {
        weps = weps.filter((wep) => filters.rarity.includes(wep.rarity));
    }
    if (filters.substats.length > 0) {
        weps = weps.filter((wep) =>
            filters.substats.includes(wep.stats.subStat)
        );
    }
    if (filters.forgeryMat.length > 0) {
        weps = weps.filter((wep) =>
            filters.forgeryMat.includes(wep.materials.forgeryMat)
        );
    }
    if (filters.commonMat.length > 0) {
        weps = weps.filter((wep) =>
            filters.commonMat.includes(wep.materials.commonMat)
        );
    }
    if (searchValue !== "") {
        weps = weps.filter(
            (wep) =>
                wep.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                wep.displayName
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
        );
    }

    const reverse = sortSettings.sortDirection === "desc";

    switch (sortSettings.sortBy) {
        case "name":
            weps = weps.sort((a, b) =>
                a.displayName.localeCompare(b.displayName)
            );
            if (reverse) {
                weps = weps.reverse();
            }
            break;
        case "rarity":
            weps = weps.sort(
                (a, b) =>
                    sortBy(a.rarity, b.rarity, reverse) ||
                    sortBy(b.displayName, a.displayName)
            );
            break;
        case "weapon":
            weps = weps.sort(
                (a, b) =>
                    sortBy(WeaponMap[b.type], WeaponMap[a.type], reverse) ||
                    sortBy(a.rarity, b.rarity) ||
                    sortBy(b.displayName, a.displayName)
            );
            break;
        case "release":
            weps = weps.sort(
                (a, b) =>
                    sortBy(a.release.version, b.release.version, reverse) ||
                    sortBy(b.rarity, a.rarity, !reverse) ||
                    sortBy(a.id, b.id, reverse) ||
                    sortBy(b.displayName, a.displayName, !reverse)
            );
            break;
        case "element":
            break;
    }

    return weps;
};
