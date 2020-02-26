import styled from 'styled-components'

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
    .nav-item {
        width: 100%;
        min-height: 50px;
        margin-bottom: 6px;
        border-radius: 4px;
    }
`
