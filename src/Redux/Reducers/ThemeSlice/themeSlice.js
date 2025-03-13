import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: { theme: 'light' },
    reducers: {
        themeChanger: (state) => {
            if (state.theme === 'light') {
                state.theme = 'dark';
            } else {
                state.theme = 'light';
            }
        }
    }
});

export const { themeChanger } = themeSlice.actions;

export default themeSlice.reducer;
