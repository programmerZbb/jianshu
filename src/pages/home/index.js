import React, {Component} from 'react'
import {
    HomeWrapper,
    HomeWrapperLeft,
    HomeWrapperRight,
    ListWrapper,
    NavWrapper
} from './style'

class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {}
    }
    render () {
        return (
            <HomeWrapper>
                <HomeWrapperLeft>
                    <div className="banner">
                        <img alt="" src="https://upload.jianshu.io/admin_banners/web_images/4894/23ecc55accf5c6a6c9910be966c125853d1f04a5.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>
                    </div>
                    <ListWrapper>
                        <div className="list-item">
                            <div className="content">
                                <div className="title">
                                    你敢玩程序员的电脑吗？网友：不敢了，没有下次了！ 真香
                                </div>
                                <div className="content-detail">
                                    程序员是一个天天和电脑打交道的群体，程序员肯定是最了解电脑的群体了，在外人看来，程序员用电脑就是得心应手啊，那么程序员使用电脑和平常人有什么区别...
                                </div>
                            </div>
                            <div className="content-img">
                                <img alt="" src="https://upload-images.jianshu.io/upload_images/14212122-c28a36ebe9fdb951.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"></img>
                            </div>
                        </div>
                    </ListWrapper>
                </HomeWrapperLeft>
                <HomeWrapperRight>
                    <NavWrapper>
                        <div className="nav-item"></div>
                    </NavWrapper>
                </HomeWrapperRight>
            </HomeWrapper>
        )
    }
}

export default Home
