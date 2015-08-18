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
	- heading, blurb, role: display text for tile
	- tags: list of hotwords for tile
	- size: horizontal width of tile
	- offset: horizontal offset of tile from previous tile (or start of row)
	- descHeader, descContent: header and content of tile description dropdown

*/

var gridContent = [
	{
		"id": "work",
		"name": "Work",
		"class": "",
		"tiles": [
			{
				"name": "YI",
				"heading": "YouIntern",
				"blurb": "Social Network",
				"role": "CoFounder & CTO",
				"tags": ["technology", "product", "business"],
				"size": 2,
				"offset": 1,
				"descHeader": "I build and grow a social network for interns",
				"descContent": "<p><a href='http://youintern.com/'>YouIntern</a> was a social network and online community that provided job opportunities and career advice to students seeking internships.</p><p>Partnering with <a href='http://www.linkedin.com/in/danchaparian'>Dan Chaparian</a> and <a href='http://www.linkedin.com/in/achopramcgowan/'>Anand Chopra-McGowan</a> on the business side, I developed and maintained the web community for two years, attracting 125k unique visitors, 550 employer members, and 6000+ student members.</p><p>A detailed description of the website and its codebase is available <a href='https://github.com/nsrivast/youintern'>here</a>.</p>"
			},
			{
				"name": "DB",
				"heading": "Deutsche Bank",
				"blurb": "Global Bank",
				"role": "Equity Derivatives Trader",
				"tags": ["finance", "business"],
				"size": 3,
				"offset": 0,
				"descHeader": "I grow a trading business at a bulge-bracket bank",
				"descContent": "<p>For 4 years, I traded exotic derivatives on US equities in a 3-person team with $60M+ P&L. During this time, I was able to: <ul><li>develop a new volatility product business, contributing $15M P&L in 2010 and $30M in 2011</li><li>grow a $3M insurance business by 200% in 3 years by improving risk-management and on-boarding new clients</li><li>design and execute proprietary trading strategies for institutional and retail clients</li></ul></p>"
			},
			{
				"name": "IS",
				"heading": "iSENTIUM",
				"blurb": "Fin-Tech Startup",
				"role": "Product, Sales",
				"tags": ["finance", "technology", "product", "business"],
				"size": 3,
				"offset": 0,
				"descHeader": "I build a fin-tech product and bring it to market",
				"descContent": "<p><a href='http://isentium.com'>iSENTIUM</a> analyzes Twitter sentiment to predict stock prices.</p><p>As an early employee and the first product hire, I had the opportunity to: <ul><li>develop the company's flagship trading application on the Bloomberg platform</li><li>lead a team of data scientists in producing a trading strategy that returned 25% in 2014 and is up 20+% through April 2015</li><li>pitch the company's products and vision to bulge-bracket banks, hedge funds, VCs, and private investors</li</ul></p>"
			}
		]
	},
	{
		"id": "ed",
		"name": "Education",
		"class": "",
		"tiles": [
			{
				"name": "PI",
				"heading": "Pingry",
				"blurb": "High School",
				"role": "",
				"size": 1,
				"offset": 0,
				"descHeader": "I complete high school",
				"descContent": "<p>Student Body President</p><p>USA Today All-USA Academic 2nd Team</p>"
			},
			{
				"name": "HA",
				"heading": "Harvard",
				"blurb": "Bachelor of Arts",
				"role": "Physics, Neuroscience",
				"tags": ["technology"],
				"size": 3,
				"offset": 0,
				"descHeader": "I study physics, biology, and computer science",
				"descContent": "<p>I majored in Physics and minored in Neuroscience, graduating <i>Magna Cum Laude</i> and <i>Phi Beta Kappa</i>.</p><p>My research led to two academic publications:<ul><li>Nikhil Srivastava, Damon A Clark, and Aravinthan D. T. Samuel (2009), “Temporal analysis of stochastic turning behavior of swimming <i>C. elegans</i>,” <i>Journal of Neurophysiology</i> 102: 1172-1179</li><li>Edited string theory textbook for Professor Melanie Becker: <i>String Theory and M-Theory: A Modern Introduction</i>, November 2006</li></ul></p>"
			},
			{
				"name": "WH",
				"heading": "Wharton",
				"blurb": "MBA",
				"role": "Entrepreneurship",
				"tags": ["business"],
				"size": 2,
				"offset": 4,
				"descHeader": "I pursue an MBA with a focus in Entrepreneurial Management",
				"descContent": "<p>Details to follow.</p>"
			}
		]
	},
	{
		"id": "proj",
		"name": "Projects",
		"class": "rowHeadHeader",
		"tiles": []
	},
	{
		"id": "km",
		"name": "Information, Organized",
		"class": "rowHeadRight",
		"tiles": [
			{
				"name": "WW",
				"heading": "WikiWarp",
				"blurb": "Wikipedia Game",
				"role": "Creator",
				"tags": ["organize", "understanding", "technology"],
				"size": 2,
				"offset": 1,
				"descHeader": "I create a computer game to capture semantic data",
				"descContent": "<p>WikiWarp was a 'game with a purpose', a game played by humans to solve tasks difficult for computers (think reverse CAPTCHA).</p><p>Gameplay involved navigating through the links of Wikipedia between specified 'start' and 'target' pages, racing against a friend or high score. The paths between topics contained information on their semantic relatedness.</p><p>I built WikiWarp for a <a href='http://www.eecs.harvard.edu/cs286r/courses/fall12/index.html'>Harvard course</a> and wrote a <a href='https://github.com/nsrivast/wikiwarp/blob/master/wikiwarp_final_report.pdf'>report</a> about it. The code is also available <a href='https://github.com/nsrivast/wikiwarp'>on Github</a>.</p>"
			},
			{
				"name": "RE",
				"heading": "My Wines",
				"blurb": "Wine Application",
				"role": "Creator",
				"tags": ["organize", "product", "understanding", "technology"],
				"size": 2,
				"offset": 1,
				"descHeader": "I build a tool to track the wines I drink",
				"descContent": "<p>A precursor to wine apps like Vivino, My Wines was a tool I built to record tastings of different wines.</p><p>The system used a highly structured data format for wines and tastings; organizing vineyards into subregions and regions, including notes by flavor profiles, and charting numerical scores along various taste metrics (e.g. acidity, body, intensity), to name a few.</p><p>After discovering how valuable it was to view the history of my personal wine development, and realizing I wanted the same organization and context to all of my personal data, My Wines was eventually folded into the 'Wine' theme of Pensieve.</p><p>The code for My Wines is available <a href='https://github.com/nsrivast/mywines'>on Github</a>.</p>"
			},
			{
				"name": "PE",
				"heading": "Pensieve",
				"blurb": "Knowledge Management System",
				"role": "Creator",
				"tags": ["organize", "product", "understanding", "technology"],
				"size": 3,
				"offset": 1,
				"descHeader": "I build, essentially, my own <a href='http://en.wikipedia.org/wiki/Memex'>Memex</a>",
				"descContent": "<p>Pensieve is a knowledge management system that makes it easy to record memories and experiences, enabling its users to expand their memories, work toward personal goals, and learn about themselves along the way.</p><p>I built Pensieve out of a frustration with the tools and systems I was using to store, access, and protect personal information. It has since become an indispensable tool for organizing my private life and managing my personal development.</p><p>For more information, visit the <a href='http://blog.pensiev.com'>Pensieve blog</a>. To create an account, visit the <a href='http://pensiev.com'>Pensieve website</a>.</p>"
			}
		]
	},
	{
		"id": "dv",
		"name": "Information, Visualized",
		"class": "rowHeadRight",
		"tiles": [
			{
				"name": "TR",
				"heading": "Tree Range Map",
				"blurb": "Data Visualization",
				"role": "Creator",
				"tags": ["visualize", "understanding"],
				"size": 2,
				"offset": 5,
				"descHeader": "I explore a data set and build a visualization",
				"descContent": "<p>Unable to find a central resource that answered the question of which flora are prevalent in a given area of the country, I created a data visualization to explore and examine the distribution of tree species across the US.</p><p>The project trajectory, ranging from exploring and analyzing the data to designing and constructing the visualization, is detailed <a href='https://github.com/nsrivast/tree-range-viz'>on Github</a>. The visualization itself can be found <a href='http://nsrivast.github.io/tree-range-viz/'>here</a>.</p>"
			},
			{
				"name": "NA",
				"heading": "Data Visualization",
				"blurb": "Part-time Course",
				"role": "Instructor",
				"tags": ["visualize", "teaching", "understanding"],
				"size": 2,
				"offset": 0,
				"descHeader": "I teach a data visualization course",
				"descContent": "<p>In Nairobi during the summer of 2015, I designed and taught a part-time course on Data Visualization for local university students and aspiring tech entrepreneurs. The course focused on the principles and techniques of effective data visualization.</p><p>See the <a href='http://nsrivast.github.io/data-viz-nairobi/'>course website</a> for more information.</p>"
			},
			{
				"name": "NB",
				"heading": "Nairobi",
				"blurb": "website",
				"role": "Creator",
				"tags": ["organize", "visualize", "teaching", "understanding"],
				"size": 1,
				"offset": 0,
				"descHeader": "I create a geographically-organized blog",
				"descContent": "<p>I maintained a blog of my experience volunteering and teaching in Nairobi during the summer of 2015. After returning, I organized the material geographically to showcase the city's physical and human geography. </p><p>See the <a href='http://nsrivast.github.io/nairobi/'>project</a>.</p>"
			}
		]
	},
	{
		"id": "vo",
		"name": "Volunteering & Education",
		"class": "rowHeadRight",
		"tiles": [
			{
				"name": "CA",
				"heading": "Cambridge School Volunteers",
				"blurb": "Volunteer Organization",
				"role": "Teaching Assistant",
				"tags": ["teaching"],
				"size": 3,
				"offset": 0,
				"descHeader": "I teach math and science to school children",
				"descContent": "<p>Cambridge School Volunteers is a non-profit organization that supports public schools in Cambridge, MA.</p><p>I volunteered in elementary school classrooms, helping teachers provide personal attention to children who were falling behind in basic math and science classes.</p>"
			},
			{
				"name": "NY",
				"heading": "New York Cares",
				"blurb": "Volunteer Organization",
				"role": "Adult Education Volunteer",
				"tags": ["teaching"],
				"size": 3,
				"offset": 0,
				"descHeader": "I teach language and computer skills to adults",
				"descContent": "<p>New York Cares is a group of volunteer organizations across New York City.</p><p>I participated in a series of adult education classes and seminars, teaching basic language and computer literacy skills to adult immigrants in low-income neighborhoods.</p>"
			},
			{
				"name": "YB",
				"heading": "YouthBuild",
				"blurb": "Charter School",
				"role": "Teaching Assistant",
				"tags": ["teaching"],
				"size": 2,
				"offset": 0,
				"descHeader": "I teach math, science, and language skills to high-school students",
				"descContent": "<p>YouthBuild is a national non-profit organization that educates and counsels young adults and trains them in marketable skills.</p><p>I volunteer with YouthBuild Philadelphia, a charter school targeting low-income communities in North Philadelphia. I help full-time instructors teach math, science, language, and computer literacy classes.</p>"
			},
			{
				"name": "ZI",
				"heading": "Zidisha",
				"blurb": "P2P Microlending",
				"role": "Kenya Ambassador",
				"tags": ["teaching"],
				"size": 2,
				"offset": 0,
				"descHeader": "I interview entrepreneurs in the developing world and share their stories with global investors",
				"descContent": "<p>Zidisha is an online microlending community that directly connects lenders and entrepreneurs (see <a href='https://www.zidisha.org/'>Zidisha.org</a>).</p><p>I spent two months in Nairobi during the summer of 2015 volunteering my time with the non-profit organization as a Country Ambassador.</p><p>For more information, visit my blog about the experience, <a href='https://nikhilnairobi.wordpress.com/tag/profiles-of-microfinance-borrowers/'>Nikhil Nairobi</a>.</p>"
			}
		]
	}	
];



