// Components imports
import CharacterAscensionBasicATK from "./CharacterAscensionBasicATK"
import CharacterAscensionSkill from "./CharacterAscensionSkill"
import CharacterAscensionUltimate from "./CharacterAscensionUltimate"
import CharacterAscensionCircuit from "./CharacterAscensionCircuit"
import CharacterAscensionIntro from "./CharacterAscensionIntro"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Typography, Box } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

const CharacterAscensionSkillDisplay = (props: any) => {

    const theme = useTheme()

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid xs={2} sx={{ mt: "70px" }}>
                    <CharacterAscensionBasicATK character={props.character} />
                </Grid>
                <Grid xs={2} sx={{ mt: "20px" }}>
                    <CharacterAscensionSkill character={props.character} />
                </Grid>
                <Grid xs={2}>
                    <CharacterAscensionCircuit character={props.character} />
                </Grid>
                <Grid xs={2} sx={{ mt: "20px" }}>
                    <CharacterAscensionUltimate character={props.character} />
                </Grid>
                <Grid xs={2} sx={{ mt: "70px" }}>
                    <CharacterAscensionIntro character={props.character} />
                </Grid>
            </Grid>
        </Box>
    )

}

export default CharacterAscensionSkillDisplay