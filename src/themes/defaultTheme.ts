const fontNormal = "Segoe UI"
const fontNormalWeight = "400"

const fontStyled = "Segoe UI"
const fontStyledWeight = "bold"

export const defaultTheme = {
    palette: {
        background: {
            default: "rgb(26, 22, 24)"
        }
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: fontNormal,
                    fontWeight: fontNormalWeight
                }
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                noOptions: {
                    color: "white",
                    fontFamily: fontStyled,
                    fontWeight: fontStyledWeight,
                    backgroundColor: "rgb(25, 21, 26)",
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: "rgb(169, 142, 84)"
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundColor: "rgb(25, 21, 26)"
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: "rgb(83, 71, 69)"
                }
            }
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    backgroundColor: "rgb(25, 21, 26)"
                },
                list: {
                    backgroundColor: "rgb(25, 21, 26)",
                    color: "white",
                }
            }
        }
    },
    font: {
        default: {
            family: fontNormal,
            weight: fontNormalWeight
        },
        styled: {
            family: fontStyled,
            weight: fontStyledWeight
        }
    },
    appbar: {
        backgroundColor: "rgb(20, 19, 17)",
    },
    border: {
        color: "rgb(83, 71, 69)",
        colorAlt: "rgb(168, 147, 105)"
    },
    paper: {
        backgroundColor: "rgb(25, 21, 26)",
    },
    card: {
        backgroundColor: "rgb(25, 21, 26)",
    },
    table: {
        header: {
            backgroundColor: "rgb(20, 19, 17)",
        },
        body: {
            backgroundColor: "rgb(34, 28, 36)",
            hover: "rgb(45, 41, 46)",
        },
    },
    toolbar: {
        backgroundColor: "rgb(20, 19, 17)",
    },
    materialImage: {
        backgroundColor: "rgb(15, 11, 16)",
    },
    text: {
        color: "white",
        highlight: "rgb(202, 166, 112)",
        star: "rgb(255, 238, 157)",
        appbar: "white"
    },
    button: {
        selected: "rgb(169, 142, 84)",
        hover: "rgb(125, 105, 62)",
    },
    chip: {
        color: "rgb(160, 134, 80)"
    },
    menu: {
        backgroundColor: "rgb(32, 32, 32)",
        hover: "rgb(64, 64, 64)",
        selected: "rgb(80, 80, 80)",
        selectedHover: "rgb(96, 96, 96)"
    }
}