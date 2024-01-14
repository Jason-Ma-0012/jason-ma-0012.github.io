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
    onlineVideoPath: '',
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
    link: '',
  },
];

const DemoList = [
  {
    imagePath: '',
    onlineVideoPath: translate({
      id: 'homepage.demo.FeaturesOverview',
      message: 'https://player.bilibili.com/player.html?aid=355653013&bvid=BV1NX4y1U7Zw&cid=1117330787&page=1&high_quality=1&danmaku=0'
    }),
  },
  {
    imagePath: '',
    onlineVideoPath: translate({
      id: 'homepage.demo.0',
      message: 'https://player.bilibili.com/player.html?aid=519478588&bvid=BV13g411t7L8&cid=940824948&page=1&high_quality=1&danmaku=0'
    }),
  },
];

const CooperationProjectList = [
  {
    title: 'Project L - Sevika Fan Art',
    imagePath: 'https://cdnb.artstation.com/p/assets/images/images/066/462/883/large/emmanuel-marenco-sevika-pancho-splash-screen.jpg?1692971017',
    videoPath: '',
    onlineVideoPath: '',
    mediaWidth: '8',
    mediaHeight: '500',
    textWidth: '4',
    description: (
      <>
        @Emmanuel Marenco
      </>
    ),
    link: 'https://www.artstation.com/artwork/LRJmDw',
  },
  {
    title: translate({
      id: 'homepage.cooperation_project.title.0',
      message: '【自制动画/三渲二】漂流日记-第三集-我们的春天出行计划-02'
    }),
    imagePath: '',
    videoPath: '',
    onlineVideoPath: translate({
      id: 'homepage.cooperation_project.onlineVideoPath.0',
      message: 'https://player.bilibili.com/player.html?aid=270205322&bvid=BV1Jc411H7qB&cid=1101354059&p=1&high_quality=1&danmaku=0'
    }),
    mediaWidth: '8',
    mediaHeight: '500',
    textWidth: '4',
    description: (
      <>
        @reng reng
      </>
    ),
    link: 'https://www.artstation.com/artwork/LRJmDw',
  },
];

function ShowImageOrVideo({ imagePath, videoPath, onlineVideoPath, mediaWidth, mediaHeight, link }) {
  // 点击事件处理函数
  const handleClick = () => {
    // 如果link不为空，则在新标签页中打开链接
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  if (imagePath) {
    return (
      <img className={`col col--${mediaWidth}`}
        src={imagePath} alt="Image"
        style={{ maxHeight: mediaHeight + 'px', cursor: link ? 'pointer' : 'default' }}
        onClick={handleClick}
      />
    );
  } else if (videoPath) {
    return (
      <video className={`col col--${mediaWidth}`}
        src={videoPath}
        preload="auto" draggable="true"
        autoPlay muted loop
        style={{ maxHeight: mediaHeight + 'px', cursor: link ? 'pointer' : 'default' }}
        onClick={handleClick}
      ></video>
    );
  } else if (onlineVideoPath) {
    return (
      <div className={`col col--${mediaWidth}`}
        style={{ alignItems: 'center', justifyContent: 'center', maxHeight: mediaHeight + 'px', margin: '0 auto' }}>
        {/* 等比缩放*/}
        <div style={{position: 'relative', width: '100%', height: '0', paddingBottom: '56.25%', }}>
          <iframe style={{position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', border: 'none', overflow: 'hidden'}} src={onlineVideoPath} frameborder="0" allowfullscreen="true" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

function Feature({imagePath, videoPath, onlineVideoPath, mediaWidth='8', mediaHeight='500', textWidth='3', title, description, link}) {
  return (
    <div className="row margin-vert--lg"
      style={{ alignItems: 'center', justifyContent: 'center', }}>
      <ShowImageOrVideo {...{imagePath, videoPath, onlineVideoPath, mediaWidth, mediaHeight, link}} />
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
      <div className="row margin-vert--lg" style={{ alignItems: 'center', justifyContent: 'center', height: '450px', maxWidth: '800px', margin: '0 auto'}}>
        {/* 等比缩放*/}
        <div style={{position: 'relative', width: '100%', height: '0', paddingBottom: '56.25%', }}>
          <iframe style={{position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', border: 'none', overflow: 'hidden'}} src={onlineVideoPath} frameborder="0" allowfullscreen="true" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row margin-vert--lg" style={{ alignItems: 'center', justifyContent: 'center', height: '450px', margin: '0 auto'}}>
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

      {CooperationProjectList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}


    </div>
  );
}
