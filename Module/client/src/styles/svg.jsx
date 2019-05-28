import React from 'react';

const medal = (
  <svg viewBox="0 0 14 24" role="img" aria-label="Trevor is a superhost." focusable="false">
    <path d="m10.5 20.0005065c0 1.9326761-1.56704361 3.4994935-3.5 3.4994935s-3.5-1.5668174-3.5-3.4994935c0-1.9326762 1.5670426-3.5005065 3.5-3.5005065s3.5 1.5678303 3.5 3.5005065m-9.99486248-18.58757644-.00513752 8.13836018c0 .45796416.21682079.88992936.58880718 1.17090736l5.07730539 3.831699c.4870761.367971 1.16836618.367971 1.65647028.0009994l5.08141685-3.8266984c.3719859-.2789784.5898342-.7109444.5908612-1.16790827.0010271-1.75186288.0041101-6.21051146.0051391-8.14035983 0-.50396002-.4202834-.91292822-.9392158-.91292822l-11.11643181-.00699945c-.51790391-.00099942-.93818728.40796878-.93921487.91292823" fill="#fff" />
    <path d="m12 9.5-5-3.70124468 5-3.79875532zm-6.1292309 9.187485c-.52182677.3180834-.8707691.8762459-.8707691 1.5144379 0 .9937534.83703449 1.7980771 1.870162 1.7980771.81806646 0 1.50434636-.5065007 1.75946763-1.2095239z" fill="#ffb400" />
    <path d="m12 9.5-5 3.75-5-3.75v-7.5z" fill="#ff5a5f" />
    <path d="m7 24c-2.2060547 0-4-1.7939453-4-3.9990234 0-2.2060547 1.7939453-4.0009766 4-4.0009766s4 1.7949219 4 4.0009766c0 2.2050781-1.7939453 3.9990234-4 3.9990234zm0-7c-1.6542969 0-3 1.3466797-3 3.0009766 0 1.6533203 1.3457031 2.9990234 3 2.9990234s3-1.3457031 3-2.9990234c0-1.6542969-1.3457031-3.0009766-3-3.0009766zm.0039062-1.8242188c-.4560547 0-.9121094-.1064453-1.2617188-.3164062l-5.0458984-3.8642578c-.4697265-.3642578-.696289-.8525391-.696289-1.4951172v-8c.0009766-.3730469.1679688-.7529297.4580078-1.0429688.2900391-.2905273.6689453-.4570312 1.0410156-.4570312h.0019531 10.9990235c.7851562 0 1.5.7148438 1.5 1.5v7.9277344c-.0009766.6762695-.2421875 1.2177734-.6953125 1.5668945l-5.0009766 3.8325195c-.3505859.2333985-.8251953.3486328-1.2998047.3486328zm-5.5058593-14.1757812c-.1044922 0-.2324219.0625-.3330078.1635742-.1015625.1020508-.1650391.230957-.1650391.3374024v7.9990234c0 .3305664.0888672.5341797.3066406.703125l4.9970703 3.8310547c.3330078.1953125 1.0859375.2001953 1.4208984-.0205078l4.9716797-3.8125c.2001954-.1542969.3027344-.4155274.303711-.7749024v-7.9267578c0-.2285156-.2714844-.4995117-.5-.4995117h-11-.0009766s0 0-.0009765 0z" fill="#484848" />
  </svg>
);

