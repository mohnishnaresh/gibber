import React, { useEffect, useState } from 'react';
import './index.css';
import { languages } from '../../utils/languages';

function DropdownInput({value, onChange, placeholder, ...props}) {

  return <>
  <select className='dropdown' style={value === "" ? {color: '#757575'} : {}} id="language" 
    onChange={e => onChange(e.target.value)} placeholder={placeholder} {...props}>
    <option value="">Choose a Language</option>
    {languages.length > 0 ? languages.map(l => <option key={l.language} value={l.language}>{l.name}</option>): <></>}
  </select>
</>
}

export default DropdownInput;
