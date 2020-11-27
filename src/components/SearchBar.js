import React, { useState, useEffect, useRef } from "react";

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

let autoComplete;

const loadScript = (url, callback) => {
    let script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) {
        script.onreadystatechange = function () {
            if (script.readyState === "loaded" || script.readyState === "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        script.onload = () => callback();
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef) {
    autoComplete = new window.google.maps.places.Autocomplete(
        autoCompleteRef.current,
        { types: ["(cities)"] }
    );
    autoComplete.setFields(["address_components", "formatted_address"]);
    autoComplete.addListener("place_changed", () =>
        handlePlaceSelect(updateQuery)
    );
}

async function handlePlaceSelect(updateQuery) {
    const addressObject = autoComplete.getPlace();
    const query = addressObject.formatted_address;
    updateQuery(query);
    console.log(addressObject);
}

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const autoCompleteRef = useRef(null);

    useEffect(() => {
        loadScript(
            `https://maps.googleapis.com/maps/api/js?key=AIzaSyCQWG-LcExyO1v7C51TM-otvBLwI9p0SyA&libraries=places`,
            () => handleScriptLoad(setQuery, autoCompleteRef)
        );
    }, []);
    return (
        <Grid container>
            <Grid item xs={6} sm={3}>
                <TextField
                    ref={autoCompleteRef}
                    onChange={event => setQuery(event.target.value)}
                    placeholder="Search for a City"
                    value={query}
                    margin="normal"
                    variant="outlined"
                    InputProps={{ type: 'search' }}
                />
            </Grid>
        </Grid>
    );
};

export default SearchBar;