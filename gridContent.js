/*

Loads structured content for resume grid. 

gridContent is an ordered list of rowContent objects.

Each rowContent object has the fields:
	- id: unique name for row element id
	- name: display text for row header
	- class: custom classes for row element
	- texts: ordered list of textContent objects
	- tiles: ordered list of tileContent objects

Each textContent object has the fields:
	- html: display text for object
	- size: width of object

Each tileContent object has the fields:
	- name: unique name for tile element id
	- heading, role: display text for tile
	- tags: list of hotwords for tile
	- size: horizontal width of tile
	- offset: horizontal offset of tile from previous tile (or start of row)
	- descHeader, descContent: header and content of tile description dropdown

*/

var gridContent = [
  {
    id: 'professional',
    name: 'Professional',
    class: '',
    tiles: [
      {
        name: 'TW',
        img: 'TW',
        heading: 'Twine',
        role: 'Co-founder & CTO',
        tags: ['data', 'insights', 'information'],
        size: 3,
        offset: 0,
        descHeader: 'I grow a (venture-backed, B2B, SaaS) business',
        descContent:
          "<p><a href='http://www.twinelabs.com'>Twine</a> helps companies like CreditKarma, Robinhood, and DollarShaveClub make better employee decisions with integrated employee data, visualizations, and predictive analytics.</p><p>Built technology stack & team to deliver Twine’s people analytics product: data infrastructure (Python/Airflow), web application (Django/React), modeling & visualization (numpy/D3)</p>",
      },
      {
        name: 'IS',
        img: 'IS',
        heading: 'iSentium',
        role: 'Head of Product',
        tags: ['data', 'insights', 'information'],
        size: 2,
        offset: 0,
        descHeader: 'I bring a financial data analytics product to market',
        descContent:
          '<p>iSentium helps financial institutions make smarter trading decisions by measuring and analyzing real-time sentiment in social media.</p><p>As an early employee, I led a team of engineers + data scientists to build our web application and produce a trading strategy that returned 20+% in 2013-2015. I also personally joined the CEO to sell our vision on investor roadshows.</p>',
      },
      {
        name: 'DB',
        img: 'DB',
        heading: 'Deutsche Bank',
        role: 'Derivatives Trader',
        tags: ['information'],
        size: 2,
        offset: 0,
        descHeader: 'I trade exotic derivatives',
        descContent:
          '<p>I ran a trading book of exotic equity derivatives, and traded a new volatility-linked product that generated $15M in 2010 and $30M in 2011.</p>',
      },
      {
        name: 'YI',
        img: 'YI',
        heading: 'YouIntern',
        role: 'Co-founder & CTO',
        tags: ['data'],
        size: 2,
        offset: 0,
        descHeader: 'I build and grow a social network for interns',
        descContent:
          "<p><a href='http://youintern.com/'>YouIntern</a> was a social network for students seeking internships. I developed and maintained the web application and community for two years, attracting 125k unique visitors, 550 employer members, and 6000+ student members.</p><p>A detailed description of the website and its codebase is available <a href='https://github.com/nsrivast/youintern'>here</a>.</p>",
      },
    ],
  },
  {
    id: 'ed',
    name: 'Education',
    class: '',
    tiles: [
      {
        name: 'WH',
        img: 'WH',
        heading: 'Wharton',
        role: 'Entrepreneurship',
        tags: ['insights'],
        size: 2,
        offset: 2,
        descHeader: 'I develop leadership skills, build a business network, and travel',
        descContent:
          '<p>I majored in Entrepreneurial Management & Data Analytics and ran the Analytics club.</p>',
      },
      {
        name: 'HA',
        img: 'HA',
        heading: 'Harvard',
        role: 'Physics',
        tags: ['information'],
        size: 2,
        offset: 3,
        descHeader: 'I study physics and computer science',
        descContent:
          '<p>I graduated <i>Magna Cum Laude</i> and <i>Phi Beta Kappa</i>, and published research in neuroscience and string theory.</p>',
      },
    ],
  },
  {
    id: 'proj',
    name: 'Projects & Volunteering',
    class: 'rowHeadHeader',
    tiles: [
      {
        name: 'NA',
        img: 'NA',
        heading: 'Data Viz',
        role: 'Instructor',
        tags: ['data', 'insights', 'information'],
        size: 2,
        offset: 1,
        descHeader: 'I teach a data visualization course',
        descContent:
          "<p>After completing independent study, I designed and created a part-time course on Data Visualization for local university students and aspiring tech entrepreneurs. The course focuses on the principles and techniques of effective data visualization.</p><p>I've taught this course in several cities and countries, contact me for more information (it's free, but intense).</p>",
      },
      {
        name: 'PE',
        heading: 'Pensieve',
        role: 'Creator',
        tags: ['data', 'information'],
        size: 2,
        offset: 0,
        descHeader:
          "I build, essentially, my own <a href='http://en.wikipedia.org/wiki/Memex'>Memex</a>",
        descContent:
          "<p><a href='http://pensiev.com'>Pensieve</a> makes it easy to record memories and experiences, helping people expand their memories, work toward personal goals, and learn about themselves along the way.</p><p>I built Pensieve out of a frustration with the tools and systems I was using to store, access, and protect personal information. It has since become an indispensable tool for organizing my private life and managing my personal development.</p>",
      },
      {
        name: 'ZI',
        img: 'ZI',
        heading: 'Zidisha',
        role: 'Kenya Ambassador',
        tags: [],
        size: 2,
        offset: 0,
        descHeader:
          'I interview entrepreneurs in the developing world and share their stories with global investors',
        descContent:
          "<p><a href='https://www.zidisha.org/'>Zidisha</a> is an online microlending community that directly connects lenders and entrepreneurs.</p><p>I spent two months in Nairobi during the summer of 2015 volunteering my time with the non-profit organization as a Country Ambassador, and <a href='https://nikhilnairobi.wordpress.com/tag/profiles-of-microfinance-borrowers/'>wrote a blog</a>.</p><p>I organized my blog posts geographically to showcase the city's <a href='http://nsrivast.github.io/nairobi/'>physical and human geography</a>.</p>",
      },
    ],
  },
];
