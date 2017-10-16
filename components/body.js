import React from 'react';
import Head from 'next/head';
import { ServerStyleSheet } from 'styled-components';

class Body extends React.Component {

  constructor(props) {
    super(props);
  }

  static defaultProps = {
    siteName: 'pentapod',
    title: 'pentapod',
    description: 'かゆいところに手が届くソフトウェア技術系同人サークル「pentapod」のHPです。',
    url: 'https://pentapod.github.io',
    image: 'https://pentapod.github.io/static/og.png',
    favicon: 'https://pentapod.github.io/static/favicon.png',
  };
  render() {
    return (
      <div>
        <Head>
          <title>{this.props.title}</title>

          <meta name="viewport" content="initial-scale=1.0" />
          <meta property="og:site_name" content={this.props.siteName} />
          <meta property="og:title" content={this.props.title} />
          <meta property="og:url" content={this.props.url} />
          <meta property="og:image" content={this.props.image} />
          <meta property="og:description" content={this.props.description} />
          <meta property="og:type" content="website" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:creator" content="@spring_raining" />
          <meta name="google-site-verification" content="uf35tScRk5eGKgvnTasid2iYy3Z3TdPrqFC7rgLsfjs" />

          <link rel="icon" type="image/png" href={this.props.favicon} />
          <link rel="canonical" href={this.props.url} />

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" />

          <script dangerouslySetInnerHTML={{__html:
            `(function(d) {
              var config = {
                kitId: 'rrx6lqc',
                scriptTimeout: 3000,
                async: true
              },
              h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
            })(document);
            `}}
          />

          <script dangerouslySetInnerHTML={{__html:
            `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
            ga('create', 'UA-46915388-6', 'auto');
            ga('send', 'pageview');
            `}}
          />
        </Head>

        {this.props.children}
      </div>
    );
  }
}

export default Body;
