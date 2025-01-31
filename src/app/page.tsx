import Image from "next/image";
import { Button, Tabs, Watermark, Collapse, CollapseProps, ConfigProvider, Carousel } from "antd";
import "tailwindcss";
import { Color } from "antd/es/color-picker";
import { FontSizeOutlined, GithubOutlined, GoogleOutlined } from "@ant-design/icons";
import React from "react";

const text1 = `
 Учусь на 3 курсе по специальности Web-разработчик
`;

const text2 = `
 За 3 курса научился писать приложения на C#, верстал сайты на React, TS, JS, разрабатывал backend для сайтов
`;

const text3 = `
 Лежал на ботлайне пока тима брала нексус
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
  textAlign: 'center',
  background: 'rgb(26, 11, 46, 0.5)',
  borderRadius:'10%',
};

export default function Home() {
  return (
    <div style={{background: '#11071f'}}>
      <header className="inset-x-0 top-0 z-50">
      <nav style={{background: '#1a0b2e'}}  className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5 text-xl font-bold text-white">
          Y
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
      <div className="hidden lg:flex lg:gap-x-12 " >
      <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Главная</a>
              <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Обо мне</a>
              <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Опыт</a>
              <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Проекты</a>
      </div>
    </nav>
      </header>
      <main>
        <div className="flex justify-center items-center p-20">
          <img src={"/image/meAndRector.png"} style={{maskImage: 'linear-gradient(to top, transparent 5%, #11071f)'}} width={400} alt="me" />
          <div>
            <p className="text-white">Привет! Меня зовут <span className="text-purple-600">Александр</span></p>
            <h1 className="text-white">Юный и <span className="text-purple-600">амбициозный</span> программист</h1>
          </div>
        </div>
        <div className="flex justify-center items-center" style={{minWidth:400}}>
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

      <Carousel  style={{width:1000, margin: '0 auto'}} autoplay>
        <div>
          <div style={contentStyle}>
            <div>
              <h3>Заголовок</h3>
              <p>Краткое описание</p>
              <Button>Подробнее</Button>
            </div>
            <div>
              <img src="/image/c.228x256.png" width={200} alt="c#"></img>
            </div>
          </div>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
    </Carousel>
    </main>
    <footer>
      <h1 className="text-white">Контакты</h1>
      <Watermark content="YumpA" font={{color: "rgb(113, 39, 186, 0.2)"}}>
        <div className="flex flex-col">
          <div>
            <p className="text-white">Я нахожусь в активном поиске практики, стажировки или работы. Если я вас заинтересовал, напишите мне на почту</p>
            <p className="text-white">russki-misha@mail.ru</p>
          </div>
          <div>
          <a href="#"><GoogleOutlined style={{fontSize: 50, color: '#7127BA'}} /></a>
          <a href="#"><GithubOutlined style={{fontSize: 50, color:'#7127BA'}} /></a>
          </div>
        </div>
      </Watermark>
    </footer>
    </div>
  );
}
