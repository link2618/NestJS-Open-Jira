import { useContext } from "react";
import NextLink from 'next/link';

import { AppBar, IconButton, Toolbar, Typography, Link } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import { UIContext } from "@/context/ui";

export const Navbar = () => {
    const { openSideMenu } = useContext(UIContext);

    return (
        <AppBar position="sticky">
            <Toolbar>
                <IconButton size="large" edge="start" onClick={openSideMenu}>
                    <MenuOutlinedIcon />
                </IconButton>

                <Typography variant="h6">
                    <Link component={NextLink} href="/" passHref underline='none' color="white">
                        <Typography variant='h6'>OpenJira</Typography>
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
};
