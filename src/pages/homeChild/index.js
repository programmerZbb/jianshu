import React, { PureComponent } from 'react'

class ChildHome extends PureComponent {
    constructor (props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                首页子组件
            </div>
        )
    }
}

export default ChildHome
