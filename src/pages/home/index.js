import React, {Component} from 'react'
import { connect } from 'react-redux'
import {
    getList
} from './store/actionCreator'
import {
    HomeWrapper,
    HomeWrapperLeft,
    HomeWrapperRight,
    ListWrapper,
    NavWrapper,
    NavItem,
    RecommendWrapper,
    RecommendItem
} from './style'

class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {}
    }
    
    componentDidMount () {
        this.props.getHomeData()
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
                                    <a href="/" target="_blank">
                                        你敢玩程序员的电脑吗？网友：不敢了，没有下次了！ 真香
                                    </a>
                                </div>
                                <div className="content-detail">
                                    程序员是一个天天和电脑打交道的群体，程序员肯定是最了解电脑的群体了，在外人看来，程序员用电脑就是得心应手啊，那么程序员使用电脑和平常人有什么区别...
                                </div>
                            </div>
                            <div className="content-img">
                                <img alt="" src="https://upload-images.jianshu.io/upload_images/14212122-c28a36ebe9fdb951.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"></img>
                            </div>
                        </div>
                        <div className="list-item">
                            <div className="content">
                                <div className="title">
                                    <a href="/home" target="_blank">
                                        你敢玩程序员的电脑吗？网友：不敢了，没有下次了！ 真香
                                    </a>
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
                        <NavItem></NavItem>
                    </NavWrapper>
                    <RecommendWrapper>
                        <div className="recom-title">
                            <div className="title-box">推荐作者</div>
                            <div className="refresh-recom"><span className="refresh-btn">&#xe666;</span> 换一批</div>
                        </div>
                        <RecommendItem>
                            <div className="author-img">
                                <img src="https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt=""></img>
                            </div>
                            <div className="author-info">
                                <div className="author-name">隔夜说</div>
                                <div className="author-create">写了1429.3k字 · 29.4k喜欢</div>
                            </div>
                            <div className="follow-btn">+ 关注</div>
                        </RecommendItem>
                    </RecommendWrapper>
                </HomeWrapperRight>
            </HomeWrapper>
        )
    }
}

const mapStateToProps = (state) => ({

}) 
const mapDispatchToProps = (dispatch) => ({
    getHomeData () {
        dispatch(getList())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
