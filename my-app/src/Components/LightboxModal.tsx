import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Slide,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { GalleryItem } from "../data";
import { useTheme } from "@emotion/react";

type LightboxModalProps = {
  item: GalleryItem | null;
  onClose: () => void;
};

const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const FullscreenDialog = styled(Dialog)(({ }) => ({
  '& .MuiDialog-paper': {
    width: '100%',
    maxWidth: '500px', // 👈 make dialog big
    margin: '0 20px',
    borderRadius: 12,
    padding : '20px'
    // overflow: 'hidden',
  },
}));

//  const theme = useTheme();
//   const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <FullscreenDialog
    //   fullScreen={fullScreen}
        open={!!item}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          "& .MuiBackdrop-root": {
            pointerEvents: !!item ? "auto" : "none", // 👈 Fix is here
          },
        }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>
        {item && (
          <>
           <Typography variant="h6" align="center" mt={2}>
              {item.title}
            </Typography>
            <img
              src={item.imageUrl}
              alt={item.title}
              style={{ borderRadius: 8 }}
            />
            <Typography variant="h6" align="center" mt={2}>
              {item.title}
            </Typography>
          </>
        )}
      </FullscreenDialog>
    </>
  );
};

export default LightboxModal;
