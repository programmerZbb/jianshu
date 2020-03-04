import styled from 'styled-components'
const itemBg = ''

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`
export const HomeWrapperLeft = styled.div`
    float: left;
    width: 640px;
    padding: 30px 0 0 15px;
    .banner {
        cursor: pointer;
        img {
            width: 627px;
            height: 270px;
        }
        margin-bottom: 35px;
    }
`
export const ListWrapper = styled.div`
    .list-item {
        overflow: hidden;
        padding: 15px 2px 20px 0;
        .content {
            float: left;
            width: 458px;
            .title {
                font-size: 18px;
                font-weight: 700;
                line-height: 1.5;
                &>a {
                    text-decoration: none;
                    color: #000;
                    &:visited {
                        color: #969696;
                    }
                }
            }
            .content-detail {
                margin: 0 0 8px;
                font-size: 13px;
                line-height: 24px;
                color: #999;
            }
        }
        .content-img {
            float: right;
            img {
                width: 150px;
                height: 100px;
            }
        }
    }
`
export const HomeWrapperRight = styled.div`
    float: right;
    width: 280px;
    padding-top: 30px;
`
export const NavWrapper = styled.div`
    margin-top: -4px;
    padding-bottom: 4px;
    min-height: 228px;
`
export const NavItem = styled.div`
    width: 100%;
    min-height: 50px;
    cursor: pointer;
    margin-bottom: 6px;
    border-radius: 4px;
    background: url(${itemBg}) no-repeat center bottom;
    background-size: auto 50px;
`
export const RecommendWrapper = styled.div`
    width: 100%;
    .recom-title {
        color: #969696;
        font-size: 14px;
        overflow: hidden;
        margin-bottom: 5px;
        .title-box {
            float: left;
        }
        .refresh-recom {
            float: right;
            cursor: pointer;
            .refresh-btn {
                font-family: "refresh" !important;
                font-size: 16px;
                font-style: normal;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }
        }
    }
`
export const RecommendItem = styled.div`
    margin-top: 10px;
    .author-img {
        width: 48px;
        height: 48px;
        display: inline-block;
        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
    .author-info {
        display: inline-block;
        width: 179px;
        padding-left: 10px;
        vertical-align: top;
        .author-name {
            font-size: 14px;
            color: #000;
            line-height: 25px;
        }
        .author-create {
            font-size: 12px;
            color: #969696;
            line-height: 20px;
            margin-top: 5px;
        }
    }
    .follow-btn {
        display: inline-block;
        vertical-align: top;
        color: #42c02e;
        font-size: 14px;
        line-height: 20px;
    }
`
