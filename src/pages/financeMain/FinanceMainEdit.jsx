import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import TextEditor from "../../utils/TextEditor";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { useLocation } from "react-router-dom";

const FinanceMainEdit = () => {
  const {state}=useLocation();
  const [body, setBody] = useState("");
  const [file, setFile] = useState();
  const [crop, setCrop] = useState({
    unit: "100px",
    y: 10,
    width: 10,
  });

  function handleChange(e) {
    // console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div id="blog" style={{ background: "#f4f4f4" }}>
      <Box
        sx={{
          width: "60%",
          position: "relative",
          left: "20%",
          display: "flex",
          flexDirection: "column",
          marginTop: "20px",
          paddingBottom: "30px",
        }}
      >
        {JSON.stringify(state.code)}
        <Box sx={{ display: "flex", justifyContent: "center", margin: "20px" }}>
          <Typography component="h2" variant="h4">
            Finance
          </Typography>
        </Box>
        <Stack>
          <Typography sx={{ fontWeight: "600", fontSize: "22px" }}>
            Tittle:
          </Typography>
          <TextField defaultValue={state.name} />
        </Stack>
        <Stack sx={{ margin: "20px 0px" }}>
          <input
            type="file"
            onChange={handleChange}
            style={{ marginTop: "10px", width: "200px" }}
          />
          <ReactCrop crop={crop} aspect={16 / 9} onChange={(c) => setCrop(c)}>
            <img src={file} />
          </ReactCrop>
        </Stack>
        <Stack>
          <TextEditor required value={body} setValue={setBody} />
        </Stack>
        <Button
          color="success"
          variant="contained"
          size="small"
          sx={{
            width: "30%",
            marginTop: "60px",
            position: "relative",
            left: "30%",
          }}
        >
          Save Edited Finance
        </Button>
      </Box>
    </div>
  );
};

export default FinanceMainEdit;
