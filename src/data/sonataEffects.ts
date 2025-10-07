import { SonataEffect } from "types/echo";

export const sonataEffects: SonataEffect[] = [
    {
        name: "Molten Rift",
        displayName: "Molten Rift",
        "2pc": '<span class="text-fusion">Fusion DMG</span> +10%.',
        "5pc": '<span class="text-fusion">Fusion DMG</span> + 30% for 15s after releasing Resonance Skill.',
    },
    {
        name: "Freezing Frost",
        displayName: "Freezing Frost",
        "2pc": '<span class="text-glacio">Glacio DMG</span> +10%.',
        "5pc": '<span class="text-glacio">Glacio DMG</span> +10% after releasing Basic Attack or Heavy Attack. This effect stacks up to 3 times, each stack lasts 15s.',
    },
    {
        name: "Sierra Gale",
        displayName: "Sierra Gale",
        "2pc": '<span class="text-aero">Aero DMG</span> +10%',
        "5pc": '<span class="text-aero">Aero DMG</span> +30% for 15s after releasing Intro Skill.',
    },
    {
        name: "Void Thunder",
        displayName: "Void Thunder",
        "2pc": '<span class="text-electro">Electro DMG</span> +10%.',
        "5pc": '<span class="text-electro">Electro DMG</span> +15% after releasing Heavy Attack or Resonance Skill. This effect stacks up to 2 times, each stack lasts 15s.',
    },
    {
        name: "Celestial Light",
        displayName: "Celestial Light",
        "2pc": '<span class="text-spectro">Spectro DMG</span> + 10%.',
        "5pc": '<span class="text-spectro">Spectro DMG</span> + 30% for 15s after releasing Intro Skill.',
    },
    {
        name: "Havoc Eclipse",
        displayName: "Havoc Eclipse",
        "2pc": '<span class="text-havoc">Havoc DMG</span> +10%.',
        "5pc": '<span class="text-havoc">Havoc DMG</span> +7.5% after releasing Basic Attack or Heavy Attack. This effect stacks up to 4 times, each stack lasts 15s.',
    },
    {
        name: "Rejuvenating Glow",
        displayName: "Rejuvenating Glow",
        "2pc": "Healing Bonus +10%.",
        "5pc": "Increases the ATK of all party members by 15% for 30s upon healing allies.",
    },
    {
        name: "Moonlit Clouds",
        displayName: "Moonlit Clouds",
        "2pc": "Energy Regen +10%.",
        "5pc": "After using Outro Skill, increases the ATK of the next Resonator by 22.5% for 15s.",
    },
    {
        name: "Lingering Tunes",
        displayName: "Lingering Tunes",
        "2pc": "ATK +10%.",
        "5pc": "While on the field, ATK increases by 5% every 1.5s. This effect stacks up to 4 stacks. Outro Skill DMG +60%.",
    },
    {
        name: "Frosty Resolve",
        displayName: "Frosty Resolve",
        "2pc": "Resonance Skill DMG +12%.",
        "5pc": 'Casting Resonance Liberation grants 30% <span class="text-glacio">Glacio DMG Bonus</span> and 30% Resonance Skill DMG Bonus for 6s.',
    },
    {
        name: "Eternal Radiance",
        displayName: "Eternal Radiance",
        "2pc": '<span class="text-spectro">Spectro DMG</span> + 10%.',
        "5pc": 'Inflicting enemies with <span class="text-spectro">Spectro Frazzle</span> increases Crit. Rate by 20% for 15s. Attacking enemies with 10 stacks of <span class="text-spectro">Spectro Frazzle</span> grants 15% <span class="text-spectro">Spectro DMG Bonus</span> for 15s.',
    },
    {
        name: "Midnight Veil",
        displayName: "Midnight Veil",
        "2pc": '<span class="text-havoc">Havoc DMG</span> +10%.',
        "5pc": 'Triggering Outro Skill deals additional 480% <span class="text-havoc">Havoc DMG</span> to surrounding enemies, and grants the incoming Resonator 15% <span class="text-havoc">Havoc DMG Bonus</span> fo 15s.',
    },
    {
        name: "Empyrean Anthem",
        displayName: "Empyrean Anthem",
        "2pc": "Energy Regen +10%.",
        "5pc": "Increase the Resonator's Coordinated Attack DMG by 80%. Upon a critical hit of Coordinated Attack, increase the active Resonator's ATK by 20% for 4s.",
    },
    {
        name: "Tidebreaking Courage",
        displayName: "Tidebreaking Courage",
        "2pc": "Energy Regen +10%.",
        "5pc": "The Resonator's ATK is increased by 15%. When reaching 250% Energy Regen, the Resonator gains 30% all Attribute DMG increase.",
    },
    {
        name: "Gusts of Welkin",
        displayName: "Gusts of Welkin",
        "2pc": '<span class="text-aero">Aero DMG</span> +10%.',
        "5pc": 'Inflicting <span class="text-aero">Aero Erosion</span> upon enemies increases <span class="text-aero">Aero DMG</span> for all Resonators in the team by 15%, and for the Resonator triggering this effect by an additional 15%, lasting for 20s.',
    },
    {
        name: "Windward Pilgrimage",
        displayName: "Windward Pilgrimage",
        "2pc": '<span class="text-aero">Aero DMG</span> +10%.',
        "5pc": 'Hitting a target with <span class="text-aero">Aero Erosion</span> increases Crit. Rate by 10% and grants <span class="text-aero">Aero DMG Bonus</span>, lasting for 10s.',
    },
    {
        name: "Flaming Clawprint",
        displayName: "Flaming Clawprint",
        "2pc": '<span class="text-fusion">Fusion DMG</span> +10%.',
        "5pc": 'Casting Resonance Liberation increases <span class="text-fusion">Fusion DMG</span> of Resonators in the team by 15% and the caster\'s Resonance Liberation DMG by 20%, lasting for 35s.',
    },
    {
        name: "Dream of the Lost",
        displayName: "Dream of the Lost",
        "3pc": "Holding 0 Resonance Energy increases Crit. Rate by 20% and grants 35% Echo Skill DMG Bonus.",
    },
    {
        name: "Crown of Valor",
        displayName: "Crown of Valor",
        "3pc": "Upon gaining a Shield, increase the Resonator's ATK by 6% and Crit. DMG by 4% for 4s. This effect can be triggered once every 0.5s and stacks up to 5 times.",
    },
    {
        name: "Law of Harmony",
        displayName: "Law of Harmony",
        "3pc": "Casting Echo Skill grants 30% Heavy Attack DMG Bonus to the caster for 4s. Additionally, all Resonators in the team gain 4% Echo Skill DMG Bonus for 30s, stacking up to 4 times. Echoes of the same name can only trigger this effect once. The record of Echo triggering this effect is cleared along with this effect. At 4 stacks, casting Echo Skill again resets the duration of this effect.",
    },
    {
        name: "Flamewing's Shadow",
        displayName: "Flamewing's Shadow",
        "3pc": 'Dealing Echo Skill DMG increases Heavy Attack Crit. Rate by 20% for 6s. Dealing Heavy Attack DMG increases Echo Skill Crit. Rate by 20% for 6s. While both effects are active, gain 16% <span class="text-fusion">Fusion DMG Bonus</span>.',
    },
];
