export const ascensionMaterials = [
    {
        id: "ascensionMat_0",
        category: "ascensionMat",
        tag: "Belle Poppy",
        name: "Belle Poppy",
        displayName: "Belle Poppy",
        rarity: 1,
        release: { version: "1.0" },
    },
    {
        id: "ascensionMat_1",
        category: "ascensionMat",
        tag: "Coriolus",
        name: "Coriolus",
        displayName: "Coriolus",
        rarity: 1,
        release: { version: "1.0" },
    },
    {
        id: "ascensionMat_2",
        category: "ascensionMat",
        tag: "Iris",
        name: "Iris",
        displayName: "Iris",
        rarity: 1,
        release: { version: "1.0" },
    },
    {
        id: "ascensionMat_3",
        category: "ascensionMat",
        tag: "Lanternberry",
        name: "Lanternberry",
        displayName: "Lanternberry",
        rarity: 1,
        release: { version: "1.0" },
    },
    {
        id: "ascensionMat_4",
        category: "ascensionMat",
        tag: "Pecok Flower",
        name: "Pecok Flower",
        displayName: "Pecok Flower",
        rarity: 1,
        release: { version: "1.0" },
    },
    {
        id: "ascensionMat_5",
        category: "ascensionMat",
        tag: "Terraspawn Fungus",
        name: "Terraspawn Fungus",
        displayName: "Terraspawn Fungus",
        rarity: 1,
        release: { version: "1.0" },
    },
    {
        id: "ascensionMat_6",
        category: "ascensionMat",
        tag: "Violet Coral",
        name: "Violet Coral",
        displayName: "Violet Coral",
        rarity: 1,
        release: { version: "1.0" },
    },
    {
        id: "ascensionMat_7",
        category: "ascensionMat",
        tag: "Wintry Bell",
        name: "Wintry Bell",
        displayName: "Wintry Bell",
        rarity: 1,
        release: { version: "1.0" },
    },
    {
        id: "ascensionMat_8",
        category: "ascensionMat",
        tag: "Loong's Pearl",
        name: "Loong's Pearl",
        displayName: "Loong's Pearl",
        rarity: 1,
        release: { version: "1.1" },
    },
    {
        id: "ascensionMat_9",
        category: "ascensionMat",
        tag: "Pavo Plum",
        name: "Pavo Plum",
        displayName: "Pavo Plum",
        rarity: 1,
        release: { version: "1.1" },
    },
    {
        id: "ascensionMat_10",
        category: "ascensionMat",
        tag: "Nova",
        name: "Nova",
        displayName: "Nova",
        rarity: 1,
        release: { version: "1.3" },
    },
    {
        id: "ascensionMat_11",
        category: "ascensionMat",
        tag: "Golden Fleece",
        name: "Golden Fleece",
        displayName: "Golden Fleece",
        rarity: 1,
        release: { version: "2.0" },
    },
    {
        id: "ascensionMat_12",
        category: "ascensionMat",
        tag: "Sword Acorus",
        name: "Sword Acorus",
        displayName: "Sword Acorus",
        rarity: 1,
        release: { version: "2.0" },
    },
    {
        id: "ascensionMat_13",
        category: "ascensionMat",
        tag: "Firecracker Jewelweed",
        name: "Firecracker Jewelweed",
        displayName: "Firecracker Jewelweed",
        rarity: 1,
        release: { version: "2.0" },
    },
    {
        id: "ascensionMat_14",
        category: "ascensionMat",
        tag: "Seaside Cendrelis",
        name: "Seaside Cendrelis",
        displayName: "Seaside Cendrelis",
        rarity: 1,
        release: { version: "2.2" },
    },
    {
        id: "ascensionMat_15",
        category: "ascensionMat",
        tag: "Bamboo Iris",
        name: "Bamboo Iris",
        displayName: "Bamboo Iris",
        rarity: 1,
        release: { version: "2.4" },
    },
    {
        id: "ascensionMat_16",
        category: "ascensionMat",
        tag: "Bloodleaf Viburnum",
        name: "Bloodleaf Viburnum",
        displayName: "Bloodleaf Viburnum",
        rarity: 1,
        release: { version: "2.4" },
    },
    {
        id: "ascensionMat_17",
        category: "ascensionMat",
        tag: "ascensionMat_17",
        name: "ascensionMat_17",
        displayName: "ascensionMat_17",
        rarity: 1,
        release: { version: "2.5" },
    },
] as const;

export const ascensionMatNames = ascensionMaterials.map((mat) => mat.tag);

export function getAscensionMaterial({
    id,
    tag,
}: {
    id?: string;
    tag: string;
}) {
    return ascensionMaterials.find((mat) => mat.id === id || mat.tag === tag);
}
