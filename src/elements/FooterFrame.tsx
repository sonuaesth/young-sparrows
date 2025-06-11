import React from "react";
import theme from "./Theme";
import {Box} from "@mui/material";
import Footer from "./Footer";

const FooterFrame: React.FC = () => {
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            paddingTop: '30px',
            flexDirection: 'column',
        }}>
            <Footer/>
        </Box>
    )
}

export default FooterFrame;

