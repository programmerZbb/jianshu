import styled from 'styled-components'
import logPic from '../../assets/img/logo-jianshu.png'
import hometPic from '../../assets/img/home.svg'

export const HeaderWrapper = styled.div`
    height: 56px;
    border: 1px solid #f0f0f0;
`

export const WidthLimit = styled.div`
    min-width: 926px;
    max-width: 1440px;
    height: 100%;
    margin: 0 auto;
    position: relative;
    &:: after {
        display: block;
        clear: both;
        visibility: hidden;
        height: 0;
        line-height: 0;
    }
`
export const Log = styled.div`
    background: url(${logPic}) no-repeat center;
    background-size: 100px 56px;
    height: 100%;
    width: 100px;
    float: left;
`
export const Container = styled.div`
    height: 100%;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    &:: after {
        display: block;
        clear: both;
        visibility: hidden;
        height: 0;
        line-height: 0;
    }
    @media screen and (min-width: 1132px) {
        width: 960px;
    }
    @media screen and (max-width: 1132px) {
        width: 750px;
    }
`
export const WriteWrap = styled.a`
    float: right;
    width: 100px;
    height: 40px;
    line-height: 24px;
    margin: 8px 12px 0;
    border-radius: 20px;
    font-size: 15px;
    color: #fff;
    line-height: 40px;
    text-align: center;
    background-color: #ea6f5a;
    cursor: pointer;
`
export const RegisterLink = styled.a`
    float: right;
    height: 38px;
    padding: 0 25px;
    line-height: 24px;
    margin: 8px 12px 0;
    border-radius: 20px;
    font-size: 15px;
    color: #ea6f5a;
    line-height: 38px;
    text-align: center;
    cursor: pointer;
    border: 1px solid #ea6f5a; 
`
export const HomeBtn = styled.a`
    height: 56px;
    line-height: 26px;
    padding: 15px;
    overflow: hidden;
    width: 59px;
`
export const HomePic = styled.span`
    width: 26px;
    height: 20px;
    float: left;
    background: url(${hometPic}) no-repeat center;
    background-size: 20px 20px;
`
export const HomeTxt = styled.span`
    width: 26px;
    height: 20px;
    float: right;
    color: #ea6f5a;
`