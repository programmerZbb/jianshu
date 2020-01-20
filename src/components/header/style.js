import styled from 'styled-components'
import logPic from '../../assets/img/logo-jianshu.png'
import hometPic from '../../assets/img/home.svg'
import downPic from '../../assets/img/download.svg'
import search from '../../assets/img/search.svg'
import searchSelected from '../../assets/img/search-selected.svg'

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
    float: left;
    height: 56px;
    line-height: 26px;
    padding: 15px;
    overflow: hidden;
    width: 89px;
    height: 56px;
    box-sizing: border-box;
    cursor: pointer;
    &.download-box {
        width: 122px;
        margin-right: 10px;
    }
`
export const HomePic = styled.span`
    width: 26px;
    height: 26px;
    float: left;
    background: url(${hometPic}) no-repeat center;
    background-size: 20px 20px;
    background-position: 0 2px;
    &.down-pic {
        background: url(${downPic}) no-repeat center;
        background-size: 24px 24px;
        background-position: 0 2px;
    }
`
export const HomeTxt = styled.span`
    height: 20px;
    float: right;
    color: #ea6f5a;
    &.down-txt {
        color: #8a8a8a;
    }
`
export const SearchWrap = styled.div`
    float: left;
    box-sizing: border-box;
    height: 100%;
    width: 240px;
    padding-top: 9px;
    position: relative;
    &:: after {
        content: "";
        position: absolute;
        width: 18px;
        height: 18px;
        background: url(${search}) no-repeat center;
        background-size: 18px 18px;
        right: 14px;
        top: 19px;
    }
    &.search-enter, &.search-exit {
        transition: all .5s ease;
    }
    &.search-enter-active, &.search-enter-done {
        width: 340px;
        &:: after {
            content: "";
            position: absolute;
            width: 30px;
            height: 30px;
            background: url(${searchSelected}) no-repeat center;
            background-size: 16px 16px;
            right: 4px;
            top: 13px;
            border-radius: 50%;
            background-color: #8a8a8a;
        } 
    }
    >input {
        border: none;
        box-sizing: border-box;
        width: 100%;
        height: 38px;
        border-radius: 19px;
        padding-right: 40px;
        &: focus {
            outline: none;
        }
        padding-left: 24px;
        font-size: 14px;
        &::-webkit-input-placeholder {
            color: #999;
            font-size: 14px;
        }
        background-color: #eee;
        &.input-search {
            transition: all .5s;
        }
    }
`
export const LogInBtn = styled.a`
    float: right;
    height: 100%;
    width: 56px;
    line-height: 56px;
    text-align: center;
    color: #969696;
    font-size: 14px;
    cursor: pointer;
`
export const SearchList = styled.div`
    position: absolute;
    left: 10px;
    top: 49px;
    width: 320px;
    box-sizing: border-box;
    height: 200px;
    box-shadow: 0 0 5px #bdbcbc;
    background-color: #fff;
    padding: 10px;
    .list-item {
        height: 20px;
        line-height: 20px;
        padding: 0px 10px;
        font-size: 14px;
        color: #999;
        border: 1px solid #ccc;
        display: inline-block;
        margin: 0 10px 10px;
    }
`