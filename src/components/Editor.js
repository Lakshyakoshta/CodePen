import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import {Controlled as ControlledEditor} from 'react-codemirror2'

export default function Editor(props) {

    const{
        language,
        dispalyName,
        value,
        onChange
    }=props;

    const [open,setOpen] = useState(true)

    function handleChange(editor,data,value){
        onChange(value)
    }
  return (
    <div className={`grow basis-0 flex flex-col p-1.5 ${open ? '' : "collapse"} `}>
        <div className='flex justify-between pl-3 pr-3 p-2 bg-gray-900 text-white rounded-t-md'>
            {dispalyName}
            {/* <button onClick={()=>{setOpen(prev => !prev)}}>o/c</button> */}
        </div>

        {/* <ControlledEditor
            onBeforeChange={handleChange}
            value={value}
            className='code-mirror-wrapper'
            options={
                {
                    lineWrapping:true,
                    lint:true,
                    mode:language,
                    theme:'material',
                    lineNumbers:true
                }
            }
        /> */}
        <ControlledEditor
                onBeforeChange={(editor, data, value) => handleChange(editor, data, value)}
                value={value}
                className='code-mirror-wrapper rounded-b-md'
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material',
                    lineNumbers: true
                }}
            />
    </div>
  )
}
