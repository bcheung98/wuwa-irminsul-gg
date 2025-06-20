import { useState } from "react";

// Component imports
import Image from "custom/Image";
import MainContentBox from "custom/MainContentBox";
import { StyledTooltip } from "styled/StyledTooltip";
import { Text, TextStyled } from "styled/StyledTypography";

// MUI imports
import {
    useTheme,
    useMediaQuery,
    Box,
    Dialog,
    Divider,
    IconButton,
    Stack,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CloseIcon from "@mui/icons-material/Close";

// Helper imports
import { combatRoles } from "data/combatRoles";

// Type imports
import { CombatRole } from "types/character";

function CharacterCombatRoles({ roles }: { roles: CombatRole[] }) {
    const theme = useTheme();
    const matches_sm_up = useMediaQuery(theme.breakpoints.up("sm"));

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Stack spacing={1} direction="row" alignItems="center">
                <Grid container spacing={1}>
                    {roles.map((role) => (
                        <Image
                            key={role}
                            src={`tags/${role}`}
                            alt={role}
                            style={{
                                width: matches_sm_up ? "36px" : "32px",
                                height: matches_sm_up ? "36px" : "32px",
                                padding: "4px",
                                border: `2px solid ${combatRoles[role].color}`,
                                borderRadius: "4px",
                                backgroundColor: theme.appbar.hover,
                            }}
                            tooltip={role}
                        />
                    ))}
                </Grid>
                <StyledTooltip
                    title="Click to view Combat Roles"
                    arrow
                    placement="top"
                >
                    <IconButton disableRipple onClick={handleClickOpen}>
                        <InfoOutlinedIcon
                            sx={{ fontSize: matches_sm_up ? "28px" : "24px" }}
                        />
                    </IconButton>
                </StyledTooltip>
            </Stack>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="sm"
                fullWidth
                disableScrollLock
            >
                <Box sx={{ overflowY: "auto", scrollbarWidth: "thin" }}>
                    <MainContentBox
                        title="Combat Roles"
                        actions={
                            <IconButton
                                disableRipple
                                onClick={handleClose}
                                sx={{ color: theme.appbar.color }}
                            >
                                <CloseIcon />
                            </IconButton>
                        }
                    >
                        <Stack spacing={2} divider={<Divider />}>
                            {roles.map((role) => (
                                <Stack
                                    key={role}
                                    spacing={2}
                                    direction="row"
                                    alignItems="center"
                                >
                                    <Image
                                        src={`tags/${role}`}
                                        alt={role}
                                        style={{
                                            width: matches_sm_up
                                                ? "48px"
                                                : "40px",
                                            height: matches_sm_up
                                                ? "48px"
                                                : "40px",
                                            padding: "4px",
                                            border: `2px solid ${combatRoles[role].color}`,
                                            borderRadius: "4px",
                                            backgroundColor:
                                                theme.appbar.backgroundColor,
                                        }}
                                    />
                                    <Box>
                                        <TextStyled variant="h6-styled">
                                            {role}
                                        </TextStyled>
                                        <Text
                                            sx={{
                                                color: theme.text.description,
                                            }}
                                        >
                                            {combatRoles[role].description}
                                        </Text>
                                    </Box>
                                </Stack>
                            ))}
                        </Stack>
                    </MainContentBox>
                </Box>
            </Dialog>
        </>
    );
}

export default CharacterCombatRoles;
