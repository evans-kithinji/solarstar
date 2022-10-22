import React from 'react'

 const Home = () => {
  return (
  <div>
    <form action="" method="post">
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
                <label for="radio"> radio</label><br/>
                <input type="checkbox" id="heater" name="heater" value="heater"/>
                <label for="heater"> heater</label><br/>
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
                <label for="kettle"> kettle</label><br/>
                <input type="checkbox" id="iron" name="iron" value="iron"/>
                <label for="iron"> iron</label><br/>
                <input class="btn btn-primary" type="submit" value="Submit"/>
             </div>
             </form> 
             </div>
  )
}
export default Home