const icons = {
  home: {
    paths: ['M45.379,7.511c1.167-1.166,3.076-1.166,4.242,0l38.436,38.436c1.166,1.166,1.166,3.075,0,4.242l-0.044,0.044   c-1.167,1.166-3.076,1.166-4.242,0L49.622,16.083c-1.167-1.166-3.076-1.166-4.243,0L11.23,50.232c-1.167,1.166-3.076,1.166-4.242,0   l-0.044-0.044c-1.167-1.167-1.167-3.076,0-4.242L45.379,7.511z',
      'M73.356,45.247c2.333,2.334,4.242,6.943,4.242,10.243v26.874c0,3.3-2.7,6-6,6h-7.525c-3.3,0-6-2.7-6-6V70.552   c0-3.3-2.7-6-6-6h-9.146c-3.3,0-6,2.7-6,6v11.813c0,3.3-2.7,6-6,6h-7.526c-3.3,0-6-2.7-6-6V56.061c0-3.3,1.909-7.909,4.243-10.242   L43.543,23.92c2.334-2.334,6.152-2.334,8.485,0L73.356,45.247z',
    ],
    viewBox: '0 0 100 100',
  },
  'Sparkling Clean': {
    paths: ['M60.166,15.686c2.096,0.255,4.851,0.511,6.744,0.53c0,1.985,0,3.969,0,5.953  c-2.342,0.083-4.568,0.28-6.744,0.529c-0.301,0.141-0.053,0.831-0.134,1.19c-0.94-0.052-1.138-0.021-2.115,0  c-0.315,5.24,1.604,9.278,4.233,12.036c0.697,0.732,2.334,1.248,1.984,2.513c-1.395,0.276-2.834-0.636-3.969-1.321  c-3.844-2.331-6.908-6.292-7.541-11.904c-2.702,1.042-4.232,3.264-4.363,6.877c-4.585,0-9.17,0-13.757,0  c-0.404-6.914-0.95-13.686-7.539-14.417c0.088-2.469-0.117-4.645-0.131-7.01c11.557,0.744,26.937-2.337,33.065,3.834  C60.219,14.665,59.828,15.54,60.166,15.686z',
      'M34.505,35.131c4.541,0,9.083,0,13.624,0c0.242,1.527-0.324,3.252,0,4.762  c0.247,1.146,1.657,2.333,2.513,3.44c1.848,2.386,3.181,4.195,5.026,6.613c0.805,1.052,1.921,2.229,2.249,3.571  c0.7,2.848,0.133,7.69,0.133,11.108c0,9.505,0,18.105,0,28.044c0,1.425,0.34,4.42-0.397,5.156c-1.002,1.002-6.008,0.396-8.067,0.396  c-6.243,0-10.302,0-16.798,0c-2.143,0-7.014,0.52-7.935-0.396c-0.766-0.756-0.398-3.729-0.398-5.291c0-9.704,0-18.231,0-27.909  c0-3.676-0.511-8.026,0.131-10.979c0.333-1.521,1.395-2.6,2.25-3.701c1.767-2.283,3.173-4.19,5.025-6.613  c0.872-1.144,2.252-2.287,2.511-3.309c0.364-1.421-0.266-2.794,0-4.498C34.362,35.339,34.351,35.153,34.505,35.131z',
      'M74.979,13.637c-0.549,0-1.098-0.209-1.518-0.629c-0.84-0.839-0.84-2.198,0-3.036l7.744-7.746   c0.84-0.838,2.199-0.838,3.037,0c0.84,0.839,0.84,2.197,0,3.036l-7.746,7.746C76.076,13.428,75.527,13.637,74.979,13.637z',
      'M82.725,37.991c-0.551,0-1.1-0.21-1.52-0.629l-7.744-7.746c-0.84-0.839-0.84-2.197,0-3.036   c0.838-0.839,2.197-0.839,3.035,0l7.746,7.745c0.84,0.839,0.84,2.198,0,3.037C83.824,37.781,83.273,37.991,82.725,37.991z',
      'M90.795,21.956h-0.004l-11.568-0.022c-1.186-0.002-2.145-0.965-2.143-2.151c0.002-1.184,0.963-2.143,2.146-2.143   c0,0,0.002,0,0.006,0l11.566,0.022c1.184,0.001,2.145,0.966,2.143,2.151S91.979,21.956,90.795,21.956z',
    ],
    viewBox: '0 0 100 100',
  },
  'Super host': {
    paths: ['M28,24.555c-7.305,0-13.225,5.921-13.225,13.225c0,7.304,5.92,13.225,13.225,13.225s13.225-5.921,13.225-13.225  C41.225,30.476,35.305,24.555,28,24.555z M33.33,45.313L28,42.511l-5.33,2.802l1.018-5.935l-4.313-4.205l5.961-0.866l2.664-5.4  l2.664,5.4l5.961,0.866l-4.313,4.205L33.33,45.313z',
      'M23.549,23.119L12.01,4.996H8.021l12.402,19.48C21.404,23.915,22.447,23.454,23.549,23.119z',
      'M35.578,24.476l12.4-19.48H43.99L32.451,23.119C33.553,23.454,34.596,23.915,35.578,24.476z',
      'M28,22.455c0.855,0,1.689,0.088,2.508,0.224L41.764,4.996h-3.988L28,20.262L18.225,4.996h-3.988l11.256,17.683  C26.311,22.543,27.145,22.455,28,22.455z',
    ],
    viewBox: '0 0 55 55',
  },
  'Great Location': {
    paths: ['M16,5.84a6.62,6.62,0,0,0-6.62,6.62c0,2,1.94,5.25,3.72,7.83,1.51,2.19,2.9,3.89,2.9,3.89s1.4-1.7,2.9-3.89c1.78-2.58,3.72-5.85,3.72-7.83A6.62,6.62,0,0,0,16,5.84Zm0,3.49a3.06,3.06,0,1,1-3.06,3.06A3.05,3.05,0,0,1,16,9.33Z',
      'M16,8.31a4.08,4.08,0,1,0,4.08,4.08A4.08,4.08,0,0,0,16,8.31Zm0,6.11a2,2,0,1,1,2-2A2,2,0,0,1,16,14.43Zm0-6.11a4.08,4.08,0,1,0,4.08,4.08A4.08,4.08,0,0,0,16,8.31Zm0,6.11a2,2,0,1,1,2-2A2,2,0,0,1,16,14.43Zm0-8.58a6.62,6.62,0,0,0-6.62,6.62c0,2,1.94,5.25,3.72,7.83,1.51,2.19,2.9,3.89,2.9,3.89s1.4-1.7,2.9-3.89c1.78-2.58,3.72-5.85,3.72-7.83A6.62,6.62,0,0,0,16,5.84ZM17.67,20.3c-.59.85-1.17,1.62-1.67,2.26-.54-.69-1.11-1.46-1.67-2.26-2-2.84-3.93-6.15-3.93-7.83a5.61,5.61,0,0,1,11.21,0C21.61,14.26,19.56,17.62,17.67,20.3ZM16,8.31a4.08,4.08,0,1,0,4.08,4.08A4.08,4.08,0,0,0,16,8.31Zm0,6.11a2,2,0,1,1,2-2A2,2,0,0,1,16,14.43Zm0-6.11a4.08,4.08,0,1,0,4.08,4.08A4.08,4.08,0,0,0,16,8.31Zm0,6.11a2,2,0,1,1,2-2A2,2,0,0,1,16,14.43Zm0-6.11a4.08,4.08,0,1,0,4.08,4.08A4.08,4.08,0,0,0,16,8.31Zm0,6.11a2,2,0,1,1,2-2A2,2,0,0,1,16,14.43Z',
      'M16,5.84a6.62,6.62,0,0,0-6.62,6.62c0,2,1.94,5.25,3.72,7.83,1.51,2.19,2.9,3.89,2.9,3.89s1.4-1.7,2.9-3.89c1.78-2.58,3.72-5.85,3.72-7.83A6.62,6.62,0,0,0,16,5.84Zm0,3.49a3.06,3.06,0,1,1-3.06,3.06A3.05,3.05,0,0,1,16,9.33Z',
      'M16,24.19s-1.4-1.7-2.9-3.89H18.9C17.4,22.49,16,24.19,16,24.19Z',
      'M31.29,31H.71L5.81,20.3h6c1.52,2.27,3,4.15,3.36,4.55l.78,1,.78-1c.34-.4,1.84-2.27,3.36-4.55h6Z',
    ],
    viewBox: '0 0 30 30',
  },
  Breakfast: {
    paths: ['M107.896,40.73H96.874v-6.704H4v63.453C4,113.205,16.704,126,32.319,126h36.237c15.394,0,27.95-12.438,28.302-27.86    h11.038c8.88,0,16.104-7.276,16.104-16.219V56.949C124,48.005,116.776,40.73,107.896,40.73z M96.874,56.31h9.309    c1.433,0,2.597,1.174,2.597,2.616v21.017c0,1.442-1.165,2.616-2.597,2.616h-9.309V56.31z M118.805,81.921    c0,6.058-4.893,10.987-10.909,10.987H96.874v-5.117h9.309c4.297,0,7.792-3.52,7.792-7.848V58.926c0-4.328-3.495-7.848-7.792-7.848    h-9.309v-5.117h11.022c6.016,0,10.909,4.929,10.909,10.987V81.921z',
      'M41.301,17.118c0.813,0.986,1.175,1.48,1.232,2.059c0.088,1.179-0.891,2.671-2.834,4.315    c-1.096,0.928-1.239,2.582-0.318,3.686c0.496,0.593,1.221,0.933,1.99,0.933c0.61,0,1.203-0.218,1.67-0.613    c3.37-2.853,4.897-5.719,4.666-8.774c-0.223-2.295-1.435-3.766-2.409-4.948c-0.713-0.866-1.229-1.49-1.361-2.301    c-0.262-1.721,1.209-3.7,2.49-5.057c0.478-0.506,0.732-1.17,0.714-1.869c-0.017-0.699-0.304-1.348-0.807-1.83    c-0.503-0.482-1.157-0.74-1.856-0.719c-0.693,0.018-1.338,0.307-1.816,0.812c-2.986,3.163-4.32,6.439-3.857,9.481    C39.17,14.532,40.35,15.965,41.301,17.118z',
      'M57.97,17.118c0.812,0.986,1.174,1.48,1.232,2.059c0.088,1.179-0.891,2.672-2.833,4.315    c-1.096,0.928-1.239,2.582-0.318,3.686c0.496,0.593,1.221,0.933,1.99,0.933c0.61,0,1.203-0.218,1.67-0.613    c3.37-2.853,4.896-5.719,4.666-8.774c-0.223-2.295-1.435-3.766-2.41-4.948c-0.713-0.866-1.228-1.49-1.36-2.301    c-0.262-1.722,1.209-3.701,2.489-5.057c0.478-0.506,0.732-1.17,0.714-1.869c-0.017-0.699-0.304-1.348-0.807-1.83    c-0.502-0.481-1.14-0.733-1.855-0.719c-0.693,0.018-1.338,0.307-1.817,0.812c-2.985,3.162-4.319,6.438-3.856,9.481    C55.839,14.533,57.021,15.966,57.97,17.118z',
    ],
    viewBox: '0 0 130 130',
  },
  'Great check-in experience': {
    paths: ['M18.7,37.2l-8.2,8.2l3.3,3.3c0.3,0.3,0.9,0.3,1.3,0c0.3-0.3,0.3-0.9,0-1.3l-1.3-1.3l1.9-1.9l1.3,1.3c0.3,0.3,0.9,0.3,1.3,0   l0.6-0.6c0.3-0.3,0.3-0.9,0-1.3l-1.3-1.3l1.9-1.9l1.3,1.3c0.3,0.3,0.9,0.3,1.3,0l0,0c0.3-0.3,0.3-0.9,0-1.3L18.7,37.2z',
      'M19.8,24.1L3,40.8c-1.5,1.5-1.5,3.8,0,5.3c1.5,1.5,3.8,1.5,5.3,0l16.8-16.8C22.8,27.9,21.1,26.2,19.8,24.1z',
      'M43.8,5.3c-5.8-5.8-15.2-5.8-21,0c-5.8,5.8-5.8,15.2,0,21s15.2,5.8,21,0C49.6,20.5,49.6,11.1,43.8,5.3z M40.8,13.6   c-1.5,1.5-3.8,1.5-5.3,0c-1.5-1.5-1.5-3.8,0-5.3c1.5-1.5,3.8-1.4,5.3,0C42.2,9.8,42.2,12.2,40.8,13.6z',
    ],
    viewBox: '0 0 50 50',
  },
  'Self check-in': {
    paths: ['M74.2,88.1V9.7h-46L12.6,2.6v85.4H5v2.3h7.6v7l15.6-7L28.3,12H72v78.3h23v-2.3H74.2z M18.4,45.9   C18.4,45.9,18.4,45.9,18.4,45.9l-1.3-0.1v4.5c0,0.7-0.2,1.3-0.4,1.3h-0.2c-0.2,0-0.4-0.6-0.4-1.3v-6.3c0-0.7,0.2-1.3,0.4-1.3h0.2   c0.2,0,0.4,0.6,0.4,1.3v0.8l1.3,0.1c0.1,0,0.2,0.2,0.2,0.5C18.6,45.7,18.5,45.9,18.4,45.9z',
      'M16.7,50.2L16.7,50.2c-0.1,0-0.1-0.1-0.1-0.1v-1.3c0-0.1,0.1-0.1,0.1-0.1l0,0c0.1,0,0.1,0.1,0.1,0.1v1.3  C16.8,50.1,16.7,50.2,16.7,50.2z',
    ],
    viewBox: '0 0 100 100',
  },
  Kitchen: {
    paths: ['M230.0898438,58.9622955c-1.6572266,0-3,1.3427734-3,3v95.9443359c0,0.0311279-0.0024414,0.0617676-0.0024414,0.0927734   h-35.6430664V61.9622955c0-1.6572266-1.3427734-3-3-3s-3,1.3427734-3,3v96.0371094h-35.6430664   c0-0.0310059-0.0024414-0.0616455-0.0024414-0.0927734V61.9622955c0-1.6572266-1.3427734-3-3-3s-3,1.3427734-3,3v95.9443359   c0,0.824585,0.0263672,1.6429443,0.0705566,2.456665c-0.0441895,0.2054443-0.0705566,0.4173584-0.0705566,0.6361084   c0,0.3710938,0.0761719,0.7226562,0.1992188,1.0506592c2.0070801,21.6954346,19.5986328,38.9317627,41.4462891,40.3900146   v78.9606781h-20.8623047c-1.560791,0-2.8278809,1.1955566-2.9716797,2.71875   c-0.3925781,0.5072021-0.6357422,1.1358643-0.6357422,1.8271484v148.9326172   c0,15.1464844,12.3232422,27.4697266,27.4697266,27.4697266c15.1474609,0,27.4707031-12.3232422,27.4707031-27.4697266V285.9466553   c0-0.6912842-0.2431641-1.3199463-0.6357422-1.8271484c-0.1437988-1.5231934-1.4108887-2.71875-2.9716797-2.71875h-20.8632812   v-78.9606781c21.8476562-1.458252,39.439209-18.6945801,41.4462891-40.3900146   c0.1230469-0.3280029,0.1992188-0.6795654,0.1992188-1.0506592c0-0.21875-0.0263672-0.4306641-0.0705566-0.6361084   c0.0441895-0.8137207,0.0705566-1.6320801,0.0705566-2.456665V61.9622955   C233.0898438,60.305069,231.7470703,58.9622955,230.0898438,58.9622955z M188.4443359,456.348999   c-11.8388672,0-21.4697266-9.6308594-21.4697266-21.4697266V287.4007568h42.9404297v147.4785156   C209.9150391,446.7181396,200.2832031,456.348999,188.4443359,456.348999z M188.4443359,196.5521393   c-19.2363281,0-35.2299805-14.128418-38.1608887-32.5527344h76.3217773   C223.6743164,182.4237213,207.6806641,196.5521393,188.4443359,196.5521393z',
      'M368.2011719,52.6527252c0-0.8222656-0.3369141-1.6083984-0.9335938-2.1748047   c-0.5957031-0.5664062-1.4013672-0.8730469-2.21875-0.8212891c-0.8105469,0.0410156-20.0634766,1.3613281-38.9394531,32.2001953   c-24.5341797,40.0830078-36.9736328,109.3359375-36.9736328,205.8339691c0,1.6347656,1.3085938,2.96875,2.9433594,2.9990234   c12.9897461,0.2449951,24.28125,0.3583984,33.8544922,0.3930664v143.7963867   c0,15.1464844,9.4804688,27.4697266,21.1337891,27.4697266s21.1337891-12.3232422,21.1337891-27.4697266V285.9466553   c0-0.1791992-0.0224609-0.352417-0.0527344-0.5229492c0.0222168-0.1467285,0.0527344-0.2910156,0.0527344-0.4438477V52.6527252z    M330.6328125,85.9710846c12.8720703-21.4892578,25.78125-27.7861328,31.5683594-29.6025391V284.77771   c-7.6054688,0.1972656-30.1660156,0.6181641-67.0615234-0.0322266   C295.4580078,168.9906158,314.5742188,112.7787018,330.6328125,85.9710846z M347.0673828,456.348999   c-8.203125,0-15.1337891-9.8320312-15.1337891-21.4697266V291.0947266   c0.1960449,0.0001221,0.3974609,0.0003662,0.5917969,0.0003662c15.0644531,0,24.9978027-0.1954346,29.6757812-0.3151855   v144.0993652C362.2011719,446.5169678,355.2705078,456.348999,347.0673828,456.348999z',
    ],
    viewBox: '0 0 500 460',
  },
  Wifi: {
    paths: ['M251.19,44.05c97.87,1.33,179.68,34.65,247.5,101.68,14.05,13.89,17.26,30.58,8.27,42.09-9.17,11.74-27.39,13.05-43.83,2.76a83.53,83.53,0,0,1-13.08-10.41C342,77.15,176.28,73.8,63.69,172.55c-10.9,9.56-22.81,16.09-37.74,15.07-10.44-.71-18.84-5.19-23.54-14.91-4.82-10-1.94-19.11,4.35-27.36a72.73,72.73,0,0,1,9.44-9.77C83.81,74.92,163.47,45.56,251.19,44.05Z',
      'M258.15,157.85c67.42,1.36,123.18,26.89,172.77,67.73,6.22,5.12,10.63,12.07,13.58,19.65,3.75,9.62,4.37,19.3-2.87,27.64-7.42,8.53-17.35,9.95-27.83,7.6-11.26-2.52-19.93-9.48-28.36-17-67.23-60.18-166.94-64.34-238-10-6.37,4.87-12.21,10.43-18.25,15.72-9.27,8.11-19.69,13.17-32.36,12.16-16.5-1.31-26.08-15.24-21.55-31.08a45.18,45.18,0,0,1,13.26-21C137.09,184.67,193.49,158.8,258.15,157.85Z',
      'M270.73,276.42A130.3,130.3,0,0,1,362.88,317c8.49,8.87,14.35,18.87,11,32-4.24,16.73-24.36,24.57-38.37,11.59-43.6-40.4-104.25-40.7-150.48-2.31-12.9,10.71-21.18,11.59-31.49,3.33s-12.81-22.24-5.95-35c3.7-6.88,9.11-12.3,15.11-17.2C189.18,287.85,223.33,276.35,270.73,276.42Z',
      'M302.63,425.77A42.22,42.22,0,0,1,260,467.95c-24.3-.12-43.08-19.15-42.68-43.28,0.41-25.07,19.42-44,43.78-43.5C284.58,381.61,302.83,401.19,302.63,425.77Z',
    ],
    viewBox: '0 0 600 500',
  },
  TV: {
    paths: ['M85.3,32.1H51.2l19.2-17.7c0.3-0.3,0.3-0.8,0-1.1c-0.3-0.3-0.8-0.3-1.1,0L50.2,31L30.8,13.1c-0.3-0.3-0.8-0.3-1.1,0   c-0.3,0.3-0.3,0.8,0,1.1l19.3,17.8H14.4c-2.8,0-5.2,2.3-5.2,5.2V83c0,2.8,2.3,5.2,5.2,5.2h70.9c2.8,0,5.2-2.3,5.2-5.2V37.2   C90.5,34.4,88.1,32.1,85.3,32.1z M89,83c0,2-1.6,3.7-3.7,3.7H14.4c-2,0-3.7-1.6-3.7-3.7V37.2c0-2,1.6-3.7,3.7-3.7h70.9   c2,0,3.7,1.6,3.7,3.7V83z',
      'M62.6,38.6h-43c-2.1,0-3.8,1.7-3.8,3.8v35.5c0,2.1,1.7,3.8,3.8,3.8h43c2.1,0,3.8-1.7,3.8-3.8V42.4   C66.4,40.3,64.7,38.6,62.6,38.6z M64.9,77.9c0,1.3-1,2.3-2.3,2.3h-43c-1.3,0-2.3-1-2.3-2.3V42.4c0-1.3,1-2.3,2.3-2.3h43   c1.3,0,2.3,1,2.3,2.3V77.9z',
      'M81.4,38.5h-7.8c-1.6,0-2.9,1.3-2.9,2.9v20.8c0,1.6,1.3,2.9,2.9,2.9h7.8c1.6,0,2.9-1.3,2.9-2.9V41.4   C84.2,39.8,82.9,38.5,81.4,38.5z M82.7,62.1c0,0.7-0.6,1.4-1.4,1.4h-7.8c-0.7,0-1.4-0.6-1.4-1.4V41.4c0-0.7,0.6-1.4,1.4-1.4h7.8   c0.7,0,1.4,0.6,1.4,1.4V62.1z',
    ],
    viewBox: '0 0 100 100',
  },
  Iron: {
    paths: ['M87,39.78V18a2,2,0,0,0-2-2H33a2,2,0,0,0-2,2v8a2,2,0,0,0,2,2H75V38H37.07A37.51,37.51,0,0,0,12.61,47.6,31.45,31.45,0,0,0,2,71v7a2,2,0,0,0,2,2H79a2,2,0,0,0,1.52-.7A2,2,0,0,0,81,77.69L80.24,73H92a2,2,0,0,0,2-2.44ZM77,24H35V20H83V38H79V26A2,2,0,0,0,77,24Zm-.34,52H6V73H76.19Zm1.24-7H14.65a20,20,0,0,1,6.63-12.79A24.33,24.33,0,0,1,37.17,50a2,2,0,1,0-.1-4,28.4,28.4,0,0,0-18.49,7.25A24,24,0,0,0,10.63,69H6.07a27.66,27.66,0,0,1,9.24-18.44A33.52,33.52,0,0,1,37.19,42H83.4l6.1,27Z',
    ],
    viewBox: '0 0 100 100',
  },
  'Laptop friendly workspace': {
    paths: ['M105,80.126h-5.086V26.217c0-2.935-2.387-5.323-5.321-5.323H15.41c-2.936,0-5.324,2.388-5.324,5.323v53.909H5   c-0.553,0-1,0.447-1,1c0,4.624,3.684,7.98,8.76,7.98h84.48c5.076,0,8.76-3.356,8.76-7.98C106,80.573,105.553,80.126,105,80.126z    M12.086,26.217c0-1.833,1.491-3.323,3.324-3.323h79.183c1.831,0,3.321,1.491,3.321,3.323v53.909H63.568H46.434H12.086V26.217z    M62.223,82.126c-0.303,0.396-0.774,0.655-1.311,0.655H49.09c-0.536,0-1.008-0.26-1.311-0.655H62.223z M97.24,87.106H12.76   c-3.592,0-6.205-2.002-6.682-4.98h5.008h34.486c0.437,1.531,1.849,2.655,3.518,2.655h11.822c1.669,0,3.081-1.124,3.518-2.655   h34.484h5.008C103.445,85.104,100.832,87.106,97.24,87.106z',
      'M94.51,75.975V27.044c0-0.552-0.447-1-1-1H16.49c-0.553,0-1,0.448-1,1v48.931c0,0.552,0.447,1,1,1h77.02   C94.062,76.975,94.51,76.526,94.51,75.975z M92.51,74.975H17.49V28.044h75.02V74.975z',
    ],
    viewBox: '0 0 110 90',
  },
  Elevator: {
    paths: ['M86.1132813,9H13.8867188c-0.5527344,0-1,0.4477539-1,1v12.784668v0.0053711V90c0,0.5522461,0.4472656,1,1,1H50h36.1132813   c0.5527344,0,1-0.4477539,1-1V22.7900391V22.784668V10C87.1132813,9.4477539,86.6660156,9,86.1132813,9z M85.1132813,11v10.784668   H50H14.8867188V11H85.1132813z M14.8867188,23.7900391H49V89H14.8867188V23.7900391z M51,89V23.7900391h34.1132813V89H51z',
      'M38.4638672,17.3950195h1.8398438c0.5527344,0,1-0.4477539,1-1s-0.4472656-1-1-1h-1.8398438c-0.5527344,0-1,0.4477539-1,1   S37.9111328,17.3950195,38.4638672,17.3950195z',
      'M45.5410156,17.3950195h1.8408203c0.5527344,0,1-0.4477539,1-1s-0.4472656-1-1-1h-1.8408203c-0.5527344,0-1,0.4477539-1,1   S44.9882813,17.3950195,45.5410156,17.3950195z',
      'M52.6181641,17.3950195h1.8408203c0.5527344,0,1-0.4477539,1-1s-0.4472656-1-1-1h-1.8408203c-0.5527344,0-1,0.4477539-1,1   S52.0654297,17.3950195,52.6181641,17.3950195z',
      'M59.6962891,17.3950195h1.8398438c0.5527344,0,1-0.4477539,1-1s-0.4472656-1-1-1h-1.8398438c-0.5527344,0-1,0.4477539-1,1   S59.1435547,17.3950195,59.6962891,17.3950195z',
      'M68.7636719,46.4379883c-0.390625-0.390625-1.0234375-0.390625-1.4140625,0l-6.4726563,6.472168   c-0.390625,0.390625-0.390625,1.0234375,0,1.4140625s1.0234375,0.390625,1.4140625,0l4.765625-4.7651978v16.0811157   c0,0.5522461,0.4472656,1,1,1s1-0.4477539,1-1V49.559021l4.765625,4.7651978   c0.1953125,0.1953125,0.4511719,0.2929688,0.7070313,0.2929688s0.5117188-0.0976563,0.7070313-0.2929688   c0.390625-0.390625,0.390625-1.0234375,0-1.4140625L68.7636719,46.4379883z',
      'M37.7089844,58.4604492l-4.765625,4.765625V47.1450195c0-0.5522461-0.4472656-1-1-1s-1,0.4477539-1,1v16.0810547   l-4.765625-4.765625c-0.390625-0.390625-1.0234375-0.390625-1.4140625,0s-0.390625,1.0234375,0,1.4140625l6.4726563,6.4726563   c0.1953125,0.1953125,0.4511719,0.2929688,0.7070313,0.2929688s0.5117188-0.0976563,0.7070313-0.2929688l6.4726563-6.4726563   c0.390625-0.390625,0.390625-1.0234375,0-1.4140625S38.0996094,58.0698242,37.7089844,58.4604492z',
    ],
    viewBox: '0 0 100 100',
  },
  'Air conditioning': {
    paths: ['M17.927,84.229l2.938,0.606l4.19-20.289l8.16-4.71L30.482,73.06l2.938,0.607l3.272-15.838l2.992-1.728l7.233,4.176v3.457   L34.839,74.486l1.994,2.241l10.085-8.978v9.42L31.444,90.944l1.994,2.241l13.479-11.999v10.878h3V81.186l13.48,11.999l1.994-2.241   L49.918,77.17v-9.42l10.086,8.978l1.994-2.241l-12.08-10.752v-3.457l7.233-4.176l2.993,1.728l3.272,15.838l2.938-0.607   l-2.731-13.223l8.157,4.71l4.192,20.289l2.938-0.607l-3.651-17.673l9.421,5.439l1.5-2.598l-9.422-5.439l17.132-5.674l-0.943-2.848   L73.28,61.95l-8.157-4.71l12.816-4.246l-0.943-2.848l-15.352,5.085l-2.993-1.728v-8.353l2.993-1.728l15.352,5.085l0.943-2.848   l-12.816-4.246l8.157-4.71l19.666,6.514l0.943-2.848l-17.132-5.674l9.422-5.439l-1.5-2.598L75.259,32.1l3.651-17.673l-2.938-0.607   L71.78,34.107l-8.157,4.71l2.731-13.223l-2.938-0.607l-3.272,15.838l-2.993,1.728l-7.233-4.176v-3.457l12.08-10.752l-1.994-2.241   l-10.086,8.978v-9.42L65.393,7.711L63.398,5.47l-13.48,11.999V6.59h-3v10.878L33.438,5.47l-1.994,2.241l15.474,13.774v9.42   l-10.085-8.978l-1.994,2.241l12.079,10.752v3.457l-7.233,4.176l-2.992-1.728L33.42,24.987l-2.938,0.607l2.732,13.223l-8.16-4.71   l-4.19-20.288l-2.938,0.606L21.578,32.1l-9.422-5.439l-1.5,2.598l9.422,5.439L2.946,40.372l0.943,2.848l19.666-6.514l8.158,4.71   l-12.817,4.246l0.943,2.848l15.352-5.085l2.994,1.728v8.352l-2.994,1.729L19.84,50.146l-0.943,2.848l12.817,4.246l-8.158,4.71   L3.89,55.436l-0.943,2.848l17.132,5.674l-9.422,5.439l1.5,2.598l9.422-5.439L17.927,84.229z M42.685,54.369l4.233-2.444v4.888   L42.685,54.369z M49.918,56.813v-4.888l4.233,2.444L49.918,56.813z M55.651,51.771l-4.233-2.444l4.233-2.444V51.771z    M54.151,44.285l-4.233,2.444v-4.888L54.151,44.285z M46.918,41.841v4.888l-4.233-2.444L46.918,41.841z M41.186,46.884l4.232,2.443   l-4.232,2.444V46.884z'],
    viewBox: '0 0 100 100',
  },
};

export {
  medal,
  icons,
};
