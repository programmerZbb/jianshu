import React, {Component} from 'react'
import { connect } from 'react-redux'
import {
    getList, updateHomeLs
} from './store/actionCreator'
import {
    HomeWrapper,
    HomeWrapperLeft,
    HomeWrapperRight,
    ListWrapper,
    NavWrapper,
    NavItem,
    RecommendWrapper,
    RecommendItem,
    ShowMoreBtn
} from './style'

class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {}
    }
    
    componentDidMount () {
        this.props.getHomeData()
    }

    getContentList () {
        const { contentList } = this.props
        const newList = contentList.toJS()
        return newList.map(item => (
            <div className="list-item" key={item.id}>
                <div className="content">
                    <div className="title">
                        <a href="/" target="_blank">
                            { item.title }
                        </a>
                    </div>
                    <div className="content-detail">
                        { item.content }
                    </div>
                </div>
                <div className="content-img">
                    <img alt="" src={item.cover}></img>
                </div>
            </div>
        ))
    }

    getRecomendLs () {
        const {authorList} = this.props
        const newAuthorLs = authorList.toJS()
        return newAuthorLs.map(item => (
            <RecommendItem key={item.id}>
                <div className="author-img">
                    <img src={item.avatar_source} alt=""></img>
                </div>
                <div className="author-info">
                    <div className="author-name">{ item.nickname }</div>
                    <div className="author-create">写了{ item.total_wordage }k字 · { item.total_likes_count / 1000 }k喜欢</div>
                </div>
                <div className="follow-btn">+ 关注</div>
            </RecommendItem>
        ))
    }

    handleShowMore () {
        this.props.upContentLs()
    }

    render () {
        return (
            <HomeWrapper>
                <HomeWrapperLeft>
                    <div className="banner">
                        <img alt="" src="https://upload.jianshu.io/admin_banners/web_images/4894/23ecc55accf5c6a6c9910be966c125853d1f04a5.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>
                    </div>
                    <ListWrapper>
                        {
                            this.getContentList()
                        }
                    </ListWrapper>
                    <ShowMoreBtn onClick={() => { this.handleShowMore() }}>加载更多</ShowMoreBtn>
                </HomeWrapperLeft>
                <HomeWrapperRight>
                    <NavWrapper>
                        {
                            this.props.navList.toJS().map(item => (
                                <NavItem key={item.id} href={item.link} {...item}></NavItem>
                            ))
                        }
                    </NavWrapper>
                    <RecommendWrapper>
                        <div className="recom-title">
                            <div className="title-box">推荐作者</div>
                            <div className="refresh-recom"><span className="refresh-btn">&#xe666;</span> 换一批</div>
                        </div>
                        {
                            this.getRecomendLs()
                        }
                    </RecommendWrapper>
                </HomeWrapperRight>
            </HomeWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    contentList: state.getIn(['home', 'contentList']),
    navList: state.getIn(['home', 'navList']),
    authorList: state.getIn(['home', 'authorList'])
}) 
const mapDispatchToProps = (dispatch) => ({
    getHomeData () {
        dispatch(getList())
    },
    upContentLs () {
        dispatch(updateHomeLs())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
