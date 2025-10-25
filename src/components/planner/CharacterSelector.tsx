import { BaseSyntheticEvent, useMemo, useState } from "react";

// Component imports
import Image from "custom/Image";
import SearchBar from "custom/SearchBar";
import Dropdown from "custom/Dropdown";
import ToggleButtons from "custom/ToggleButtons";
import RarityStars from "custom/RarityStars";
import { TextStyled } from "styled/StyledTypography";

// MUI imports
import { useTheme, useMediaQuery, Stack, StackProps } from "@mui/material";

// Helper imports
import { range, sortBy } from "helpers/utils";
import { useAppDispatch, useAppSelector } from "helpers/hooks";
import { selectCharacters } from "reducers/character";
import {
    addItem,
    getSelectedCharacters,
    setPlannerCharacters,
} from "reducers/planner";
import { getBackgroundColor, getRarityColor } from "helpers/rarityColors";
import { elements, rarities, weapons } from "data/common";
import { getBossMaterial } from "data/materials/bossMaterials";
import { getWeeklyBossMaterial } from "data/materials/weeklyBossMaterials";
import { getAscensionMaterial } from "data/materials/ascensionMaterials";
import { getForgeryMaterial } from "data/materials/forgeryMaterials";
import { getCommonMaterial } from "data/materials/commonMaterials";

// Type imports
import { Element, WeaponType, Rarity } from "types/_common";
import { Character } from "types/character";
import { CharacterCostObject } from "types/costs";
import { CharacterFilterState } from "reducers/characterFilters";

const initialFilters: CharacterFilterState = {
    element: [],
    weapon: [],
    rarity: [],
    roles: [],
    uniqueRoles: true,
    forgeryMat: [],
    commonMat: [],
    ascensionMat: [],
    bossMat: [],
    weeklyBossMat: [],
};

function CharacterSelector({ handleClose }: { handleClose: () => void }) {
    const theme = useTheme();
    const matches_md_up = useMediaQuery(theme.breakpoints.up("md"));

    const dispatch = useAppDispatch();

    const characters = [...useAppSelector(selectCharacters)].sort((a, b) =>
        a.fullName.localeCompare(b.fullName)
    );

    const options = createOptions(characters);
    const selected = useAppSelector(getSelectedCharacters);

    const [searchValue, setSearchValue] = useState("");
    const handleInputChange = (event: BaseSyntheticEvent) => {
        setSearchValue(event.target.value);
    };

    const [filters, setFilters] = useState(initialFilters);
    const filterGroups = [
        {
            name: "Attribute",
            value: filters.element,
            onChange: (_: BaseSyntheticEvent, newValues: Element[]) =>
                setFilters({ ...filters, element: newValues }),
            buttons: createButtons(elements, "elements"),
        },
        {
            name: "Weapon",
            value: filters.weapon,
            onChange: (_: BaseSyntheticEvent, newValues: WeaponType[]) =>
                setFilters({ ...filters, weapon: newValues }),
            buttons: createButtons(weapons, "weapons/icons"),
        },
        {
            name: "Rarity",
            value: filters.rarity,
            onChange: (_: BaseSyntheticEvent, newValues: Rarity[]) =>
                setFilters({ ...filters, rarity: newValues }),
            buttons: rarities.slice(0, -3).map((rarity) => ({
                value: rarity,
                label: <RarityStars rarity={rarity} variant="h6-styled" />,
            })),
            width: "auto",
        },
    ];

    const currentOptions = useMemo(
        () => filterOptions(options, selected, filters, searchValue),
        [options, selected, filters, searchValue]
    );

    const handleClick = (option: CharacterCostObject) => {
        const newValues = [...selected];
        newValues.push(option);
        dispatch(setPlannerCharacters(newValues));
        dispatch(addItem(option.id));
        handleClose();
    };

    const smallIconStyle = { width: "16px", height: "16px" };

    const stackParams: StackProps = {
        spacing: 2,
        direction: "row",
        alignItems: "center",
        sx: {
            p: 1,
            borderRadius: "4px",
            backgroundColor: theme.background(0, "dark"),
            "&:hover": {
                backgroundColor: theme.background(0, "light"),
                cursor: "pointer",
            },
        },
    };

    return (
        <Stack spacing={2}>
            <Stack spacing={2}>
                <SearchBar
                    placeholder="Search"
                    value={searchValue}
                    onChange={handleInputChange}
                    size={{ height: "36px" }}
                />
                <Dropdown title="Filters">
                    {filterGroups.map((filter, index) => (
                        <Stack key={index} spacing={1}>
                            <ToggleButtons
                                color="secondary"
                                buttons={filter.buttons}
                                value={filter.value}
                                onChange={filter.onChange}
                                width={filter.width || undefined}
                                spacing={4}
                                padding={
                                    "label" in filter.buttons[0] ? "0 8px" : 0
                                }
                            />
                        </Stack>
                    ))}
                </Dropdown>
            </Stack>
            <Stack
                spacing={1}
                sx={{
                    height: "50vh",
                    maxHeight: "600px",
                    overflowY: "auto",
                }}
            >
                {currentOptions.length > 0 ? (
                    currentOptions.map((option) => (
                        <Stack
                            key={option.id}
                            {...stackParams}
                            onClick={() => handleClick(option)}
                        >
                            <Stack
                                spacing={1}
                                sx={{
                                    p: "4px",
                                    borderRadius: "16px",
                                    backgroundColor:
                                        theme.appbar.backgroundColor,
                                }}
                            >
                                <Image
                                    src={`elements/${option.element}`}
                                    alt={option.element}
                                    style={smallIconStyle}
                                    tooltip={option.element}
                                />
                                <Image
                                    src={`weapons/icons/${option.weapon}`}
                                    alt={option.weapon}
                                    style={smallIconStyle}
                                    tooltip={option.weapon}
                                />
                            </Stack>
                            <Image
                                src={`characters/icons/${option.name}`}
                                alt={option.name}
                                style={{
                                    width: matches_md_up ? "48px" : "40px",
                                    height: matches_md_up ? "48px" : "40px",
                                    border: `2px solid ${getRarityColor(
                                        option.rarity
                                    )}`,
                                    borderRadius:
                                        theme.mainContentBox.borderRadius,
                                    backgroundColor: theme.background(2),
                                    boxShadow: `inset 0 0 24px 16px ${getBackgroundColor(
                                        option.rarity
                                    )}`,
                                }}
                            />
                            <TextStyled
                                variant={
                                    matches_md_up
                                        ? "body1-styled"
                                        : "body2-styled"
                                }
                                noWrap
                            >
                                {option.fullName}
                            </TextStyled>
                        </Stack>
                    ))
                ) : (
                    <TextStyled sx={{ textAlign: "center" }}>
                        No resonators
                    </TextStyled>
                )}
            </Stack>
        </Stack>
    );
}

