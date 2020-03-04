import React, { Component } from 'react'

class Detail extends Component {
    constructor (props) {
        super(props)
        this.state = {}
    }
    componentDidMount () {
    }
    render () {
        console.log(this.props, '----测试')
        return (
            <div>
                详情页面
                <div onClick={() => { this.handleClick() }}>按钮</div>
            </div>
        )
    }
    handleClick () {
        this.props.history.push({
            pathname: '/home',
        })
    }
}

export default Detail