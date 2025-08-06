// Component imports
import MainContentBox from "custom/MainContentBox";
import Image from "custom/Image";
import { Text, TextStyled } from "styled/StyledTypography";

// MUI imports
import { useTheme, Stack } from "@mui/material";

// Helper imports
import { sonataEffects } from "data/sonataEffects";
import { parseSkillDescription } from "helpers/parseSkillDescription";

// Type imports
import { EchoProps } from "types/echo";

function EchoSonata({ echo }: EchoProps) {
    const theme = useTheme();

    return (
        <MainContentBox title="Sonata Effect">
            <Stack spacing={2}>
                {echo.sonata.map((sonataEffect, index) => {
                    let sonata = sonataEffects.find(
                        (s) => s.name === sonataEffect
                    );
                    if (sonata) {
                        return (
                            <Stack
                                key={index}
                                spacing={2}
                                sx={{
                                    p: 2,
                                    backgroundColor: theme.background(
                                        1,
                                        "light"
                                    ),
                                    border: theme.mainContentBox.border,
                                    borderRadius:
                                        theme.mainContentBox.borderRadius,
                                }}
                            >
                                <Stack
                                    spacing={2}
                                    direction="row"
                                    alignItems="center"
                                >
                                    <Image
                                        src={`echoes/sonata/${sonata.name}`}
                                        alt={sonata.displayName}
                                        style={{ width: "40px" }}
                                    />
                                    <TextStyled variant="h6-styled">
                                        {sonata.displayName}
                                    </TextStyled>
                                </Stack>
                                <Stack>
                                    {sonata["2pc"] && (
                                        <Text>
                                            {"2-Pc: "}
                                            <span
                                                style={{
                                                    color: theme.text
                                                        .description,
                                                }}
                                            >
                                                {parseSkillDescription({
                                                    description: sonata["2pc"],
                                                })}
                                            </span>
                                        </Text>
                                    )}
                                    {sonata["3pc"] && (
                                        <Text>
                                            {"3-Pc: "}
                                            <span
                                                style={{
                                                    color: theme.text
                                                        .description,
                                                }}
                                            >
                                                {parseSkillDescription({
                                                    description: sonata["3pc"],
                                                })}
                                            </span>
                                        </Text>
                                    )}
                                    {sonata["5pc"] && (
                                        <Text>
                                            {"5-Pc: "}
                                            <span
                                                style={{
                                                    color: theme.text
                                                        .description,
                                                }}
                                            >
                                                {parseSkillDescription({
                                                    description: sonata["5pc"],
                                                })}
                                            </span>
                                        </Text>
                                    )}
                                </Stack>
                            </Stack>
                        );
                    } else {
                        return <></>;
                    }
                })}
            </Stack>
        </MainContentBox>
    );
}

export default EchoSonata;
