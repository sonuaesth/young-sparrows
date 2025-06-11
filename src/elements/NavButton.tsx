import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface NavigationButtonProps {
    route: string;
    children: string;
    textColor?: string; // Добавленный пропс для цвета текста
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ route, children, textColor }) => {
    let history = useHistory();

    const navigate = () => {
        history.push(route);
    };

    return (
        <Box>
            <Link to={route} style={{ textDecoration: 'none' }}>
                <Button color="primary" onClick={navigate}>
                    <Typography variant="h5" fontFamily='Open Sans Bold' style={{ color: textColor }}>
                        {children}
                    </Typography>
                </Button>
            </Link>
        </Box>
    );
}


export default NavigationButton;
