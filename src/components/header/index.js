import React, { Fragment } from 'react'
import { HeaderWrapper, WidthLimit, Log, Container, WriteWrap, RegisterLink, HomeBtn, HomePic, HomeTxt } from './style'

export default (props) => {
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
                    </Container>
                    <WriteWrap>写文章</WriteWrap>
                    <RegisterLink>注册</RegisterLink>
                </WidthLimit>
            </HeaderWrapper>
        </Fragment>
    )
}
