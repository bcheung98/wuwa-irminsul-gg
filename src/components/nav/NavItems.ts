export interface NavItem {
    icon: string;
    text: string;
    link: string;
    tag?: string;
}

export const navItems: NavItem[] = [
    {
        icon: "icons/Home",
        text: "Home",
        link: "/",
    },
    {
        icon: "icons/Character",
        text: "Resonators",
        link: "/resonators/",
    },
    {
        icon: "icons/Weapon",
        text: "Weapons",
        link: "/weapons/",
    },
    {
        icon: "icons/Echo",
        text: "Echoes",
        link: "/echoes/",
    },
    {
        icon: "icons/Ascension",
        text: "Ascension Planner",
        link: "/planner/",
    },
    {
        icon: "icons/Convene",
        text: "Banner Archive",
        link: "/banners/",
    },
];

export const otherItems: NavItem[] = [
    {
        text: "Calendar",
        link: "https://irminsul.gg/calendar",
        icon: "",
    },
    {
        text: "Blog",
        link: "https://irminsul.gg/blog",
        icon: "",
    },
];
