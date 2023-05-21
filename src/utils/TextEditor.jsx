import { Box } from '@mui/system';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DOMPurify from 'dompurify';
import { useQuill } from "react-quilljs";



function createMarkup(html) {
    return {
        __html: DOMPurify.sanitize(html)
    }
}




export default function TextEditor({value,setValue}) {
    // const [value, setValue] = useState('');

   
    return (
        <Box>
            <ReactQuill style={{ height: '200px' }} theme="snow" value={value} onChange={(e)=>setValue(e)}  placeholder='Type anything ' />
        </Box >
    )
}

