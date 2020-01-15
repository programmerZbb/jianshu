import React, { Component, Fragment } from 'react'
import { HeaderWrapper, WidthLimit, Log, Container, WriteWrap, RegisterLink, HomeBtn, HomePic, HomeTxt, SearchWrap } from './style'

class Header extends Component {
    handleClick () {
        console.log('测试')
    }
    render () {
        return (
            <Fragment>
                <HeaderWrapper>
                    <WidthLimit>
                        <Log></Log>
                        <Container>
                            <HomeBtn onClick={this.handleClick}>
                                <HomePic></HomePic>
                                <HomeTxt>首页</HomeTxt>
                            </HomeBtn>
                            <HomeBtn className="download-box">
                                <HomePic className='down-pic'></HomePic>
                                <HomeTxt className="down-txt">下载App</HomeTxt>
                            </HomeBtn>
                            <SearchWrap className="selected">
                                <input placeholder="搜索" />
                            </SearchWrap>
                        </Container>
                        <WriteWrap>写文章</WriteWrap>
                        <RegisterLink>注册</RegisterLink>
                    </WidthLimit>
                </HeaderWrapper>
            </Fragment>
        )
    }
}

export default Header
