import React from 'react';
import {Box} from '@mui/material';

type ImageCardProps = {
    imagePath: string;
    children?: React.ReactNode;
    opacity?: number;
};

const TextToppedImage: React.FC<ImageCardProps> = ({ imagePath, children, opacity = 0.25 }) => {
    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                width: '100%',
                height: 'auto',
                overflow: 'hidden',
                zIndex: 0,
                '::before': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    transition: 'background-color 0.3s ease',
                    zIndex: 1,
                },
                    backgroundColor: 'rgba(0, 0, 0, 0)',
            }}
        >
            <img
                src={imagePath}
                alt=""
                style={{
                    width: '100%',
                    display: 'block',
                    objectFit: 'fill'
                }}
            />
            <Box
                className="text-content"
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'bottom',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    padding: '16px',
                    zIndex: 2,
                    transition: 'visibility 0.3s ease, opacity 0.3s ease',
                }}
            >
                {/* <Typography variant='h5' color={theme.palette.text.secondary} fontFamily='Open Sans Bold'>
                    {children}
                </Typography> */}
            </Box>
        </Box>
    );
};

export default TextToppedImage;
