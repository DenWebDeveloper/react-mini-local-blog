import React, {Component as ReactComponent} from 'react';

export default (OriginalComponent) => class toggleOpen extends ReactComponent {
    state = {
        isOpen: false
    }

    render() {
        return (
            <OriginalComponent {...this.state} {...this.props} toggleOpen={this.toggleOpen}/>
        )
    }

    toggleOpen = (e) => {
        e.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}
