import React, { useState , useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import { useSelector } from 'react-redux';

const CameraButton = ({localStream,cameraEnabled,setCameraEnabled}) => {
    // const [cameraEnabled, setCameraEnabled] = useState(true);
    // const isAudioOnly = useSelector(state => state.room.audioOnly);
    const isAudioOnly = useSelector(state => state.room.roomDetails?.roomCreator.type);

    const handleToggleCamera = () => {
      if (localStream) {
        localStream.getVideoTracks()[0].enabled = !cameraEnabled;
        setCameraEnabled(!cameraEnabled);
      }
    };

    useEffect(() => {
      if(isAudioOnly === "VOICE"){
       handleToggleCamera()
       console.log("toogle cam")
      }
    
    }, [isAudioOnly]);

    return (
        <IconButton onClick={handleToggleCamera} style={{ color: "white" }}>
        {cameraEnabled ? <VideocamIcon /> : <VideocamOffIcon />}
      </IconButton>
    );
};

export default CameraButton;