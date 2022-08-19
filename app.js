class GroceryList extends React.Component {
    constructor(props) {
        super()
        this.handleChange = this.handleChange.bind(this)
    }

    state = {
        groceries: groceries,
        img: '',
        item: '',
        brand: '',
        units: '',
        quantity: 0,
        isPurchased: false
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('you prevented the default')
        this.setState({ 
            groceries: [{ img: this.state.img, item: this.state.item, brand: this.state.brand, units: this.state.units, quantity: this.state.quantity, isPurchased: false }, ...groceries], 
            img: '',
            item: '',
            brand: '',
            units: '',
            quantity: 0,
            isPurchased: false
        })
    }

    render() {
        return (
            <div className='groceryContainer'>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='item'>Item</label>
                    <input type='text' value={this.state.item} onChange={this.handleChange} id='item' />
                    <br />
                    <label htmlFor='brand'>Brand</label>
                    <input type='text' value={this.state.brand} onChange={this.handleChange} id='brand' />
                    <br />
                    <label htmlFor='img'>Image</label>
                    <input type='text' value={this.state.img} onChange={this.handleChange} id='img' />
                    <br />
                    <label htmlFor='units'>Units</label>
                    <input type='text' value={this.state.units} onChange={this.handleChange} id='units' />
                    <br />
                    <label htmlFor='quantity'>Quantity</label>
                    <input type='number' value={this.state.quantity} onChange={this.handleChange} min={0} id='quantity' />
                    <br />
                    <input type='submit' />
                </form>
                <div className='groceryList'>
                    <div className='legend'>
                        <h2>Item</h2>
                        <h2>Brand</h2>
                        <h2>Unit</h2>
                        <h2>Qty</h2>
                    </div>
                    {this.state.groceries.map(grocery => {
                        if (!grocery.isPurchased) {
                            return (
                                <div className='groceryItem'>
                                    <img src={grocery.img}/>
                                    <h3>{grocery.item}</h3>
                                    <h3>{grocery.brand}</h3>
                                    <h3>{grocery.units}</h3>
                                    <h3 className='quantity'>{grocery.quantity}</h3>
                                    <button>Remove</button>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        )
    }
}

// class App extends React.Component {
//     constructor(props) {
//         super()
//         this.handleChange = this.handleChange.bind(this)
//     }

//     state = {
//         shoppers: shoppers,
//         name: '',
//     }

//     handleChange = (event) => {
//         console.log(event.target.value)
//         this.setState({ [event.target.id]: event.target.value })
//     }

//     handleSubmit = (event) => {
//         event.preventDefault()
//         console.log('you prevented the default')
//     }

//     render() {
//         return (
//             <div className='appContainer'>
//                 <h1>Grocery List App</h1>
//                 <form onSubmit={this.handleSubmit}>
//                     <label htmlFor='name'>Name</label>
//                     <input type='text' value={this.state.name} onChange={this.handleChange} id='name' placeholder='Enter name here' />
//                     <br />
//                     <input type='submit' />
//                 </form>
//                 {this.state.shoppers.map(shopper => {
//                     return (
//                         <>
//                             <h2>{shopper.name}</h2>
//                             <GroceryList name={shopper.name} />
//                         </>
//                     )
//                 })}
//             </div>
//         )
//     }
// }

ReactDOM.render(
    <GroceryList />,
    document.querySelector('.container')
)