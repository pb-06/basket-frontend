import React from "react";

export default class App extends React.Component {
  state = {
    cart: {
      items: [
        //{ name: 'Laptop', price: 1200, quantity: 1 },
        //{ name: 'Headphone', price: 200, quantity: 1 }
      ]
    },
    nev: null,
    ar: 0,
    db: 0,
  }

  handleButtonClick = e => {
    e.preventDefault();

    // TODO - implement cart item insertion
    console.log('handleButtonClick state', this.state);
    if (this.state.ar && this.state.ar > 0 && this.state.db && this.state.db > 0 && this.state.nev) {
      this.setState({
        cart: {
          items:
            [...this.state.cart.items,
            {
              name: this.state.nev,
              price: +this.state.ar,
              quantity: +this.state.db
            }
            ]
        }
      });
    } else {
      alert('Please fill all fields.');
    }
  }

  render() {
    return (
      <div>
        <form>
          <h1>Termék hozzáadása a kosárhoz</h1>
          <label htmlFor="input_nev">Termék neve: </label>
          <input type="text" name="input_nev" id="input_nev" placeholder="Név..." required onChange={e=>this.setState({nev: e.target.value})} /><br />
          <label htmlFor="input_ar">Ár: </label>
          <input type="number" name="input_ar" id="input_ar" value={this.state.ar} onChange={e=>this.setState({ar: +e.target.value})} /><br />
          <label htmlFor="input_db">Mennyiség: </label>
          <input type="number" name="input_db" id="input_db" value={this.state.db} onChange={e=>this.setState({db: +e.target.value})} required /><br />
          <input type="button" id="btn_submit" name="btn_submit" value="Hozzáadás a kosárhoz" onClick={this.handleButtonClick} />
        </form>
        <hr />
        <h3>A kosár tartalma</h3>

        {
          this.state.cart.items.length >= 1 ?
            <ul>
              {
                this.state.cart.items.map((item, idx) => <li key={idx}>
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