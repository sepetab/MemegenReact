import React from "react"

class MemeGenerator extends React.Component {

    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText: "",
            imgUrl: "http://i.imgflip.com/1bij.jpg",
            AMI:[],
            loading:true
        }
        this.textChanger = this.textChanger.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    random_item(items){return items[Math.floor(Math.random()*items.length)];}

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(data => data.json())
        .then(jsonData => {
            //console.log(jsonData.data.memes[0])
            this.setState({AMI:jsonData.data.memes,loading:false})
            console.log(this.state.AMI[1].url)
        })
    }

    textChanger(e){
        const {name,value} = e.target;
        this.setState({[name]:value})
    }

    submitForm(e){
        e.preventDefault()
        let url = this.state.AMI[2].url;
        this.state.loading  ? this.setState({imgUrl:""}) : this.setState({imgUrl: this.random_item(this.state.AMI).url})
    }

    render(){

        return (
            <div>
                <form className="meme-form" onSubmit={this.submitForm}>
                    <input
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.textChanger}
                    />
                    <input
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.textChanger}
                    />
            
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.imgUrl} alt="nope" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }

}


export default MemeGenerator