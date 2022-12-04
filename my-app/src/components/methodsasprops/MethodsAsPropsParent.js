import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild'

class MethodsAsPropsParent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
        }
    }

    // handleSignIn = () => {
    //     this.setState({
    //         isLoggedIn : true
    //     })
    //     console.log(this)
    // }

    handleAccount= () => {
        this.setState((prevState) => ({
            isLoggedIn : !prevState.isLoggedIn 
        }))
    }


    render() {
        return (
            <div>
                <MethodsAsPropsChild  
                    isLoggedIn={this.state.isLoggedIn}
                    // handleSignIn={this.handleSignIn}
                    // handleSignout={this.handleSignout}
                    handleAccount={this.handleAccount}
                />
            </div>
        )
    }
}

export default MethodsAsPropsParent