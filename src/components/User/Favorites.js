import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import Attraction from "../Attractions/Attraction";
import './favorites.css'
@inject("user", "attractions")


@observer
class Favorites extends Component {
  componentDidMount() {
    this.props.user.getUserFavorites();
  }

    render() {
        
        let userFavorites = this.props.user._userFavorites
        let categories = this.props.attractions.categories
    
        return (
        <div className="favorites"> 
            <h1 className="attraction-title">Favorites</h1>
            
            {categories.map((c, i) => {return (
                 (userFavorites.some(u => u.category===c)) ? 
                  (<div key={Math.random()*1000000} className="favorite"><p className="categoryName">{c}</p>
                  <div className="favoritesCategory"> 
                  {userFavorites.map(uf => uf.category === c ? <Attraction category={c} attr={uf} key={Math.random()*1000000}/>: null)}
                  </div>
                  
                  </div>):null
                )})
            }
        </div>
        

    )
  }
}


export default Favorites;
