import React, { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

import Grid from '@material-ui/core/Grid';

const SearchBar = () => {
    const [value, setValue] = useState(null);
    return (
        <Grid container>
            <Grid item xs={6} sm={3}>
                <GooglePlacesAutocomplete
                    apiKey="AIzaSyCQWG-LcExyO1v7C51TM-otvBLwI9p0SyA"
                    selectProps={{
                        value,
                        onChange: setValue,
                    }}
                />
            </Grid>
        </Grid>
    );
};

export default SearchBar;