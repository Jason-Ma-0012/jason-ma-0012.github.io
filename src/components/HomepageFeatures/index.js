import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';

const FeatureList = [
  {
    title: translate({
      id: 'homepage.feature.title.0',
      message: '实时'
    }),
    imagePath: '',
    videoPath: 'video/MooaToonDemoVideo.webm',
    mediaWidth: '8',
    mediaHeight: '500',
    textWidth: '4',
    description: (
      <>
        <Translate id='homepage.feature.description.0a'>
          实时的环境交互: 灯光, 阴影, 全局光照等, 就像UE原生的材质一样.
        </Translate>
          <br />
        <Translate id='homepage.feature.description.0b'>
          动态的角色表现, 出色的可控性, 同时满足影视和游戏的需求.
        </Translate>
      </>
    ),
  },
];

const DemoList = [
  {
    imagePath: 'img/MooaToonDemo_2023.3.28.png',
    onlineVideoPath: '',
  },
  {
    imagePath: '',
    onlineVideoPath: translate({
      id: 'homepage.demo.0',
      message: 'https://player.bilibili.com/player.html?aid=519478588&bvid=BV13g411t7L8&cid=940824948&page=1&high_quality=1&danmaku=0'
    }),
  },
];

function ShowImageOrVideo({ imagePath, videoPath, mediaWidth, mediaHeight }) {
  if (imagePath) {
    return (
      <img className={`col col--${mediaWidth}`}
        src={imagePath} alt="Image"
        style={{ maxHeight: mediaHeight + 'px', }} />
    );
  } else if (videoPath) {
    return (
      <video className={`col col--${mediaWidth}`}
        src={videoPath}
        preload="preload" draggable="true"
        autoplay="autoplay" muted="muted" loop="loop"
        style={{maxHeight: mediaHeight + 'px',}}
      ></video>
    );
  } else {
    return null;
  }
}

function Feature({imagePath, videoPath, mediaWidth='8', mediaHeight='500', textWidth='3', title, description}) {
  return (
    <div className="row margin-vert--lg"
      style={{ alignItems: 'center', justifyContent: 'center', }}>
      <ShowImageOrVideo {...{imagePath, videoPath, mediaWidth, mediaHeight}} />
      <div className={"col col--" + textWidth + " padding--lg"}
        style={{ textAlign: 'center', }}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Demo({ onlineVideoPath, imagePath }) {
  if (onlineVideoPath) {   
    return (
      <div className="row margin-vert--lg" style={{ position: 'relative', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{  padding: '21.5%', }}>
        <iframe style={{ position: 'absolute', maxWidth:'780px', width: '100%', height: '100%', left: '50%', top: '0', transform: 'translateX(-50%)'}}
          src={onlineVideoPath}
          border="0" frameborder="0" allowfullscreen="true" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
        </iframe>
      </div>
      </div>
    );
  } else {
    return (
      <div className="row margin-vert--lg" style={{ alignItems: 'center', justifyContent: 'center', height: '450px',}}>
        <img style={{ maxHeight: '100%',}} src={imagePath} alt="Image"/>
      </div>
    );
  }
}

export default function HomepageFeatures() {
  return (
    <div className="container margin-vert--lg"
      style={{
        maxWidth: '1200px',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      
      <h1><Translate id='homepage.features'>
        特性
      </Translate></h1>

      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}

      <h1><Translate id='homepage.demos'>
        演示
      </Translate></h1>

      <button class="button button--primary button--md margin-vert--lg"
        // href="#url"
        >
        <Translate id='homepage.downloadDemo'>
          下载可运行演示(TODO)
        </Translate>
      </button>

      {DemoList.map((props, idx) => (
        <Demo key={idx} {...props} />
      ))}
      
      <h1><Translate id='homepage.cooperationProjects'>
        合作项目
      </Translate></h1>
      <p>TODO</p>

    </div>
  );
}
