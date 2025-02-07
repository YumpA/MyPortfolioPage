
import Image from "next/image";
import { Button, Tabs, Watermark, Collapse, CollapseProps, ConfigProvider, Carousel, message } from "antd";
import "tailwindcss";
import { Color } from "antd/es/color-picker";
import { FontSizeOutlined, GithubOutlined, GoogleOutlined } from "@ant-design/icons";
import React from "react";
//import { Router } from "lucide-react";
//import {useRouter} from "next/navigation";

const text1 = `
 Учусь на 3 курсе по специальности Web-разработчик
`;

const text2 = `
 За 3 курса научился писать приложения на C#, верстал сайты на React, TS, JS, разрабатывал backend для сайтов
`;

const text3 = `
 Был номинирован на "Премию ректора" за творческие успехи
`;

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Специальность',
    children: <p className="text-white text-lg">{text1}</p>,
  },
  {
    key: '2',
    label: 'Что я умею',
    children: <p style={{maxWidth:700}} className="text-white text-lg">{text2}</p>,
  },
  {
    key: '3',
    label: 'Немного фактов',
    children: <p className="text-white text-lg">{text3}</p>,
  },
];

const contentStyle: React.CSSProperties = {
  display:'flex',
  justifyContent:'space-around',
  alignItems:'center',
  marginTop:'10%',
  flexDirection:'row',
  height: '700px',
  color: '#fff',
  background: 'rgb(26, 11, 46, 0.8)',
  borderRadius:'10%',
};

  async function copy(dgfedf:string){
    navigator.clipboard.writeText(dgfedf);
    alert("ссылка скопирована!");
  }


export default function Home() {
  return (
    <div style={{background: 'linear-gradient(354deg, rgba(26,11,46,1) 0%, rgba(104,35,143,1) 38%, rgba(25,6,52,1) 85%)'}}>
      <header className="inset-x-0 top-0 z-50">
      <nav style={{background: '#1a0b2e'}}  className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5 text-xl font-bold text-white">
          <img src="image/Group 30.png" width={80} alt="logo"></img>
        </a>
      </div>
      <div className="flex lg:hidden">
        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span className="sr-only">Open main menu</span>
          <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
              <a href="#about-me" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Обо мне</a>
              <a href="#skills-projects" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Опыт и проекты</a>
              <a href="#contacts" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Контакты</a>
      </div>
    </nav>
      </header>
      <main>
        <div className="flex justify-center items-center p-20">
          <img src={"/image/meAndRector.png"} style={{maskImage: 'linear-gradient(to top, transparent 5%, #11071f)'}} width={400} alt="me" />
          <div>
            <p className="text-white font-bold text-2xl mb-4">Привет! Меня зовут <span className="text-purple-600">Александр</span></p>
            <p className="text-white font-bold text-2xl">Юный и <span className="text-purple-600">амбициозный</span> программист</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center" style={{minWidth:400}}>
          <h1 id="about-me" className="text-white mt-10 mb-10 font-bold text-xl">Обо мне</h1>
          <ConfigProvider theme={{
                          components: {
                          Collapse: {
                          contentBg: "#190634",
                          headerBg:"#1A0B2E",
                          colorTextHeading: 'rgba(255, 255, 255, 1)',
        },
      },
    }}>
      <Collapse style={{minWidth:900}} items={items} defaultActiveKey={['1']} />
          </ConfigProvider>
        </div>

      <h1 id="skills-projects" className="text-white mt-20 mb-10 text-center font-bold text-xl">Опыт и проекты</h1>
      <Carousel  style={{width:1000, margin: '0 auto'}} autoplay>
        <div>
          <div style={contentStyle}>
            <div className="w-1/2 text-center">
              <h3 className="text-xl font-bold">Monogame, Winforms, WPF</h3>
              <p className="mt-10 mb-10 text-xl">Написал простую игру, разработал АСУ "Менеджер музыкальных групп" на C#</p>
              <Button>Подробнее</Button>
            </div>
            <div>
              <img src="/image/c.228x256.png" width={200} alt="c#"></img>
            </div>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
              <div className="w-1/2 text-center">
                <h3 className="text-xl font-bold">Backend</h3>
                <p className="mt-10 mb-10 text-xl">В команде разработали серверную часть для сайта чулочной фабрики</p>
                <Button>Подробнее</Button>
              </div>
              <div>
                <img src="/image/S600xU.webp" width={200} alt="nest"></img>
              </div>
            </div>
        </div>
        <div>
          <div style={contentStyle}>
              <div className="w-1/2 text-center">
                <h3 className="text-xl font-bold">VK mini app</h3>
                <p className="mt-10 mb-10 text-xl">С командой разработали мини-приложение для обмена книгами</p>
                <Button>Подробнее</Button>
              </div>
              <div>
                <img src="/image/vkontakte.png" width={200} alt="vk"></img>
              </div>
            </div>
        </div>
        <div>
          <h3 style={contentStyle} className="text-xl">Скоро появятся ещё проекты</h3>
        </div>
    </Carousel>
    </main>
    <footer>
      <h1 id="contacts" className="text-white text-center mt-20 mb-20 font-bold text-xl">Контакты</h1>
      <Watermark content="YumpA" font={{color: "rgb(113, 39, 186, 0.2)"}}>
        <div className="flex flex-col">
          <div className="flex justify-center w-2/3 m-auto">
            <p className="text-white text-xl mb-5">Я нахожусь в активном поиске практики, стажировки или работы. Если я вас заинтересовал, то ниже будут ссылки, где можно связаться со мной</p>
          </div>
          <div className="flex flex-row justify-around m-auto mt-6 mb-1 w-2/3">
            <GoogleOutlined style={{fontSize: 50, color: '#7127BA', cursor:'pointer'}} />
            <a href="https://github.com/YumpA"><GithubOutlined style={{fontSize: 50, color:'#7127BA'}} /></a>
            <img onClick={()=> copy("rgfer")} style={{cursor:'pointer'}} src="image/icons8-телеграм-50.png" width={50} alt="tg"></img>
            <img style={{cursor:'pointer'}} src="image/icons8-почта-50.png" width={50} alt="mail"></img>
          </div>
        </div>
      </Watermark>
    </footer>
    </div>
  );
}
