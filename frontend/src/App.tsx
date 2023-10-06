import React from 'react';
import logo from './logo.svg';
import './App.css';
import DummyComponent from "./DummyComponent";
import PlacesAutoComplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

function App() {
  const [address, setAddress] = React.useState<string>('');

  const handleSelect = async (value: string) => {}

  return (
    <div className="App">
      <PlacesAutoComplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >{({ getInputProps, suggestions, getSuggestionItemProps, loading}) => (
          <div>
            <input {...getInputProps({placeholder: "Type address"})} />
          </div>
      )}
      </PlacesAutoComplete>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <DummyComponent thing={'thingy!'} />
      </header>
    </div>
  );
}

export default App;
