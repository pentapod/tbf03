import React from 'react';
import Isvg from 'react-inlinesvg';
import {ShareButtons, ShareCounts, generateShareIcon} from 'react-share';
import styled, { css } from 'styled-components';

import Body from './../components/body';
import { Button, ButtonInverse } from './../components/lib/button';

const globalColors = {
  primary: '#7b7b7b',
  secondary: '#fff41a',
  bg: '#D9D9D9',
  text: '#333333',
  secondaryText: '#2f2400',
};

const bodyProps = {
  siteName: '技術書典3新刊「やっていく合同誌」 .∵. pentapod',
  title: 'C92新刊「やっていく合同誌」 .∵. pentapod',
  description: '旬の技術、揃ってます。 技術書典3新刊「やっていく合同誌」',
  url: 'https://pentapod.github.io/tbf03',
  image: 'https://pentapod.github.io/tbf03/static/og.png',
  favicon: 'https://pentapod.github.io/tbf03/static/favicon.png',
  fbAppId: '513983385471617',
};
const shareText = bodyProps.description + ' ' + bodyProps.url;

const urls = {
  catalog: 'https://techbookfest.org/event/tbf03/circle/5184322684321792',
  booth: '',
  twitterShare: 'https://twitter.com/intent/tweet'
    + `?text=${encodeURIComponent(shareText)}`,
  facebookShare: 'https://www.facebook.com/dialog/feed'
    + `?app_id=${encodeURIComponent(bodyProps.fbAppId)}`
    + `&display=popup&caption=${encodeURIComponent(bodyProps.description)}`
    + `&link=${encodeURIComponent(bodyProps.url)}`
    + `&redirect_uri=${encodeURIComponent('https://www.facebook.com/')}`,
  hatebuShare: `http://b.hatena.ne.jp/entry/${bodyProps.url}`,
};

const {FacebookShareButton, TwitterShareButton} = ShareButtons;
const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');

