import { Echo } from "../types/echo";
import { EchoFilterState } from "reducers/echoFilters";
import { BrowserSettings } from "reducers/browser";
import { echoes as echoData } from "data/common";
import { sortBy } from "./utils";

export const filterEchoes = (
    echoes: Echo[],
    filters: EchoFilterState,
    searchValue: string,
    sortSettings: BrowserSettings
) => {
    let echos = [...echoes];
    if (filters.class.length > 0) {
        echos = echos.filter((echo) => filters.class.includes(echo.class));
    }
    if (filters.sonata.length > 0) {
        if (filters.uniqueSonata) {
            echos = echos.filter((echo) =>
                filters.sonata.every((f) => echo.sonata.includes(f))
            );
        } else {
            echos = echos.filter((echo) =>
                filters.sonata.some((f) => echo.sonata.includes(f))
            );
        }
    }
    if (searchValue !== "") {
        echos = echos.filter(
            (echo) =>
                echo.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                echo.displayName
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
        );
    }

    const reverse = sortSettings.sortDirection === "desc";

    switch (sortSettings.sortBy) {
        case "name":
            echos = echos.sort((a, b) =>
                a.displayName.localeCompare(b.displayName)
            );
            if (reverse) {
                echos = echos.reverse();
            }
            break;
        case "rarity":
            echos = echos.sort(
                (a, b) =>
                    sortBy(
                        echoData[a.class].rarity,
                        echoData[b.class].rarity,
                        reverse
                    ) || a.displayName.localeCompare(b.displayName)
            );
            break;
        case "release":
            echos = echos.sort(
                (a, b) =>
                    sortBy(a.id, b.id, reverse) ||
                    a.displayName.localeCompare(b.displayName)
            );
            break;
        case "element":
        case "weapon":
            break;
    }

    return echos;
};
