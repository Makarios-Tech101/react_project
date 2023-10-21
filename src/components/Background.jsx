import React, { useState, useEffect } from 'react';
import './background.css';
// import ReactSwitch from 'react-switch';



function Background() {
  const [value, setValue] = useState("");
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
   };

   useEffect(() => {
      document.body.className = theme;
    }, [theme]);
//   const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

//   const switchTheme = () => {
//      const newTheme = theme === "light" ? "dark" : "light";
//      setTheme(newTheme) 
//   }
   
    return (
     <div className={`Background ${theme}`} >
       <div className="background" >
         <div className="calculator">
            <div className="intro">
               <div>
                  <h5>
                     calc
                  </h5>
               </div>
               <div className="d-toggle">
                  <div>
                     <h6>
                        toggle
                     </h6>
                  </div>
                  {/* <div className="switch">
                     {theme 
                     ? 
                     <ReactSwitch  onChange = {()=>{setTheme("dark")}} id="dark" />
                     : 
                     <ReactSwitch onChange = {()=>{setTheme("light")}}  id="light"/>
                     }
                  </div> */}
                  <div className="theme-toggle">
                  <i onClick={toggleTheme} className="fa fa-toggle-on" aria-hidden="true"></i>
                  </div>
               </div>
            </div>
            <form>
               <div className="screen">
                  <input type="text" value={value}/>
               </div>
               <div className="keypad">
                  <div>
                     <input type="button" value="7" onClick={e => setValue(value+ e.target.value)}/>
                     <input type="button" value="8" onClick={e => setValue(value+ e.target.value)}/>
                     <input type="button" value="9" onClick={e => setValue(value+ e.target.value)}/>
                     <input type="button" id="del" value="DEL" onClick={e => setValue(value.slice(0, -1))}/>
                  </div>
                  <div>
                     <input type="button" value="4" onClick={e => setValue(value+ e.target.value)}/>
                     <input type="button" value="5" onClick={e => setValue(value+ e.target.value)}/>
                     <input type="button" value="6" onClick={e => setValue(value+ e.target.value)}/>
                     <input type="button" value="+" onClick={e => setValue(value+ e.target.value)}/>
                  </div>
                  <div>
                     <input type="button" value="1" onClick={e => setValue(value+ e.target.value)}/>
                     <input type="button" value="2" onClick={e => setValue(value+ e.target.value)}/>
                     <input type="button" value="3" onClick={e => setValue(value+ e.target.value)}/>
                     <input type="button" value="-" onClick={e => setValue(value+ e.target.value)}/>
                  </div>
                  <div>
                     <input type="button" value="." onClick={e => setValue(value+ e.target.value)}/>
                     <input type="button" value="0" onClick={e => setValue(value+ e.target.value)}/>
                     <input type="button" value="/" onClick={e => setValue(value+ e.target.value)}/>
                     <input type="button" value="*" onClick={e => setValue(value+ e.target.value)}/>
                  </div>
                  <div>
                     <input type="button" id="reset" value="RESET" onClick={e => setValue(" ")}/>
                     <input type="button" id="equal" value="=" onClick={e => setValue(eval(value))}/>
                  </div>
               </div>
            </form>
         </div>
       </div>
    </div>  
    );
  }
  
  export default Background;






// export const ThemeContext = createContext("null");


// function Background() {
//   const [value, setValue] = useState("");
//   const [theme, setTheme] = useState("dark");
  
//   const toggleTheme = () => {
//     setTheme = ((curr) => (curr === "light" ? "dark" : "light"));
    
//   }
   
//     return (
//      <ThemeContext.Provider value={{ theme, toggleTheme }}>
//        <div className="background" id={theme}>
//          <div className="calculator">
//             <div className="intro">
//                <div>
//                   <h5>
//                      calc
//                   </h5>
//                </div>
//                <div className="d-toggle">
//                   <div>
//                      <h6>
//                         toggle
//                      </h6>
//                   </div>
//                   <div className="switch">
//                     <ReactSwitch 
                    
//                     />
//                     <ReactSwitch onClick={toggleTheme} checked={theme === "dark"} /> 
//                   </div>
//                </div>
//             </div>
//             <form>
//                <div className="screen">
//                   <input type="text" value={value}/>
//                </div>
//                <div className="keypad">
//                   <div>
//                      <input type="button" value="7" onClick={e => setValue(value+ e.target.value)}/>
//                      <input type="button" value="8" onClick={e => setValue(value+ e.target.value)}/>
//                      <input type="button" value="9" onClick={e => setValue(value+ e.target.value)}/>
//                      <input type="button" id="del" value="DEL" onClick={e => setValue(value.slice(0, -1))}/>
//                   </div>
//                   <div>
//                      <input type="button" value="4" onClick={e => setValue(value+ e.target.value)}/>
//                      <input type="button" value="5" onClick={e => setValue(value+ e.target.value)}/>
//                      <input type="button" value="6" onClick={e => setValue(value+ e.target.value)}/>
//                      <input type="button" value="+" onClick={e => setValue(value+ e.target.value)}/>
//                   </div>
//                   <div>
//                      <input type="button" value="1" onClick={e => setValue(value+ e.target.value)}/>
//                      <input type="button" value="2" onClick={e => setValue(value+ e.target.value)}/>
//                      <input type="button" value="3" onClick={e => setValue(value+ e.target.value)}/>
//                      <input type="button" value="-" onClick={e => setValue(value+ e.target.value)}/>
//                   </div>
//                   <div>
//                      <input type="button" value="." onClick={e => setValue(value+ e.target.value)}/>
//                      <input type="button" value="0" onClick={e => setValue(value+ e.target.value)}/>
//                      <input type="button" value="/" onClick={e => setValue(value+ e.target.value)}/>
//                      <input type="button" value="*" onClick={e => setValue(value+ e.target.value)}/>
//                   </div>
//                   <div>
//                      <input type="button" id="reset" value="RESET" onClick={e => setValue(" ")}/>
//                      <input type="button" id="equal" value="=" onClick={e => setValue(eval(value))}/>
//                   </div>
//                </div>
//             </form>
//          </div>
//        </div>
//     </ThemeContext.Provider>  
//     );
//   }
  
//   export default Background;
  