const Global = styled.div`
  transition: opacity .5s linear .3s;
  opacity: 0;

  &.loaded {
    opacity: 1;
  }
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    this.setState({
      loaded: true,
    });
  }

  render() {
    return (
      <Body {...bodyProps}>
        <Global className={this.state.loaded? 'loaded' : 'loading'}>
          <div className="root">
            <div className="root-content">
              <header>
                <div className="brand-container">
                  <a href="https://pentapod.github.io">
                    <div className="logo">
                      <Isvg src='/static/logo.svg'></Isvg>
                    </div>
                    <div className="brand">
                      <Isvg src='/static/brand.svg'>pentapod</Isvg>
                    </div>
                  </a>
                </div>

                <span className="event">技術書典3 新刊</span>
                <h1 className="type title">やっていく<br/>合同誌</h1>
                <div className="illust-container">
                  <img src="static/top_illust.png" alt="top_illust.png"/>
                </div>

                <div className="credit">
                  Illust:&nbsp;
                  <a href="https://twitter.com/AzukiLib">小枝あずき</a>
                </div>

                <div className="share-container">
                  <div className="buttons">
                    <TwitterShareButton
                      url={bodyProps.url}
                      title={bodyProps.description}
                      className="tw-share">
                      <TwitterIcon size={48} round />
                    </TwitterShareButton>
                    <FacebookShareButton
                      url={bodyProps.url}
                      title={bodyProps.title}
                      description={bodyProps.description}
                      picture={bodyProps.image}
                      className="fb-share">
                      <FacebookIcon size={48} round />
                    </FacebookShareButton>
                  </div>
                </div>
              </header>

              <section className="lead type ribbon">
                <h2>旬の技術、 揃ってます。</h2>
              </section>

              <div className="detail">
                <section className="desc">
                  <div>
                    「やっていく」こととは、新しいことに挑戦する心意気。<br/>
                    4人の開発者が「最近知った新しい技術」をテーマに、<br/>
                    やっていきました。
                  </div>
                </section>

                <section className="contents">
                  <h3>掲載コンテンツ</h3>

                  <ul>
                    <li>
                      <span className="type yatteiku">やっていく</span>
                      <h3>deeplearn.js</h3>
                      <div className="contents_author">
                        written by&nbsp;
                        <a href="https://github.com/spring-raining">spring_raining</a>
                      </div>
                    </li>
                    <li>
                      <span className="type yatteiku">やっていく</span>
                      <h3>Nuxt.js</h3>
                      <div className="contents_author">
                        written by&nbsp;
                        <a href="https://github.com/potato4d">potato4d</a>
                      </div>
                    </li>
                    <li>
                      <span className="type yatteiku">やっていく</span>
                      <h3>chromy</h3>
                      <div className="contents_author">
                        written by&nbsp;
                        <a href="https://github.com/abcang">abcang</a>
                      </div>
                    </li>
                    <li>
                      <span className="type yatteiku">やっていく</span>
                      <h3>Cassandra</h3>
                      <div className="contents_author">
                        written by&nbsp;
                        <a href="https://github.com/kamijin-fanta">kamijin_fanta</a>
                      </div>
                    </li>
                  </ul>
                </section>
              </div>

              <section className="spec">
                <div className="sample"></div>
                <img className="circle-pos" src="static/circle_pos.svg" alt="circle_pos.svg"/>
                <div className="spec-container">
                  <table>
                    <tbody>
                      <tr>
                        <th>タイトル</th>
                        <td>
                          やっていく合同誌<br/>
                          ISDN <a href="https://isdn.jp/2784523827020">278-4-523827-02-0</a>
                        </td>
                      </tr>
                      <tr>
                        <th>頒布場所</th>
                        <td>
                          <a href="https://techbookfest.org/event/tbf03">技術書典 3</a><br/>
                          2017年10月22日(金) 11:00〜17:00
                          at <a href="https://www.google.co.jp/maps/place/%E3%82%A2%E3%82%AD%E3%83%90%E3%83%BB%E3%82%B9%E3%82%AF%E3%82%A8%E3%82%A2/@35.700523,139.7703178,17z/data=!3m1!4b1!4m5!3m4!1s0x60188c1d85c37633:0x2a3129fcbd041f96!8m2!3d35.700523!4d139.7725065">アキバ・スクエア</a><br/>
                          <strong>う-16</strong>&nbsp;
                          <a href={urls.catalog}>
                            <Button small theme={{ color: globalColors.text }}>カタログを見る</Button>
                          </a><br/>
                        </td>
                      </tr>
                      <tr>
                        <th>頒布価格</th>
                        <td>
                          B5冊子版&nbsp;<strong>¥500</strong><br/>
                          電子版&nbsp;<strong>¥300</strong>&nbsp;<small>BOOTHにて発売予定</small>
                          {/*<a href={urls.booth} className="btn" {...button.small(globalColors.primary)}>電子版を購入</a>*/}<br/>
                          冊子版購入者は電子版が<strong>¥0!!!</strong>
                        </td>
                      </tr>
                      <tr>
                        <th>仕様</th>
                        <td>B5 モノクロ 40ページ</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="c92">
                    <a href="https://pentapod.github.io/c92"><img src="static/c92_cover.jpg" /></a>
                    <div className="description">
                      C92新刊「<a href="https://pentapod.github.io/c92">CSSではじめる同人誌制作</a>」も頒布予定！<br/>
                      数は少なめなのでお早めに…
                    </div>
                  </div>
                </div>
              </section>

              <section className="share ribbon">
                <h3>このページを共有</h3>
                <div className="buttons">
                  <a href={urls.catalog}>
                    <ButtonInverse theme={{ color: '#4caf50', hoverColor: '#319235' }} style={{ width: '100%'}}>
                      技術書典カタログ<span className="long">でお気に入りに追加</span>
                    </ButtonInverse>
                  </a>
                  <a href={urls.twitterShare}>
                    <ButtonInverse theme={{ color: '#55acee', hoverColor: '#3b8dcc' }} style={{ width: '100%'}}>
                      Twitter<span className="long">でツイート</span>
                    </ButtonInverse>
                  </a>
                  <a href={urls.facebookShare}>
                    <ButtonInverse theme={{ color: '#365899', hoverColor: '#1b386f' }} style={{ width: '100%'}}>
                      Facebook<span className="long">でシェア</span>
                    </ButtonInverse>
                  </a>
                  <a href={urls.hatebuShare}>
                    <ButtonInverse theme={{ color: '#008fde', hoverColor: '#006fad' }} style={{ width: '100%'}}>
                      はてなブックマーク<span className="long">に登録</span>
                    </ButtonInverse>
                  </a>
                </div>
              </section>

              <footer>
                <div className="brand-container">
                  <a href="https://pentapod.github.io">
                    <div className="logo"
                          style={{ width: 25 }}
                          >
                      <Isvg src='/static/logo.svg'></Isvg>
                    </div>
                    <div className="brand"
                          style={{ width: 100 }}
                          >
                      <Isvg src='/static/brand.svg'>pentapod</Isvg>
                    </div>
                  </a>
                </div>
              </footer>
            </div>
          </div>
        </Global>

        <style jsx global>{`
          @font-face {
            font-family: "NotoSansCJKjp-Jxck";
            font-style: normal;
            font-weight: 400;
            src: local("NotoSansCJKjp-Bold.otf"),
                local("NotoSansJP-Bold.otf"),
                url("static/fonts/NotoSansCJKjp-Jxck-Regular.woff2") format("woff2"),
                url("static/fonts/NotoSansCJKjp-Jxck-Regular.woff") format("woff");
          }
          @font-face {
            font-family: "NotoSansCJKjp-Jxck";
            font-style: normal;
            font-weight: 700;
            src: local("NotoSansCJKjp-Bold.otf"),
                local("NotoSansJP-Bold.otf"),
                url("static/fonts/NotoSansCJKjp-Jxck-Bold.woff2") format("woff2"),
                url("static/fonts/NotoSansCJKjp-Jxck-Bold.woff") format("woff");
          }
          body {
            margin: 0;
            padding: 0;
            color: ${globalColors.text};
            background-color: #fff;
            font-size: 16px;
            font-family: "Noto Sans","Noto Sans CJK JP","NotoSansCJKjp-Jxck",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
            font-weight: 400;
            word-spacing: 0.2em;
            line-height: 1.8;
            line-break: strict;
            overflow-x: hidden;
          }
          @media (max-width: 767px) {
            body {
              font-size: 13px;
            }
          }
          p {
            margin: 1em 0;
          }
          a {
            color: #2a5ad6;
          }
          a:hover {
            color: #1740ab;
          }
          section {
            position: relative;
          }
          h1, h2, h3, h4 {
            margin: 0;
          }
          h1  { font-size: 2.0em; }
          h2  { font-size: 1.6em; }
          h3  { font-size: 1.3em; }
          h4  { font-size: 1.1em; }
          ul, ol {
            padding-left: 1em;
          }
          header .tw-share, header .fb-share {
            display: inline-block;
            cursor: pointer;
            margin-right: 18px;
          }
          .type {
            font-family: "dnp-shuei-gothic-gin-std", sans-serif;
            font-feature-settings: 'palt', 'pwid';
            transform: scale(0.88, 1);
          }
        `}</style>

        <style jsx>{`
          .root {
            position: relative;
            margin: 32px auto 0;
            width: calc(100% - 64px);
            max-width: 1080px;
          }
          .root-content {
            margin-top: 32px;
            padding: 0 72px;
            background-color: ${globalColors.bg};
            background: linear-gradient(90deg, #e0e0e0, #cfcfcf);
          }
          .root-content::before,
          .root-content::after {
            content: '';
            position: absolute;
            top: -48px;
            width: 96px;
            height: 96px;
            background-color: #ffffff;
            border-radius: 50%;
          }
          .root-content::before {
            right: -48px;
          }
          .root-content::after {
            left: -48px;
          }
          @media (max-width: 767px) {
            .root-content {
              padding: 0 36px;
            }
          }
          @media (max-width: 540px) {
            .root {
              margin: 10px auto 0;
              width: calc(100% - 20px);
            }
            .root-content {
              margin-top: 10px;
              padding: 0 10px;
            }
          }

          header {
            position: relative;
            height: 60vw;
            margin: 0 -72px;
            max-height: 686px;
          }
          header .brand-container {
            position: absolute;
            left: 72px;
            top: 25%;
          }
          header .logo {
            display: inline-block;
            width: 30px;
            margin-right: 10px;
            fill: #7b7b7b;
          }
          header .brand {
            display: inline-block;
            width: 120px;
            fill: #7b7b7b;
          }
          header .event {
            position: absolute;
            left: 72px;
            top: 29%;
            color: #7b7b7b;
            font-size: 28px;
            font-weight: 600;
          }
          header h1.title {
            position: absolute;
            left: 8%;
            top: 36%;
            color: #fff;
            font-size: 108px;
            font-weight: 400;
            line-height: 108px;
            letter-spacing: -0.1rem;
          }
          header .illust-container {
            position: absolute;
            width: 70%;
            top: -15%;
            right: -7%;
          }
          header .illust-container img {
            width: 100%;
          }
          header .share-container {
            position: absolute;
            left: 72px;
            bottom: 20px;
          }
          header .credit {
            position: absolute;
            bottom: 20px;
            right: 16px;
          }
          @media (max-width: 920px) and (min-width: 768px) {
            header .brand-container,
            header .event {
              left: 36px;
            }
            header h1.title {
              left: 0;
            }
          }
          @media (max-width: 767px) {
            header h1.title {
              font-size: 72px;
              line-height: 72px;
            }
            header .brand-container {
              top: 28%;
            }
            header .logo {
              width: 20px;
            }
            header .brand {
              width: 80px;
            }
            header .event {
              top: 32%;
              font-size: 18px;
            }
          }
          @media (max-width: 540px) {
            header {
              height: 110vw;
            }
            header .brand-container {
              top: 9%;
              left: 20%;
            }
            header .event {
              top: 12%;
              left: 20%;
            }
            header h1.title {
              top: 16%;
            }
            header .illust-container {
              width: 70%;
              right: 0;
              top: 15%;
            }
          }

          .ribbon {
            position: relative;
            margin: 0 calc(-50vw - 72px) 58px;
            padding: 20px calc(50vw + 72px);
            background-color: ${globalColors.secondary};
            color: ${globalColors.secondaryText};
            box-shadow: 0 12px 0 0 rgba(0, 0, 0, .12);
          }
          @media (max-width: 767px) {
            .ribbon {
              margin: 0 calc(-50vw - 36px) 58px;
              padding: 20px calc(50vw + 36px)
            }
          }

          .lead {
            text-align: center;
            padding: 20px 0;
          }
          .lead h2 {
            font-size: 58px;
            font-weight: 400;
          }
          @media (max-width: 767px) {
            .lead h2 {
              font-size: 40px;
            }
          }

          .detail {
            display: flex;
          }
          @media (max-width: 960px) {
            .detail {
              flex-direction: column;
            }
          }
          .desc {
            flex-grow: 1;
            margin-right: -200px;
          }

          .contents {
            text-align: right;
          }
          .contents ul {
            list-style-type: none;
          }
          .contents li {
            margin: 16px 0;
          }
          .contents li h3 {
            display: inline-block;
            font-size: 48px;
            font-weight: 400;
            line-height: 48px;
            margin: 0;
          }
          .contents span.yatteiku {
            display: inline-block;
            position: relative;
            top: -.2rem;
            padding: 0 .7rem;
            background-color: ${globalColors.text};
            color: #fff;
            font-size: 20px;
            line-height: 130%;
          }
          @media (max-width: 767px) {
            .contents li h3 {
              font-size: 38px;
            }
          }

          .spec {
            position: relative;
            margin-bottom: 48px;
          }
          .spec-container {
            position: relative;
            z-index: 10;
          }
          .spec table {
            margin-bottom: 36px;
          }
          .spec tr {
            margin: 10px 0;
          }
          .spec th {
            font-weight: inherit;
            text-align: inherit;
            width: 110px;
          }
          .spec td {
            line-height: 30px;
            padding: 6px;
          }
          .spec strong {
            font-size: 24px;
            font-weight: 700;
          }
          .spec .circle-pos {
            position: absolute;
            z-index: 0;
            top: 520px;
            right: -20%;
            width: 70%;
          }
          @media (max-width: 767px) {
            .spec th {
              width: 60px;
            }
            .tbf02 {
              margin: 20px;
              width: auto;
            }
          }
          @media (max-width: 540px) {
            .spec td {
              line-height: 24px;
            }
            .spec .circle-pos {
              position: relative;
              top: inherit;
              right: inherit;
              width: 100%;
            }
          }

          .c92 {
            display: flex;
            box-sizing: border-box;
            padding: 20px;
            width: 440px;
            background-color: #253966;
            color: #fff;
            box-shadow: 0 12px 0 0 rgba(0, 0, 0, .12);
          }
          .c92 a {
            color: #fff;
          }
          .c92 img {
            height: 105px;
            margin-right: 20px;
          }
          .c92 .description {
            flex-grow: 1;
          }
          @media (max-width: 767px) {
            .c92 {
              width: auto;
              margin: 0 calc(-50vw - 20px);
              padding: 20px calc(50vw + 20px);
            }
          }
          .sample {
            position: relative;
            margin: 0 -72px;
            overflow: hidden;
          }
          @keyframes sample-h500 {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-1803.29px, 0, 0); } {/* = 2961 * (500 / 821) */}
          }
          @keyframes sample-h300 {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-1081.97px, 0, 0); } {/* = 2961 * (300 / 821) */}
          }
          .sample:before {
            content: " ";
            display: block;
            height: 500px;
            width: 10000px;
            background-image: url(static/sample.png);
            background-size: contain;
            animation: sample-h500 30s linear infinite;
          }
          @media(max-width: 540px) {
            .sample:before {
              height: 300px;
              animation: sample-h300 30s linear infinite;
            }
          }

          .share .buttons {
            display: flex;
            margin: 0 -10px;
          }
          .share .buttons > * {
            flex-grow: 1;
            margin: 8px;
          }
          @media (max-width: 1080px) and (min-width: 768px) {
            .share span {
              font-size: 0;
            }
          }
          @media (max-width: 767px) {
            .share .buttons {
              flex-direction: column;
            }
            .share .buttons > * {
              margin: 10px 10vw;
            }
          }

          footer {
            padding: 24px 0 64px;
          }
          footer .brand-container {
            text-align: center;
          }
          footer .logo, footer .brand {
            display: inline-block;
            margin-left: auto;
            padding-right: 1em;
            fill: ${globalColors.text};
          }
        `}</style>
      </Body>
    );
  }
}
