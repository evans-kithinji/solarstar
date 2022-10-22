import React from 'react'
import "./navbar.css";
import { Link} from 'react-router-dom'
// import { View, Image, StyleSheet } from 'react-native';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

 const Home = () => {
  return (
 <div>
        <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Solarstar
            </Link>
          </li>
           {/* <li className="topListItem">LOGOUT</li> */}
        </ul>
      </div>
      <div className="topRight">        
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/signin">
                Sign In
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/signup">
                Sign Up
              </Link>
            </li>
          </ul>
        
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
     <div className='bg'>
    <div classnam=' '>
    <form action="#">
                <div className='header'>Your solar solution advisor</div>
                <div className='button-input-group'>
                <div className='group input-group'>
                <label for="cars">Choose a number of TV you have:</label>
  <select className='group input-group' id="TV" name="TV">
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    
  </select>
                </div><br></br>
                <div className='group input-group'>
                <div className='group input-group'>
                <label for="cars">Choose a number of radio you have:</label>
  <select className='group input-group' id="radio" name="radio">
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    
  </select>
                </div><br></br>
                    
                </div>

                <div className='group input-group'>
                <label for="cars">Choose a number of heater you have:</label>
  <select className='group input-group' id="heater" name="heater">
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    
  </select>
                </div><br></br>

                <div className='group input-group'>
                <label for="cars">Choose a number of fridge you have:</label>
  <select className='group input-group' id="fridge" name="fridge">
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    
  </select>
                </div><br></br>
                <div className='group input-group'>
                    <button className='signup-btn' > Search</button>

                </div>
                </div>


            </form>

{/* <form action="" method="post">
        <div>
           <input type="checkbox" id="television" name="television" value="television"/>
                <label for="television"> television</label>
                <span class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" id = "television-counter" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        none    
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item">one</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item">two</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item">three</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item">four</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item">five</a></li>
                    </ul>
                </span>
                <br/>
                <input type="checkbox" id="radio" name="radio" value="radio"/>
                <label for="radio"> radio</label>      <ul class="dropdown-menu">
                        <li><a class="dropdown-item">one</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item">two</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item">three</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item">four</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item">five</a></li>
                    </ul><br/>
                <input type="checkbox" id="heater" name="heater" value="heater"/>
                <label for="heater"> heater</label>      <ul class="dropdown-menu">
                        <li><a class="dropdown-item">one</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item">two</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item">three</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item">four</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item">five</a></li>
                    </ul><br/>
                <input type="checkbox" id="laptop" name="laptop" value="laptop"/>
                <label for="laptop"> laptop</label>
                <span class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" id = "laptop-counter" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        none    
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item">one</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item">two</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item">three</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item">four</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item">five</a></li>
                    </ul>
                </span>
                <br/>
                <input type="checkbox" id="kettle" name="kettle" value="kettle"/>
                <label for="kettle"> kettle</label>     <ul class="dropdown-menu">
                        <li><a class="dropdown-item">one</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item">two</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item">three</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item">four</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item">five</a></li>
                    </ul><br/>
                <input type="checkbox" id="iron" name="iron" value="iron"/>
                <label for="iron"> iron</label>     <ul class="dropdown-menu">
                        <li><a class="dropdown-item">one</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item">two</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item">three</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item">four</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item">five</a></li>
                    </ul><br/>
                <input class="btn btn-primary" type="submit" value="Submit"/>
             </div>
             </form>  */}
    </div>
  
            

             <div></div>
  
    </div>
    </div>

    
             
  )
}
export default Home