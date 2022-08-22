class App extends React.Component {
    constructor(props) {
        super()
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleLater = this.handleLater.bind(this)
    }

    state = {
        groceries: groceries,
        img: '',
        item: '',
        brand: '',
        units: '',
        quantity: 0,
        isPurchased: false,
        purchasedLater: false
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('you prevented the default')
        const newItem = {
            img: this.state.img,
            item: this.state.item,
            brand: this.state.brand,
            units: this.state.units,
            quantity: this.state.quantity,
            isPurchased: this.state.isPurchased,
        }
        
        this.setState({ 
            groceries: [newItem, ...this.state.groceries], 
            img: '',
            item: '',
            brand: '',
            units: '',
            quantity: 0,
            isPurchased: false,
            purchasedLater: false
        })
    }

    handleRemove = (index, event) => {
        const newGroceries = this.state.groceries
        newGroceries.splice(index, 1)
        
        this.setState({
            groceries: newGroceries
        })
    }

    handleLater = (event) => {
        console.log('nice')
        let list = event.target.parentElement.parentElement.childNodes
        list.forEach((node) => {
            if (node.classList.contains('text')) {
                node.classList.toggle('strike')
            }
        })
    }

    render() {
        return (
            <div className='groceryContainer'>
                <div className='title'>
                    <h1>Grocery List</h1>
                </div>

                <form className='newItem' onSubmit={this.handleSubmit}>
                    <h3>New Item</h3>
                    <div className='user-box'>
                        <label htmlFor='item'>Item</label>
                        <input type='text' value={this.state.item} onChange={this.handleChange} id='item' />
                        <br />
                    </div>

                    <div className='user-box'>
                        <label htmlFor='brand'>Brand</label>
                        <input type='text' value={this.state.brand} onChange={this.handleChange} id='brand' />
                        <br />
                    </div>         

                    <div className='user-box'>
                        <label htmlFor='img'>Image</label>
                        <input type='text' value={this.state.img} onChange={this.handleChange} id='img' />
                        <br />
                    </div>             

                    <div className='user-box'>
                        <label htmlFor='units'>Units</label>
                        <input type='text' value={this.state.units} onChange={this.handleChange} id='units' />
                        <br />
                    </div>
                    
                    <div className='user-box'>
                        <label htmlFor='quantity'>Quantity</label>
                        <input type='number' value={this.state.quantity} onChange={this.handleChange} min={0} id='quantity' />
                        <br />
                    </div>
                    

                    <input type='submit' />
                </form>
                <div className='groceryList'>
                    <table>
                        <thead>
                            <th></th>
                            <th></th>
                            <th>ITEM</th>
                            <th>BRAND</th>
                            <th>UNIT</th>
                            <th>QTY</th>
                        </thead>
                        <tbody>
                            {this.state.groceries.map((grocery, index) => {
                                if (!grocery.isPurchased) {
                                    return (
                                        <tr>
                                            <td>
                                                <button className='laterButton' onClick={this.handleLater}>Buy Later</button>
                                            </td>
                                            <td>
                                                <img src={grocery.img || null}/>
                                            </td>
                                            <td className='text'>{grocery.item}</td>
                                            <td className='text'>{grocery.brand}</td>
                                            <td className='text'>{grocery.units}</td>
                                            <td className='quantity text'>{grocery.quantity}</td>
                                            
                                            <td>
                                                <button className='removeButton' onClick={() => this.handleRemove(index)}>Remove</button>
                                            </td>
                                            
                                        </tr>
                                    )
                                }
                            })}
                        </tbody>
                    </table>                 
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
)