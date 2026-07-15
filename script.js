/* ==========================================================================
   B2B Clean Space — home cleaning Dubai (B2C landing)
   Vanilla JS: EN/RU switch, mobile menu, tabs, FAQ accordion,
   property picker, form validation, WhatsApp message builder.
   ========================================================================== */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
     Contact details. WA_NUMBER is the WhatsApp line the estimate form
     writes to — digits only, no "+" and no spaces.
     ------------------------------------------------------------------ */
  var WA_NUMBER = '971588573373';
  var PHONE_MAIN = '+971 58 699 7277';

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ==================================================================
     1. TRANSLATIONS
     ================================================================== */
  var I18N = {
    en: {
      'skip': 'Skip to content',
      'brand.tag': 'Home cleaning · Dubai',

      'nav.services': 'Services',
      'nav.included': 'What’s Included',
      'nav.how': 'How It Works',
      'nav.why': 'Why Us',
      'nav.faq': 'FAQ',
      'nav.contacts': 'Contacts',
      'nav.cta': 'Get a Quote',

      'cta.estimate': 'Get a Cleaning Estimate',
      'cta.wa': 'Book via WhatsApp',
      'cta.calc': 'Get an estimate',
      'cta.send': 'Send Property Details',
      'cta.quote': 'Request a Quote',
      'wa.float': 'WhatsApp',

      'hero.eyebrow': 'Home cleaning · Dubai',
      'hero.h1': 'Your home, handed back to you <span class="y-mark">clean.</span>',
      'hero.sub': 'B2B Clean Space organises the full cleaning process — understanding the property, agreeing the scope, preparing the right team and equipment, controlling quality and handing the result back to you.',
      'hero.c1': 'Own professional equipment',
      'hero.c2': 'Quality control on every job',
      'hero.c3': 'Trained, uniformed team',
      'hero.c4': 'Photo & video reporting',
      'hero.badge.k': 'Estimate from',
      'hero.badge.s': 'Regular cleaning, 1-bedroom apartment',

      'trust.1.v': 'Since 2006',
      'trust.1': 'In professional cleaning',
      'trust.2': 'Projects completed',
      'trust.3.v': '2 hours',
      'trust.3': 'Staff replacement',
      'trust.4': 'Available, seven days a week',

      'killer.eyebrow': 'The difference',
      'killer.text': 'You don’t need to find cleaners, explain the job to each of them and check the result yourself. <em>We organise the service and stay responsible for it.</em>',
      'killer.cap': 'What you come home to',

      'price.180': 'from 180 AED',
      'price.350': 'from 350 AED',
      'price.650': 'from 650 AED',
      'price.30': 'from 30 AED',
      'price.60': 'from 60 AED',
      'price.15': 'from 15 AED/m²',

      'svc.eyebrow': 'Services',
      'svc.h2': 'Cleaning for apartments, residences and villas',
      'svc.lead': 'Every job starts with the property, not with a price list. Tell us what you have and what you need — we confirm the scope and the figure before anyone arrives.',
      'svc.byscope': 'Priced by scope',
      'svc.1.t': 'Regular home cleaning',
      'svc.1.d': 'Keeps an apartment or villa in order on a schedule that suits you — weekly, fortnightly or on request.',
      'svc.1.c': 'For families and professionals who’d rather not spend the weekend on it.',
      'svc.2.t': 'Deep cleaning',
      'svc.2.d': 'A full pass across the property, including hard-to-reach areas, kitchen grease, limescale and surfaces that everyday cleaning never gets to.',
      'svc.2.c': 'Before guests arrive, at the start of a season, or when it’s simply overdue.',
      'svc.3.t': 'Move-in cleaning',
      'svc.3.d': 'A deep clean of an empty property before you take it over — inside cupboards, appliances, glass and floors.',
      'svc.3.c': 'So the first night in a new home doesn’t start with a bucket.',
      'svc.4.t': 'Move-out cleaning',
      'svc.4.d': 'Bringing a property back to a presentable state at the end of a tenancy, with photo reporting you can forward on.',
      'svc.4.c': 'For tenants handing keys back and owners preparing the next let.',
      'svc.5.t': 'Post-renovation cleaning',
      'svc.5.d': 'Construction dust, paint, adhesive and foam residue removed from surfaces, glass and hard-to-reach zones with industrial equipment.',
      'svc.5.c': 'The stage between “the builders are done” and “we can actually live here”.',
      'svc.6.t': 'Window & glass cleaning',
      'svc.6.d': 'Both sides, at height where needed, including frames, seals and fittings — with certified specialists for external work.',
      'svc.6.c': 'Panoramic glazing, balcony doors, glass partitions.',
      'svc.7.t': 'Upholstery cleaning',
      'svc.7.d': 'Extractor cleaning of sofas, armchairs, mattresses and headboards. Chemicals are matched to the fabric; drying is accelerated on site.',
      'svc.7.c': 'Priced per seat — sofas are usually usable again within hours.',
      'svc.8.t': 'Carpet & rug cleaning',
      'svc.8.d': 'Dust, stains and odours removed through the full depth of the pile, with extractors and water vacuums rather than surface shampooing.',
      'svc.8.c': 'Natural and synthetic pile, fitted or loose.',
      'svc.9.t': 'Curtains & blinds',
      'svc.9.d': 'Cleaned in place on the rail where possible — no dismantling, no reinstallation, minimal disruption to the room.',
      'svc.9.c': 'Sheers, heavy drapes, natural and synthetic fabrics.',
      'svc.fine': 'Prices shown are starting figures from our current price list and are confirmed after we understand the property. Final cost depends on area, property type, condition, cleaning type, team size, equipment, additional tasks, urgency and access.',

      'prop.eyebrow': 'Start here',
      'prop.h2': 'What would you like us to clean?',
      'prop.lead': 'Pick a property type — we’ll carry it into the form for you.',
      'prop.1': 'Apartment',
      'prop.2': 'Serviced Apartment',
      'prop.3': 'Penthouse',
      'prop.4': 'Townhouse',
      'prop.5': 'Villa',
      'prop.6': 'Other Property',

      'inc.eyebrow': 'What’s included',
      'inc.h2': 'Room by room, not “everything”',
      'inc.lead': 'A typical scope for a home clean. The exact list is agreed with you beforehand and depends on the service you choose.',
      'inc.t1': 'Living areas',
      'inc.t2': 'Bedrooms',
      'inc.t3': 'Kitchen',
      'inc.t4': 'Bathrooms',
      'inc.t5': 'Floors & skirting',
      'inc.t6': 'Glass & mirrors',
      'inc.t7': 'Furniture surfaces',
      'inc.t8': 'Balconies & outdoor',
      'inc.l1': [
        'Dust removed from all reachable surfaces, including shelves and décor',
        'Vacuuming and washing of floors and rugs',
        'Skirting, switches, handles and door frames wiped',
        'Waste removed and bins relined',
        'Room aired and finished as a whole, zone by zone'
      ],
      'inc.l2': [
        'All surfaces dusted, including behind and under reachable furniture',
        'Floors vacuumed and washed',
        'Beds made on request',
        'Items tidied and returned to place on request',
        'Mirrors and glass polished'
      ],
      'inc.l3': [
        'Worktops, splashbacks and cabinet fronts cleaned',
        'Grease and residue removed from the hob and reachable surfaces',
        'Sink and mixer descaled and polished',
        'Appliance exteriors wiped; interiors on request',
        'Waste removed and the area finished dry'
      ],
      'inc.l4': [
        'Sanitaryware, mixers and fittings cleaned and descaled',
        'Tiles, glass screens and mirrors cleaned',
        'Limescale and residue removed from reachable surfaces',
        'Floors washed and drains wiped down',
        'Professional chemicals matched to each surface'
      ],
      'inc.l5': [
        'Vacuuming with professional equipment, including corners and edges',
        'Washing with chemicals matched to the floor material',
        'Skirting and thresholds cleaned by hand',
        'Marble, porcelain, tile, wood-effect and poured floors handled appropriately',
        'Machine floor treatment available where the property calls for it'
      ],
      'inc.l6': [
        'Interior glass, mirrors and glass partitions cleaned streak-free',
        'Fresh cloths used on every property — no reused, smeared microfibre',
        'Frames, seals and fittings cleaned as part of window work',
        'External glazing and panoramic windows quoted separately',
        'Height work carried out by certified specialists'
      ],
      'inc.l7': [
        'Hard surfaces of tables, cabinets and shelving cleaned',
        'Reachable surfaces behind and under furniture cleaned',
        'Upholstery vacuumed; extractor cleaning available as a separate service',
        'Chemicals matched to the material to protect the finish',
        'Furniture moved by our team where access requires it'
      ],
      'inc.l8': [
        'Balcony and terrace floors washed',
        'Railings, glass balustrades and furniture wiped down',
        'Dust and sand build-up removed from corners and joints',
        'Pressure-washing of outdoor tile and paving available for villas and townhouses',
        'Outdoor scope agreed in advance — it depends on access and building rules'
      ],
      'inc.note': 'The final scope is confirmed before work begins and depends on the selected service, property condition and client requirements.',

      'why.eyebrow': 'Why B2B Clean Space',
      'why.h2': 'A company, not a set of contacts',
      'why.lead': 'We have run cleaning as a managed service since 2006 — across offices, hotels, retail and residential properties. The same structure now works on homes.',
      'why.cap': 'Same standards. Fewer square metres.',
      'why.1.t': 'Trained, uniformed team',
      'why.1.d': 'Every cleaner is selected, checked and trained before going to a property, and works in uniform under a supervisor.',
      'why.2.t': 'Professional chemicals and equipment',
      'why.2.d': 'Extractors, industrial vacuums, rotary and scrubber machines arrive with the team. You buy nothing.',
      'why.3.t': 'Chemicals safe for children and pets',
      'why.3.d': 'Products are matched to the surface and chosen to be safe for the people who live with the result.',
      'why.4.t': 'Quality control on every job',
      'why.4.d': 'A manager checks the work against the agreed scope. If something was missed, we come back and correct it at no charge.',
      'why.5.t': 'Clear scope before work begins',
      'why.5.d': 'The estimate is fixed before anyone arrives. No surprise additions once the job is under way.',
      'why.6.t': 'Replacement within two hours',
      'why.6.d': 'With 2 000+ cleaners in reserve, a team that can’t attend is replaced rather than rescheduled.',
      'why.7.t': 'Photo and video reporting',
      'why.7.d': 'You see the result whether or not you were there, and any pre-existing damage we find is recorded.',
      'why.8.t': 'Insured and confidential',
      'why.8.d': 'The work is insured, and we treat your home and your privacy as part of the job.',

      'how.eyebrow': 'How it works',
      'how.h2': 'Five steps, and only one of them is yours',
      'how.lead': 'Most clients are done with their part in a couple of minutes on WhatsApp.',
      'how.1.t': 'Send property details',
      'how.1.d': 'Type, area, number of bedrooms, location and what you need. Photos or a short video help — they’re not required.',
      'how.2.t': 'Receive an initial estimate',
      'how.2.d': 'We come back with a figure and what it covers. For larger properties we can visit and assess at no charge.',
      'how.3.t': 'Confirm scope and schedule',
      'how.3.d': 'Scope, date, time and access are agreed and fixed. The price stops moving here.',
      'how.4.t': 'Our team completes the cleaning',
      'how.4.d': 'The right team size arrives with equipment and chemicals, and works to the agreed list under a supervisor.',
      'how.5.t': 'Quality check and handover',
      'how.5.d': 'A manager checks the result against the scope, sends reporting, and hands the property back to you or your representative.',

      'ab.eyebrow': 'Remote owners',
      'ab.h2': 'You don’t need to be in Dubai to prepare your property.',
      'ab.lead': 'A large share of our residential work is arranged by owners who are somewhere else entirely. The process is built for that.',
      'ab.1': 'Access agreed with you, your tenant, the building or your representative',
      'ab.2': 'The property cleaned to the scope you approved',
      'ab.3': 'Photo and video reporting sent to you directly',
      'ab.4': 'Anything we find — damage, leaks, wear — recorded and reported, not quietly ignored',
      'ab.5': 'Property prepared for move-in, a new tenancy or a viewing',
      'ab.6': 'Result handed over to you or to the person you nominate',

      'est.eyebrow': 'Estimate',
      'est.h2': 'Get your cleaning estimate',
      'est.lead': 'Fill in what you know. The form builds a structured message and opens WhatsApp — nothing is sent anywhere else.',
      'est.p1': 'Assessment and estimate are free',
      'est.p2': 'Scope and price fixed before work begins',
      'est.p3': 'We reply between 7:00 and 22:00, seven days a week',
      'est.call': 'Call',
      'est.email': 'Email',

      'f.prop': 'Property type <em>*</em>',
      'f.type': 'Cleaning type <em>*</em>',
      'f.beds': 'Number of bedrooms',
      'f.area': 'Approximate area, m²',
      'f.loc': 'Community or location in Dubai <em>*</em>',
      'f.date': 'Preferred date',
      'f.name': 'Name <em>*</em>',
      'f.phone': 'Phone / WhatsApp <em>*</em>',
      'f.mail': 'Email <span class="opt">(optional)</span>',
      'f.opt': '(optional)',
      'f.note': 'Comment',
      'f.notePh': 'Anything we should know — pets, access, problem areas, timing',
      'f.media': 'I can send photos or a video of the property',
      'f.submit': 'Send via WhatsApp',
      'f.choose': 'Choose…',
      'f.other': 'Not sure yet',
      'f.foot': 'Your details are used only to prepare an estimate. The form opens WhatsApp with your message ready to send.',
      'f.ok': 'WhatsApp is opening with your details. If nothing happened, message us on ' + PHONE_MAIN + '.',
      'err.req': 'Please fill this in',
      'err.sel': 'Please choose an option',
      'err.phone': 'Please enter a valid phone number',
      'err.mail': 'Please enter a valid email address',

      'faq.eyebrow': 'FAQ',
      'faq.h2': 'Questions we get before the first job',
      'faq.lead': 'If yours isn’t here, message us — we’d rather answer it before you book than after.',
      'faq.1.q': 'How much does apartment cleaning cost in Dubai?',
      'faq.1.a': 'Regular home cleaning starts from 180 AED for a one-bedroom apartment, deep cleaning from 350 AED, and post-renovation cleaning from 650 AED. Those are starting figures — the real number depends on your property.',
      'faq.2.q': 'How is the final price calculated?',
      'faq.2.a': 'We look at area, property type, current condition, the cleaning type you need, how many cleaners it takes, the equipment involved, any additional tasks, how urgent it is and how accessible the property is. Once we’ve agreed the figure, it doesn’t change mid-job.',
      'faq.3.q': 'Do you bring equipment and chemicals?',
      'faq.3.a': 'Yes. The team arrives with professional equipment — industrial vacuums, extractors and machines where the job needs them — and with chemicals matched to your surfaces. You don’t buy consumables, equipment or uniforms.',
      'faq.4.q': 'Can I book cleaning while I am outside the UAE?',
      'faq.4.a': 'Yes, and it’s common. We agree access with you, your tenant, your representative or the building, complete the work, and send photo and video reporting. Anything we find in the property is reported to you.',
      'faq.5.q': 'Do I need to be present?',
      'faq.5.a': 'No. You’re welcome to be there, but it isn’t needed. Most clients arrange access once and receive reporting when the job is done.',
      'faq.6.q': 'How many cleaners will come?',
      'faq.6.a': 'It depends on the property and the scope — a studio and a five-bedroom villa are different jobs. We tell you the team size in the estimate, and we can put a large team on site when a deadline requires it.',
      'faq.7.q': 'Do you provide regular cleaning?',
      'faq.7.a': 'Yes — weekly, fortnightly or on a rhythm you set. Regular clients work to an agreed scope and schedule, and if a cleaner can’t attend we replace them rather than move your date.',
      'faq.8.q': 'Can you clean after renovation?',
      'faq.8.a': 'Yes. Post-renovation cleaning is one of our core services. We remove construction dust and traces of cement, filler, foam, adhesive and paint, and we record any damage we find in writing with photos.',
      'faq.9.q': 'Do you clean villas?',
      'faq.9.a': 'Yes — villas, townhouses and penthouses, including glazing, terraces and outdoor paving where access allows. Larger properties are usually assessed on site first, at no charge.',
      'faq.10.q': 'Can I send photos or videos for an estimate?',
      'faq.10.a': 'Yes, and it makes the estimate more accurate. Send them on WhatsApp — for upholstery, carpets and post-renovation work a few photos are often enough to price the job.',
      'faq.11.q': 'How quickly can the service be arranged?',
      'faq.11.a': 'For most jobs we can attend the next day, and urgent visits are possible depending on the property and the scope. Tell us your deadline in the first message and we’ll say honestly whether we can meet it.',
      'faq.12.q': 'Is the cleaning process supervised?',
      'faq.12.a': 'Yes. A supervisor runs the work on site and a manager checks the result against the agreed scope. If something was missed, we return and correct it at no charge.',

      'fin.h2': 'Tell us about your property.<br><em>We’ll organise the rest.</em>',
      'fin.sub': 'Send the details once. We come back with a scope and a figure — and from there it stops being your problem.',
      'fin.phones': 'Phone',
      'fin.email': 'Email',
      'fin.addr': 'Office',
      'fin.hours': 'Hours',
      'fin.hoursv': '7:00 – 22:00, seven days a week',
      'fin.contacts': 'Contacts',

      'foot.desc': 'Professional cleaning for apartments, residences and villas in Dubai. We organise the process, control the quality and hand back the result.',
      'foot.nav': 'Navigation',
      'foot.lang': 'Language',
      'foot.rights': 'All rights reserved.',
      'foot.privacy': 'Privacy Policy',
      'foot.terms': 'Terms',

      'wa.hello': 'Hello, I would like to request a cleaning estimate.',
      'wa.plain': 'Hello! I would like to ask about cleaning for my property in Dubai.',
      'wa.prop': 'Property type',
      'wa.type': 'Cleaning type',
      'wa.beds': 'Bedrooms',
      'wa.area': 'Approximate area',
      'wa.loc': 'Location',
      'wa.date': 'Preferred date',
      'wa.name': 'Name',
      'wa.mail': 'Email',
      'wa.note': 'Comment',
      'wa.media': 'I can send photos or a video of the property.'
    },

    ru: {
      'skip': 'Перейти к содержимому',
      'brand.tag': 'Уборка жилья · Дубай',

      'nav.services': 'Услуги',
      'nav.included': 'Что входит',
      'nav.how': 'Как это работает',
      'nav.why': 'Почему мы',
      'nav.faq': 'Вопросы',
      'nav.contacts': 'Контакты',
      'nav.cta': 'Получить расчёт',

      'cta.estimate': 'Получить расчёт уборки',
      'cta.wa': 'Написать в WhatsApp',
      'cta.calc': 'Получить расчёт',
      'cta.send': 'Отправить данные об объекте',
      'cta.quote': 'Запросить предложение',
      'wa.float': 'WhatsApp',

      'hero.eyebrow': 'Уборка жилья · Дубай',
      'hero.h1': 'Ваш дом — <span class="y-mark">чистый.</span> Без вашего участия.',
      'hero.sub': 'B2B Clean Space организует весь процесс: изучаем объект, согласуем объём работ, подбираем команду и оборудование, контролируем качество и передаём вам готовый результат.',
      'hero.c1': 'Собственное профессиональное оборудование',
      'hero.c2': 'Контроль качества на каждом объекте',
      'hero.c3': 'Обученная команда в форме',
      'hero.c4': 'Фото- и видеоотчёт',
      'hero.badge.k': 'Расчёт от',
      'hero.badge.s': 'Поддерживающая уборка, 1-комнатная квартира',

      'trust.1.v': 'С 2006 года',
      'trust.1': 'В профессиональном клининге',
      'trust.2': 'Выполненных проектов',
      'trust.3.v': '2 часа',
      'trust.3': 'На замену сотрудника',
      'trust.4': 'На связи, без выходных',

      'killer.eyebrow': 'В чём разница',
      'killer.text': 'Вам не нужно искать клинеров, каждому объяснять задачу и самим проверять результат. <em>Мы организуем сервис и отвечаем за него.</em>',
      'killer.cap': 'То, куда вы возвращаетесь',

      'price.180': 'от 180 AED',
      'price.350': 'от 350 AED',
      'price.650': 'от 650 AED',
      'price.30': 'от 30 AED',
      'price.60': 'от 60 AED',
      'price.15': 'от 15 AED/м²',

      'svc.eyebrow': 'Услуги',
      'svc.h2': 'Уборка квартир, апартаментов и вилл',
      'svc.lead': 'Работа начинается с объекта, а не с прайса. Расскажите, что у вас и что нужно, — объём и сумму согласуем до того, как кто-то приедет.',
      'svc.byscope': 'Расчёт по объёму',
      'svc.1.t': 'Поддерживающая уборка',
      'svc.1.d': 'Поддерживает квартиру или виллу в порядке по удобному вам графику — раз в неделю, раз в две недели или по запросу.',
      'svc.1.c': 'Для семей и занятых людей, которым жалко тратить на это выходной.',
      'svc.2.t': 'Генеральная уборка',
      'svc.2.d': 'Комплексная уборка всех помещений, включая труднодоступные места, кухонный жир, известковый налёт и поверхности, до которых обычная уборка не доходит.',
      'svc.2.c': 'Перед приездом гостей, к началу сезона или когда просто пора.',
      'svc.3.t': 'Уборка перед заселением',
      'svc.3.d': 'Глубокая уборка пустого объекта до того, как вы его примете: внутри шкафов, техника, стекло, полы.',
      'svc.3.c': 'Чтобы первый вечер в новом доме не начинался с ведра.',
      'svc.4.t': 'Уборка после переезда',
      'svc.4.d': 'Приводим объект в презентабельный вид при завершении аренды — с фотоотчётом, который можно переслать.',
      'svc.4.c': 'Для арендаторов, сдающих ключи, и собственников, готовящих объект к новой аренде.',
      'svc.5.t': 'Уборка после ремонта',
      'svc.5.d': 'Убираем строительную пыль, следы краски, клея и монтажной пены с поверхностей, стекла и труднодоступных зон — промышленным оборудованием.',
      'svc.5.c': 'Этап между «строители закончили» и «здесь можно жить».',
      'svc.6.t': 'Мойка окон и стекла',
      'svc.6.d': 'С двух сторон, при необходимости на высоте, включая рамы, уплотнители и фурнитуру. Наружные работы выполняют аттестованные специалисты.',
      'svc.6.c': 'Панорамное остекление, балконные двери, стеклянные перегородки.',
      'svc.7.t': 'Химчистка мягкой мебели',
      'svc.7.d': 'Экстракторная чистка диванов, кресел, матрасов и изголовий. Химию подбираем под ткань, сушку ускоряем на месте.',
      'svc.7.c': 'Расчёт за посадочное место — диван обычно готов к использованию через несколько часов.',
      'svc.8.t': 'Химчистка ковров и покрытий',
      'svc.8.d': 'Удаляем пыль, пятна и запахи на всю глубину ворса — экстракторами и водососами, а не поверхностным шампунем.',
      'svc.8.c': 'Натуральный и синтетический ворс, закреплённые и незакреплённые покрытия.',
      'svc.9.t': 'Химчистка штор и жалюзи',
      'svc.9.d': 'Чистим прямо на карнизе, где это возможно: без демонтажа, без обратной установки, без разбора комнаты.',
      'svc.9.c': 'Тюль, плотные портьеры, натуральные и синтетические ткани.',
      'svc.fine': 'Указаны начальные цены из действующего прайса. Итоговая стоимость подтверждается после того, как мы разберёмся с объектом, и зависит от площади, типа объекта, состояния, вида уборки, количества сотрудников, оборудования, дополнительных задач, срочности и доступности.',

      'prop.eyebrow': 'Начните отсюда',
      'prop.h2': 'Что нужно убрать?',
      'prop.lead': 'Выберите тип объекта — он автоматически подставится в форму.',
      'prop.1': 'Квартира',
      'prop.2': 'Апартаменты с сервисом',
      'prop.3': 'Пентхаус',
      'prop.4': 'Таунхаус',
      'prop.5': 'Вилла',
      'prop.6': 'Другой объект',

      'inc.eyebrow': 'Что входит',
      'inc.h2': 'По зонам, а не «всё подряд»',
      'inc.lead': 'Типовой объём работ для уборки жилья. Точный список согласуется заранее и зависит от выбранной услуги.',
      'inc.t1': 'Жилые зоны',
      'inc.t2': 'Спальни',
      'inc.t3': 'Кухня',
      'inc.t4': 'Санузлы',
      'inc.t5': 'Полы и плинтусы',
      'inc.t6': 'Стекло и зеркала',
      'inc.t7': 'Поверхности мебели',
      'inc.t8': 'Балконы и улица',
      'inc.l1': [
        'Убираем пыль со всех доступных поверхностей, включая полки и декор',
        'Пылесосим и моем полы и ковры',
        'Протираем плинтусы, выключатели, ручки и дверные коробки',
        'Выносим мусор и меняем пакеты',
        'Проветриваем и завершаем комнату целиком, зона за зоной'
      ],
      'inc.l2': [
        'Протираем все поверхности, включая доступные зоны за мебелью и под ней',
        'Пылесосим и моем полы',
        'Заправляем постель — по желанию',
        'Организуем вещи и возвращаем их на места — по желанию',
        'Полируем зеркала и стекло'
      ],
      'inc.l3': [
        'Моем столешницы, фартук и фасады шкафов',
        'Удаляем жир и налёт с плиты и доступных поверхностей',
        'Очищаем от налёта и полируем мойку и смеситель',
        'Протираем технику снаружи, внутри — по запросу',
        'Выносим мусор и оставляем зону сухой'
      ],
      'inc.l4': [
        'Чистим сантехнику, смесители и фурнитуру, удаляем налёт',
        'Моем плитку, стеклянные шторки и зеркала',
        'Удаляем известковый налёт и загрязнения с доступных поверхностей',
        'Моем полы и протираем трапы',
        'Используем профессиональную химию под каждую поверхность'
      ],
      'inc.l5': [
        'Пылесосим профессиональной техникой, включая углы и примыкания',
        'Моем составами, подобранными под материал пола',
        'Плинтусы и пороги очищаем вручную',
        'Аккуратно работаем с мрамором, керамогранитом, плиткой, ламинатом и наливными полами',
        'Машинная обработка пола — если объект этого требует'
      ],
      'inc.l6': [
        'Моем внутреннее стекло, зеркала и перегородки без разводов',
        'На каждый объект — новая ветошь, без затёртой микрофибры',
        'Рамы, уплотнители и фурнитуру чистим в рамках работ по окнам',
        'Наружное и панорамное остекление считаем отдельно',
        'Работы на высоте выполняют аттестованные специалисты'
      ],
      'inc.l7': [
        'Моем твёрдые поверхности столов, шкафов и стеллажей',
        'Очищаем доступные поверхности за мебелью и под ней',
        'Пылесосим обивку; экстракторная химчистка — отдельная услуга',
        'Подбираем химию под материал, чтобы не повредить покрытие',
        'Двигаем мебель силами нашей команды, если этого требует доступ'
      ],
      'inc.l8': [
        'Моем полы балконов и террас',
        'Протираем ограждения, стеклянные балюстрады и мебель',
        'Удаляем пыль и песок из углов и швов',
        'Для вилл и таунхаусов доступна мойка уличной плитки аппаратом высокого давления',
        'Наружный объём согласуем заранее — он зависит от доступа и правил здания'
      ],
      'inc.note': 'Финальный объём работ подтверждается до начала уборки и зависит от выбранной услуги, состояния объекта и требований клиента.',

      'why.eyebrow': 'Почему B2B Clean Space',
      'why.h2': 'Компания, а не список контактов',
      'why.lead': 'С 2006 года мы ведём клининг как управляемый сервис — в офисах, отелях, ритейле и жилых комплексах. Та же система теперь работает на жилых объектах.',
      'why.cap': 'Те же стандарты. Меньше квадратных метров.',
      'why.1.t': 'Обученная команда в форме',
      'why.1.d': 'Каждый клинер проходит отбор, проверку и обучение до выезда на объект и работает в форме под контролем бригадира.',
      'why.2.t': 'Профессиональная химия и оборудование',
      'why.2.d': 'Экстракторы, промышленные пылесосы, роторные и поломоечные машины приезжают вместе с командой. Вы не покупаете ничего.',
      'why.3.t': 'Средства, безопасные для детей и животных',
      'why.3.d': 'Составы подбираются под поверхность и выбираются безопасными для тех, кто живёт с результатом.',
      'why.4.t': 'Контроль качества на каждом объекте',
      'why.4.d': 'Менеджер проверяет работу по согласованному объёму. Если что-то упустили — вернёмся и исправим бесплатно.',
      'why.5.t': 'Понятный объём до начала работ',
      'why.5.d': 'Смета фиксируется до выезда. Никаких дополнений по ходу уборки.',
      'why.6.t': 'Замена в течение двух часов',
      'why.6.d': 'В кадровом резерве более 2 000 клинеров: если команда не может выехать, мы её заменяем, а не переносим вашу дату.',
      'why.7.t': 'Фото- и видеоотчёт',
      'why.7.d': 'Вы видите результат, даже если вас не было на объекте, а найденные повреждения мы фиксируем.',
      'why.8.t': 'Страховка и конфиденциальность',
      'why.8.d': 'Работы застрахованы, а ваш дом и ваша приватность — часть нашей ответственности.',

      'how.eyebrow': 'Как это работает',
      'how.h2': 'Пять шагов, и только один из них — ваш',
      'how.lead': 'Большинство клиентов закрывают свою часть за пару минут в WhatsApp.',
      'how.1.t': 'Отправьте данные об объекте',
      'how.1.d': 'Тип, площадь, количество спален, район и что нужно сделать. Фото или короткое видео помогут — но они не обязательны.',
      'how.2.t': 'Получите предварительный расчёт',
      'how.2.d': 'Возвращаемся с суммой и списком того, что в неё входит. На крупные объекты можем бесплатно выехать на осмотр.',
      'how.3.t': 'Согласуйте объём и график',
      'how.3.d': 'Фиксируем объём, дату, время и доступ. На этом цена перестаёт двигаться.',
      'how.4.t': 'Команда выполняет уборку',
      'how.4.d': 'Приезжает нужное количество специалистов со своим оборудованием и химией и работает по согласованному списку под контролем бригадира.',
      'how.5.t': 'Проверка качества и передача',
      'how.5.d': 'Менеджер сверяет результат с объёмом, отправляет отчёт и передаёт объект вам или вашему представителю.',

      'ab.eyebrow': 'Собственникам за границей',
      'ab.h2': 'Чтобы подготовить объект, необязательно быть в Дубае.',
      'ab.lead': 'Значительная часть наших работ по жилью организуется собственниками, которые находятся совсем в другой стране. Процесс под это и построен.',
      'ab.1': 'Согласование доступа с вами, арендатором, зданием или вашим представителем',
      'ab.2': 'Уборка объекта в согласованном вами объёме',
      'ab.3': 'Фото- и видеоотчёт напрямую вам',
      'ab.4': 'Всё, что найдём — повреждения, протечки, износ — фиксируем и сообщаем, а не замалчиваем',
      'ab.5': 'Подготовка объекта к заселению, новой аренде или показу',
      'ab.6': 'Передача результата вам или назначенному вами человеку',

      'est.eyebrow': 'Расчёт',
      'est.h2': 'Получите расчёт уборки',
      'est.lead': 'Заполните то, что знаете. Форма соберёт структурированное сообщение и откроет WhatsApp — больше данные никуда не уходят.',
      'est.p1': 'Осмотр и расчёт — бесплатно',
      'est.p2': 'Объём и цена фиксируются до начала работ',
      'est.p3': 'Отвечаем с 7:00 до 22:00, без выходных',
      'est.call': 'Позвонить',
      'est.email': 'Почта',

      'f.prop': 'Тип объекта <em>*</em>',
      'f.type': 'Тип уборки <em>*</em>',
      'f.beds': 'Количество спален',
      'f.area': 'Примерная площадь, м²',
      'f.loc': 'Район или локация в Дубае <em>*</em>',
      'f.date': 'Желаемая дата',
      'f.name': 'Имя <em>*</em>',
      'f.phone': 'Телефон / WhatsApp <em>*</em>',
      'f.mail': 'Email <span class="opt">(необязательно)</span>',
      'f.opt': '(необязательно)',
      'f.note': 'Комментарий',
      'f.notePh': 'Что нам стоит знать — животные, доступ, проблемные зоны, сроки',
      'f.media': 'Готов(а) прислать фото или видео объекта',
      'f.submit': 'Отправить в WhatsApp',
      'f.choose': 'Выберите…',
      'f.other': 'Пока не определился',
      'f.foot': 'Данные используются только для подготовки расчёта. Форма открывает WhatsApp с уже готовым сообщением.',
      'f.ok': 'Открываем WhatsApp с вашими данными. Если ничего не произошло — напишите нам на ' + PHONE_MAIN + '.',
      'err.req': 'Пожалуйста, заполните это поле',
      'err.sel': 'Пожалуйста, выберите вариант',
      'err.phone': 'Укажите корректный номер телефона',
      'err.mail': 'Укажите корректный email',

      'faq.eyebrow': 'Вопросы',
      'faq.h2': 'Что спрашивают перед первой уборкой',
      'faq.lead': 'Если вашего вопроса здесь нет — напишите. Лучше ответить до заказа, чем после.',
      'faq.1.q': 'Сколько стоит уборка квартиры в Дубае?',
      'faq.1.a': 'Поддерживающая уборка — от 180 AED за 1-комнатную квартиру, генеральная — от 350 AED, уборка после ремонта — от 650 AED. Это начальные цифры: итог зависит от вашего объекта.',
      'faq.2.q': 'Как формируется итоговая цена?',
      'faq.2.a': 'Смотрим на площадь, тип объекта, состояние, нужный вид уборки, количество сотрудников, оборудование, дополнительные задачи, срочность и доступность объекта. После согласования сумма по ходу работ не меняется.',
      'faq.3.q': 'Вы привозите оборудование и химию?',
      'faq.3.a': 'Да. Команда приезжает с профессиональным оборудованием — промышленными пылесосами, экстракторами и машинами, если они нужны, — и с химией под ваши поверхности. Расходники, оборудование и спецодежду вы не покупаете.',
      'faq.4.q': 'Можно заказать уборку, находясь за пределами ОАЭ?',
      'faq.4.a': 'Да, и это обычная практика. Согласуем доступ с вами, арендатором, вашим представителем или зданием, выполняем работы и присылаем фото- и видеоотчёт. Обо всём, что нашли на объекте, сообщаем вам.',
      'faq.5.q': 'Нужно ли моё присутствие?',
      'faq.5.a': 'Нет. Вы можете быть на объекте, но это не обязательно. Большинство клиентов один раз организуют доступ и получают отчёт по итогу.',
      'faq.6.q': 'Сколько клинеров приедет?',
      'faq.6.a': 'Зависит от объекта и объёма: студия и вилла с пятью спальнями — разные задачи. Количество специалистов указываем в расчёте, а при необходимости выводим на объект большую бригаду.',
      'faq.7.q': 'Делаете ли вы регулярную уборку?',
      'faq.7.a': 'Да — раз в неделю, раз в две недели или в вашем ритме. Постоянные клиенты работают по согласованному объёму и графику, и если клинер не может выехать, мы меняем его, а не вашу дату.',
      'faq.8.q': 'Убираете после ремонта?',
      'faq.8.a': 'Да, послестроительная уборка — одна из наших основных услуг. Удаляем строительную пыль, следы цемента, шпаклёвки, пены, клея и краски, а найденные повреждения фиксируем письменно и с фото.',
      'faq.9.q': 'Убираете виллы?',
      'faq.9.a': 'Да — виллы, таунхаусы и пентхаусы, включая остекление, террасы и уличную плитку, если позволяет доступ. Крупные объекты обычно сначала смотрим на месте, бесплатно.',
      'faq.10.q': 'Можно прислать фото или видео для расчёта?',
      'faq.10.a': 'Да, и расчёт получится точнее. Присылайте в WhatsApp: по мягкой мебели, коврам и уборке после ремонта нескольких фото часто достаточно.',
      'faq.11.q': 'Как быстро можно организовать уборку?',
      'faq.11.a': 'По большинству задач выезжаем уже на следующий день, срочный выезд возможен — зависит от объекта и объёма. Напишите ваш срок в первом сообщении, и мы честно скажем, успеваем ли.',
      'faq.12.q': 'Контролируется ли процесс уборки?',
      'faq.12.a': 'Да. На объекте работой руководит бригадир, а менеджер сверяет результат с согласованным объёмом. Если что-то упустили — вернёмся и исправим бесплатно.',

      'fin.h2': 'Расскажите про объект.<br><em>Остальное организуем мы.</em>',
      'fin.sub': 'Отправьте данные один раз. Мы вернёмся с объёмом и суммой — и дальше это перестанет быть вашей заботой.',
      'fin.phones': 'Телефон',
      'fin.email': 'Почта',
      'fin.addr': 'Офис',
      'fin.hours': 'Часы работы',
      'fin.hoursv': '7:00 – 22:00, без выходных',
      'fin.contacts': 'Контакты',

      'foot.desc': 'Профессиональная уборка квартир, апартаментов и вилл в Дубае. Организуем процесс, контролируем качество и передаём готовый результат.',
      'foot.nav': 'Навигация',
      'foot.lang': 'Язык',
      'foot.rights': 'Все права защищены.',
      'foot.privacy': 'Политика конфиденциальности',
      'foot.terms': 'Условия',

      'wa.hello': 'Здравствуйте! Хочу получить расчёт уборки.',
      'wa.plain': 'Здравствуйте! Хочу уточнить по уборке моего объекта в Дубае.',
      'wa.prop': 'Тип объекта',
      'wa.type': 'Тип уборки',
      'wa.beds': 'Спальни',
      'wa.area': 'Примерная площадь',
      'wa.loc': 'Локация',
      'wa.date': 'Желаемая дата',
      'wa.name': 'Имя',
      'wa.mail': 'Email',
      'wa.note': 'Комментарий',
      'wa.media': 'Готов(а) прислать фото или видео объекта.'
    }
  };

  var lang = 'en';
  var t = function (k) {
    var v = I18N[lang][k];
    return v === undefined ? (I18N.en[k] === undefined ? k : I18N.en[k]) : v;
  };

  /* ==================================================================
     2. LANGUAGE
     ================================================================== */
  function applyLang(next) {
    lang = (next === 'ru') ? 'ru' : 'en';
    document.documentElement.lang = lang;

    $$('[data-i18n]').forEach(function (el) {
      var v = I18N[lang][el.getAttribute('data-i18n')];
      if (v === undefined || typeof v !== 'string') return;
      if (/<(em|br|span|b|i)\b/i.test(v)) el.innerHTML = v;
      else el.textContent = v;
    });

    $$('[data-i18n-ph]').forEach(function (el) {
      var v = I18N[lang][el.getAttribute('data-i18n-ph')];
      if (typeof v === 'string') el.setAttribute('placeholder', v);
    });

    $$('[data-i18n-list]').forEach(function (ul) {
      var arr = I18N[lang][ul.getAttribute('data-i18n-list')];
      if (!Array.isArray(arr)) return;
      ul.innerHTML = arr.map(function (li) {
        var d = document.createElement('li');
        d.textContent = li;
        return d.outerHTML;
      }).join('');
    });

    $$('.lang-b').forEach(function (b) {
      var on = b.getAttribute('data-lang') === lang;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    // re-validate visible errors so messages switch language too
    $$('.f.is-bad').forEach(function (f) {
      var input = f.querySelector('input,select,textarea');
      if (input) validate(input);
    });
  }

  $$('.lang-b').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
  });

  /* ==================================================================
     3. HEADER / MOBILE MENU
     ================================================================== */
  var nav = $('#nav');
  var burger = $('#burger');
  var navLinks = $('#navLinks');

  var onScroll = function () { nav.classList.toggle('is-stuck', window.scrollY > 12); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function closeMenu() {
    navLinks.classList.remove('is-open');
    burger.classList.remove('is-on');
    burger.setAttribute('aria-expanded', 'false');
  }
  burger.addEventListener('click', function () {
    var open = navLinks.classList.toggle('is-open');
    burger.classList.toggle('is-on', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  $$('#navLinks a').forEach(function (a) { a.addEventListener('click', closeMenu); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navLinks.classList.contains('is-open')) { closeMenu(); burger.focus(); }
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 900) closeMenu();
  });

  /* ==================================================================
     4. INCLUDED — TABS
     ================================================================== */
  var tabs = $$('.inc-t');
  var panels = $$('.inc-p');

  function selectTab(i) {
    tabs.forEach(function (tb, n) {
      var on = n === i;
      tb.classList.toggle('is-on', on);
      tb.setAttribute('aria-selected', on ? 'true' : 'false');
      tb.tabIndex = on ? 0 : -1;
    });
    panels.forEach(function (p, n) {
      p.classList.toggle('is-on', n === i);
      p.hidden = n !== i;
    });
  }
  tabs.forEach(function (tb, i) {
    tb.addEventListener('click', function () { selectTab(i); });
    tb.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1
            : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0;
      if (!d) return;
      e.preventDefault();
      var n = (i + d + tabs.length) % tabs.length;
      selectTab(n);
      tabs[n].focus();
    });
  });

  /* ==================================================================
     5. FAQ ACCORDION
     ================================================================== */
  $$('.faq-q').forEach(function (q) {
    var a = q.nextElementSibling;
    q.addEventListener('click', function () {
      var open = q.getAttribute('aria-expanded') === 'true';
      // close others
      $$('.faq-q').forEach(function (o) {
        if (o !== q && o.getAttribute('aria-expanded') === 'true') {
          o.setAttribute('aria-expanded', 'false');
          o.nextElementSibling.style.maxHeight = null;
        }
      });
      q.setAttribute('aria-expanded', open ? 'false' : 'true');
      a.style.maxHeight = open ? null : a.scrollHeight + 'px';
    });
  });
  window.addEventListener('resize', function () {
    $$('.faq-q[aria-expanded="true"]').forEach(function (q) {
      q.nextElementSibling.style.maxHeight = q.nextElementSibling.scrollHeight + 'px';
    });
  });

  /* ==================================================================
     6. PROPERTY PICKER  →  FORM
     ================================================================== */
  var fProp = $('#f-prop');
  var fType = $('#f-type');

  $$('.prop-b').forEach(function (b) {
    b.addEventListener('click', function () {
      var v = b.getAttribute('data-prop');
      $$('.prop-b').forEach(function (o) { o.classList.toggle('is-on', o === b); });
      if (fProp) { fProp.value = v; clearErr(fProp); }
      document.getElementById('estimate').scrollIntoView({
        behavior: matchMedia('(prefers-reduced-motion:reduce)').matches ? 'auto' : 'smooth',
        block: 'start'
      });
      setTimeout(function () { if (fType) fType.focus({ preventScroll: true }); }, 500);
    });
  });

  // service card → cleaning type
  $$('.lnk[data-svc]').forEach(function (a) {
    a.addEventListener('click', function () {
      if (fType) { fType.value = a.getAttribute('data-svc'); clearErr(fType); }
    });
  });

  /* ==================================================================
     7. FORM VALIDATION + WHATSAPP MESSAGE
     ================================================================== */
  var form = $('#estForm');
  var okMsg = $('#formOk');

  function fieldOf(el) { return el.closest('.f'); }
  function clearErr(el) {
    var f = fieldOf(el);
    if (!f) return;
    f.classList.remove('is-bad');
    var e = f.querySelector('.err');
    if (e) { e.hidden = true; e.textContent = ''; }
    el.removeAttribute('aria-invalid');
  }
  function setErr(el, msg) {
    var f = fieldOf(el);
    if (!f) return;
    f.classList.add('is-bad');
    var e = f.querySelector('.err');
    if (e) { e.textContent = msg; e.hidden = false; }
    el.setAttribute('aria-invalid', 'true');
  }

  function validate(el) {
    var v = (el.value || '').trim();
    if (el.hasAttribute('required') && !v) {
      setErr(el, el.tagName === 'SELECT' ? t('err.sel') : t('err.req'));
      return false;
    }
    if (el.type === 'tel' && v) {
      var digits = v.replace(/\D/g, '');
      if (digits.length < 7 || digits.length > 15) { setErr(el, t('err.phone')); return false; }
    }
    if (el.type === 'email' && v && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) {
      setErr(el, t('err.mail'));
      return false;
    }
    clearErr(el);
    return true;
  }

  $$('#estForm input, #estForm select, #estForm textarea').forEach(function (el) {
    el.addEventListener('blur', function () { if (el.value || el.hasAttribute('required')) validate(el); });
    el.addEventListener('input', function () { if (fieldOf(el) && fieldOf(el).classList.contains('is-bad')) validate(el); });
    el.addEventListener('change', function () { if (fieldOf(el) && fieldOf(el).classList.contains('is-bad')) validate(el); });
  });

  function labelFor(select) {
    var o = select.options[select.selectedIndex];
    return o && o.value ? o.textContent.trim() : '';
  }

  function buildMessage() {
    var L = [];
    L.push(t('wa.hello'));
    L.push('');
    L.push(t('wa.prop') + ': ' + labelFor(fProp));
    L.push(t('wa.type') + ': ' + labelFor(fType));

    var beds = labelFor($('#f-beds'));
    if (beds) L.push(t('wa.beds') + ': ' + beds);

    var area = $('#f-area').value.trim();
    if (area) L.push(t('wa.area') + ': ' + area + ' m²');

    L.push(t('wa.loc') + ': ' + $('#f-loc').value.trim());

    var date = $('#f-date').value;
    if (date) L.push(t('wa.date') + ': ' + date);

    L.push(t('wa.name') + ': ' + $('#f-name').value.trim());

    var mail = $('#f-mail').value.trim();
    if (mail) L.push(t('wa.mail') + ': ' + mail);

    var note = $('#f-note').value.trim();
    if (note) L.push(t('wa.note') + ': ' + note);

    if ($('#f-media').checked) { L.push(''); L.push(t('wa.media')); }

    return L.join('\n');
  }

  function openWa(text) {
    var url = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(text);
    window.open(url, '_blank', 'noopener');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var fields = $$('#estForm [required], #estForm #f-mail');
    var bad = null;
    fields.forEach(function (el) { if (!validate(el) && !bad) bad = el; });
    if (bad) { bad.focus(); return; }

    openWa(buildMessage());
    okMsg.hidden = false;
    okMsg.textContent = t('f.ok');
  });

  // plain WhatsApp buttons (hero, final CTA, floating)
  $$('.js-wa').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      openWa(t('wa.plain'));
    });
  });

  /* ==================================================================
     8. REVEAL ON SCROLL
     ================================================================== */
  var reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
  if (!reduce && 'IntersectionObserver' in window) {
    var targets = $$('.s-head, .svc, .trust-i, .why-i, .steps li, .prop-b, .inc-wrap, .abroad-copy, .abroad-media, .est-copy, .est-form, .killer-copy, .killer-media, .final-copy, .final-contacts, .faq-i, .hero-media');
    targets.forEach(function (el) { el.classList.add('rv'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        var sibs = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
        el.style.transitionDelay = Math.min(sibs, 5) * 55 + 'ms';
        el.classList.add('in');
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    targets.forEach(function (el) { io.observe(el); });
  }

  /* ==================================================================
     9. MISC
     ================================================================== */
  var yr = $('#yr');
  if (yr) yr.textContent = new Date().getFullYear();

  // no past dates in the date picker
  var fDate = $('#f-date');
  if (fDate) fDate.min = new Date().toISOString().split('T')[0];

  applyLang('en');
})();
