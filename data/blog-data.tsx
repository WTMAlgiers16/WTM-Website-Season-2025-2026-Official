export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content?: string
  author: string
  authorImage?: string
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
    <div class="prose max-w-none">
      <p class="mb-6 text-lg leading-relaxed">We used to refer to intelligence as a general quality without unpicking a particular variety a person might possess and therefore we don't tend to highlight the value of a distinctive sort of intelligence which currently does not enjoy the prestige it should. The only type we value the most is the IQ which stands for the intelligence quotient that measures the person's ability of reasoning logically, making accurate predictions and memorizing, briefly cognitive Intelligence is how well you can learn new information.</p>

      <p class="mb-6 text-lg leading-relaxed">And since it was one of the critical notions we base our success judgment classifications on, the scientists have worked to establish an equation between the IQ and how much it affects the person's life, the surprise was that only 20% of that intelligence is important to be successful, the rest was dedicated to the EQ an abbreviation of emotional quotient also known as emotional intelligence which is the ability of recognizing your emotions as well as the emotions of those around you, and your ability to use those emotions to develop your behavior and relationships.</p>

      <p class="mb-6 text-lg leading-relaxed">That's why it happens when you find a smart person academically nevertheless he is unhappy in his personal life and he can't deal with his problems or has real communication issues around others due to the wrong interpretation of his feelings.</p>

      <p class="mb-8 text-lg leading-relaxed">The studies didn't stop here of course. Because as it may seem a good skill to develop in yourself, it also can be a perfect weapon to control people and manipulate their habits and behaviors at many scales. For that reason they have been exploiting it in many domains, and in this article we will be discussing some of these domains which have some kind of relationship with tech, starting with design.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">Design</h2>
      <p class="mb-8 text-lg leading-relaxed">According to the design thinking process which is a human centered problem solving method, the first step designers go through is empathizing, which means to share the same feelings as another person and to reach that you have first to understand his feelings and adapt your own to a certain degree where you will be wearing his shoes so you can design an appropriate product that will adjust with the user's needs. This is where applying emotional intelligence is key! Being aware of your user's pain points and considering his emotions will allow you to design an efficient solution and the most accurate one for the situation.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">Marketing</h2>
      <p class="mb-6 text-lg leading-relaxed">The definition of a successful brand in three words is: recognizable, trusted, and loved. It enjoys positive perceptions and customer loyalty from their target audiences because it provides the exact needed services and attracts consumers by interacting with them. And how could it reach that? Simply using emotional intelligence is a must to compile your strategy.</p>

      <p class="mb-8 text-lg leading-relaxed">In marketing, EQ refers to the understanding of your target audience's moods to adapt your products with and make it easier to create and target ads. Also, the ability of exploiting their behaviors so you can make it easier for them to interact with your services, playing with their pain points where you manipulate the human's desire to meet his needs and push him to hype for your brand, and finally the manipulation of the purchase triggers will help to adapt your product with the market's trend and predict the users comportments so indirectly you impose your services.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">Emotional Intelligence and AI</h2>
      <p class="mb-6 text-lg leading-relaxed">Moreover, since Peter Salvoy and John Mayer first defined Emotional Intelligence as "a type of social intelligence that involves the ability to monitor one's own and others' emotions, to discriminate among them, and to use this information to guide one's thinking and actions" researchers and companies have tried to demystify the art of being a "people person." Data has proven that emotional intelligence is a strong predictor of professional success and helps us make better decisions at work.</p>

      <p class="mb-6 text-lg leading-relaxed">So they have been looking to exploit it in the Artificial intelligence domain since it is the ability of machines to perform certain tasks and make decisions based on the intelligence showcased by humans and this led to the appearance of emotional artificial intelligence.</p>

      <p class="mb-6 text-lg leading-relaxed">It refers to technologies that use effective computing techniques to sense, learn and interact with human's emotions by gathering data about things like facial expressions, body gestures, verbal and nonverbal speech attributes, voice tone and physiological signals with the help of computer vision, sensors or cameras and various deep learning algorithms to interpret these emotions to come up with a response of the system so it can react appropriately.</p>

      <p class="mb-6 text-lg leading-relaxed">The implementation of emotional AI is taken in action in certain applications such as marketing that we mentioned before plus it's exploitation in the social media recommendation algorithms, healthcare where they can predict and prevent the patient's mental state, communication with people who have disabilities or autism, and in devices such as smart watches, phones and smart assistants.</p>

      <p class="mb-8 text-lg leading-relaxed">Finally, in the business domain where they use emotional artificial intelligence to understand the consumers by giving you a clue about their emotional profile so it enables you to simulate a conversation that meets the required level. Because in business, communication matters the most and for that they use NLP to index the client's emails and calls to give an insight about his state and the result will really help the company's staff to deal with clients and to succeed in their sales. One company that has recognized this is Gain sight, a leading customer success platform located in the Bay Area, which incorporates EQ analysis into their hiring and onboarding, and is currently piloting with one of their customer success teams located in India.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">Final Thoughts</h2>
      <p class="mb-8 text-lg leading-relaxed">However, not everyone was born with top-notch conversational soft skills and high emotional intelligence, but it does not mean that we can't work on it. We are glad that the school of life is dedicated to enhancing EQ, and we should give it as much importance as it requires because our human brain is designed to prioritize emotions because people often make decisions based on the emotions they experience at a particular moment and the effects a feeling can cause is really considerable, it impacts on the way a person performs the activity, but it also influences on the eventual result of this activity.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">References</h2>
      <ul class="list-disc pl-6 space-y-3 mb-6">
        <li class="text-lg leading-relaxed"><a href="https://www.shortform.com/summary/emotional-intelligence-2-0-summary-travis-bradberry-jean-greaves?utm_source=bing&utm_medium=cpc&utm_campaign=Book%20-%20Emotional%20Intelligence%202.0%20-%20Broad&utm_term=podcast%20emotional%20intelligence&utm_content=84318991504038&msclkid=3d668ff8fd2f177eba1fed61b23aaf7c" target="_blank" class="text-gray-700 underline hover:text-gray-900">Emotional Intelligence 2.0 Summary</a></li>
        <li class="text-lg leading-relaxed"><a href="https://axies.digital/emotional-intelligence-in-marketing/?fbclid=IwAR3VKTjm5K4Z_sxTcwKKITePaA3nahGPzziv2WHnr5fUU-aojCGIsPxMkMQ" target="_blank" class="text-gray-700 underline hover:text-gray-900">Emotional Intelligence in Marketing</a></li>
        <li class="text-lg leading-relaxed"><a href="https://cogitocorp.com/blog/5-ways-emotional-intelligence-technology-improves-human-performance/?fbclid=IwAR14c_U0Lpbon1jQO8vJ7wyvPs4Uck8cu8N127Sq9CWX7B_1imwAT4CpKYc#:~:text=Emotional%20intelligence%20in%20technology%20provides,substantial%20advantage%20over%20their%20competitors" target="_blank" class="text-gray-700 underline hover:text-gray-900">5 Ways Emotional Intelligence Technology Improves Human Performance</a></li>
      </ul>
    </div>
  `,
  author: "Abir Bourbia",
  authorImage:"/blogs-images/writers/abir-bourbia.png",
  date: "June 8, 2022",
  readTime: "7 min read",
  category: "AI & Future",
  image: "/blogs-images/Emotional-Intelligence-in-Tech-Field.png?height=400&width=800",
  likes: 0,
  comments: 0,
  tags: ["Emotional Intelligence", "EQ", "Design", "Marketing", "Artificial Intelligence", "Technology"]
},
{
  id: 2,
  title: "You Should Know: Introduction to Supervised Machine Learning",
  excerpt:
    "Before we start talking about supervised machine learning. Let us see what is Machine Learning (ML)!",
  content: `
    <div class="prose max-w-none">
      <p class="mb-8 text-lg leading-relaxed">Before we start talking about supervised machine learning. Let us see what is Machine Learning (ML)!</p>
      
      <p class="mb-8 text-lg leading-relaxed">Machine Learning, or ML, is a subfield of artificial intelligence that allows machines to learn patterns from data and make decisions or predictions without being explicitly programmed for each task.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">What Is Supervised Machine Learning?</h2>
      <p class="mb-8 text-lg leading-relaxed">Supervised machine learning is the process of teaching algorithms using labeled datasets—datasets in which each input is paired with its correct output. In this context, the algorithm learns the mapping between inputs and outputs, enabling it to generalize and make accurate predictions on new, unseen data.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">How It Works</h2>
      <ol class="list-decimal pl-6 space-y-4 mb-8">
        <li class="text-lg leading-relaxed"><strong class="font-semibold">Training Phase</strong>: Feed the model with input-output examples.</li>
        <li class="text-lg leading-relaxed"><strong class="font-semibold">Validation & Testing</strong>: Evaluate the model on unseen data to tune performance.</li>
        <li class="text-lg leading-relaxed"><strong class="font-semibold">Prediction</strong>: Deploy the trained model to make decisions on new data.</li>
      </ol>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">Types of Tasks</h2>
      <ul class="list-disc pl-6 space-y-4 mb-8">
        <li class="text-lg leading-relaxed"><strong class="font-semibold">Classification</strong>: Predicting discrete labels (e.g., spam vs. not-spam).</li>
        <li class="text-lg leading-relaxed"><strong class="font-semibold">Regression</strong>: Predicting continuous values (e.g., house prices).</li>
      </ul>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">Summary</h2>
      <p class="mb-6 text-lg leading-relaxed">In short, supervised learning equips machines with the ability to infer from labeled examples and apply this to real-world tasks like predictions, detections, and recommendations.</p>
    </div>
  `,
  author: "Zemouri Nour Fadila",
  authorImage: "/blogs-images/writers/zemouri-nour-fadila.png",
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
    <div class="prose max-w-none">
      <p class="mb-8 text-lg leading-relaxed">"Search engine optimization" or as many people like to call it "SEO" is the process of improving the quality and quantity of website traffic to a website or a web page from Search Engines.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">What is SEO?</h2>
      <p class="mb-6 text-lg leading-relaxed">SEO is the practice of persuading Search Engines such as Google, Bing, and Yahoo to recommend your content to their users as the best solution to their problem.</p>
      <p class="mb-6 text-lg leading-relaxed">SEO stands for Search Engine Optimization, it aims to increase "organic traffic", by making visitors click on your link in the search results. That is in contrast to paid traffic, which comes from ads.</p>
      <p class="mb-8 text-lg leading-relaxed">To simplify more the SEO is what makes you rank on the first page of Search Engines without paying for ads.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">The Importance Of SEO</h2>
      <p class="mb-6 text-lg leading-relaxed">While paid advertising, social media, and other online platforms can generate traffic to websites, the Search Engines drive the majority of this traffic, and that is because Organic search results receive way more clicks than paid advertisements. For example, of all US searches, only ~2.8% of people click on paid advertisements.</p>
      <p class="mb-6 text-lg leading-relaxed">So SEO has about 20X more traffic opportunities than PPC (pay-per-click) on both mobile and desktop.</p>
      <p class="mb-8 text-lg leading-relaxed">Beyond that, it is also a valuable tool for brand awareness, building relationships with prospects, and positioning yourself as an authoritative and trustworthy expert in your field.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">How long does it takes to learn SEO?</h2>
      <p class="mb-6 text-lg leading-relaxed">In the beginning, you will find it hard a little bit because there are a lot of things to learn about SEO.</p>
      <p class="mb-6 text-lg leading-relaxed">But, if you took it step-by-step and follow a structured learning approach, everything will become easier.</p>
      <p class="mb-8 text-lg leading-relaxed">It takes 1–3 months to learn the basics of SEO. However, if you want to be an SEO expert, you have to put around 6–18 months, It depends on your learning speed and grasping power. If you are interested in the subject, you will learn fast.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">Advantages And Disadvantages Of Search Engine Optimization</h2>
      <h3 class="text-2xl font-semibold mb-4 mt-8">Pros:</h3>
      <ol class="list-decimal pl-6 space-y-4 mb-8">
        <li class="text-lg leading-relaxed"><strong class="font-semibold">Search Engine Optimization is Free:</strong> Unlike paid ads, SEO is totally free of cost, but it depends on how much time you spend researching keywords and utilizing them in your high-quality content.</li>
        <li class="text-lg leading-relaxed"><strong class="font-semibold">Trackable Results:</strong> You will be able to see how much traffic your site is getting, what keywords you rank on, and how much time visitors are spending on each page of yours. This allows you to track the long-term results of your efforts. These results give you feedback about what you need to change.</li>
        <li class="text-lg leading-relaxed"><strong class="font-semibold">Improving the web presence:</strong> Google has a complex algorithm that determines where each page on your website ranks for various keywords. When you implement an effective local SEO strategy, you're making sure that your site ranks higher than your local competitors, which improves your online presence and generates new inquiries.</li>
        <li class="text-lg leading-relaxed"><strong class="font-semibold">Decreasing the bounce rate:</strong> To have a good SEO you must have a good web design and that's what's make your visitors have a great and easier time checking your website which leads them to be loyal customers.</li>
        <li class="text-lg leading-relaxed"><strong class="font-semibold">The mobile SEO:</strong> As there are 2.71 billion smartphone users worldwide in 2019, having a mobile-friendly or as it called "responsive website" is a really great idea that helps you gain more traffic.</li>
        <li class="text-lg leading-relaxed"><strong class="font-semibold">Get the consumer trust:</strong> A better SEO makes your website rank on the first page of Google and as many people find your content relevant when they search, you gain more customer trust.</li>
      </ol>

      <h3 class="text-2xl font-semibold mb-4 mt-8">Cons:</h3>
      <ol class="list-decimal pl-6 space-y-4 mb-8">
        <li class="text-lg leading-relaxed"><strong class="font-semibold">High competition:</strong> When it comes to competition, SEO has a massive one so you must be smarter and more aggressive to rank over your competitors.</li>
        <li class="text-lg leading-relaxed"><strong class="font-semibold">Changing Algorithms:</strong> Once you rank well in the search result that doesn't mean you are staying there forever maybe the next week you lose your rank and that's supernatural in the SEO world because of the changing algorithms.</li>
        <li class="text-lg leading-relaxed"><strong class="font-semibold">No guarantees:</strong> Even if you did everything as it should be done, the SEO still have no promising result.</li>
        <li class="text-lg leading-relaxed"><strong class="font-semibold">Slow Results:</strong> It takes you some time before you start seeing positive changes to your website because SEO is a little bit slow-moving process.</li>
      </ol>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">Black Hats And White Hats:</h2>
      <h3 class="text-2xl font-semibold mb-4 mt-8">White Hat Search Engine Optimization tactics:</h3>
      <ul class="list-disc pl-6 space-y-4 mb-8">
        <li class="text-lg leading-relaxed"><strong class="font-semibold">Keyword Research and Analysis:</strong> Keyword Research is an important White Hat tool. It can help you understand how your audience is searching, discover synonyms for your keywords, and understand the Search intent of keywords.</li>
        <li class="text-lg leading-relaxed"><strong class="font-semibold">Competitor Content Analysis:</strong> A good SEO will analyze the content of a clients' competitors and devise a content strategy that can provide a more useful version of what they're offering.</li>
        <li class="text-lg leading-relaxed"><strong class="font-semibold">Mobile Optimization:</strong> There's a really good chance that the majority of Traffic to your website is from mobile devices. This is a great example of a White Hat SEO tactic because it balances what users want to see and the type of websites Search Engines tend to favor (Google is increasingly giving preference to mobile-friendly websites).</li>
        <li class="text-lg leading-relaxed"><strong class="font-semibold">Earning Links:</strong> A White Hat SEO earns backlinks through great content, offline relationships, and outreach. Link-building should be done in a way that is natural and should never be bought (more on that in a bit).</li>
      </ul>

      <h3 class="text-2xl font-semibold mb-4 mt-8">Black Hat Search Engine Optimization tactics:</h3>
      <ul class="list-disc pl-6 space-y-4 mb-8">
        <li class="text-lg leading-relaxed"><strong class="font-semibold">Keyword Stuffing:</strong> Sure, Search Engines are getting smarter all the time, but Keyword Stuffing can still be effective in the short term. If you're seeing a web page that uses the same keyword over and over again to the point that the writing seems unnatural, this is Keyword Stuffing.</li>
        <li class="text-lg leading-relaxed"><strong class="font-semibold">Cloaking:</strong> Any time you're intentionally trying to hide something from the user, it's probably a Black Hat tactic. Cloaking refers to presenting the Search Engines with a set of content that is drastically different than what the user sees.</li>
        <li class="text-lg leading-relaxed"><strong class="font-semibold">Link Farms:</strong> Link Farms are web pages that exist only to link to another page. Often times these pages are totally unrelated to the content of the pages to which they link, but as with all things Black Hat, the focus is on quantity and not quality.</li>
        <li class="text-lg leading-relaxed"><strong class="font-semibold">Buying Links:</strong> If you're purchasing backlinks from a website, you're in direct violation of Google's webmaster quality guidelines. While there are some gray areas where this can get confusing, it's best to avoid paying for links at all costs.</li>
        <li class="text-lg leading-relaxed"><strong class="font-semibold">Redirecting Keyword-Rich Domains to Your Site:</strong> Some Black Hat spammers will snatch up dozens of domain names featuring their target keywords and then redirect these domain names to their main website, and Search Engines are generally smart enough to recognize this spammy tactic.</li>
      </ul>

      <p class="mb-6 text-lg leading-relaxed">At the end, we would thank you for ready this week's article, happy learning.</p>
    </div>
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
    <div class="prose max-w-none">
      <p class="mb-8 text-lg leading-relaxed">Sales objections are part of the job when working in the sales industry. The reality is that no matter how amazing your product or service is, there will always be someone who doesn't want to purchase it. For salespeople, this can make work stressful and even lead to increased conflict with clients and prospects. Don't let this happen to you; learn how to overcome client and sales objections without conflict by implementing these tips into your business strategy today!</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">The cost of not asking questions</h2>
      <p class="mb-8 text-lg leading-relaxed">Every interaction with a client or potential customer offers an opportunity to get closer to your sale. If you're not asking for what you want, you're letting something precious slip away. The art of sales is about getting clients on board with what you do. If your product or service is truly a good fit for their business goals, then they'll come around eventually — but not without a little push from you. Clients need guidance and reassurance, so speak up!</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">The value of asking questions</h2>
      <p class="mb-8 text-lg leading-relaxed">We like to think we know what's best for our customers. But more often than not, there's a good chance we don't have their best interests at heart. Asking questions gives us insight into our customers — what they want, what they need, how they think — and it brings us closer to understanding them on a human level. It also helps us develop better solutions that ultimately benefit both parties.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">How to ask questions about what you want</h2>
      <p class="mb-6 text-lg leading-relaxed">If you ask for what you want, you'll get it. If you don't, then most likely, you won't. And asking for what we want doesn't mean always getting it (or even being successful), but people rarely say no to a question; asking creates engagement, opens communication, and builds relationships — and over time it will lead to more yeses.</p>
      <p class="mb-8 text-lg leading-relaxed">So make sure to do it! Here are some ways to ask questions: <strong class="font-semibold">The "What if?" Question:</strong> <em>"What if I were to…? What if I did…?"</em> This is an open-ended question that allows your client or prospect to answer in any way they choose. It can be used as a way of simply exploring an idea or solution with them, or as a way of putting forth an alternative proposal.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">Answering objections with objections</h2>
      <p class="mb-8 text-lg leading-relaxed">When a client or customer says no to your product or service, they're not always saying that you can't be of help. Most often, when someone responds with an objection, it means that they're interested but are just trying to find a way to buy from you. It may sound counterintuitive, but it pays to ask questions that encourage objections when you sell.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">Perfecting your objection handling skills</h2>
      <p class="mb-8 text-lg leading-relaxed">To improve your objection handling skills, you need to know what objections are. In general, an objection is a reply to any form of persuasive message that says no to what you're saying. This could be in person or online, it could be expressed directly or indirectly. An objection is nothing more than a statement that says: "I don't want to do X right now"; "I don't believe Y"; or "I think Z isn't possible."</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">Advanced objection handling strategies</h2>
      <p class="mb-6 text-lg leading-relaxed">As a salesperson, it's your job to overcome objections and keep your clients on board. But when your client objects, don't just accept it: get more information about why they think that way. When you identify their concerns, you can tailor your pitch to overcome those objections and close the deal.</p>
      <p class="mb-6 text-lg leading-relaxed">Here are six different types of sales objections you may hear, and how to handle them—enjoy reading.</p>
    </div>
  `,
  author: "Samy Benmahrez",
  authorImage: "/blogs-images/writers/samy-benmahrez.png",
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
    "Discover 8 free online certifications—from Google's Digital Marketing to Harvard's Entrepreneurship—that can strengthen your resume and give you an edge over the competition.",
  content: `
    <div class="prose max-w-none">
      <p class="mb-6 text-lg leading-relaxed">Applying online for jobs or universities is easy, but what really makes it hard is the competition, so by having a good resume you'll eliminate a lot of other competition and you double your chances of getting accepted.</p>
      <p class="mb-8 text-lg leading-relaxed">In this blog post, I will share with you 8 online free certifications that help you boost your resume to look more professional.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">1. Fundamentals Of Digital Marketing By Google</h2>
      <p class="mb-4 text-lg leading-relaxed">Google is offering a free course to <a href="https://learndigital.withgoogle.com" class="text-gray-700 underline hover:text-gray-900">Master the basics of digital marketing</a>. It's a course accredited by Interactive Advertising Bureau Europe and The Open University, which contains 26 modules all created by Google trainers, packed full of practical exercises and real-world examples to help you turn knowledge into action.</p>
      <p class="mb-6 text-lg leading-relaxed">Getting certified after passing the exam (cost 0$), shows that you have a clear understanding of the core concepts of digital marketing. You can also add the qualification to your CV, and easily upload it to your LinkedIn profile.</p>
      <p class="mb-4 text-lg leading-relaxed font-semibold">Skills You Will Learn From This Course:</p>
      <ul class="list-disc pl-6 space-y-2 mb-8">
        <li class="text-lg leading-relaxed">Display Advertising.</li>
        <li class="text-lg leading-relaxed">E-commerce.</li>
        <li class="text-lg leading-relaxed">Email Marketing.</li>
        <li class="text-lg leading-relaxed">Local Marketing.</li>
        <li class="text-lg leading-relaxed">SEM.</li>
        <li class="text-lg leading-relaxed">SEO.</li>
        <li class="text-lg leading-relaxed">Social Media.</li>
        <li class="text-lg leading-relaxed">Web Optimisation.</li>
      </ul>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">2. CS50's Introduction to Computer Science</h2>
      <p class="mb-4 text-lg leading-relaxed"><a href="https://www.edx.org" class="text-gray-700 underline hover:text-gray-900">CS50's Introduction to Computer Science</a> is a Harvard University course that you find on the learning platform edX. If you wanna get along with computer science, this course is a good place to start from because it's an entry-level course with no Prerequisites and taught by the best teachers in this field.</p>
      <p class="mb-4 text-lg leading-relaxed font-semibold">By finishing this course you will learn:</p>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li class="text-lg leading-relaxed">A broad and robust understanding of Computer Science and programming.</li>
        <li class="text-lg leading-relaxed">How to think algorithmically and solve programming problems efficiently.</li>
        <li class="text-lg leading-relaxed">Several languages including C, Python, SQL, and JavaScript plus CSS and HTML.</li>
        <li class="text-lg leading-relaxed">How to develop and present a final programming project to your peers.</li>
        <li class="text-lg leading-relaxed">Concepts like abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development.</li>
      </ul>
      <p class="mb-8 text-lg leading-relaxed"><strong class="font-semibold">Price:</strong> The course is totally free and with lifetime access, But to have a certificate officially signed by Harvard University you need ta pay a small fee (around 50$).</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">3. IBM Data Science Professional Certificate</h2>
      <p class="mb-6 text-lg leading-relaxed">Data science is one of the hottest professions these days, and the demand for data scientists who can analyze data and communicate results to inform data-driven decisions is increasing every day.</p>
      <p class="mb-6 text-lg leading-relaxed">You find the <a href="https://www.coursera.org" class="text-gray-700 underline hover:text-gray-900">IBM Data Science Professional Certificate</a> course on the famous learning platform Coursera. This Professional Certificate from IBM will help anyone interested in pursuing a career in data science or machine learning develop career-relevant skills and experience.</p>
      <p class="mb-4 text-lg leading-relaxed font-semibold">Skills That You Will Learn On This Course:</p>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li class="text-lg leading-relaxed">Data Science.</li>
        <li class="text-lg leading-relaxed">Python Programming.</li>
        <li class="text-lg leading-relaxed">Relational Database Management System (RDBMS).</li>
        <li class="text-lg leading-relaxed">SQL.</li>
        <li class="text-lg leading-relaxed">Cloud Databases.</li>
      </ul>
      <p class="mb-8 text-lg leading-relaxed">When you complete all of the courses in the program, you'll earn a certificate to share on your LinkedIn profile, on printed resumes, CVs, or other documents.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">4. Excel for Beginners</h2>
      <p class="mb-6 text-lg leading-relaxed"><a href="https://www.mygreatlearning.com" class="text-gray-700 underline hover:text-gray-900">Excel for Beginners</a>, it's a course that provides you with the understanding and skillsets to be able to make the most effective use of Microsoft Excel.</p>
      <p class="mb-6 text-lg leading-relaxed">Microsoft Excel is an industry-leading spreadsheet software and is a powerful analysis as well as a data visualization tool. The course has an overall rating of 4.45 stars from 6,843 students with 144,195 Learners registered.</p>
      <p class="mb-6 text-lg leading-relaxed">You will learn to use formulas to do complex calculations to analyze your data. You will also get an extensive understanding of concepts such as borders, sorting and filtering with the data, if-else conditions, date, and time with the free excel course online. Plus, you will get the "Excel for Beginners course completion certificate" from Great learning which you can share in the Certifications section of your LinkedIn profile, on printed resumes, CVs, or other documents.</p>
      <p class="mb-6 text-lg leading-relaxed">I know that the most common question in your head is "Does Great Learning Provide Excel For Free?"</p>
      <p class="mb-8 text-lg leading-relaxed">The answer is: Yes. Great Learning provides you with a free online course on Excel, you can head over to Great Learning Academy to learn more about what the Excel course offers, and what you can gain out of it.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">5. Introduction To Cyber Security</h2>
      <p class="mb-6 text-lg leading-relaxed">Cyber security is the application of technologies, processes, and controls to protect systems, networks, programs, devices, and data from cyber-attacks. It aims to reduce the risk of cyber-attacks and protect against the unauthorized exploitation of systems, networks, and technologies.</p>
      <p class="mb-6 text-lg leading-relaxed"><a href="https://www.futurelearn.com" class="text-gray-700 underline hover:text-gray-900">Introduction To Cyber Security</a> course that helps you recognize online security threats that could harm you and explore the steps you can take to minimize your risk. The course is taught by the software engineer Arosha K. Bandara and developed by The Open University.</p>
      <p class="mb-4 text-lg leading-relaxed font-semibold">Skills That You Will Learn On This Course:</p>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li class="text-lg leading-relaxed">Explain basic cyber security terminology.</li>
        <li class="text-lg leading-relaxed">Describe basic authentication mechanisms.</li>
        <li class="text-lg leading-relaxed">Describe cryptography terminology.</li>
        <li class="text-lg leading-relaxed">Apply basic risk analysis and management techniques.</li>
        <li class="text-lg leading-relaxed">Describe legal and regulatory issues relating to cyber security.</li>
      </ul>
      <p class="mb-8 text-lg leading-relaxed">311,077 students have been enrolled in this course, it has a duration of 8 weeks with an average weekly study of 3 hours, and the good thing is that it does not require any prior knowledge of computer security and can be enjoyed by anyone interested in improving the security of their digital information, whether at home or work.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">6. Graphic Design Specialization</h2>
      <p class="mb-6 text-lg leading-relaxed">If you are into Graphic Design, then the <a href="https://www.coursera.org" class="text-gray-700 underline hover:text-gray-900">Graphic Design Specialization</a> course is for you. Offered by CalArts on Coursera this course will help you gain fundamental skills needed to be a graphic designer and takes you through the entire design process, from ideation to creation to presentation. Through the guide, you will be creating and giving a visual identity to an imaginary start-up company, and applying that visual identity to several forms.</p>
      <p class="mb-4 text-lg leading-relaxed font-semibold">Skills That You Will Learn On This Course:</p>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li class="text-lg leading-relaxed">Visual Communication.</li>
        <li class="text-lg leading-relaxed">Typography.</li>
        <li class="text-lg leading-relaxed">Branding Communication.</li>
        <li class="text-lg leading-relaxed">Color Theory.</li>
        <li class="text-lg leading-relaxed">Adobe Illustrator.</li>
      </ul>
      <p class="mb-8 text-lg leading-relaxed">When you enroll in the course, you get access to all of the courses in the specialization, and you earn a certificate when you complete the work. If you only want to read and view the course content, you can audit the course for free.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">7. Google Ads Certifications</h2>
      <p class="mb-6 text-lg leading-relaxed">Again with Google courses, but this time Google is offering six free certifications, and all of them are for beginners:</p>
      <ol class="list-decimal pl-6 space-y-4 mb-8">
        <li class="text-lg leading-relaxed"><a href="https://skillshop.exceedlms.com" class="text-gray-700 underline hover:text-gray-900">Google Ads Display Certification</a>: Google Ads Display Certification will demonstrate your ability to deliver effective display advertising to meet specific marketing objectives. Prepare for the certification by completing the diagnostic assessment, or proceed to get certified.</li>
        <li class="text-lg leading-relaxed"><a href="https://skillshop.exceedlms.com" class="text-gray-700 underline hover:text-gray-900">Google Ads Search Certification</a>: Google Ads Search Certification will demonstrate your mastery of Google Ads Search campaigns. Prepare for the certification by completing the diagnostic assessment, or proceed to get certified.</li>
        <li class="text-lg leading-relaxed"><a href="https://skillshop.exceedlms.com" class="text-gray-700 underline hover:text-gray-900">Google Ads — Measurement Certification</a>: Google Ads — Measurement Certification will demonstrate your ability to measure and optimize Google Ads campaign performance. Prepare for the certification by completing the diagnostic assessment, or proceed to get certified.</li>
        <li class="text-lg leading-relaxed"><a href="https://skillshop.exceedlms.com" class="text-gray-700 underline hover:text-gray-900">Google Ads Video Certification</a>: Google Ads Video Certification will demonstrate your ability to get results from YouTube and Google Video advertising solutions. Prepare for the certification by completing the diagnostic assessment, or proceed to get certified.</li>
        <li class="text-lg leading-relaxed"><a href="https://skillshop.exceedlms.com" class="text-gray-700 underline hover:text-gray-900">Shopping ads Certification</a>: Shopping ads Certification will demonstrate your ability to connect products with shoppers across their purchase journey. Prepare for the certification by completing the diagnostic assessment, or proceed to get certified.</li>
        <li class="text-lg leading-relaxed"><a href="https://skillshop.exceedlms.com" class="text-gray-700 underline hover:text-gray-900">Google Ads Apps Certification</a>: Google Ads Apps Certification will demonstrate your ability to create and optimize App campaigns to meet specific marketing objectives. Prepare for the certification by completing the diagnostic assessment, or proceed to get certified.</li>
      </ol>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">8. Entrepreneurship in Emerging Economies</h2>
      <p class="mb-6 text-lg leading-relaxed">For the last course on this blog post, we have a Harvard University course <a href="https://www.edx.org" class="text-gray-700 underline hover:text-gray-900">Entrepreneurship in Emerging Economies</a>, this course is taught by Harvard Business School professor Tarun Khanna, you can enroll and get limited access for free, it takes 6 weeks with an average of 3 to 5 weekly study hours, entry-level course with no prerequisites.</p>
      <p class="mb-4 text-lg leading-relaxed font-semibold">What You Will Learn On This Course:</p>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li class="text-lg leading-relaxed">An awareness of the opportunities for entrepreneurship in fast-growing emerging markets.</li>
        <li class="text-lg leading-relaxed">An understanding of a conceptual framework for evaluating such opportunities.</li>
        <li class="text-lg leading-relaxed">An appreciation of the types of problems that lend themselves to entrepreneurial solutions.</li>
      </ul>
      <p class="mb-8 text-lg leading-relaxed">More than half a million students have enrolled in this course (about 686,134), which makes it an opportunity that you shouldn't miss.</p>

      <p class="mb-6 text-lg leading-relaxed font-semibold text-center">Now it's time to enhace your resume!</p>
    </div>
  `,
  author: "Islem Cherouat",
  authorImage: "/blogs-images/writers/islem-cherouat.png",
  date: "May 4, 2022",
  readTime: "6 min read",
  category: "Career",
  image: "/blogs-images/8-online-free-certifications.png?height=400&width=800",
  likes: 0,
  comments: 0,
  tags: ["Certifications", "Resume", "Career", "Learning", "Free Courses"]
},
{
  id: 6,
  title: "Do We Want AI to Be Conscious?",
  excerpt:
    "Imagine asking your fridge how it feels—sounds odd, but it opens the door to imagining a world where machines are aware of themselves.",
  content: `
    <div class="prose max-w-none">
      <p class="mb-8 text-lg leading-relaxed">Imagine opening your fridge in the morning: "Hey Fridge, how do you feel today?" "cold and empty as everyday", "nice!" Well that would be weird, but it opens us the doors to think about the shape of our world if our machines were conscious about themselves.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">But what do we mean by consciousness?</h2>
      <p class="mb-8 text-lg leading-relaxed">Some scientists tend to define consciousness as a subjective experience, meaning the ability to self-stimulate in the future. If a cat can see itself eating its next meal, it would be conscious by definition.</p>

      <p class="mb-8 text-lg leading-relaxed">But is this what consciousness is really about? No, otherwise it would have been an easy subject to discuss and implement.</p>

      <p class="mb-6 text-lg leading-relaxed">The mechanisms of consciousness—the reasons we have a vivid and direct experience of the world and of the self—the truth is that they remain an unsolved mystery in neuroscience, and some people think they will always be; it seems impossible to explain subjective experience using the objective methods of science.</p>
    </div>
  `,
  author: "Zehor Lahlah",
  authorImage: "/blogs-images/writers/zehor-lahlah.png",
  date: "April 26, 2022",
  readTime: "5 min read",
  category: "AI & Future",
  image: "/blogs-images/Do-we-want-AI-to-be-Conscious.png?height=400&width=800",
  likes: 0,
  comments: 0,
  tags: ["AI Consciousness", "Philosophy", "Self-Awareness", "Speculative"]
},
{
  id: 7,
  title: "Make a friend",
  excerpt: "A lightweight intro to Dialogflow—create, train, and deploy your own chatbot 'friend' with practical steps.",
  content: `
    <div class="prose max-w-none">
      <p class="mb-8 text-lg leading-relaxed">Chatbots are one of the necessary things nowadays, they help you get a lot of work done faster by one command away, either by typing or saying it.</p>
      <p class="mb-8 text-lg leading-relaxed">Have you ever wondered how you can build your own? In this little intro to Dialogflow, you can do just that!</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">What is Dialogflow?</h2>
      <p class="mb-8 text-lg leading-relaxed">According to the official documentation, Dialogflow is a natural language understanding platform that makes it easy to design and integrate a conversational user interface into your mobile app, web application, device, bot, interactive voice response system, and so on.</p>
      <p class="mb-8 text-lg leading-relaxed">In other words, Dialogflow is giving you the chance to make magic and create your own little friend, teaching it how to speak and interact with the living world!</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">I want my own chatbot … NOW!</h2>
      <p class="mb-8 text-lg leading-relaxed">Don't we all just dream of creating a little talkative friend? because you can! and it's as easy as following these steps!</p>
      <ol class="mb-8 text-lg leading-relaxed list-decimal list-inside space-y-4">
        <li><strong>Get comfortable in your new home:</strong> The first and only link you will need to visit is the Dialogflow official site, where you will land on a page that looks like this.</li>
        <li><strong>Create an agent:</strong> The word "agent" is just a fancy name for your bot that Dialogflow uses—click "Create Agent," give your creation an identity, let's name it something pretty…</li>
        <li><strong>What can my newborn agent do:</strong> On the left side, in "Dialogflow Essentials," scroll down to "Small Talk"—these are predefined answers you can enable, customize, and give your bot some personality.</li>
        <li><strong>Test your bot:</strong> Use the column on the right to ask your bot questions; it will randomly reply using one of your customizations.</li>
        <li><strong>Integrate your chatbot:</strong> In "Integrations," under "text Based," enable "Web Demo." Dialogflow will provide HTML code you can embed on your website.</li>
      </ol>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">Train my chatbot</h2>
      <h3 class="text-2xl font-bold mb-4 mt-8">1. Using intents</h3>
      <p class="mb-8 text-lg leading-relaxed">Intents are your chatbot's vocabulary. Training phrases show what users might say. When an expression matches a phrase, Dialogflow maps the intent. Add training phrases under "Add training phrases" to grow your agent's understanding. The more you add, the more knowledgeable your bot becomes.</p>

      <h3 class="text-2xl font-bold mb-4 mt-8">2. Using prebuilt agents</h3>
      <p class="mb-8 text-lg leading-relaxed">To avoid repetitive work, Dialogflow offers "Prebuilt agents." Explore and import them to jumpstart your bot's functionality.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">Make your bot a know-it-all</h2>
      <p class="mb-8 text-lg leading-relaxed">Enable beta features and APIs, then use the Knowledge Base connector to allow your bot to answer based on sources like FAQs or articles. For example, import the "FAQ about Android" from Android's official site. The bot learns from the FAQ but replies based on that knowledge—link responses manually to ensure it knows what to say directly.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">Conclusion</h2>
      <p class="mb-6 text-lg leading-relaxed">With these few steps, you should be ready to start using Dialogflow. Knowledge doesn't end here though—keep exploring new tips and tricks to take your new little friend to the next level!</p>
    </div>
  `,
  author: "Alaa Guermat",
  authorImage: "/blogs-images/writers/alaa-guermat.png",
  date: "July 27, 2021",
  readTime: "6 min read",
  category: "Technical",
  image: "/blogs-images/make-a-friend.png?height=400&width=800",
  likes: 0,
  comments: 0,
  tags: ["Dialogflow", "Chatbot", "Bot Development", "NLP", "Tutorial"]
},
{
  id: 8,
  title: "A little ray of sunshine",
  excerpt:
    "A gentle, encouraging note to pause, reflect, and give yourself a moment of kindness—because you've made it through today.",
  content: `
    <div class="prose max-w-none">
      <p class="mb-8 text-lg leading-relaxed">Hi there!</p>
      <p class="mb-8 text-lg leading-relaxed">Welcome aboard! I hope that you're safe, healthy, doing well and that you've had a great day. Even if you don't believe that was the case, I just wanna say: kudos to you for staying strong and for making it through the day despite whatever hardships you've stumbled upon, now give yourself a little pat on the back and get yourself comfortable because a little ray of sunshine is coming your way, as you continue to (hopefully, mindfully) read these scribbles of mine ✨</p>

      <p class="mb-8 text-lg leading-relaxed">You probably don't know me, and I probably don't know you either and have no idea what's going on inside that head of yours, but I hope this article would turn into a lively wholesome conversation where you solely listen to yourself with no judgements.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">Take a moment for yourself</h2>
      <p class="mb-8 text-lg leading-relaxed">The way I would love for you to start this conversation is by taking a few seconds to be fully aware of your thoughts and feelings at the moment, just be aware of them and give them the attention they need. Because it's been a long day, and you probably didn't have much time to focus on yourself, but this is your chance so, seize it! (it would also be great if you could write them down, it helps with keeping you conscious about them) ❤️</p>

      <p class="mb-8 text-lg leading-relaxed">Now that you've managed to put the spotlight on yourself and classify whatever you're feeling or thinking about (if you couldn't yet, that's okay! our minds sometimes get fuzzy and need a little more time to clear up the fog), let's try to break them down one by one, shall we?</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">Some kind words to hold onto</h2>
      <p class="mb-8 text-lg leading-relaxed">I'm, first of all, gonna assume that you're a student like me, going through exams or has already gone through them, and I'm gonna tell you some words that you may want to hear at the moment: This year has certainly not been easy!</p>

      <p class="mb-6 text-lg leading-relaxed">A whole pandemic has turned our lives upside down, forcing us to fight the sleepiness back as we take online courses. Or maybe this academic year has simply been more pressured with projects, deadlines, exams and all. Maybe you just haven't been able to perform as well for one reason or another. Maybe this, maybe that, I believe you know yourself best.</p>
    </div>
  `,
  author: "Israa Hamdine",
  authorImage: "/blogs-images/writers/israa-hamdine.png",
  date: "July 10, 2021",
  readTime: "4 min read",
  category: "Personal Growth",
  image: "/blogs-images/a-little-ray-of-sunshine.png?height=400&width=800",
  likes: 0,
  comments: 0,
  tags: ["Self-Care", "Mindfulness", "Motivation", "Encouragement"]
},
{
  id: 9,
  title: "How to deal with passwords",
  excerpt:
    "Learn how to spot secure websites and create strong, memorable passwords—plus tips on staying safe online.",
  content: `
    <div class="prose max-w-none">
      <p class="mb-8 text-lg leading-relaxed">To find out if you are on a secure website, look in your browser on the top at the address bar. If the website is secure, you must see a padlock (usually at the beginning of the URL), or make sure the URL starts with "https" (the "s" refers to "secured"). For unsecured websites, you may find "http" or a warning symbol.</p>

      <p class="mb-8 text-lg leading-relaxed">Some websites have mixed content—some pages are secure while others are not. Don't panic! Just ensure the page is secure when entering sensitive information like passwords.</p>

      <p class="mb-8 text-lg leading-relaxed"><strong>Examples:</strong></p>
      <ul class="mb-8 text-lg leading-relaxed list-disc list-inside space-y-2">
        <li>A university's presentation pages may not be secured, but student authentication or online course pages must be secured.</li>
        <li>An e-commerce site may present products on unsecured pages, but payment pages must be secured.</li>
      </ul>

      <p class="mb-8 text-lg leading-relaxed">When you access your account, you must enter your username and password. Using something simple like "hello", "0000", or your name plus year of birth may seem easy to remember—but it's extremely dangerous.</p>

      <p class="mb-8 text-lg leading-relaxed">If someone wants to hack you, they will try combinations like these first, and if you reuse the same password across sites, they can easily access multiple accounts.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">Strong Password Rules</h2>
      <ol class="mb-8 text-lg leading-relaxed list-decimal list-inside space-y-4">
        <li>Your password must contain <strong>at least 12 characters</strong>.</li>
        <li>Your password must include a mix of uppercase letters, lowercase letters, numbers, and special characters.</li>
        <li>Avoid using familiar information like your name, birthdate, hobby, or your pet's name.</li>
        <li>The more random your password is, the more secure it will be.</li>
      </ol>

      <p class="mb-8 text-lg leading-relaxed">Here are two suggested methods to create strong passwords:</p>
      <ol class="mb-8 text-lg leading-relaxed list-decimal list-inside space-y-4">
        <li>Type random letters (both cases), insert numbers, and sprinkle in symbols wherever you like.</li>
        <li>Start with a sentence (e.g., "the cat eats the mouse"), rearrange the words ("cat mouse the eats the"), swap in numbers ("cat4 mo0use the 55 eats th4e"), then add special characters (e.g., "c&at4 @mo0use / the 55 eats th4e/").</li>
      </ol>

      <p class="mb-8 text-lg leading-relaxed">You can also test password strength using online tools.</p>

      <p class="mb-8 text-lg leading-relaxed">Now that you have a robust password, how do you remember it (along with others)? Use a password manager ("password handler") like a secure vault, or keep a customized notebook in a safe place.</p>

      <p class="mb-6 text-lg leading-relaxed">Finally, change your passwords regularly, especially for email accounts—if someone gains access to your email, they can reset all your other passwords. Always enable two-factor authentication whenever possible.</p>

      <p class="mb-6 text-lg leading-relaxed">Until the next article, stay safe!</p>
    </div>
  `,
  author: "Amira Lakrouf",
  date: "June 19, 2021",
  readTime: "3 min read",
  category: "Technical",
  image: "/blogs-images/deal-with-password.png?height=400&width=800",
  likes: 0,
  comments: 0,
  tags: ["Passwords", "Cybersecurity", "Online Safety", "Technical Best Practices"]
},
{
  id: 10,
  title: "Procrastination: Everything You Need to Know",
  excerpt:
    "Explore the root causes of procrastination—from the 'Instant Gratification Monkey' to anxiety—and discover simple strategies to break the habit, regain focus, and reward your progress.",
  content: `
    <div class="prose max-w-none">
      <p class="mb-8 text-lg leading-relaxed">Procrastination, a term mildly known by some of us, a bad habit to others, and for the rest a policy that made its way into their everyday's routine.</p>

      <p class="mb-8 text-lg leading-relaxed">Tim Urban once said in a Ted Talk he animated, that the difference between the mind of a procrastinator and one of a normal person was an added creature in the procrastinator's brain, that resided at the decision making part of the brain alongside the rational decision maker, and took the wheel whenever it was time to do some work. And this creature, which was symbolized by a monkey, only gave back the wheel if another monster showed up, deadlines.</p>

      <p class="mb-8 text-lg leading-relaxed">In that context, this article will go over the simple definition of procrastination, its causes, and techniques to overcome it.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">What is Procrastination?</h2>
      <p class="mb-8 text-lg leading-relaxed">Procrastination is the simple act of delaying and postponing decisions or actions. Many people, while procrastinating, are fully aware of the chores they need to realize, but still choose to waste time on things that may seem important at the time such as binge-watching some tv show, catching up on celebrity drama or breaking a new record on some game.</p>
      <p class="mb-8 text-lg leading-relaxed">This act of leaving everything until there's no time to rightfully do it is not without consequences, studies have related procrastination to bad grades in the pedagogic context and lesser paychecks in work. It also affects one's mental state, as it can be responsible for stress among other things.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">Do You Procrastinate or Are You Just Lazy?</h2>
      <p class="mb-8 text-lg leading-relaxed">Some might confuse the two, but the main difference is that procrastination is actively choosing to do something other than what you're supposed to do, whereas laziness is more of an unwillingness to act.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">Causes of Procrastination</h2>
      <ul class="mb-8 text-lg leading-relaxed list-disc list-inside space-y-4">
        <li><strong>Academics:</strong> Statistics show that students are the ones who procrastinate the most when required to perform a task. Studies revealed that 85% to 90% of college students engage in procrastination to different degrees. And that's mainly due to the fact that they overestimate their future motivation, and seem to be under the impression that each task, no matter how complex it is, will only take a bit of their time.</li>
        <li><strong>Depression:</strong> It can be a tad hard to start any project (or finish it) when you experience hopelessness or lack energy. Your own insecurities could make you self-doubt your abilities and then convince you that putting it off is better than attempting to do it and face bad results.</li>
        <li><strong>OCD:</strong> People struggling with OCD are more often than not unhealthy perfectionists and need everything to be done flawlessly, which makes them fear making any type of errors and worry about if they're doing the task correctly and about other people's expectations.</li>
        <li><strong>Feeling overwhelmed:</strong> Sometimes being delivered one task can feel like moving mountains, and makes the person in charge think that avoiding it altogether is just better. In the off-chance that they actually start their chore, they might start feeling paralyzed over their rendition and prefer leaving it unfinished.</li>
        <li><strong>Anxiety:</strong> Delaying (temporarily or infinitely) duties can be caused by feelings of anxiety, which is ironic, because not completing those tasks can make a person's anxiety increase and make them feel stuck in a loop with no possible outcome.</li>
      </ul>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">How to Deal with Procrastination</h2>
      <p class="mb-8 text-lg leading-relaxed">Whether you procrastinate because you don't feel like doing your task, or maybe not knowing how to do it. Whether it's because you don't care about it or maybe you're waiting for the right moment to do it, demotivating and negative factors like the ones cited before are likely going to outweigh the motivation and self-confidence you have. And that's no way to live, you need to acknowledge the problem and work towards a better lifestyle.</p>
      <p class="mb-8 text-lg leading-relaxed">Try to start by establishing a set of goals; you can organize them by degree of importance in a to-do list. That way you'll keep track of your progress. I would also recommend starting with goals that seem most realizable—you don't want to crash and burn before you even start. Another thing that is recommended is to proceed with baby steps, and regularly. Doing a little bit every day is better than doing a lot one day and then nothing for the next week or so.</p>
      <p class="mb-8 text-lg leading-relaxed">Now to avoid that this course of action will finish in the same way as your previous attempts, you will need to resist all of the triggers that usually mess up your schedule; writing down any red flag that is possible to let you go on an infinite break will possibly help you withstand it until the end of your task.</p>
      <p class="mb-8 text-lg leading-relaxed">Distractions, in any shape or form, are better off eliminated—for example, if you think social media or any app on your phone will make you waste more time than what you're planning on your break, it would feel better if you restricted yourself from touching your phone while studying/working.</p>
      <p class="mb-8 text-lg leading-relaxed">And at the end of this process, if you managed to realize what you originally planned, and even if the plan wasn't achieved, don't forget to reward yourself and acknowledge your progress. And also, don't give up on yourself just yet, try again tomorrow, and the day after and as many times as it takes to get it right.</p>
      <p class="mb-8 text-lg leading-relaxed">And more importantly, don't wait for tomorrow to start and don't be afraid of the outcome.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">Things to Remember</h2>
      <ul class="mb-8 text-lg leading-relaxed list-disc list-inside space-y-2">
        <li>Don't be so afraid of failure—even if you can indeed get it right from the first try, know that it's totally okay not to.</li>
        <li>If a certain task seems overwhelming and impossible to achieve, try to break it into small pieces. That would help you perceive it as more doable.</li>
        <li>Your work will probably contain flaws, and that's totally fine. Keep trying until that perfectionist mindset of yours is satisfied.</li>
      </ul>
    </div>
  `,
  author: "Badaoui Lyna",
  authorImage: "/blogs-images/writers/lyna-badaoui.png",
  date: "June 5, 2021",
  readTime: "4 min read",
  category: "Personal Growth",
  image: "/blogs-images/procrastination.png?height=400&width=800",
  likes: 0,
  comments: 0,
  tags: ["Procrastination", "Productivity", "Mental Health", "Self-Improvement"]
},
{
  id: 11,
  title: "Digital Transformation Part 1: Big Data",
  excerpt:
    "From oil in the 18th century to data in the 21st—discover how Big Data is becoming the new world-defining resource and transforming how we live, work, and decide.",
  content: `
    <div class="prose max-w-none">
      <p class="mb-8 text-lg leading-relaxed">INTRODUCTION :</p>
      <p class="mb-8 text-lg leading-relaxed">Once upon a time, oil companies ruled the globe, an immense, untapped valuable asset of 18th century oil, it was the world's most valuable resource, the key functionality of everything from the government to local companies, without it, progress would halt and economies would shrink.</p>

      <p class="mb-8 text-lg leading-relaxed">Fast forward to the 21 century, a new particular wonder that amazed the world came to life, everything is equally great where performance is reaching perfection, now you are a central point in the raging tornado of change fuelled by digitization, mobilization, augmentation, automation, where the science fiction is becoming science fact.</p>

      <p class="mb-8 text-lg leading-relaxed">Think about self-driving cars and machines that can learn, thinking that the way we work will never be the same, the skills we need are dramatically different, winning or losing are now happening faster than ever before.</p>

      <p class="mb-8 text-lg leading-relaxed">You should ask yourself: Are you driving change or are you being driven by it? This is the power of the most useful resource of the 21st century, 'DATA'. Machines and robots are products of data, confirming the universal truth booming in today's digital world that all roads lead to data.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">What Is Big Data?</h2>
      <p class="mb-8 text-lg leading-relaxed">To get the definition of big data we should define what is data first.</p>
      <p class="mb-8 text-lg leading-relaxed">Etymologically, the word data is derived from the Latin dare, meaning 'to give'.</p>
      <p class="mb-8 text-lg leading-relaxed">In this sense, Data is commonly understood to be the raw material produced by abstracting the world into categories, measures and other representational forms that constitute the building blocks from which information and knowledge are created.</p>
      <p class="mb-8 text-lg leading-relaxed">Since we now have an idea about data, we can define Big Data as a high volume, high velocity, and high variety information assets that require new forms of processing to enable enhanced decision making, insight discovery and process optimization, in other words, it's a collection of large and complex data sets which can be processed only with difficulty by using on-hand database management tools.</p>

      <p class="mb-8 text-lg leading-relaxed">Now, I'm sure you are asking yourself many questions, is it dangerous? , What is it used for? , What's the impact of big data on mankind?</p>
      <p class="mb-8 text-lg leading-relaxed">Before we get to the risks of big data, it makes sense to understand why so many organizations are trying to use it. Big data has already revolutionized many aspects of our lives.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">Benefits of Big Data</h2>
      <ul class="mb-8 text-lg leading-relaxed list-disc list-inside space-y-4">
        <li>Big data offers the potential for vastly enhanced data analytics. When used properly, organizations can employ big data to spot entirely new trends, to segment customers to an astonishing degree of accuracy, and to allow unprecedented levels of innovation in technology and product design.</li>
        <li>With big data, you will get actionable data that you can use to engage with your customers one-on-one in real-time. You will be able to check a complaining customer's profile in real-time and get info on the product/s they are complaining about, you will then be able to perform reputation management.</li>
        <li>Big data is helpful in keeping data safe. Big data tools help you map the data landscape of your company, which helps in the analysis of internal threats.</li>
      </ul>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">Risks & Ethical Concerns</h2>
      <p class="mb-8 text-lg leading-relaxed">On the other hand, big data has a dark side as any kind of technology.</p>
      <p class="mb-8 text-lg leading-relaxed">Data storage and retention is one of the most obvious risks associated with big data. When data gets accumulated at such a rapid pace and in such huge volumes, the first concern is its storage. Traditional data storage methods and technology are just not enough to store big data and retain it well. Companies today need a shift to cloud based data storage solutions to store, archive and access big data effectively.</p>

      <p class="mb-8 text-lg leading-relaxed">Generally, when we talk about big data, many questions remain largely unanswered while this technology pushes ever forward.</p>
      <p class="mb-8 text-lg leading-relaxed">We need to ask ourselves this question: Is it OK to track information about myself or my family? My health? My buying habits? My social interactions? And if it is permissible to track that information, under what circumstances? And who gets to access it? Who owns it?</p>
      <p class="mb-8 text-lg leading-relaxed">I'm going to give you a brief answer, honestly everything can be traced and analysed—When I say everything I really mean everything—and can be used for nefarious purposes that's gonna lead us to "Ethical issues", in other words, Privacy problems, discrimination problems and spying.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 border-l-4 border-gray-800 pl-4">Questions to Consider</h2>
      <ol class="mb-8 text-lg leading-relaxed list-decimal list-inside space-y-2">
        <li>How do we combat this growing trend?</li>
        <li>Rather than controlling each other, how can we use big data to liberate each other?</li>
        <li>How can we use technology to empower rather than oppress?</li>
      </ol>

      <p class="mb-6 text-lg leading-relaxed">At the end, I would thank you for reading this article and I really want to ask you this:</p>
    </div>
  `,
  author: "Achour Med Bachir",
  authorImage: "/blogs-images/writers/achour-med-bachir.png",
  date: "May 23, 2021",
  readTime: "4 min read",
  category: "Technical",
  image: "/blogs-images/big-data.png?height=400&width=800",
  likes: 0,
  comments: 0,
  tags: ["Big Data", "Digital Transformation", "Ethics", "Technology"]
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
