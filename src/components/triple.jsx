import React from 'react';
import Switch from 'react-switch';
import './triple.css';


const BasicHooksExample = () => {
    const [checked, setChecked] = useState(false);
    const handleChange = nextChecked => {
      setChecked(nextChecked);
    };
  
    return (
      <div className="example">
        <h2>Simple usage</h2>
        <label>
          <span>Switch with default style</span>
          <Switch
            onChange={handleChange}
            checked={checked}
            className="react-switch"
          />
        </label>
        <p>
          The switch is <span>{checked ? "on" : "off"}</span>.
        </p>
      </div>
    );
  };
  


  
 
          