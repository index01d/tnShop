import React from 'react';

import Helmet from 'react-helmet';

const About = () => (
  <div style={{ lineHeight: '36px' }}>
    <Helmet>
      <title>About page</title>
    </Helmet>
    <h1>React Basic</h1>
    Онлайн-курс для веб-разработчиков, которые хотят освоить и применять React и Redux в своих проектах.<br />

    Этот курс для тебя, если ты:
    <ol>
      <li>Имеешь опыт веб-разработки на любом языке/технологии (frontend или backend) от 6 месяцев</li>
      <li>Знаком с Javascript хотя бы на базовом уровне</li>
      <li>Имеешь понимание об ООП, HTTP, DOM и работе браузера</li>
      <li>Умеешь работать с Git и GitHub</li>
    </ol>

    <h2>Что в результате?</h2>
    <p>Ты cможешь применять React в реальных проектах, поймешь, зачем он нужен, как устроен и освоишь лучшие практики и подходы. 
А главное - повысишь свою стоимость как разработчик</p>
  </div>
);

export default About;