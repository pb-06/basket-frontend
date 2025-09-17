import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <form>
          <h1>Termék hozzáadása a kosárhoz</h1>
          <label htmlFor="input_nev">Termék neve: </label>
          <input type="text" name="input_nev" id="input_nev" placeholder="Név..." /><br />
          <label htmlFor="input_ar">Ár: </label>
          <input type="number" name="input_ar" id="input_ar" value={0} /><br />
          <label htmlFor="input_db">Mennyiség: </label>
          <input type="number" name="input_db" id="input_db" value={0} /><br />
          <input type="button" id="btn_submit" name="btn_submit" value="Hozzáadás a kosárhoz" />
        </form>
        <hr />
        <h3>A kosár tartalma</h3>
        <ul></ul>
      </div>
    )
  }
}