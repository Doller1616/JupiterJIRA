import { createSlice } from "@reduxjs/toolkit";
// Theme Reducer
const theme = createSlice({
    name: 'theme',
    initialState: {
        isDark: false,
        dark: {
            token: {
                colorPrimary: "#00afff",
                colorBgContainer: '#3e3d40',
                colorText: '#999999'
            },
            rootBgColor: '#1d1d1f',
        },
        light: {
            token: {},
            rootBgColor: '#f2f2f2',
        }
    },
    reducers: {
        toggleTheme: (state) => {
            state.isDark = !state.isDark
        }
    }
});

export const { toggleTheme } = theme.actions;
export default theme.reducer;
