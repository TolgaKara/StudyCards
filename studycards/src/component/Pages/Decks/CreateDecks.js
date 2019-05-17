import React from "react"
import fire from "../config/Firebase"
import YourDecks from "./YourDecks"








class CreateDecks extends React.Component{
    constructor(props){
        super(props)
        this.state={
            deckname: "",
            decknamelength: 30,
            description: "",
            category: "",
            question: "",
            answer: "",
            cards:[],
            decks:[],



        }
        this.createCard = this.createCard.bind(this)
        this.onChange = this.onChange.bind(this)
        this.deleteCard = this.deleteCard.bind(this)
        this.createDeck = this.createDeck.bind(this)
       
        
    }
    


    
    onChange(event, key){
        this.setState({
            [key]: event.target.value
        })
    }
    

    componentWillMount(){
        this.changeHandler()
    }
    

    changeHandler(){
        fire.database().ref("decks/" + this.state.category + "/" + fire.auth().currentUser.uid + "/" + fire.auth().currentUser.uid + "_" + this.state.deckname + "/cards/")
        .on("child_added", snapshot =>{
            let card = {
                id: snapshot.key,
                question: snapshot.val().question,
                answer: snapshot.val().answer
            }
            let cards = this.state.cards
            cards.push(card)

            this.setState({
                cards: cards
            })


        })
        fire.database().ref("decks/" + this.state.category + "/" + fire.auth().currentUser.uid + "/" + fire.auth().currentUser.uid + "_" + this.state.deckname + "/cards/")
        .on("child_removed", snapshot =>{
            let cards = this.state.cards
            cards = cards.filter(cards => cards.id !== snapshot.key)
            this.setState({
                cards: cards
            })
        })
    }
    
    

    deleteCard(id){
        fire.database().refFromURL("https://studycards-2758b.firebaseio.com/decks/grPIKjauovTeReNKX3X0WttyqEy2/grPIKjauovTeReNKX3X0WttyqEy2_/cards").child(id).remove()
    }

    createCard(){ 
            fire.database().ref("decks/" + this.state.category + "/" + fire.auth().currentUser.uid + "/" +"cards")
            .push({
            question: this.state.question,
            answer: this.state.answer
        })
    }

    


    createDeck(){
       if (this.state.deckname !== "" && this.state.category !== ""){
           if(this.state.deckname.length <= this.state.decknamelength){
            fire.database().ref("decks/" + this.state.category + "/" + fire.auth().currentUser.uid ).push({
                deckname: this.state.deckname,
                category: this.state.category,
                description: this.state.description
           }).then(this.setState({
               deckname: "",
               category: "",
               description: ""
           }))
            
            }else{alert("You exceeded the Limit of " + this.state.decknamelength + " Character")}
       } else{
           alert("Deckname and Category are empty!!!")
       }
    }


    render(){
        console.log(this.state.checkDeckname)
        return(
        <div>
            <div className="CreateDeckWrapper">
                <div className="CreateDeckTitle">
                    <h1>Create Your Own Deck!!!</h1>
                    <p>Minim sit in sit in cillum est tempor. Ad voluptate consequat duis elit ad eiusmod cupidatat non irure sunt. 
                            Mollit tempor culpa sit cupidatat. Dolor cillum do mollit irure eiusmod aliqua. Velit fugiat ut ipsum ex eiusmod amet proident esse. 
                            Elit voluptate irure id quis ad fugiat magna aliquip eiusmod Lorem. Qui ullamco id sunt cupidatat quis ad amet aliqua quis velit irure eiusmod.
                    </p>
                </div>

                <div className="CreateDeckInput">
                <div className="DeckWrapper">
                    <div className="DecksContent">
                        <p>Deck</p>
                        <input type="text" placeholder="Deck Name" id="createDeckName" value={this.state.deckname}
                        onChange={(event) => this.onChange(event, "deckname")}></input><br/>
                        <input type="text" placeholder="Description" id="deckDesc" value={this.state.description}
                        onChange={(event) => this.onChange(event, "description")}></input><br/>
                        <input type="text" placeholder="Category" id="deckCat" value={this.state.category}
                        onChange={(event) => this.onChange(event, "category")}></input>
                    </div>

                    <div className="CardsContent">
                        <p>Card</p>
                        <textarea type="text" placeholder="Question" id="cardQ" value={this.state.question}
                        onChange={(event) => this.onChange(event, "question")}></textarea><br/>
                        <textarea type="text" placeholder="Answer" id="cardA" value={this.state.answer}
                        onChange={(event) => this.onChange(event, "answer")}></textarea><br/>
                        <button onClick={this.createCard} id="cardsBtn">Save your Card</button>
                        <button onClick={this.createDeck} id="decksBtn" type="reset">Save your Deck</button>
                    </div>
                    </div>
                    </div>
                
                    <div className="CardsWrapper">
                        <p>Cards Shown Here</p>
                        <div className="ShowCards">
                        {this.state.cards.map(cards => (
                            <div className="CardsShown"><p id="deleteBtn" onClick= {() => this.deleteCard(cards.id)}>x</p>
                            <h4>{cards.id}</h4>
                            <h4>Question: </h4>
                            <h4>{cards.question}</h4>
                            <h4>Answer: </h4>
                            <h4>{cards.answer}</h4>
                            
                    
                            </div>
                        ))}
                        </div>

                    </div>
                    <div>
                    <YourDecks />
                </div>
            </div>

        </div>

        )
    }
}


export default CreateDecks