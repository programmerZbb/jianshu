import React, { Fragment } from 'react'
import { HeaderWrapper, WidthLimit, Log, Container, WriteWrap, RegisterLink, HomeBtn, HomePic, HomeTxt, SearchWrap, LogInBtn, SearchList, SearchInfo } from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { 
    searchFocus,
    searchBlur,
    InitSearchLs,
    mouseInAction,
    mouseOutAction,
    getPage
 } from './actionsCreate'

// 使用 react-redux 能报header 组件简化成无状态组件
const Header = (props) => {
    let { focused, searchList, page, totalPage, inputFocus, inputBlur, mouseIn, handleMouseIn, handleMouseOut, getCurrentPage } = props
    const getSearchInfo = () => {
        const currentList = []
        const newList = searchList.toJS()
        if (newList.length !== 0) {
            for (let i = (page - 1) * 10; i < page * 10 && i < newList.length; i++) {
                currentList.push(<div className="list-item" key={newList[i]}>{ newList[i] }</div>)
            }
        }
        return (
        <SearchInfo onMouseEnter={() => { handleMouseIn() }} onMouseLeave={() => { handleMouseOut() }}>
            <div className="title-wrap">
                热门搜索
                <div className="switch-btn" onClick={() => { getCurrentPage(page, totalPage) }}>
                    <span className="refresh-btn">&#xe666;</span>
                    换一换
                </div>
            </div>
            <SearchList>
                {
                    // searchList.map(item => {
                    //     return (<div className="list-item" key={item}>{ item }</div>)
                    // })
                    currentList
                }
            </SearchList>
        </SearchInfo>
    )}
    return (
        <Fragment>
            <HeaderWrapper>
                <WidthLimit>
                    <Log></Log>
                    <Container>
                        <HomeBtn>
                            <HomePic></HomePic>
                            <HomeTxt>首页</HomeTxt>
                        </HomeBtn>
                        <HomeBtn className="download-box">
                            <HomePic className='down-pic'></HomePic>
                            <HomeTxt className="down-txt">下载App</HomeTxt>
                        </HomeBtn>
                        <CSSTransition in={focused} timeout={500} classNames="search">
                            <SearchWrap>
                                <input placeholder="搜索" className="input-search" onFocus={inputFocus} onBlur={inputBlur}/>
                                {
                                    focused || mouseIn
                                    ?
                                    getSearchInfo()
                                    :
                                    ""
                                }
                            </SearchWrap>
                        </CSSTransition>
                        <LogInBtn>登陆</LogInBtn>
                    </Container>
                    <WriteWrap>写文章</WriteWrap>
                    <RegisterLink>注册</RegisterLink>
                </WidthLimit>
            </HeaderWrapper>
        </Fragment>
    )
}
const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        searchList: state.getIn(['header', 'searchList']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        inputFocus () {
            dispatch(InitSearchLs())
            dispatch(searchFocus())
        },
        inputBlur () {
            dispatch(searchBlur())
        },
        handleMouseIn () {
            dispatch(mouseInAction())
        },
        handleMouseOut () {
            dispatch(mouseOutAction())
        },
        getCurrentPage (page, totalPage) {
            console.log(page, totalPage)
            if (page < totalPage) {
                dispatch(getPage(page + 1))
            } else {
                dispatch(getPage(1))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
