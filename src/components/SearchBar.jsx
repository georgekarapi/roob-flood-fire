import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect, useRef } from 'react';

const useStyles = makeStyles((theme) => ({
  search: {
    display: 'flex',
    width: '484px',
    borderRadius: '24px',
    border: '1px solid #d8d8d8',
    '&focus': {
      outline: 'none',
    },
    '&focus-within': {
      borderBottomLeftRadius: '0',
      borderBottomRightRadius: '0',
      borderColor: 'rgba(223,225,229,0)',
      boxShadow: '0 1px 6px 0 rgba(32,33,36,0.28)',
    },
    '&hover': {
      boxShadow: '0 1px 6px 0 rgba(32,33,36,0.28)',
      borderColor: 'rgba(223,225,229,0)',
    },
    '&input': {
      height: '32px',
      width: '100%',
      padding: '8px 12px',
      border: 'none',
      fontSize: '16px',
      borderRadius: '24px',
    },
  },
}));

let autoComplete;

const loadScript = (url, callback) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';

  if (script.readyState) {
    script.onreadystatechange = () => {
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
};

async function handlePlaceSelect(updateQuery) {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query);
  console.log(addressObject);
}

function handleScriptLoad(updateQuery, autoCompleteRef) {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    { types: ['(cities)'] },
  );
  autoComplete.setFields(['address_components', 'formatted_address']);
  autoComplete.addListener('place_changed', () => handlePlaceSelect(updateQuery));
}

const SearchBar = () => {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    loadScript(
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyCQWG-LcExyO1v7C51TM-otvBLwI9p0SyA&libraries=places',
      () => handleScriptLoad(setQuery, autoCompleteRef),
    );
  }, []);
  return (
    <div className={classes.search}>
      <input
        ref={autoCompleteRef}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Enter a City"
        value={query}
      />
    </div>
  );
};

export default SearchBar;
