import { echoes } from "data/common";
import { Version } from "./version";

export interface EchoProps {
    echo: Echo;
}

export interface Echo {
    id: number;
    name: string;
    displayName: string;
    code: string;
    class: EchoClass;
    cost: EchoCost;
    skill: EchoSkill;
    sonata: string[];
    description: string;
    hasPhantom: boolean;
    type: string;
    nation: string[];
    release: Version;
}

export type EchoClass = keyof typeof echoes;
export type EchoCost = 4 | 3 | 1;

export interface EchoSkill {
    description: string;
    cooldown: number;
    scaling: string[][];
}

export interface SonataEffect {
    id: number;
    name: string;
    displayName: string;
    "2pc"?: string;
    "3pc"?: string;
    "5pc"?: string;
}
