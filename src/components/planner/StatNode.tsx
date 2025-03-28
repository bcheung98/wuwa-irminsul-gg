import { useEffect, useState } from "react";

// Component imports
import Image from "custom/Image";

// MUI imports
import { useTheme, useMediaQuery } from "@mui/material";

// Helper imports
import { useAppDispatch } from "helpers/hooks";
import { updateCharacterCosts } from "reducers/planner";

// Type imports
import { CostSliderData, UpdateCostsPayload } from "types/costs";
import { CardMode } from "./PlannerCard";

interface StatNodeProps {
    mode: CardMode;
    node: number;
    name: string;
    title: React.ReactNode;
    icon: string;
    type: UpdateCostsPayload["type"];
    values: CostSliderData;
}

function StatNode({
    mode,
    node,
    name,
    title,
    icon,
    type,
    values,
}: StatNodeProps) {
    const theme = useTheme();
    const matches_sm_dn = useMediaQuery(theme.breakpoints.down("sm"));

    const dispatch = useAppDispatch();

    const [selected, setSelected] = useState(values.selected ?? true);
    const handleSelect = () => {
        setSelected(!selected);
    };

    const imgSize = () => {
        if (type.startsWith("passive")) {
            return matches_sm_dn ? "32px" : "40px";
        } else {
            return matches_sm_dn ? "24px" : "32px";
        }
    };

    useEffect(() => {
        dispatch(
            updateCharacterCosts({
                name: name,
                type: type,
                data: {
                    node: node,
                    selected,
                },
            })
        );
    }, [selected]);

    return (
        <>
            <Image
                id={`plannerCard-${name}-${type}`}
                src={icon}
                alt={icon}
                style={{
                    width: imgSize(),
                    height: imgSize(),
                    padding: "4px",
                    borderRadius: "64px",
                    border: `2px solid ${theme.border.color.primary}`,
                    backgroundColor: theme.appbar.backgroundColor,
                    cursor: mode === "edit" ? "pointer" : "default",
                    opacity: selected ? 1 : 0.35,
                }}
                tooltip={title}
                onClick={mode === "edit" ? handleSelect : undefined}
            />
        </>
    );
}

export default StatNode;