export default CharacterSelector;

function createOptions(characters: Character[]) {
    const costArray = range(0, 15, 0);
    return characters.map(
        (char) =>
            ({
                id: `character_${char.id}`,
                name: char.name,
                fullName: char.fullName,
                rarity: char.rarity,
                element: char.element,
                weapon: char.weapon,
                release: char.release,
                costs: {
                    // Source of each material is mapped to a specific index in the array:
                    // [Level, Basic Attack, Skill, Ultimate, Forte Circuit, Intro, Passive 1, Passive 2, Bonus Stat 1, Bonus Stat 2, Bonus Stat 3, Bonus Stat 4, Bonus Stat 5, Bonus Stat 6, Bonus Stat 7, Bonus Stat 8]
                    credits: {
                        Credit: costArray,
                    },
                    characterXP: {
                        CharacterXP1: costArray,
                        CharacterXP2: costArray,
                        CharacterXP3: costArray,
                        CharacterXP4: costArray,
                    },
                    bossMat: {
                        [getBossMaterial({ tag: char.materials.bossMat })?.id!]:
                            costArray,
                    },
                    weeklyBossMat: {
                        [getWeeklyBossMaterial({
                            tag: char.materials.weeklyBossMat,
                        })?.id!]: costArray,
                    },
                    ascensionMat: {
                        [getAscensionMaterial({
                            tag: char.materials.ascensionMat,
                        })?.id!]: costArray,
                    },
                    forgeryMat: {
                        [getForgeryMaterial({
                            tag: `${char.materials.forgeryMat}1`,
                        })?.id!]: costArray,
                        [getForgeryMaterial({
                            tag: `${char.materials.forgeryMat}2`,
                        })?.id!]: costArray,
                        [getForgeryMaterial({
                            tag: `${char.materials.forgeryMat}3`,
                        })?.id!]: costArray,
                        [getForgeryMaterial({
                            tag: `${char.materials.forgeryMat}4`,
                        })?.id!]: costArray,
                    },
                    commonMat: {
                        [getCommonMaterial({
                            tag: `${char.materials.commonMat}1`,
                        })?.id!]: costArray,
                        [getCommonMaterial({
                            tag: `${char.materials.commonMat}2`,
                        })?.id!]: costArray,
                        [getCommonMaterial({
                            tag: `${char.materials.commonMat}3`,
                        })?.id!]: costArray,
                        [getCommonMaterial({
                            tag: `${char.materials.commonMat}4`,
                        })?.id!]: costArray,
                    },
                },
                values: {
                    level: {},
                    attack: {},
                    skill: {},
                    ultimate: {},
                    circuit: {},
                    intro: {},
                    passive1: {},
                    passive2: {},
                    bonusStat1: {},
                    bonusStat2: {},
                    bonusStat3: {},
                    bonusStat4: {},
                    bonusStat5: {},
                    bonusStat6: {},
                    bonusStat7: {},
                    bonusStat8: {},
                },
                dataFormat: "v2",
            } as CharacterCostObject)
    );
}

function filterOptions(
    characters: CharacterCostObject[],
    selected: CharacterCostObject[],
    filters: CharacterFilterState,
    searchValue: string
) {
    let chars: CharacterCostObject[];
    chars = characters.filter(
        (char) => !selected.map((char) => char.id).includes(char.id)
    );
    if (filters.element.length > 0) {
        chars = chars.filter((char) => filters.element.includes(char.element));
    }
    if (filters.weapon.length > 0) {
        chars = chars.filter((char) => filters.weapon.includes(char.weapon));
    }
    if (filters.rarity.length > 0) {
        chars = chars.filter((char) => filters.rarity.includes(char.rarity));
    }
    if (searchValue !== "") {
        chars = chars.filter(
            (char) =>
                char.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                char.fullName.toLowerCase().includes(searchValue.toLowerCase())
        );
    }
    chars = chars.sort(
        (a, b) =>
            sortBy(a.release.version, b.release.version) ||
            sortBy(a.rarity, b.rarity) ||
            sortBy(b.fullName, a.fullName)
    );

    return chars;
}

function createButtons<T extends string>(items: readonly T[], url: string) {
    return items.map((item) => ({
        value: item,
        icon: url && (
            <Image
                src={`${url}/${item}`}
                alt={`${item}`}
                style={{ width: "32px", padding: "4px", borderRadius: "4px" }}
                tooltip={item}
            />
        ),
    }));
}
