import React, { Fragment } from 'react'
import { HeaderWrapper, WidthLimit, Log, Container, WriteWrap, RegisterLink, HomeBtn, HomePic, HomeTxt, SearchWrap, LogInBtn } from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'

// 使用 react-redux 能报header 组件简化成无状态组件
const Header = (props) => {
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
                        <CSSTransition in={props.focused} timeout={500} classNames="search">
                            <SearchWrap>
                                <input placeholder="搜索" className="input-search" onFocus={props.inputFocus} onBlur={props.inputBlur}/>
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
        focused: state.focused
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        inputFocus () {
            const action = {
                type: 'search_focus',
                value: true
            }
            dispatch(action)
        },
        inputBlur () {
            const action = {
                type: 'search_focus',
                value: false
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
