import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import TextEditor from "../../utils/TextEditor";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const NewsCreate = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  console.log(process.env.REACT_APP_CREATE_BLOG);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError();
    try {
      const response = await axios.post(
        process.env.REACT_APP_CREATE_BLOG,
        {
          title,
          body,
          type: "news",
        },
        {
          headers: { "Content-Type": "application/json" },
          //   withCredentials: true
        }
      );
      // console.log(response);
      toast.success(response.data.message);

      setIsLoading(false);
    } catch (error) {
      toast.error("error occured");
      // console.log(error.response.data.message)
      setIsLoading(false);
    }
  };

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
        <Box sx={{ display: "flex", justifyContent: "center", margin: "20px" }}>
          <Typography component="h2" variant="h4">
            News
          </Typography>
        </Box>
        <Stack>
          <Typography sx={{ fontWeight: "600", fontSize: "22px" }}>
            Tittle:
          </Typography>
          <TextField
            placeholder="Enter title"
            value={title}
            required
            onChange={(event) => setTitle(event.target.value)}
          />
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
        <Typography sx={{ fontWeight: "600", fontSize: "22px" }}>
          Body
        </Typography>
        <Stack>
          <TextEditor required value={body} setValue={setBody} />
        </Stack>
        <Button
          type="submit"
          onClick={handleSubmit}
          color="success"
          variant="contained"
          isLoading={isLoading}
          size="small"
          sx={{
            width: "30%",
            marginTop: "60px",
            position: "relative",
            left: "30%",
          }}
        >
          Add News
        </Button>
      </Box>
    </div>
  );
};

export default NewsCreate;
