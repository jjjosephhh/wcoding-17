import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="card">
        <div className="card-content">
          <div className="content">
            <input
              className="input is-primary"
              type="text"
              placeholder="Enter something..."
            />

            <br />
            <br />

            <div className="field has-addons">
              <p className="control">
                <button className="button">
                  <span>a</span>
                </button>
              </p>
              <p className="control">
                <button className="button">
                  <span>s</span>
                </button>
              </p>
              <p className="control">
                <button className="button">
                  <span>d</span>
                </button>
              </p>
              <p className="control">
                <button className="button">
                  <span>f</span>
                </button>
              </p>
            </div>

            <br />
            <br />

            <button className="button is-link">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
