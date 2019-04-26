import React from "react"
import fire from "../config/Firebase"





class CreateDecks extends React.Component{
    constructor(){
        super()
        this.state={
            deckname: "",
            description: "",
            question:"",
            answer:"",
            cards:[]
        }
        this.createCard = this.createCard.bind(this)
        this.onChange = this.onChange.bind(this)
    }


    
    onChange(event, key){
        this.setState({
            [key]: event.target.value
        })
    }

    createCard(){
        
        fire.database().ref("cards").push({
            question: this.state.question,
            answer: this.state.answer
        })
    }

    componentDidMount(){
        this.changeHandler()
    }
    changeHandler(){
        fire.database().ref("cards").on("child_added", snapshot =>{
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
    }



    render(){
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
                <div className="DecksContent">
                    <p>Deck</p>
                    <input type="text" placeholder="Deck Name" ></input><br/>
                    <input type="text" placeholder="Description" id="deckDesc"></input><br/>
                </div>

                <div className="CardsContent">
                    <p>Card</p>
                    <textarea type="text" placeholder="Question" id="cardQ" value={this.state.question}
                    onChange={(event) => this.onChange(event, "question")}></textarea><br/>
                    <textarea type="text" placeholder="Answer" id="cardA" value={this.state.answer}
                    onChange={(event) => this.onChange(event, "answer")}></textarea><br/>
                    <button onClick={this.createCard} id="cardsBtn">Save your Card</button>
                </div>
                <div className="CardsWrapper">
                <div className="ShowCards">
                    <p>Cards Shown Here</p>
                    <div>
                    {this.state.cards.map(cards => (
                        <div className="CardsShown"key={cards.id}>
                        <h4>{cards.question}</h4>
                        <h4>{cards.answer}</h4>

                        </div>
                    ))}
                    </div>

                </div>
                </div>
                <div>
                <button>Save your Deck</button>
                <button>Exit</button>
                </div>
                </div>
            </div>

        </div>

        )
    }
}


export default CreateDecks