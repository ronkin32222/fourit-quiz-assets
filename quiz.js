
  // Приём заявок. LEAD_ENDPOINT: свой сервер (POST JSON) — рекомендуемый вариант.
  // TG_TOKEN/TG_CHAT: прямая отправка в Telegram; токен виден в коде страницы, только для теста.
  const CONFIG={BOT:'foraiti_bot',LEAD_ENDPOINT:'',TG_TOKEN:'',TG_CHAT:'',POLICY_URL:'',PHONE:'+7 (967) 555-79-95'};

  /* ===== варианты первого экрана: ?v=loss (цифра потерь), ?v=all (все гайды), без параметра: наборы ===== */
  (function(){
    const v=new URLSearchParams(location.search).get('v');
    const lay=new URLSearchParams(location.search).get('l');if(lay)document.querySelector('#s-intro .hero-vis').classList.add('lay-'+lay);
    const V={
      loss:{label:'Диагностика + калькулятор потерь · 3–4 минуты',h1:'Где ваш бизнес теряет деньги и <em>как это исправить</em>',
        sub:'Ответьте на точечные вопросы о своём бизнесе. Сразу увидите, где утекают деньги и время, и заберёте Excel-калькулятор, который посчитает главную потерю в рублях и часах.',
        gets:['Две зоны, где у вас утекают деньги и время','Сколько часов в месяц уходит на ручной сбор цифр и во что это обходится','<b>Excel-калькулятор под вашу главную потерю:</b> за 20 минут покажет её в рублях и часах'],gift:2,
        btn:'Пройти тест и забрать калькулятор',meta:'Калькулятор сразу после теста',form:'в боте вас ждут калькулятор под вашу зону и план на 14 дней',
        cards:`<div class="gcard g-fin"><div class="gc-h"><i>📊</i><div><small>Финансы · Excel · 20 мин</small><b>В какую неделю не хватит денег</b></div></div><div class="gc-t"><div class="hd"><span>Нед.</span><span>Приход</span><span>Платежи</span><span>Остаток</span></div><div><span>5</span><span>860 000</span><span>910 000</span><span class="p">120 000</span></div><div class="bad"><span>6</span><span>300 000</span><span>760 000</span><span class="m">−340 000</span></div><div><span>7</span><span>1 540 000</span><span>950 000</span><span class="p">250 000</span></div></div><p class="gc-r">⚠ Неделя 6: не хватит 340 000 ₽</p></div>
<div class="gcard g-sal"><div class="gc-h"><i>📈</i><div><small>Продажи · Excel · 15 мин</small><b>Где теряются ваши заявки</b></div></div><div class="gc-t"><div class="hd"><span>Заявка</span><span>Ответств.</span><span>След. шаг</span><span>Срок</span></div><div><span>№ 214</span><span>Иван</span><span>КП</span><span>12.10</span></div><div class="bad"><span>№ 215</span><span class="m">—</span><span class="m">—</span><span class="m">—</span></div><div class="bad"><span>№ 218</span><span>Олег</span><span class="m">—</span><span class="m">—</span></div></div><p class="gc-r">⚠ 12 из 40 заявок без следующего шага</p></div>
<div class="gcard g-ops"><div class="gc-h"><i>⚙️</i><div><small>Операционка · Excel · 20 мин</small><b>Сколько стоит ручная работа</b></div></div><div class="gc-t ops"><div class="hd"><span>Задача</span><span>Ч/мес</span><span>₽/мес</span></div><div><span>Сверка оплат</span><span>22</span><span>33 000</span></div><div><span>Отчёт собственнику</span><span>16</span><span>24 000</span></div><div><span>Перенос заявок</span><span>26</span><span>39 000</span></div></div><p class="gc-r">⚠ 64 ч = 96 000 ₽/мес</p></div>
<div class="gcard g-hr"><div class="gc-h"><i>👥</i><div><small>Найм · Excel · 15 мин</small><b>Нанять или автоматизировать</b></div></div><div class="gc-t hr"><div class="hd"><span>Задача будущего сотрудника</span><span>Решение</span></div><div><span>Обработка заявок</span><span class="ok">Автоматизация</span></div><div><span>Отчётность</span><span class="ok">Автоматизация</span></div><div><span>Переговоры</span><span class="hire">Нанять</span></div></div><p class="gc-r">✓ 4 из 6 задач можно не нанимать</p></div>`},
      all:{label:'Библиотека собственника · 4 набора · 13 инструментов',h1:'Заберите все инструменты <em>для управления бизнесом</em>',
        sub:'Финансы, мотивация менеджеров, регламенты и найм: таблицы, шаблоны и гайды одним комплектом. Ответьте на несколько вопросов, и мы подскажем, с чего начать именно вам.',
        gets:['<b>Все 4 набора сразу:</b> 13 таблиц, шаблонов и гайдов','С какого инструмента начать в вашем бизнесе','Бонус: две зоны, где бизнес теряет деньги и время, в рублях'],gift:0,
        btn:'Забрать все инструменты',meta:'Комплект сразу после ответов',form:'в боте вас ждут все 4 набора инструментов и план на 14 дней'}
    }[v];
    if(!V)return;
    const q=s=>document.querySelector(s);
    q('#s-intro .label').textContent=V.label;
    q('#s-intro h1').innerHTML=V.h1;
    q('#s-intro .sub').textContent=V.sub;
    q('#s-intro .gets').innerHTML=V.gets.map((t,i)=>i===V.gift?`<li class="gift"><span>${t}</span></li>`:`<li>${t}</li>`).join('');
    q('#s-intro .btn.big').textContent=V.btn;
    q('#s-intro .meta span:nth-child(2)').textContent=V.meta;
    const p=q('#form>p');p.innerHTML=p.innerHTML.replace('в боте вас ждут ваш набор инструментов и план на 14 дней',V.form);
    if(V.cards){const hv=q('#s-intro .hero-vis');hv.querySelectorAll('.gcard').forEach(c=>c.remove());hv.insertAdjacentHTML('afterbegin',V.cards)}
  })();
  const IND=[
    {id:'prod',t:'Производство',img:'https://cdn.jsdelivr.net/gh/ronkin32222/fourit-quiz-assets@8464c70/a10.webp'},
    {id:'opt',t:'Оптовая торговля',img:'https://cdn.jsdelivr.net/gh/ronkin32222/fourit-quiz-assets@8464c70/a11.webp'},
    {id:'med',t:'Медицина',img:'https://cdn.jsdelivr.net/gh/ronkin32222/fourit-quiz-assets@8464c70/a12.webp'},
    {id:'build',t:'Строительство',img:'https://cdn.jsdelivr.net/gh/ronkin32222/fourit-quiz-assets@8464c70/a13.webp'},
    {id:'log',t:'Логистика и транспорт',img:'https://cdn.jsdelivr.net/gh/ronkin32222/fourit-quiz-assets@8464c70/a14.webp'},
    {id:'retail',t:'Розница'},{id:'serv',t:'Услуги'},{id:'other',t:'Другое'}
  ];
  const DIRS=[
    {id:'mkt',t:'Маркетинг',img:'https://cdn.jsdelivr.net/gh/ronkin32222/fourit-quiz-assets@8464c70/a15.webp',q:'«Плачу за рекламу, а сколько стоит сделка, не знаю»',
      dos:['Считаем цену заявки и сделки по каждому источнику','Отключаем каналы, которые съедают бюджет','Сводим заявки из всех источников в одно окно'],
      nums:[['До кассы','каждый канал посчитан до оплаты'],['100%','заявок в одном окне']],
      qs:[{q:'Знаете, сколько стоит одна сделка из каждого рекламного канала?',a:['Нет, видим только клики и заявки','Примерно, по ощущениям','Считаем вручную раз в месяц','Да, по каждому каналу до оплаты'],f:'Непонятно, какие каналы окупаются, бюджет может уходить в те, что не приносят сделок'},
          {q:'Где собираются заявки из всех источников?',a:['Почта, мессенджеры, у каждого менеджера свои','Часть в CRM, часть теряется','Почти всё в CRM, источник отмечают не всегда','Все в одном окне, с источником'],f:'Часть заявок живёт вне системы, их нельзя посчитать и проконтролировать'}]},
    {id:'sales',t:'Продажи',img:'https://cdn.jsdelivr.net/gh/ronkin32222/fourit-quiz-assets@8464c70/a16.webp',q:'«Заявки есть, а на каком шаге теряются продажи, не видно»',
      dos:['Воронка: этапы, ответственные, причины отказов','Нет ответа 5 минут → сигнал руководителю','ИИ разбирает звонки, спящих клиентов возвращаем'],
      nums:[['+15%','целевой рост конверсии в сделку'],['5 мин','первая реакция вместо часов']],
      qs:[{q:'Что происходит, если менеджер не ответил на заявку за 15 минут?',a:['Никто не узнает','Узнаём, когда клиент пожалуется','Руководитель проверяет вручную','Система сразу сигналит руководителю'],f:'Заявки остывают без ответа, и об этом никто не узнаёт вовремя'},
          {q:'Видно, на каком этапе и почему теряются сделки?',a:['Нет','Только общее число отказов','Этапы есть, причины не фиксируются','Да, этапы и причины по каждому менеджеру'],f:'Не видно, на каком шаге и почему уходят клиенты, поэтому нечего исправлять'}]},
    {id:'fin',t:'Финансы',img:'https://cdn.jsdelivr.net/gh/ronkin32222/fourit-quiz-assets@8464c70/a17.webp',q:'«Хватит ли денег на платежи в четверг, узнаю в четверг»',
      dos:['Доходы и расходы из 1С, банков и CRM в одном контуре','P&L, ДДС и баланс обновляются сами','Себестоимость и маржа по каждому заказу и клиенту'],
      nums:[['14 дней','прогноз кассового разрыва'],['До старта','видна маржа заказа']],
      qs:[{q:'Когда вы узнаёте реальную маржу заказа?',a:['После закрытия месяца или позже','Когда бухгалтерия сведёт','Сразу после сделки, примерно','До подтверждения заказа'],f:'Маржа видна задним числом: убыточные заказы обнаруживаются, когда они уже выполнены'},
          {q:'Насколько заранее видите кассовый разрыв?',a:['В день платежа','За пару дней','За неделю, по таблице','За 2 недели и больше, автоматически'],f:'Кассовый разрыв виден слишком поздно, чтобы спокойно перенести платежи'}]},
    {id:'team',t:'Управление людьми',img:'https://cdn.jsdelivr.net/gh/ronkin32222/fourit-quiz-assets@8464c70/a18.webp',q:'«Уеду в отпуск на две недели, вернусь к развалу»',
      dos:['Процессы с ответственными, согласования без вас','База знаний и чек-листы для входа новичков','Дашборд: задачи, просрочки, перегрузы'],
      nums:[['10–15 ч','в неделю освобождается у руководителя'],['2 дня','на вход нового сотрудника']],
      qs:[{q:'Что будет, если вы уйдёте в отпуск на 2 недели?',a:['Всё встанет, звонят каждый день','Работает, но решения ждут меня','Почти всё идёт, пара вопросов','Процессы идут, я смотрю дашборд'],f:'Решения замкнуты на вас: бизнес не растёт быстрее, чем вы успеваете отвечать'},
          {q:'За сколько новый сотрудник выходит на нормальную работу?',a:['Больше месяца, учит тот, кто свободен','2–4 недели','1–2 недели, есть инструкции','Пару дней: база знаний и чек-листы'],f:'Знания живут в головах, и каждый новичок обходится дорого'}]},
    {id:'ops',t:'Операционные процессы',img:'https://cdn.jsdelivr.net/gh/ronkin32222/fourit-quiz-assets@8464c70/a19.webp',q:'«Склад теряет товар, производство тушит пожары»',
      dos:['Склад: адресное хранение и QR-скан операций','Производство: этапы, сроки, себестоимость партии','Закупки: сигнал о пополнении, история цен поставщиков'],
      nums:[['Минуты','на приёмку и выдачу вместо часов'],['0 простоев','из-за нехватки материалов']],
      qs:[{q:'Остатки в учёте совпадают с тем, что лежит на складе?',a:['Нет, узнаём на инвентаризации','Расхождения частые','Бывают мелкие расхождения','Совпадают, операции сканируются'],f:'Учёт и склад расходятся: деньги заморожены в товаре, которого не видно'},
          {q:'Бывают простои или срывы сроков из-за нехватки материалов?',a:['Регулярно','Примерно раз в месяц','Редко','Нет, закупка идёт по сигналу'],f:'Закупки реагируют на пожар, а не на сигнал, отсюда простои и срочные переплаты'}]},
    {id:'all',t:'Не вижу общую картину',img:'https://cdn.jsdelivr.net/gh/ronkin32222/fourit-quiz-assets@8464c70/a20.webp',q:'«Картину бизнеса собираю звонками трём людям»',
      dos:['Клиенты, сделки, деньги, склад и задачи в одном окне','Утренняя сводка в мессенджер, ИИ отвечает на вопросы','Счета, акты и напоминания без ручной работы'],
      nums:[['2 мин','утром, чтобы увидеть бизнес в цифрах'],['1 окно','цифры CRM, 1С и склада совпадают']],
      qs:[{q:'Сколько времени нужно, чтобы увидеть картину бизнеса на сегодня?',a:['Полдня звонков и таблиц','Пара часов','Отчёты есть, но цифры в 1С и CRM расходятся','Пара минут, утренняя сводка'],f:'Картина бизнеса собирается вручную, и решения принимаются по устаревшим цифрам'},
          {q:'Кто выставляет счета, акты и напоминает клиентам об оплате?',a:['Вручную, часто забываем','Вручную, по графику','Частично шаблоны','Всё автоматически'],f:'Рутина с документами съедает время и задерживает деньги'}]}
  ];
  const SYS=['1С','Битрикс24','amoCRM','Excel или Google-таблицы','Мессенджеры и блокноты','Другая система'];
  const HOURS=[['До 2 часов',1.5],['2–5 часов',3.5],['5–10 часов',7.5],['Больше 10 часов',12]];
  const TURN=['До 5 млн ₽','5–20 млн ₽','20–100 млн ₽','Больше 100 млн ₽'];
  const MORE={
    mkt:[{q:'Как быстро вы замечаете, что реклама перестала окупаться?',a:['Через месяц-два, по падению денег','Когда менеджеры жалуются на качество заявок','По еженедельному отчёту','Сразу, по цене сделки в отчёте'],f:'Неокупаемый канал работает неделями, прежде чем его заметят'},
         {q:'Знаете, сколько денег за всё время приносит один клиент?',a:['Не считаем','Примерно знаем по крупным клиентам','Считаем в таблице время от времени','Видим по каждому клиенту и сегменту'],f:'Ценность клиента не посчитана, поэтому непонятно, сколько можно платить за его привлечение'}],
    sales:[{q:'Как назначается следующий шаг после разговора с клиентом?',a:['Менеджер помнит сам','Пишет себе заметку','Ставит задачу в CRM, но не всегда','Без следующего шага сделку нельзя сохранить'],f:'Сделки зависают без следующего шага и тихо умирают'},
           {q:'Как вы оцениваете работу менеджеров?',a:['По ощущениям','По сумме продаж в конце месяца','По отчёту из CRM раз в неделю','По конверсии, скорости и среднему чеку каждый день'],f:'Сильного и слабого менеджера видно только по итогам месяца, когда исправлять поздно'}],
    fin:[{q:'Через сколько дней после конца месяца вы видите отчёт о прибылях и убытках?',a:['Такого отчёта нет','Больше чем через 20 дней','Через 10–20 дней','До 5 дней или в любой момент'],f:'Управленческий отчёт приходит слишком поздно, чтобы влиять на текущий месяц'},
         {q:'Знаете, кто и сколько вам должен на сегодня?',a:['Узнаём у бухгалтерии по запросу','Таблица, обновляется нерегулярно','Отчёт есть, напоминаем вручную','Видно в системе, напоминания уходят сами'],f:'Деньги застревают у клиентов, а напоминают о них вручную и нерегулярно'}],
    team:[{q:'Как вы узнаёте о просроченных задачах?',a:['Когда уже горит','Спрашиваю на планёрке','Иногда смотрю отчёт','Система сама показывает просрочки и перегрузы'],f:'Просрочки всплывают, когда уже горит, и тушить приходится вам'},
          {q:'Как связаны зарплата и результат сотрудников?',a:['Оклад, результат не влияет','Премия по решению руководителя','Есть KPI, но считаем вручную','KPI считаются автоматически из системы'],f:'Мотивация не привязана к цифрам, и людям выгодно просто быть занятыми'}],
    ops:[{q:'Знаете фактическую себестоимость партии или заказа?',a:['Нет, только плановую','Считаем после закрытия, примерно','Считаем, но с задержкой','Да, по факту, сразу после выпуска'],f:'Фактическая себестоимость неизвестна, поэтому цены ставятся на глаз'},
         {q:'Сколько времени занимают приёмка и выдача товара?',a:['Часы, всё вручную на бумаге','Долго, сверяем по таблице','Есть система, но много ручного ввода','Минуты, сканируем коды'],f:'Склад тратит часы на операции, которые могут занимать минуты'}],
    all:[{q:'Цифры в CRM, 1С и таблицах совпадают?',a:['Нет, у каждого своя правда','Часто расходятся','Иногда, сверяем вручную','Совпадают, данные идут из одного места'],f:'В разных системах разные цифры, и спор о том, какая верная, съедает время'},
         {q:'Если спросить «сколько мы заработали вчера», когда будет ответ?',a:['Никогда точно','Через день от бухгалтера','Через пару часов из отчётов','Сразу'],f:'Простые вопросы о бизнесе требуют часов работы людей'}]
  };
  DIRS.forEach(d=>d.qs.push(...MORE[d.id]));
  const ABOUT=[
    {k:'turn',t:'Выручка в месяц',a:TURN,skip:'Не хочу указывать'},
    {k:'profit',t:'Чистая прибыль от выручки',a:['В ноль или в минус','До 10%','10–20%','Больше 20%','Не знаю точно'],skip:'Не хочу указывать'},
    {k:'team',t:'Сколько человек в команде',a:['До 10','10–30','30–100','Больше 100']},
    {k:'role',t:'Ваша роль',a:['Собственник','Генеральный директор','Коммерческий или финансовый директор','Другое']},
    {k:'region',t:'Откуда вы',a:['Москва и область','Санкт-Петербург','Другой город России','Казахстан, Беларусь и СНГ','Другая страна']}
  ];
  const HOUR_RATE=1000;
  const G='https://cdn.jsdelivr.net/gh/ronkin32222/fourit-quiz-assets@8464c70/a09.jpg';

  const st={ind:null,dirs:[],depth:{},sys:[],hours:null,turn:null,profit:null,team:null,role:null,region:null};
  let i=0;
  const $=s=>document.querySelector(s);
  const show=id=>{document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('on',s.id===id));scrollTo(0,0)};

  function depthQs(){
    const d=st.dirs.map(id=>DIRS.find(x=>x.id===id));
    return d.flatMap(x=>x.qs.map((_,k)=>[x,k]));
  }
  function steps(){
    const s=[{k:'ind'},{k:'dirs'}];
    const dq=depthQs();(dq.length?dq:[0,0,0,0,0,0,0,0]).forEach((x,n)=>s.push(x?{k:'depth',dir:x[0],qi:x[1],n}:{k:'depth'}));
    s.push({k:'sys'},{k:'hours'},{k:'about'});
    return s;
  }
  const hint=t=>`<div class="hint"><img src="${G}" alt=""><p><b>Глеб:</b> ${t}</p></div>`;
  const pic=(img,light)=>img?`<span class="pic${light?' light':''}"><img src="${img}" alt="" loading="lazy"></span>`:'';

  function render(){
    const S=steps(),s=S[i],N=S.length;
    $('#prog').style.width=(i/N*100)+'%';$('#stepN').textContent=`Шаг ${i+1} из ${N}`;
    let h='',multi=false,canNext=false;
    if(s.k==='ind'){
      h=`<div class="label">Ваш бизнес</div><h2 class="q-title">Чем занимается компания?</h2>${hint('по отрасли подберу похожий кейс и цифры, которые получали клиенты в вашей нише.')}
      <div class="opts">${IND.filter(x=>x.img).map(x=>`<button class="opt${st.ind===x.id?' sel':''}" data-v="${x.id}">${pic(x.img)}<span class="tx"><strong>${x.t}</strong></span><span class="tick">✓</span></button>`).join('')}</div>
      <div class="extra opts">${IND.filter(x=>!x.img).map(x=>`<button class="opt${st.ind===x.id?' sel':''}" data-v="${x.id}"><strong>${x.t}</strong></button>`).join('')}</div>`;
    }else if(s.k==='dirs'){
      multi=true;canNext=st.dirs.length>0;
      h=`<div class="label">Где болит</div><h2 class="q-title">Что раздражает сильнее всего?</h2><p class="q-note">Выберите одно или два направления</p>${hint('за каждой такой фразой обычно стоят ещё одна-две причины. Их найдём на разборе.')}
      <div class="opts">${DIRS.map(x=>`<button class="opt${st.dirs.includes(x.id)?' sel':''}" data-v="${x.id}">${pic(x.img,1)}<span class="tx"><strong>${x.t}</strong><small>${x.q}</small></span><span class="tick">✓</span></button>`).join('')}</div>`;
    }else if(s.k==='depth'){
      const q=s.dir.qs[s.qi],key=s.dir.id+s.qi;
      h=`<div class="label">${s.dir.t} · ${s.qi+1} из ${s.dir.qs.length}</div><h2 class="q-title">${q.q}</h2>${hint('отвечайте, как есть за последние 1–3 месяца, а не как должно быть по регламенту.')}
      <div class="opts list">${q.a.map((a,k)=>`<button class="opt${st.depth[key]===k?' sel':''}" data-v="${k}"><span class="tick">✓</span><strong>${a}</strong></button>`).join('')}</div>`;
    }else if(s.k==='sys'){
      multi=true;canNext=true;
      h=`<div class="label">Ваши системы</div><h2 class="q-title">Где сейчас живут данные?</h2><p class="q-note">Можно выбрать несколько</p>${hint('почти всегда достраиваем то, что уже есть. Менять систему ради системы не предлагаем.')}
      <div class="opts chips">${SYS.map(x=>`<button class="opt${st.sys.includes(x)?' sel':''}" data-v="${x}"><strong>${x}</strong></button>`).join('')}</div>`;
    }else if(s.k==='hours'){
      h=`<div class="label">Ручная работа</div><h2 class="q-title">Сколько часов в неделю вы и руководители тратите на сбор цифр и ручной контроль?</h2>${hint('считайте всё: сводки, сверки, звонки «а что там с заказом», пересчёты в таблицах.')}
      <div class="opts chips">${HOURS.map((x,k)=>`<button class="opt${st.hours===k?' sel':''}" data-v="${k}"><strong>${x[0]}</strong></button>`).join('')}</div>`;
    }else if(s.k==='about'){
      multi=true;canNext=ABOUT.every(g=>st[g.k]!==null);
      h=`<div class="label">Пара слов о компании</div><h2 class="q-title">Последний шаг: масштаб и контекст</h2>${hint('чтобы на разборе сразу говорить о цифрах вашего масштаба. Ответы видим только мы.')}
      ${ABOUT.map(g=>`<div class="grp"><b>${g.t}</b><div class="opts chips" data-g="${g.k}">${g.a.map((x,k)=>`<button class="opt${st[g.k]===k?' sel':''}" data-v="${k}"><strong>${x}</strong></button>`).join('')}${g.skip?`<button class="opt${st[g.k]===-1?' sel':''}" data-v="-1"><strong>${g.skip}</strong></button>`:''}</div></div>`).join('')}`;
    }
    h+=`<div class="q-foot"><button class="back" type="button" ${i?'':'disabled'}>← Назад</button>${multi?`<button class="btn" type="button" id="next" ${canNext?'':'disabled'}>${s.k==='sys'&&!st.sys.length?'Пропустить':'Далее'}</button>`:''}</div>`;
    $('#q').innerHTML=h;
  }

  $('#q').addEventListener('click',e=>{
    const S=steps(),s=S[i];
    if(e.target.closest('.back')){i=Math.max(0,i-1);render();scrollTo(0,0);return}
    if(e.target.closest('#next')){go();return}
    const o=e.target.closest('.opt');if(!o)return;const v=o.dataset.v;
    if(s.k==='dirs'){
      const k=st.dirs.indexOf(v);
      if(k>-1)st.dirs.splice(k,1);else{if(st.dirs.length===2)st.dirs.shift();st.dirs.push(v)}
      Object.keys(st.depth).forEach(x=>{if(!st.dirs.some(d=>x.startsWith(d)))delete st.depth[x]});
      render();return;
    }
    if(s.k==='sys'){const k=st.sys.indexOf(v);k>-1?st.sys.splice(k,1):st.sys.push(v);render();return}
    if(s.k==='ind')st.ind=v;
    if(s.k==='depth')st.depth[s.dir.id+s.qi]=+v;
    if(s.k==='hours')st.hours=+v;
    if(s.k==='about'){const g=o.closest('[data-g]').dataset.g;st[g]=+v;render();return}
    o.parentElement.parentElement.querySelectorAll('.opt').forEach(x=>x.classList.toggle('sel',x===o));
    setTimeout(go,260);
  });
  function go(){const N=steps().length;if(i<N-1){i++;render();scrollTo(0,0)}else{preview();show('s-contact')}}

  document.querySelector('[data-go="start"]').addEventListener('click',()=>{i=0;render();show('s-quiz')});

  /* ===== scoring ===== */
  function zones(){
    return st.dirs.map(id=>{
      const d=DIRS.find(x=>x.id===id),ks=d.qs.map((_,q)=>st.depth[id+q]).filter(v=>v!==undefined);
      const avg=ks.reduce((a,b)=>a+b,0)/ks.length;
      const lvl=avg<1.5?['r','Зона потерь']:avg<2.5?['a','Частично под контролем']:['g','Под контролем'];
      const finds=d.qs.map((_,q)=>q).filter(q=>st.depth[id+q]!==undefined).map(q=>({ok:st.depth[id+q]>=2,t:st.depth[id+q]>=2?'«'+d.qs[q].a[st.depth[id+q]]+'»: здесь база уже есть, её можно усилить':d.qs[q].f}));
      return{d,avg,lvl,finds};
    }).sort((a,b)=>a.avg-b.avg);
  }
  const hrsMonth=()=>Math.round(HOURS[st.hours][1]*4.3);
  const rub=n=>n.toLocaleString('ru-RU')+' ₽';

  function preview(){
    $('#tgBtn').href=botLink();
    const z=zones();
    $('#preview').innerHTML=`<span class="pv-lock">🔒</span><h3>Ваша точка А</h3><p>Откроется после того, как укажете контакт</p>
      ${z.map(x=>`<div class="pv-row"><img src="${x.d.img}" alt=""><div><b>${x.d.t}</b><span class="${x.lvl[0]}">${x.lvl[1]}</span></div></div>`).join('')}
      <div class="pv-money"><small>Ручной сбор цифр, в год</small><b>${rub(hrsMonth()*12*HOUR_RATE)}</b></div>
      <div class="pv-row"><img src="https://cdn.jsdelivr.net/gh/ronkin32222/fourit-quiz-assets@8464c70/a21.webp" alt=""><div><b>Что меняем первым и похожий кейс</b><span class="g">3 шага</span></div></div>`;
  }

  /* ===== telegram bot ===== */
  // start-параметр (до 64 символов): q_<отрасль>_<зоны>_a<ответы 0-3>_h<часы>_t<выручка>_p<прибыль>_m<команда>_o<роль>_g<регион>, x = не указано
  const code=()=>['q',st.ind||'x',...st.dirs,'a'+steps().filter(s=>s.k==='depth'&&s.dir).map(s=>st.depth[s.dir.id+s.qi]).join(''),'h'+st.hours,...ABOUT.map(g=>({turn:'t',profit:'p',team:'m',role:'o',region:'g'})[g.k]+(st[g.k]>=0&&st[g.k]!==null?st[g.k]:'x'))].join('_').slice(0,64);
  const botLink=()=>'https://t.me/'+CONFIG.BOT+'?start='+code();
  $('#tgBtn').addEventListener('click',e=>{if(!$('#agree').checked){e.preventDefault();return}$('#tgBtn').href=botLink();st.contact='перешёл в Telegram-бота';st.channel='Telegram';st.name='';send(leadText());result();show('s-result')});

  /* ===== contact ===== */
  let channel='WhatsApp';
  $('#channel').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;channel=b.dataset.v;$('#channel').querySelectorAll('button').forEach(x=>x.classList.toggle('sel',x===b))});
  const syncAgree=()=>{const on=$('#agree').checked;$('#form button[type=submit]').disabled=!on;$('#tgBtn').classList.toggle('is-off',!on);$('#tgBtn').setAttribute('aria-disabled',on?'false':'true');if(on)$('#fAgree').classList.remove('err')};
  $('#agree').addEventListener('change',syncAgree);syncAgree();
  $('#form').addEventListener('submit',e=>{
    e.preventDefault();
    if(!$('#agree').checked){$('#fAgree').classList.add('err');return}
    const c=$('#contact').value.trim();
    if(c.replace(/\D/g,'').length<10){$('#fContact').classList.add('err');$('#contact').focus();return}
    $('#fContact').classList.remove('err');
    st.contact=c;st.name=$('#name').value.trim();st.channel=channel;
    send(leadText());
    result();show('s-result');
  });

  function leadText(extra){
    const z=zones(),ind=IND.find(x=>x.id===st.ind);
    return ['Заявка из квиза ФОРАЙТИ'+(extra?' (обновление)':''),
      'Контакт: '+st.contact+' ('+st.channel+')'+(st.name?', '+st.name:''),
      'Отрасль: '+(ind?ind.t:'—'),
      ...ABOUT.map(g=>g.t+': '+(st[g.k]>=0&&st[g.k]!==null?g.a[st[g.k]]:'не указано')),
      'Зоны: '+z.map(x=>x.d.t+' — '+x.lvl[1]).join('; '),
      'Ответы: '+steps().filter(s=>s.k==='depth').map(s=>s.dir.qs[s.qi].q+' → '+s.dir.qs[s.qi].a[st.depth[s.dir.id+s.qi]]).join(' | '),
      'Системы: '+(st.sys.join(', ')||'—'),
      'Ручной сбор цифр: '+HOURS[st.hours][0]+'/нед (~'+hrsMonth()+' ч/мес)',
      extra?'Удобное время разбора: '+extra:'',
      location.search?'UTM: '+location.search:''].filter(Boolean).join('\n');
  }
  function send(text){
    try{
      if(CONFIG.LEAD_ENDPOINT)fetch(CONFIG.LEAD_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text,state:st})}).catch(()=>{});
      else if(CONFIG.TG_TOKEN&&CONFIG.TG_CHAT)fetch('https://api.telegram.org/bot'+CONFIG.TG_TOKEN+'/sendMessage',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({chat_id:CONFIG.TG_CHAT,text})}).catch(()=>{});
      else sendTilda(text);
    }catch(e){}
  }

  /* ===== заявка через форму Тильды на странице (скрытая, уже подключена к Битрикс24) ===== */
  const PK='fourit_quiz_pending';let tBusy=0,tNext=null,tOnce=0;
  const tHide=f=>{const b=f.closest('.r')||f.closest('[id^=rec]');if(b&&!b.contains($('#s-intro')))b.style.cssText+=';position:absolute!important;left:-10000px!important;top:0;width:1px;height:1px;overflow:hidden'};
  function findTildaForm(){
    const ok=[...document.forms].filter(f=>f.id!=='form'&&!f.closest('.screen')&&!f.closest('.t-popup,[class*=popup]')&&[...f.querySelectorAll('input')].some(i=>i.type==='tel'||/phone|тел|\+7/i.test(i.name+' '+i.placeholder)));
    return ok.find(f=>f.closest('.t396'))||ok.find(f=>f.classList.contains('t-form'))||ok[0]||null;
  }
  const tSet=(el,v)=>{const P=el instanceof HTMLTextAreaElement?HTMLTextAreaElement:HTMLInputElement;Object.getOwnPropertyDescriptor(P.prototype,'value').set.call(el,v);['input','change','blur'].forEach(t=>el.dispatchEvent(new Event(t,{bubbles:true})))};
  function tRelay(p){
    const f=findTildaForm();
    if(!f){console.warn('[quiz] Tilda form not found');return}
    if(tBusy){tNext=p;return}
    tBusy=1;tHide(f);
    f.querySelectorAll('[data-tilda-req],[required]').forEach(e=>{e.removeAttribute('data-tilda-req');e.removeAttribute('required')});
    f.removeAttribute('data-success-url');
    const I=[...f.querySelectorAll('input')].filter(i=>i.type!=='hidden'&&i.type!=='checkbox');
    const nm=I.find(i=>/^(text|)$/.test(i.type)&&/name|имя/i.test(i.name+' '+i.placeholder)&&!/mail|почт|phone|тел/i.test(i.name+' '+i.placeholder));
    const ph=I.find(i=>i.type==='tel'||/phone|тел|\+7/i.test(i.name+' '+i.placeholder));
    const tk=f.querySelector('textarea')||I.find(i=>i!==nm&&i!==ph&&/задач|textarea|comment|коммент/i.test(i.name+' '+i.placeholder));
    if(nm)tSet(nm,p.name||'Квиз');
    const d=(p.phone||'').replace(/\D/g,''),l=d.length>10&&/^[78]/.test(d)?d.slice(1):d,full=l.length===10?'+7'+l:'+'+d;
    if(d){
      if(ph){const mk=/mask/i.test(ph.className+' '+[...ph.attributes].map(a=>a.name).join(' '))||/0{3}/.test(ph.placeholder);tSet(ph,mk?l:full)}
      f.querySelectorAll('input[type=hidden][name*=phone i],input[name="tildaspec-phone-part[]"]').forEach(h=>tSet(h,h.name==='tildaspec-phone-part[]'?l:full));
    }
    if(tk)tSet(tk,p.text+'\nКанал: '+p.channel+'\nКод: '+p.code);
    f.querySelectorAll('input[type=checkbox]').forEach(c=>{c.checked=true;c.dispatchEvent(new Event('change',{bubbles:true}))});
    const sb='.js-successbox,.t-form__successbox';
    f.classList.remove('js-send-form-success');
    f.querySelectorAll(sb).forEach(e=>{e.style.display='none'});
    const b=f.querySelector('[type=submit],.t-submit,.tn-form__submit button');
    if(!b){console.warn('[quiz] Tilda submit button not found');tBusy=0;return}
    b.click();
    const fl=[nm,tk].filter(Boolean),ok=()=>f.classList.contains('js-send-form-success')||[...f.querySelectorAll(sb)].some(e=>getComputedStyle(e).display!=='none')||(fl.length>0&&fl.every(e=>!e.value));
    let n=0;const t=setInterval(()=>{
      n++;const s=ok();
      if(s||n>30){
        clearInterval(t);
        if(s)try{const o=JSON.parse(localStorage[PK]||'null');if(o&&o.ts===p.ts)localStorage.removeItem(PK)}catch(e){}
        tBusy=0;if(tNext){const q=tNext;tNext=null;tRelay(q)}
      }
    },500);
  }
  function sendTilda(text){
    const p={text,phone:(st.contact||'').replace(/\D/g,''),name:st.name||'',channel:st.channel||'',code:code(),ts:Date.now()};
    try{localStorage[PK]=JSON.stringify(p)}catch(e){}
    tRelay(p);
  }
  [0,500,1500,4000].forEach((dl,k)=>setTimeout(()=>{
    const f=findTildaForm();let o=null;
    try{o=JSON.parse(localStorage[PK]||'null')}catch(e){}
    if(o&&!(Date.now()-o.ts<6048e5))o=null;
    if(f){tHide(f);if(o&&!tOnce){tOnce=1;tRelay(o)}}
    else if(k===3&&o)console.warn('[quiz] Tilda form not found');
  },dl));

  /* ===== result ===== */
  function result(){
    const z=zones(),hm=hrsMonth(),year=hm*12*HOUR_RATE;
    const opsCase=st.ind==='prod'||st.dirs.some(d=>d==='ops'||d==='team');
    const cs=opsCase?{img:'https://cdn.jsdelivr.net/gh/ronkin32222/fourit-quiz-assets@8464c70/a22.webp',tag:'Кровельные материалы и собственное производство',t:'Кровмонтаж46: учёт, склад и производство в одном процессе',p:'Маржа заказа считалась через 30 дней после сдачи, часть заказов оказывалась убыточной уже после закрытия. Теперь плановая маржа видна до подтверждения заказа.',n:[['до 40 ч','в месяц рутины сняли с одного менеджера'],['до 240 000 ₽','в год, эквивалент высвобождённого времени'],['4 склада','остатки и резервы в едином учёте']],note:'Расчёт по данным клиента.',url:'https://fourit.net/case_avtomatizaciya-proizvodstva-krovmontazh46'}
      :{img:'https://cdn.jsdelivr.net/gh/ronkin32222/fourit-quiz-assets@8464c70/a23.webp',tag:'Оптовые поставки пищевых ингредиентов',t:'Доминант: прибыль заявки видна до отгрузки',p:'В заявке до отгрузки видны выручка, себестоимость, налоги и расчётная прибыль. Невыгодную поставку видно заранее.',n:[['14,8%','маржа, которая видна в заявке до отгрузки'],['5','управленческих дашбордов'],['10','отчётов 1С в основе аналитики']],note:'Показатель по одной заявке.',url:'https://fourit.net/raschet-pribyli-zakaza-dominant'};
    const have=st.sys.filter(s=>['1С','Битрикс24','amoCRM'].includes(s));
    const sysTx=have.length?`У вас уже есть <b>${have.join(', ')}</b>. Порядок строим на этом, без переезда в новую систему.`
      :st.sys.length?'Данные сейчас в таблицах и переписке. Первым шагом соберём их в одну систему, 1С или Битрикс24, под ваш процесс.'
      :'На разборе посмотрим, где живут данные, и предложим самый простой рабочий путь.';
    const name=st.name?st.name+', в':'В';
    $('#s-result').innerHTML=`
      <div class="res-hero"><div class="wrap">
        <div class="label">Ваша точка А</div>
        <h1>${name}аши главные зоны потерь: ${z.map(x=>x.d.t.toLowerCase()).join(' и ')}</h1>
        <p>Это самооценка по вашим ответам. Точную цифру потерь и показатель для договора посчитаем на разборе по вашим данным.</p>
        <div class="money"><div><b>≈ ${hm} ч</b><small>в месяц по вашей оценке</small></div>
          <p>столько уходит у вас и руководителей на сбор цифр и ручной контроль. Это около <b>${rub(year)} в год</b>, если час руководителя стоит ${rub(HOUR_RATE)}. На разборе подставим вашу ставку.</p></div>
        <a class="tgsave" href="${botLink()}" target="_blank" rel="noopener"><svg class="tgi" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21.9 4.3 18.7 19.4c-.2 1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9.1-8.2c.4-.4-.1-.6-.6-.2L6.3 13 1.5 11.5c-1-.3-1-1 .2-1.5L20.6 2.7c.9-.3 1.6.2 1.3 1.6z"/></svg><span>Сохранить результат в Telegram, чтобы не потерять</span><b>→</b></a>
      </div></div>
      <div class="res-body"><div class="wrap">
        <div class="label">Что видно по ответам</div>
        <h2>Где утекают деньги и что меняем первым</h2>
        <div class="zones">${z.map(x=>`<article class="zone">
          <div class="zone-top"><div><span class="lvl ${x.lvl[0]}">${x.lvl[1]}</span><h3>${x.d.t}</h3></div><img src="${x.d.img}" alt=""></div>
          <div class="quote">${x.d.q}</div>
          <h4>По вашим ответам</h4><ul class="finds">${x.finds.map(f=>`<li class="${f.ok?'ok':''}">${f.t}</li>`).join('')}</ul>
          <h4>Что меняем первым</h4><ul class="dos">${x.d.dos.map(t=>`<li>${t}</li>`).join('')}</ul>
          <h4>Результаты клиентов в этом направлении</h4>
          <div class="nums">${x.d.nums.map(n=>`<div><b>${n[0]}</b><span>${n[1]}</span></div>`).join('')}</div>
        </article>`).join('')}</div>
        <p class="fine">Цифры направлений: целевые ориентиры по проектам ФОРАЙТИ. Точная цель фиксируется в договоре после замера точки А.</p>
        <div class="sys"><img src="https://cdn.jsdelivr.net/gh/ronkin32222/fourit-quiz-assets@8464c70/a24.webp" alt=""><span>${sysTx}</span></div>

        <div class="tgblock">
          <div><div class="label">Продолжение в Telegram</div><h2>Заберите план по вашим зонам</h2>
            <ul class="dos big">
              <li><b>План на 14 дней:</b> что сделать самому по зонам «${z.map(x=>x.d.t.toLowerCase()).join('» и «')}», по шагам</li>
              <li><b>Чек-лист «5 цифр на каждое утро»</b> для вашей отрасли: какие цифры смотреть и где их брать</li>
              <li><b>Подробный разбор похожего кейса:</b> что было, что сделали, сколько заняло</li>
              <li><b>Запись на разбор 30 минут</b> кнопкой, без переписки</li>
            </ul>
            <a class="btn tg" href="${botLink()}" target="_blank" rel="noopener"><svg class="tgi" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21.9 4.3 18.7 19.4c-.2 1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9.1-8.2c.4-.4-.1-.6-.6-.2L6.3 13 1.5 11.5c-1-.3-1-1 .2-1.5L20.6 2.7c.9-.3 1.6.2 1.3 1.6z"/></svg>Забрать план в Telegram</a>
            <p class="tgnote">Бот пришлёт всё сразу после нажатия «Старт». Три сообщения за неделю, отписка одной кнопкой.</p></div>
          <div class="chat" aria-hidden="true">
            <div class="chat-top"><span class="ava">Ф</span><div><b>ФОРАЙТИ</b><small>бот</small></div></div>
            <div class="msg">${st.name?st.name+', в':'В'}аша точка А:<br>${z.map(x=>'• '+x.d.t+': '+x.lvl[1].toLowerCase()).join('<br>')}</div>
            <div class="msg">📎 План на 14 дней по двум зонам</div>
            <div class="msg">📎 Чек-лист «5 цифр на каждое утро»</div>
            <div class="kb"><span>Выбрать время разбора</span><span>Вопрос Глебу</span></div>
          </div>
        </div>

        <div class="case"><div class="case-img"><img src="${cs.img}" alt=""></div><div class="case-tx">
          <div class="label">Похожий кейс · ${cs.tag}</div><h3>${cs.t}</h3><p>${cs.p}</p>
          <div class="case-nums">${cs.n.map(n=>`<div><b>${n[0]}</b><span>${n[1]}</span></div>`).join('')}</div>
          <small>${cs.note}</small><a href="${cs.url}" target="_blank" rel="noopener">Читать кейс полностью ↗</a></div></div>

        <div class="next">
          <div><div class="label">Следующий шаг</div><h2>Разбор 30 минут с Глебом Сторожевым</h2>
            <ol class="steps"><li>Проверим две зоны потерь на ваших цифрах, а не на ощущениях</li><li>Назовём показатель, который можно записать в договор</li><li>Честно скажем, нужен ли проект. Если нет, так и скажем</li></ol>
            <p class="call">Бесплатно и без обязательств. Не хотите ждать? Позвоните: <a href="tel:${CONFIG.PHONE.replace(/[^\d+]/g,'')}">${CONFIG.PHONE}</a></p></div>
          <div class="slot"><h3>Когда вам удобно?</h3><p>Выберите время, мы напишем в ${st.channel==='Звонок'?'ответ звонком':st.channel} и подтвердим.</p>
            <div class="slots" id="slots"><button type="button">Сегодня</button><button type="button">Завтра до обеда</button><button type="button">Завтра после обеда</button><button type="button">В другой день на неделе</button></div>
            <div class="slot-ok" id="slotOk">Принято. Глеб свяжется с вами в течение рабочего дня и подтвердит время.</div></div>
        </div>
        <button class="again" type="button" id="again">Пройти тест заново</button>
      </div></div>`;
    $('#slots').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;$('#slots').querySelectorAll('button').forEach(x=>x.classList.toggle('sel',x===b));$('#slotOk').classList.add('on');send(leadText(b.textContent))});
    $('#again').addEventListener('click',()=>{Object.assign(st,{ind:null,dirs:[],depth:{},sys:[],hours:null,turn:null});i=0;render();show('s-quiz')});
  }
  