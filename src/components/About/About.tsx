import React from 'react';
import './About.css';

const About = () => {
  const aboutUrl = 'https://seo-evolution.com.ua//storage/udvG8rxBmpHRBlxALEEwDwdl4DZ0MbjhyoEPZYvC.jpg';

  return (
    <div className="aboutUs">
      <h5>Online diary</h5>
      <div className="about">
        <div className="info about-text">
          <ul>
            <li>Данный интернет-дневник создан для публикации историй, рассказов, заметок и статей, которыми Вы хотите
              поделиться с пользователями.
            </li>
            <li>Администрация сайта просит Вас соблюдать все правила толератности и цензуры.</li>
            <li>Вы можете принять участие как в обмене постами так и в улучшении нашего блога.</li>
            <li> Желаем Вам удачного времяпровождения.</li>
            <li>С уважением команда "Мой блог"</li>
          </ul>
        </div>
        <div className="info about-image">
          <img className="aboutImage" src={aboutUrl}/>
        </div>
      </div>
    </div>
  );
};

export default About;