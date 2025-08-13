export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content?: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
  likes: number
  comments: number
  tags?: string[]
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
}

export const blogCategories: BlogCategory[] = [
  { id: "all", name: "All", slug: "all" },
  { id: "career", name: "Career", slug: "career" },
  { id: "technical", name: "Technical", slug: "technical" },
  { id: "leadership", name: "Leadership", slug: "leadership" },
  { id: "mentorship", name: "Mentorship", slug: "mentorship" },
  { id: "personal-growth", name: "Personal Growth", slug: "personal-growth" },
  { id: "ai-future", name: "AI & Future", slug: "ai-future" },
]

export const blogPosts: BlogPost[] = [
{
  id: 1,
  title: "Emotional Intelligence in Tech Field",
  excerpt:
    "Exploring how emotional intelligence (EQ) impacts design, marketing, and AI — and why it's as critical as IQ for success in the tech world. 🤖❤️",
  content: `
    <p>We used to refer to intelligence as a general quality without unpicking a particular variety a person might possess and therefore we don’t tend to highlight the value of a distinctive sort of intelligence which currently does not enjoy the prestige it should. The only type we value the most is the IQ which stands for the intelligence quotient that measures the person’s ability of reasoning logically, making accurate predictions and memorizing, briefly cognitive Intelligence is how well you can learn new information.</p>

    <p>And since it was one of the critical notions we base our success judgment classifications on, the scientists have worked to establish an equation between the IQ and how much it affects the person’s life, the surprise was that only 20% of that intelligence is important to be successful, the rest was dedicated to the EQ an abbreviation of emotional quotient also known as emotional intelligence which is the ability of recognizing your emotions as well as the emotions of those around you, and your ability to use those emotions to develop your behavior and relationships.</p>

    <p>That’s why it happens when you find a smart person academically nevertheless he is unhappy in his personal life and he can’t deal with his problems or has real communication issues around others due to the wrong interpretation of his feelings.</p>

    <p>The studies didn’t stop here of course. Because as it may seem a good skill to develop in yourself, it also can be a perfect weapon to control people and manipulate their habits and behaviors at many scales. For that reason they have been exploiting it in many domains, and in this article we will be discussing some of these domains which have some kind of relationship with tech, starting with design.</p>

    <h2>Design</h2>
    <p>According to the design thinking process which is a human centered problem solving method, the first step designers go through is empathizing, which means to share the same feelings as another person and to reach that you have first to understand his feelings and adapt your own to a certain degree where you will be wearing his shoes so you can design an appropriate product that will adjust with the user’s needs. This is where applying emotional intelligence is key! Being aware of your user’s pain points and considering his emotions will allow you to design an efficient solution and the most accurate one for the situation.</p>

    <h2>Marketing</h2>
    <p>The definition of a successful brand in three words is: recognizable, trusted, and loved. It enjoys positive perceptions and customer loyalty from their target audiences because it provides the exact needed services and attracts consumers by interacting with them. And how could it reach that? Simply using emotional intelligence is a must to compile your strategy.</p>

    <p>In marketing, EQ refers to the understanding of your target audience’s moods to adapt your products with and make it easier to create and target ads. Also, the ability of exploiting their behaviors so you can make it easier for them to interact with your services, playing with their pain points where you manipulate the human’s desire to meet his needs and push him to hype for your brand, and finally the manipulation of the purchase triggers will help to adapt your product with the market’s trend and predict the users comportments so indirectly you impose your services.</p>

    <h2>Emotional Intelligence and AI</h2>
    <p>Moreover, since Peter Salvoy and John Mayer first defined Emotional Intelligence as “a type of social intelligence that involves the ability to monitor one’s own and others’ emotions, to discriminate among them, and to use this information to guide one’s thinking and actions” researchers and companies have tried to demystify the art of being a “people person.” Data has proven that emotional intelligence is a strong predictor of professional success and helps us make better decisions at work.</p>

    <p>So they have been looking to exploit it in the Artificial intelligence domain since it is the ability of machines to perform certain tasks and make decisions based on the intelligence showcased by humans and this led to the appearance of emotional artificial intelligence.</p>

    <p>It refers to technologies that use effective computing techniques to sense, learn and interact with human’s emotions by gathering data about things like facial expressions, body gestures, verbal and nonverbal speech attributes, voice tone and physiological signals with the help of computer vision, sensors or cameras and various deep learning algorithms to interpret these emotions to come up with a response of the system so it can react appropriately.</p>

    <p>The implementation of emotional AI is taken in action in certain applications such as marketing that we mentioned before plus it’s exploitation in the social media recommendation algorithms, healthcare where they can predict and prevent the patient’s mental state, communication with people who have disabilities or autism, and in devices such as smart watches, phones and smart assistants.</p>

    <p>Finally, in the business domain where they use emotional artificial intelligence to understand the consumers by giving you a clue about their emotional profile so it enables you to simulate a conversation that meets the required level. Because in business, communication matters the most and for that they use NLP to index the client’s emails and calls to give an insight about his state and the result will really help the company’s staff to deal with clients and to succeed in their sales. One company that has recognized this is Gain sight, a leading customer success platform located in the Bay Area, which incorporates EQ analysis into their hiring and onboarding, and is currently piloting with one of their customer success teams located in India.</p>

    <h2>Final Thoughts</h2>
    <p>However, not everyone was born with top-notch conversational soft skills and high emotional intelligence, but it does not mean that we can’t work on it. We are glad that the school of life is dedicated to enhancing EQ, and we should give it as much importance as it requires because our human brain is designed to prioritize emotions because people often make decisions based on the emotions they experience at a particular moment and the effects a feeling can cause is really considerable, it impacts on the way a person performs the activity, but it also influences on the eventual result of this activity.</p>

    <h2>References</h2>
    <ul>
      <li><a href="https://www.shortform.com/summary/emotional-intelligence-2-0-summary-travis-bradberry-jean-greaves?utm_source=bing&utm_medium=cpc&utm_campaign=Book%20-%20Emotional%20Intelligence%202.0%20-%20Broad&utm_term=podcast%20emotional%20intelligence&utm_content=84318991504038&msclkid=3d668ff8fd2f177eba1fed61b23aaf7c" target="_blank">Emotional Intelligence 2.0 Summary</a></li>
      <li><a href="https://axies.digital/emotional-intelligence-in-marketing/?fbclid=IwAR3VKTjm5K4Z_sxTcwKKITePaA3nahGPzziv2WHnr5fUU-aojCGIsPxMkMQ" target="_blank">Emotional Intelligence in Marketing</a></li>
      <li><a href="https://cogitocorp.com/blog/5-ways-emotional-intelligence-technology-improves-human-performance/?fbclid=IwAR14c_U0Lpbon1jQO8vJ7wyvPs4Uck8cu8N127Sq9CWX7B_1imwAT4CpKYc#:~:text=Emotional%20intelligence%20in%20technology%20provides,substantial%20advantage%20over%20their%20competitors" target="_blank">5 Ways Emotional Intelligence Technology Improves Human Performance</a></li>
    </ul>
  `,
  author: "Abir Bourbia",
  date: "June 8, 2022",
  readTime: "7 min read",
  category: "AI & Future",
  image: "/blogs-images/Emotional-Intelligence-in-Tech-Field.png?height=400&width=800",
  likes: 0,
  comments: 0,
  tags: ["Emotional Intelligence", "EQ", "Design", "Marketing", "Artificial Intelligence", "Technology"]
},

{
  id: 9,
  title: "You Should Know: Introduction to Supervised Machine Learning",
  excerpt:
    "Before we start talking about supervised machine learning. Let us see what is Machine Learning (ML)!",
  content: `
    <p>Before we start talking about supervised machine learning. Let us see what is Machine Learning (ML)!</p>
    
    <p>Machine Learning, or ML, is a subfield of artificial intelligence that allows machines to learn patterns from data and make decisions or predictions without being explicitly programmed for each task.</p>

    <h2>What Is Supervised Machine Learning?</h2>
    <p>Supervised machine learning is the process of teaching algorithms using labeled datasets—datasets in which each input is paired with its correct output. In this context, the algorithm learns the mapping between inputs and outputs, enabling it to generalize and make accurate predictions on new, unseen data.</p>

    <h2>How It Works</h2>
    <ol>
      <li><strong>Training Phase</strong>: Feed the model with input-output examples.</li>
      <li><strong>Validation & Testing</strong>: Evaluate the model on unseen data to tune performance.</li>
      <li><strong>Prediction</strong>: Deploy the trained model to make decisions on new data.</li>
    </ol>

    <h2>Types of Tasks</h2>
    <ul>
      <li><strong>Classification</strong>: Predicting discrete labels (e.g., spam vs. not-spam).</li>
      <li><strong>Regression</strong>: Predicting continuous values (e.g., house prices).</li>
    </ul>

    <h2>Summary</h2>
    <p>In short, supervised learning equips machines with the ability to infer from labeled examples and apply this to real-world tasks like predictions, detections, and recommendations.</p>
  `,
  author: "Zemouri Nour Fadila",
  date: "June 1, 2022",
  readTime: "4 min read",
  category: "AI & Future",
  image: "/blogs-images/Introduction-to-Supervised-Machine-Learning.png?height=400&width=800",
  likes: 0,
  comments: 0,
  tags: ["Machine Learning", "Supervised Learning", "AI Basics", "Classification", "Regression"]
},
{
  id: 3,
  title: "An Introduction to Search Engine Optimization (SEO)",
  excerpt:
    "Learn what SEO is, why it matters, how long it takes to master, its pros vs cons, and ethical white-hat vs black-hat tactics.",
  content: `
    <p>“Search engine optimization” or as many people like to call it “SEO” is the process of improving the quality and quantity of website traffic to a website or a web page from Search Engines.</p>

    <h2>What is SEO?</h2>
    <p>SEO is the practice of persuading Search Engines such as Google, Bing, and Yahoo to recommend your content to their users as the best solution to their problem.</p>
    <p>SEO stands for Search Engine Optimization, it aims to increase “organic traffic”, by making visitors click on your link in the search results. That is in contrast to paid traffic, which comes from ads.</p>
    <p>To simplify more the SEO is what makes you rank on the first page of Search Engines without paying for ads.</p>

    <h2>The Importance Of SEO</h2>
    <p>While paid advertising, social media, and other online platforms can generate traffic to websites, the Search Engines drive the majority of this traffic, and that is because Organic search results receive way more clicks than paid advertisements. For example, of all US searches, only ~2.8% of people click on paid advertisements.</p>
    <p>So SEO has about 20X more traffic opportunities than PPC (pay-per-click) on both mobile and desktop.</p>
    <p>Beyond that, it is also a valuable tool for brand awareness, building relationships with prospects, and positioning yourself as an authoritative and trustworthy expert in your field.</p>

    <h2>How long does it takes to learn SEO?</h2>
    <p>In the beginning, you will find it hard a little bit because there are a lot of things to learn about SEO.</p>
    <p>But, if you took it step-by-step and follow a structured learning approach, everything will become easier.</p>
    <p>It takes 1–3 months to learn the basics of SEO. However, if you want to be an SEO expert, you have to put around 6–18 months, It depends on your learning speed and grasping power. If you are interested in the subject, you will learn fast.</p>

    <h2>Advantages And Disadvantages Of Search Engine Optimization</h2>
    <h3>Pros:</h3>
    <ol>
      <li><strong>Search Engine Optimization is Free:</strong> Unlike paid ads, SEO is totally free of cost, but it depends on how much time you spend researching keywords and utilizing them in your high-quality content.</li>
      <li><strong>Trackable Results:</strong> You will be able to see how much traffic your site is getting, what keywords you rank on, and how much time visitors are spending on each page of yours. This allows you to track the long-term results of your efforts. These results give you feedback about what you need to change.</li>
      <li><strong>Improving the web presence:</strong> Google has a complex algorithm that determines where each page on your website ranks for various keywords. When you implement an effective local SEO strategy, you’re making sure that your site ranks higher than your local competitors, which improves your online presence and generates new inquiries.</li>
      <li><strong>Decreasing the bounce rate:</strong> To have a good SEO you must have a good web design and that’s what’s make your visitors have a great and easier time checking your website which leads them to be loyal customers.</li>
      <li><strong>The mobile SEO:</strong> As there are 2.71 billion smartphone users worldwide in 2019, having a mobile-friendly or as it called “responsive website” is a really great idea that helps you gain more traffic.</li>
      <li><strong>Get the consumer trust:</strong> A better SEO makes your website rank on the first page of Google and as many people find your content relevant when they search, you gain more customer trust.</li>
    </ol>

    <h3>Cons:</h3>
    <ol>
      <li><strong>High competition:</strong> When it comes to competition, SEO has a massive one so you must be smarter and more aggressive to rank over your competitors.</li>
      <li><strong>Changing Algorithms:</strong> Once you rank well in the search result that doesn’t mean you are staying there forever maybe the next week you lose your rank and that’s supernatural in the SEO world because of the changing algorithms.</li>
      <li><strong>No guarantees:</strong> Even if you did everything as it should be done, the SEO still have no promising result.</li>
      <li><strong>Slow Results:</strong> It takes you some time before you start seeing positive changes to your website because SEO is a little bit slow-moving process.</li>
    </ol>

    <h2>Black Hats And White Hats:</h2>
    <h3>White Hat Search Engine Optimization tactics:</h3>
    <ul>
      <li><strong>Keyword Research and Analysis:</strong> Keyword Research is an important White Hat tool. It can help you understand how your audience is searching, discover synonyms for your keywords, and understand the Search intent of keywords.</li>
      <li><strong>Competitor Content Analysis:</strong> A good SEO will analyze the content of a clients’ competitors and devise a content strategy that can provide a more useful version of what they’re offering.</li>
      <li><strong>Mobile Optimization:</strong> There’s a really good chance that the majority of Traffic to your website is from mobile devices. This is a great example of a White Hat SEO tactic because it balances what users want to see and the type of websites Search Engines tend to favor (Google is increasingly giving preference to mobile-friendly websites).</li>
      <li><strong>Earning Links:</strong> A White Hat SEO earns backlinks through great content, offline relationships, and outreach. Link-building should be done in a way that is natural and should never be bought (more on that in a bit).</li>
    </ul>

    <h3>Black Hat Search Engine Optimization tactics:</h3>
    <ul>
      <li><strong>Keyword Stuffing:</strong> Sure, Search Engines are getting smarter all the time, but Keyword Stuffing can still be effective in the short term. If you’re seeing a web page that uses the same keyword over and over again to the point that the writing seems unnatural, this is Keyword Stuffing.</li>
      <li><strong>Cloaking:</strong> Any time you’re intentionally trying to hide something from the user, it’s probably a Black Hat tactic. Cloaking refers to presenting the Search Engines with a set of content that is drastically different than what the user sees.</li>
      <li><strong>Link Farms:</strong> Link Farms are web pages that exist only to link to another page. Often times these pages are totally unrelated to the content of the pages to which they link, but as with all things Black Hat, the focus is on quantity and not quality.</li>
      <li><strong>Buying Links:</strong> If you’re purchasing backlinks from a website, you’re in direct violation of Google’s webmaster quality guidelines. While there are some gray areas where this can get confusing, it’s best to avoid paying for links at all costs.</li>
      <li><strong>Redirecting Keyword-Rich Domains to Your Site:</strong> Some Black Hat spammers will snatch up dozens of domain names featuring their target keywords and then redirect these domain names to their main website, and Search Engines are generally smart enough to recognize this spammy tactic.</li>
    </ul>

    <p>At the end, we would thank you for ready this week’s article, happy learning.</p>
  `,
  author: "Women Techmakers Algiers",
  date: "May 18, 2022",
  readTime: "5 min read",
  category: "Technical",
  image: "/blogs-images/seo.png?height=400&width=800",
  likes: 0,
  comments: 0,
  tags: ["SEO", "Search Engine Optimization", "Digital Marketing", "Web Traffic", "Tech"]
},
{
  id: 4,
  title: "Overcome Client & Sales Objections Without Conflict",
  excerpt:
    "Learn how to handle client and sales objections gracefully—without escalating conflict—using strategic questioning and deep understanding.",
  content: `
    <p>Sales objections are part of the job when working in the sales industry. The reality is that no matter how amazing your product or service is, there will always be someone who doesn’t want to purchase it. For salespeople, this can make work stressful and even lead to increased conflict with clients and prospects. Don’t let this happen to you; learn how to overcome client and sales objections without conflict by implementing these tips into your business strategy today!</p>

    <h2>The cost of not asking questions</h2>
    <p>Every interaction with a client or potential customer offers an opportunity to get closer to your sale. If you’re not asking for what you want, you’re letting something precious slip away. The art of sales is about getting clients on board with what you do. If your product or service is truly a good fit for their business goals, then they’ll come around eventually — but not without a little push from you. Clients need guidance and reassurance, so speak up!</p>

    <h2>The value of asking questions</h2>
    <p>We like to think we know what’s best for our customers. But more often than not, there’s a good chance we don’t have their best interests at heart. Asking questions gives us insight into our customers — what they want, what they need, how they think — and it brings us closer to understanding them on a human level. It also helps us develop better solutions that ultimately benefit both parties.</p>

    <h2>How to ask questions about what you want</h2>
    <p>If you ask for what you want, you’ll get it. If you don’t, then most likely, you won’t. And asking for what we want doesn’t mean always getting it (or even being successful), but people rarely say no to a question; asking creates engagement, opens communication, and builds relationships — and over time it will lead to more yeses.</p>
    <p>So make sure to do it! Here are some ways to ask questions: <strong>The “What if?” Question:</strong> <em>“What if I were to…? What if I did…?”</em> This is an open-ended question that allows your client or prospect to answer in any way they choose. It can be used as a way of simply exploring an idea or solution with them, or as a way of putting forth an alternative proposal.</p>

    <h2>Answering objections with objections</h2>
    <p>When a client or customer says no to your product or service, they’re not always saying that you can’t be of help. Most often, when someone responds with an objection, it means that they’re interested but are just trying to find a way to buy from you. It may sound counterintuitive, but it pays to ask questions that encourage objections when you sell.</p>

    <h2>Perfecting your objection handling skills</h2>
    <p>To improve your objection handling skills, you need to know what objections are. In general, an objection is a reply to any form of persuasive message that says no to what you’re saying. This could be in person or online, it could be expressed directly or indirectly. An objection is nothing more than a statement that says: “I don’t want to do X right now”; “I don’t believe Y”; or “I think Z isn’t possible.”</p>

    <h2>Advanced objection handling strategies</h2>
    <p>As a salesperson, it’s your job to overcome objections and keep your clients on board. But when your client objects, don’t just accept it: get more information about why they think that way. When you identify their concerns, you can tailor your pitch to overcome those objections and close the deal.</p>
    <p>Here are six different types of sales objections you may hear, and how to handle them—enjoy reading.</p>
  `,
  author: "Samy Benmahrez",
  date: "May 11, 2022",
  readTime: "3 min read",
  category: "Career",
  image: "/blogs-images/Overcome-Client.png?height=400&width=800",
  likes: 0,
  comments: 0,
  tags: ["Sales", "Communication", "Client Relations", "Career"]
},
{
  id: 5,
  title: "8 Online Free Certifications To Boost Your Resume",
  excerpt:
    "Discover 8 free online certifications—from Google’s Digital Marketing to Harvard’s Entrepreneurship—that can strengthen your resume and give you an edge over the competition.",
  content: `
    <p>Applying online for jobs or universities is easy, but what really makes it hard is the competition, so by having a good resume you’ll eliminate a lot of other competition and you double your chances of getting accepted.</p>
    <p>In this blog post, I will share with you 8 online free certifications that help you boost your resume to look more professional.</p>

    <h2>1. Fundamentals Of Digital Marketing By Google</h2>
    <p>Google is offering a free course to <a href="https://learndigital.withgoogle.com">Master the basics of digital marketing</a>. It’s a course accredited by Interactive Advertising Bureau Europe and The Open University, which contains 26 modules all created by Google trainers, packed full of practical exercises and real-world examples to help you turn knowledge into action.</p>
    <p>Getting certified after passing the exam (cost 0$), shows that you have a clear understanding of the core concepts of digital marketing. You can also add the qualification to your CV, and easily upload it to your LinkedIn profile.</p>
    <p>Skills You Will Learn From This Course:</p>
    <ul>
      <li>Display Advertising.</li>
      <li>E-commerce.</li>
      <li>Email Marketing.</li>
      <li>Local Marketing.</li>
      <li>SEM.</li>
      <li>SEO.</li>
      <li>Social Media.</li>
      <li>Web Optimisation.</li>
    </ul>

    <h2>2. CS50’s Introduction to Computer Science</h2>
    <p><a href="https://www.edx.org">CS50’s Introduction to Computer Science</a> is a Harvard University course that you find on the learning platform edX. If you wanna get along with computer science, this course is a good place to start from because it’s an entry-level course with no Prerequisites and taught by the best teachers in this field.</p>
    <p>By finishing this course you will learn:</p>
    <ul>
      <li>A broad and robust understanding of Computer Science and programming.</li>
      <li>How to think algorithmically and solve programming problems efficiently.</li>
      <li>Several languages including C, Python, SQL, and JavaScript plus CSS and HTML.</li>
      <li>How to develop and present a final programming project to your peers.</li>
      <li>Concepts like abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development.</li>
    </ul>
    <p>Price: The course is totally free and with lifetime access, But to have a certificate officially signed by Harvard University you need ta pay a small fee (around 50$).</p>

    <h2>3. IBM Data Science Professional Certificate</h2>
    <p>Data science is one of the hottest professions these days, and the demand for data scientists who can analyze data and communicate results to inform data-driven decisions is increasing every day.</p>
    <p>You find the <a href="https://www.coursera.org">IBM Data Science Professional Certificate</a> course on the famous learning platform Coursera. This Professional Certificate from IBM will help anyone interested in pursuing a career in data science or machine learning develop career-relevant skills and experience.</p>
    <p>Skills That You Will Learn On This Course:</p>
    <ul>
      <li>Data Science.</li>
      <li>Python Programming.</li>
      <li>Relational Database Management System (RDBMS).</li>
      <li>SQL.</li>
      <li>Cloud Databases.</li>
    </ul>
    <p>When you complete all of the courses in the program, you’ll earn a certificate to share on your LinkedIn profile, on printed resumes, CVs, or other documents.</p>

    <h2>4. Excel for Beginners</h2>
    <p><a href="https://www.mygreatlearning.com">Excel for Beginners</a>, it’s a course that provides you with the understanding and skillsets to be able to make the most effective use of Microsoft Excel.</p>
    <p>Microsoft Excel is an industry-leading spreadsheet software and is a powerful analysis as well as a data visualization tool. The course has an overall rating of 4.45 stars from 6,843 students with 144,195 Learners registered.</p>
    <p>You will learn to use formulas to do complex calculations to analyze your data. You will also get an extensive understanding of concepts such as borders, sorting and filtering with the data, if-else conditions, date, and time with the free excel course online. Plus, you will get the “Excel for Beginners course completion certificate” from Great learning which you can share in the Certifications section of your LinkedIn profile, on printed resumes, CVs, or other documents.</p>
    <p>I know that the most common question in your head is “Does Great Learning Provide Excel For Free?”</p>
    <p>The answer is: Yes. Great Learning provides you with a free online course on Excel, you can head over to Great Learning Academy to learn more about what the Excel course offers, and what you can gain out of it.</p>

    <h2>5. Introduction To Cyber Security</h2>
    <p>Cyber security is the application of technologies, processes, and controls to protect systems, networks, programs, devices, and data from cyber-attacks. It aims to reduce the risk of cyber-attacks and protect against the unauthorized exploitation of systems, networks, and technologies.</p>
    <p><a href="https://www.futurelearn.com">Introduction To Cyber Security</a> course that helps you recognize online security threats that could harm you and explore the steps you can take to minimize your risk. The course is taught by the software engineer Arosha K. Bandara and developed by The Open University.</p>
    <p>Skills That You Will Learn On This Course:</p>
    <ul>
      <li>Explain basic cyber security terminology.</li>
      <li>Describe basic authentication mechanisms.</li>
      <li>Describe cryptography terminology.</li>
      <li>Apply basic risk analysis and management techniques.</li>
      <li>Describe legal and regulatory issues relating to cyber security.</li>
    </ul>
    <p>311,077 students have been enrolled in this course, it has a duration of 8 weeks with an average weekly study of 3 hours, and the good thing is that it does not require any prior knowledge of computer security and can be enjoyed by anyone interested in improving the security of their digital information, whether at home or work.</p>

    <h2>6. Graphic Design Specialization</h2>
    <p>If you are into Graphic Design, then the <a href="https://www.coursera.org">Graphic Design Specialization</a> course is for you. Offered by CalArts on Coursera this course will help you gain fundamental skills needed to be a graphic designer and takes you through the entire design process, from ideation to creation to presentation. Through the guide, you will be creating and giving a visual identity to an imaginary start-up company, and applying that visual identity to several forms.</p>
    <p>Skills That You Will Learn On This Course:</p>
    <ul>
      <li>Visual Communication.</li>
      <li>Typography.</li>
      <li>Branding Communication.</li>
      <li>Color Theory.</li>
      <li>Adobe Illustrator.</li>
    </ul>
    <p>When you enroll in the course, you get access to all of the courses in the specialization, and you earn a certificate when you complete the work. If you only want to read and view the course content, you can audit the course for free.</p>

    <h2>7. Google Ads Certifications</h2>
    <p>Again with Google courses, but this time Google is offering six free certifications, and all of them are for beginners:</p>
    <ol>
      <li><a href="https://skillshop.exceedlms.com">Google Ads Display Certification</a>: Google Ads Display Certification will demonstrate your ability to deliver effective display advertising to meet specific marketing objectives. Prepare for the certification by completing the diagnostic assessment, or proceed to get certified.</li>
      <li><a href="https://skillshop.exceedlms.com">Google Ads Search Certification</a>: Google Ads Search Certification will demonstrate your mastery of Google Ads Search campaigns. Prepare for the certification by completing the diagnostic assessment, or proceed to get certified.</li>
      <li><a href="https://skillshop.exceedlms.com">Google Ads — Measurement Certification</a>: Google Ads — Measurement Certification will demonstrate your ability to measure and optimize Google Ads campaign performance. Prepare for the certification by completing the diagnostic assessment, or proceed to get certified.</li>
      <li><a href="https://skillshop.exceedlms.com">Google Ads Video Certification</a>: Google Ads Video Certification will demonstrate your ability to get results from YouTube and Google Video advertising solutions. Prepare for the certification by completing the diagnostic assessment, or proceed to get certified.</li>
      <li><a href="https://skillshop.exceedlms.com">Shopping ads Certification</a>: Shopping ads Certification will demonstrate your ability to connect products with shoppers across their purchase journey. Prepare for the certification by completing the diagnostic assessment, or proceed to get certified.</li>
      <li><a href="https://skillshop.exceedlms.com">Google Ads Apps Certification</a>: Google Ads Apps Certification will demonstrate your ability to create and optimize App campaigns to meet specific marketing objectives. Prepare for the certification by completing the diagnostic assessment, or proceed to get certified.</li>
    </ol>

    <h2>8. Entrepreneurship in Emerging Economies</h2>
    <p>For the last course on this blog post, we have a Harvard University course <a href="https://www.edx.org">Entrepreneurship in Emerging Economies</a>, this course is taught by Harvard Business School professor Tarun Khanna, you can enroll and get limited access for free, it takes 6 weeks with an average of 3 to 5 weekly study hours, entry-level course with no prerequisites.</p>
    <p>What You Will Learn On This Course:</p>
    <ul>
      <li>An awareness of the opportunities for entrepreneurship in fast-growing emerging markets.</li>
      <li>An understanding of a conceptual framework for evaluating such opportunities.</li>
      <li>An appreciation of the types of problems that lend themselves to entrepreneurial solutions.</li>
    </ul>
    <p>More than half a million students have enrolled in this course (about 686,134), which makes it an opportunity that you shouldn’t miss.</p>

    <p>Now it’s time to enhace your resume!</p>
  `,
  author: "Islem Cherouat",
  date: "May 4, 2022",
  readTime: "6 min read",
  category: "Career",
  image: "/blogs-images/8-online-free-certifications.png?height=400&width=800",
  likes: 0,
  comments: 0,
  tags: ["Certifications", "Resume", "Career", "Learning", "Free Courses"]
},
{
  id: 5,
  title: "Do We Want AI to Be Conscious?",
  excerpt:
    "Imagine asking your fridge how it feels—sounds odd, but it opens the door to imagining a world where machines are aware of themselves.",
  content: `
    <p>Imagine opening your fridge in the morning: “Hey Fridge, how do you feel today?” “cold and empty as everyday”, “nice!” Well that would be weird, but it opens us the doors to think about the shape of our world if our machines were conscious about themselves.</p>

    <h2>But what do we mean by consciousness?</h2>
    <p>Some scientists tend to define consciousness as a subjective experience, meaning the ability to self-stimulate in the future. If a cat can see itself eating its next meal, it would be conscious by definition.</p>

    <p>But is this what consciousness is really about? No, otherwise it would have been an easy subject to discuss and implement.</p>

    <p>The mechanisms of consciousness—the reasons we have a vivid and direct experience of the world and of the self—the truth is that they remain an unsolved mystery in neuroscience, and some people think they will always be; it seems impossible to explain subjective experience using the objective methods of science.</p>
  `,
  author: "Zehor Lahlah",
  date: "April 26, 2022",
  readTime: "5 min read",
  category: "AI & Future",
  image: "/blogs-images/Do-we-want-AI-to-be-Conscious.png?height=400&width=800",
  likes: 0,
  comments: 0,
  tags: ["AI Consciousness", "Philosophy", "Self-Awareness", "Speculative"]
}



]

// Helper functions for API integration
export const getBlogPostById = (id: number): BlogPost | null => {
  return blogPosts.find((post) => post.id === id) || null
}

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  if (category === "all") return blogPosts
  return blogPosts.filter((post) => post.category === category)
}

export const getRelatedPosts = (currentCategory: string, currentId: number, limit = 3): BlogPost[] => {
  return blogPosts.filter((post) => post.category === currentCategory && post.id !== currentId).slice(0, limit)
}

export const getFeaturedPost = (): BlogPost => {
  return blogPosts[0] // First post is featured
}
