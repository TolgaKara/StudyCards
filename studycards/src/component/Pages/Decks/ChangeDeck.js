import React from "react"
import fire from "../config/Firebase";

//TODO Realtime Update
class ChangeDeck extends React.Component{
    constructor(){
        super()
        this.state = {
            decksGeography:[],
            decksProgramming: [],
            decksLanguages:[],
            deckname: "",
            description: undefined,
            category:  undefined,
            id: undefined,
            
        }
       this.stateChange = this.stateChange.bind(this)
       this.updateDeck = this.updateDeck.bind(this)
    }
    
    onChange(event, key){
        this.setState({
            [key]: event.target.value
        })
    }

    componentDidMount(){
       this.getDecks()


    }
    
    getDecks(){
        fire.database().ref("decks/" + "Programming" + "/" + fire.auth().currentUser.uid).on("child_added", snapshot =>{
            let deck = {
                id: snapshot.key,
                deckname: snapshot.val().deckname,
                description: snapshot.val().description,
                category: snapshot.val().category
            }
            let decks = this.state.decksProgramming
            decks.push(deck)
            this.setState({
                decksProgramming: decks
            })
        })
        fire.database().ref("decks/" + "Geography" + "/" + fire.auth().currentUser.uid).on("child_added", snapshot =>{
            let deck = {
                id: snapshot.key,
                deckname: snapshot.val().deckname,
                description: snapshot.val().description,
                category: snapshot.val().category
            }
            let decks = this.state.decksGeography
            decks.push(deck)

            this.setState({
                decksGeography: decks
            })
        })
        fire.database().ref("decks/" + "Languages" + "/" + fire.auth().currentUser.uid).on("child_added", snapshot =>{
            let deck = {
                id: snapshot.key,
                deckname: snapshot.val().deckname,
                description: snapshot.val().description,
                category: snapshot.val().category

            }
            let decks = this.state.decksLanguages
            decks.push(deck)

            this.setState({
                decksLanguages: decks
            })
        })
    }
    
    stateChange(deckname, description, category, id){
        this.setState({
            deckname:deckname,
            description:description,
            category:category,
            id: id
        })
        
    }
    updateDeck(){
        fire.database().ref("decks/" + this.state.category + "/" + fire.auth().currentUser.uid + "/" + this.state.id).set({
            deckname: this.state.deckname,
            description: this.state.description,
            category: this.state.category
        }).then()
    }
    
    render(){
        return(
        <div>
            <div className="CreateDeckInput">
                <div className="DeckWrapper">
                    <div className="DecksContent">
                        <h1>Change your Decks</h1>
                        <input type="text" placeholder="Deck Name" value={this.state.deckname}
                        onChange={(event) => this.onChange(event, "deckname")}></input><br/>
                        <input type="text" placeholder="Description" id="deckDesc" value={this.state.description}
                        onChange={(event) => this.onChange(event, "description")}></input><br/>
                        <input type="text" placeholder="Category" id="deckCat" value={this.state.category}
                        onChange={(event) => this.onChange(event, "category")}></input>
                        <button onClick={this.updateDeck} id="decksBtn">Save your Deck</button>
                    </div>
                </div>
            </div>

            <p>Programming</p>
                <div className="ShownDecksWrapper">
                    {this.state.decksProgramming.map(decks =>(
                        <div className="ShownDecks"><p id="deleteBtn" onClick= {() => this.deleteDeckProgramming(decks.id)}>x</p>
                            
                            <h4>Deckname:</h4>
                            <p id="deckname"> {decks.deckname}</p>
                            <h4>Description: <br/></h4>
                            <p id="description">{decks.description}</p>                     
                            <h4>Category: <br/></h4>
                            <p id="category">{decks.category}</p>
                            <div className="DecksBtn">
                            <button id="selectBtn" onClick = {() => this.stateChange(decks.deckname, decks.description, decks.category, decks.id)}> Select! </button>
                            </div>
                        </div>
                    ))}
                </div>

            <p>Geography</p>
                <div className="ShownDecksWrapper">
                    {this.state.decksGeography.map(decks =>(
                        <div className="ShownDecks"><p id="deleteBtn" onClick= {() => this.deleteDeckGeography(decks.id)}>x</p>

                            <h4>Deckname:</h4>
                            <p id="deckname">{decks.deckname}</p>
                            <h4>Description: <br/></h4>
                            <p id="description">{decks.description}</p>                            
                            <h4>Category: <br/></h4>
                            <p id="category">{decks.category}</p>
                            <div className="DecksBtn">
                            <button id ="selectBtn" onClick={() => this.stateChange(decks.deckname, decks.description, decks.category, decks.id)}> Select! </button>                  
                            </div>
                        </div>
                    ))}
                </div>
            <p>Languages</p>
                <div className="ShownDecksWrapper">
                    {this.state.decksLanguages.map(decks =>(
                        <div className="ShownDecks"><p id="deleteBtn" onClick= {() => this.deleteDeckLanguages(decks.id)}>x</p>
                            
                            <h4>Deckname:</h4>
                            <p id="deckname"> {decks.deckname}</p>
                            <h4>Description: <br/></h4>
                            <p id="description">{decks.description}</p>                           
                            <h4>Category: <br/></h4>
                            <p id="category">{decks.category}</p>
                            <div className="DecksBtn">
                            <button id="selectBtn" onClick={() => this.stateChange(decks.deckname, decks.description, decks.category, decks.id)}> Select! </button>
                            </div>
                        </div>
                    ))}
                </div>           
            


        </div>
        )
                    
    }
}

export default ChangeDeck