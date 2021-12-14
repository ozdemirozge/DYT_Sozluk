import React, { Component } from "react";
import { View } from "react-native";
import helpers from "../helpers";
import { lightTheme, darkTheme } from './themes'

const Context = React.createContext();

export class ThemeProvider extends Component {
    state = {
        theme: lightTheme,
        updateTheme: (theme) => {
            helpers.setStorage('darkTheme', theme == darkTheme ? true : false).then(previousState => {
                this.setState({ theme: theme })
            });
        }
    }
    componentDidMount() {
        helpers.getStroge('darkTheme').then(previousState => {
            if (previousState) {
                this.state.updateTheme(darkTheme)
            }
        });
    }
static getCurrentTheme(){
    return this.state.theme
}
    render() {
        const { theme } = this.state
        return (
            <Context.Provider value={this.state} theme={theme} >
           
                {this.props.children}
           
            </Context.Provider>
        )
    }
}

export const AppConsumer = Context.Consumer;
export const AppContext = Context;