// Component imports
import CharacterSkillLevelUpCost from "./CharacterSkillLevelUpCost";
import Image from "custom/Image";
import { Text, TextStyled } from "styled/StyledTypography";

// MUI imports
import { useTheme, Stack, Box } from "@mui/material";

// Helper imports
import { parseSkillDescription } from "helpers/parseSkillDescription";

// Type imports
import { Element } from "types/_common";
import { CharacterMaterials } from "types/materials";
import { LevelUpCostSkillKeys } from "custom/LevelUpCosts";
import { Skill } from "types/skill";

interface CharacterPassiveProps {
    name: string;
    element: Element;
    passives: [Skill, Skill];
    materials: CharacterMaterials;
}

function CharacterPassive({
    name,
    passives,
    element,
    materials,
}: CharacterPassiveProps) {
    const theme = useTheme();

    return (
        <Stack spacing={4}>
            {[0, 1].map((index) => (
                <Stack key={index} spacing={3}>
                    <Box>
                        <Stack
                            spacing={2}
                            direction="row"
                            alignItems="center"
                            sx={{ mb: "16px" }}
                        >
                            <Image
                                src={`characters/skills/${name.toLowerCase()}_passive${
                                    index + 1
                                }`}
                                alt={`${name.toLowerCase()}_passive${
                                    index + 1
                                }`}
                                style={theme.styles.skillIcon(element)}
                            />
                            <Box>
                                <TextStyled variant="h6-styled">
                                    {passives[index].name}
                                </TextStyled>
                                <TextStyled sx={{ fontStyle: "italic" }}>
                                    Inherent Skill
                                </TextStyled>
                            </Box>
                        </Stack>
                        <Text
                            component="span"
                            sx={{ color: theme.text.description }}
                        >
                            {parseSkillDescription({
                                description: passives[index].description,
                            })}
                        </Text>
                    </Box>
                    <CharacterSkillLevelUpCost
                        type="passive"
                        skillKey={`passive${index + 1}` as LevelUpCostSkillKeys}
                        element={element}
                        materials={materials}
                    />
                </Stack>
            ))}
        </Stack>
    );
}

export default CharacterPassive;
