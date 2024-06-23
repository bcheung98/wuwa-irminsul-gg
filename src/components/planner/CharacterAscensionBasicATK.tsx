import * as React from "react"
import { useDispatch } from "react-redux"
import parse from "html-react-parser"
import Xarrow from "react-xarrows"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, Typography, Avatar, Popover } from "@mui/material"

// Helper imports
import { CustomSlider } from "../../helpers/CustomSlider"
import { CustomSwitch } from "../../helpers/CustomSwitch"
import { CustomTooltip } from "../../helpers/CustomTooltip"
import { updateCharacterCosts } from "../../redux/reducers/AscensionPlannerReducer"
import { CharacterCosts } from "../../helpers/AscensionCostIndex"

const CharacterAscensionBasicATK = (props: any) => {

    const theme = useTheme()

    const dispatch = useDispatch()

    let { name, element, weapon, forte } = props.character

    const minDistance = 1
    let maxValue = 10
    const levels = [...Array(maxValue).keys()].map((i) => i + 1)
    const [sliderValue, setSliderValue] = React.useState([1, maxValue])
    const handleSliderChange = (event: Event, newValue: number | number[], activeThumb: number) => {
        if (!Array.isArray(newValue)) {
            return
        }
        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], maxValue - minDistance)
                setSliderValue([clamped, clamped + minDistance])
            }
            else {
                const clamped = Math.max(newValue[1], minDistance + 1)
                setSliderValue([clamped - minDistance, clamped])
            }
        }
        else {
            setSliderValue(newValue)
        }
    }

    let materialArray = CharacterCosts("attack")
    const getCost = (start: number, stop: number) => {
        if (selectedMainNode) {
            let costArray = materialArray.map((material, index) => (materialArray[index].slice(start, stop).reduce((a, c) => a + c)))
            return {
                credits: costArray[0],
                forgery1: costArray[1],
                forgery2: costArray[2],
                forgery3: costArray[3],
                forgery4: costArray[4],
                common1: costArray[5],
                common2: costArray[6],
                common3: costArray[7],
                common4: costArray[8],
                weeklyBossMat: costArray[9]
            }
        }
        else {
            return {
                credits: 0,
                forgery1: 0,
                forgery2: 0,
                forgery3: 0,
                forgery4: 0,
                common1: 0,
                common2: 0,
                common3: 0,
                common4: 0,
                weeklyBossMat: 0
            }
        }
    }

    React.useEffect(() => {
        dispatch(updateCharacterCosts([name, "attack", getCost(sliderValue[0], sliderValue[1])]))
    })

    const [selectedMainNode, setSelectedMainNode] = React.useState(true)
    const handleSelectMainNode = () => {
        setSelectedMainNode(!selectedMainNode)
    }
    const [selectedNode1, setSelectedNode1] = React.useState(true)
    const handleSelectNode1 = () => {
        setSelectedNode1(!selectedNode1)
    }

    const [selectedNode2, setSelectedNode2] = React.useState(true)
    const handleSelectNode2 = () => {
        setSelectedNode2(!selectedNode2)
    }

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
    const handleClickOpenMainNode = (event: React.BaseSyntheticEvent) => {
        if (selectedMainNode) setAnchorEl(event.target)
    }
    const handleCloseMainNode = () => {
        setAnchorEl(null)
    }
    const open = Boolean(anchorEl)

    const skillIcon = {
        width: "48px",
        height: "48px",
        marginBottom: "15px",
        border: `2px solid ${theme.border.color}`,
        borderRadius: "48px",
        backgroundColor: `${theme.materialImage.backgroundColor}`,
    }

    const skillIconSmall = {
        width: "32px",
        height: "32px",
        marginBottom: "30px",
        border: `2px solid ${theme.border.color}`,
        borderRadius: "32px",
        backgroundColor: `${theme.materialImage.backgroundColor}`,
        cursor: "pointer"
    }

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: "block",
                    mx: "auto",
                    width: "45%",
                    alignItems: "center",
                }}
            >
                <CustomTooltip title={parse(forte.attack.nodes[1].description)} arrow placement="top">
                    <Avatar
                        id={`${name}-attack_node2`}
                        src={`${process.env.REACT_APP_URL}/stat_icons/${forte.attack.nodes[1].type}.png`}
                        alt={forte.attack.nodes[1].type}
                        sx={skillIconSmall}
                        style={selectedNode2 ? { opacity: "1" } : { opacity: "0.35" }}
                        onClick={handleSelectNode2}
                    >
                        <img src={`${process.env.REACT_APP_URL}/images/Unknown.png`} alt="Unknown" style={{ width: "48px", backgroundColor: `${theme.paper.backgroundColor}` }} />
                    </Avatar>
                </CustomTooltip>
                <Xarrow start={`${name}-attack_node2`} end={`${name}-attack_node1`} showHead={false} path="grid" color="lightgray" strokeWidth={3} />
            </Box>
            <Box
                sx={{
                    display: "block",
                    mx: "auto",
                    width: "45%",
                    alignItems: "center",
                }}
            >
                <CustomTooltip title={parse(forte.attack.nodes[0].description)} arrow placement="top">
                    <Avatar
                        id={`${name}-attack_node1`}
                        src={`${process.env.REACT_APP_URL}/stat_icons/${forte.attack.nodes[0].type}.png`}
                        alt={forte.attack.nodes[0].type}
                        sx={skillIconSmall}
                        style={selectedNode1 ? { opacity: "1" } : { opacity: "0.35" }}
                        onClick={handleSelectNode1}
                    >
                        <img src={`${process.env.REACT_APP_URL}/images/Unknown.png`} alt="Unknown" style={{ width: "48px", backgroundColor: `${theme.paper.backgroundColor}` }} />
                    </Avatar>
                </CustomTooltip>
                <Xarrow start={`${name}-attack_node1`} end={`${name}-attack_node0`} showHead={false} path="grid" color="lightgray" strokeWidth={3} />
            </Box>
            <Box
                sx={{
                    display: "block",
                    mx: "auto",
                    width: "60%",
                    alignItems: "center",
                }}
            >
                <Avatar
                    id={`${name}-attack_node0`}
                    src={`${process.env.REACT_APP_URL}/weapons/icons/${weapon}.png`}
                    alt={forte.attack.nodes[0].type}
                    sx={skillIcon}
                    style={selectedMainNode ? { opacity: "1", cursor: "pointer" } : { opacity: "0.35" }}
                    onClick={handleClickOpenMainNode}
                >
                    <img src={`${process.env.REACT_APP_URL}/images/Unknown.png`} alt="Unknown" style={{ width: "48px", backgroundColor: `${theme.paper.backgroundColor}` }} />
                </Avatar>
            </Box>
            <Box
                sx={{
                    display: "block",
                    mx: "auto",
                    width: "70%",
                    alignItems: "center",
                }}
                style={selectedMainNode ? { opacity: "1" } : { opacity: "0.35" }}
            >
                <Typography variant="body2" sx={{ color: `${theme.text.color}`, fontWeight: "bold", width: "64px", textAlign: "center" }}>
                    Basic Attack
                </Typography>
                <CustomSwitch checked={selectedMainNode} onChange={handleSelectMainNode} element={element} />
            </Box>
            <Box
                sx={{
                    display: "block",
                    mx: "auto",
                    width: "95%",
                    alignItems: "center",
                }}
                style={selectedMainNode ? { opacity: "1" } : { opacity: "0.35" }}
            >
                <Typography variant="body2" sx={{ color: `${theme.text.color}`, fontWeight: "bold", width: "96px", textAlign: "center" }}>
                    {`Lv. ${levels[sliderValue[0] - 1]} ➜ Lv. ${levels[sliderValue[1] - 1]}`}
                </Typography>
            </Box>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleCloseMainNode}
                anchorOrigin={{
                    vertical: "center",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "center",
                    horizontal: "left",
                }}
                sx={{ ml: "20px" }}
            >
                <Box
                    sx={{
                        p: "10px",
                        width: "30vw",
                        backgroundColor: `${theme.appbar.backgroundColor}`,
                        border: `2px solid ${theme.border.color}`,
                        borderRadius: "5px",
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center", mb: "10px" }}>
                        <Typography variant="h6" sx={{ color: `${theme.text.color}`, fontWeight: "bold", ml: "15px" }}>
                            Basic Attack
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", px: 2 }}>
                        <Typography variant="body1" sx={{ color: `${theme.text.color}`, mr: "25px", width: "75px", fontWeight: "bold" }}>
                            Lv. {levels[sliderValue[0] - 1]}
                        </Typography>
                        <CustomSlider value={sliderValue} step={1} min={1} max={maxValue} onChange={handleSliderChange} element={element} disableSwap />
                        <Typography variant="body1" sx={{ color: `${theme.text.color}`, ml: "25px", width: "75px", fontWeight: "bold" }}>
                            Lv. {levels[sliderValue[1] - 1]}
                        </Typography>
                    </Box>
                </Box>
            </Popover>
        </React.Fragment>
    )

}

export default CharacterAscensionBasicATK