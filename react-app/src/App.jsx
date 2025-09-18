import React from "react";

export default class App extends React.Component {
  state = {
    cart: {
      items: [
        { name: 'Laptop', price: 1200, quantity: 1 },
        { name: 'Headphone', price: 200, quantity: 1 }
      ]
    },
    nev: null,
    ar: null,
    db: null,
  }

  handleButtonClick = e => {
    e.preventDefault();

    // TODO - implement cart item insertion
  }

  render() {
    return (
      <div>
        <form>
          <h1>Termék hozzáadása a kosárhoz</h1>
          <label htmlFor="input_nev">Termék neve: </label>
          <input type="text" name="input_nev" id="input_nev" placeholder="Név..." onChange={value=>this.setState({nev: value})} /><br />
          <label htmlFor="input_ar">Ár: </label>
          <input type="number" name="input_ar" id="input_ar" value={0} onChange={value=>this.setState({ar: value})} /><br />
          <label htmlFor="input_db">Mennyiség: </label>
          <input type="number" name="input_db" id="input_db" value={0} onChange={value=>this.setState({db: value})} /><br />
          <input type="button" id="btn_submit" name="btn_submit" value="Hozzáadás a kosárhoz" onClick={this.handleButtonClick} />
        </form>
        <hr />
        <h3>A kosár tartalma</h3>

        {
          this.state.cart.items.length >= 1 ?
          <ul>
            {
              this.state.cart.items.map((item, idx)=><li key={idx}>
                {item.name} - Ár: {item.price} Ft, Mennyiség: {item.quantity}
              </li>)
            }
          </ul>
          : <p>Üres a kosár</p>
        }

      </div>
    )
  }
}