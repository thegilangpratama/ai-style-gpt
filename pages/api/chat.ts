import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    answer: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { question } = req.body;

    let answer = 'I am sorry, I don\'t have the information about that.';

    const qnaMap: Record<string, string> = {
        // Personal Information
        'name': 'My name is Gilang Khairul Pratama.',
        'old': 'Long life learner does not restrain to age',
        // 'phone number': 'My phone number is +62 8222 1188 697.',
        'email': 'My email is gilpratama@outlook.com.',
        'linkedin': 'Here is my LinkedIn profile: https://www.linkedin.com/in/gilang-pratam/',
        'live': 'I am currently based in Riau, Indonesia.',
        'location': 'I am currently based in Riau, Indonesia.',
        'language': 'I am fluent in English and Indonesian. I also have conversational proficiency in Malay and German.',
        'nationality': 'I am Indonesian.',
        'gender': 'I am male.',
        'religion': 'I practice Islam.',
        'hometown': 'I am originally from Pekanbaru, Riau.',
        'hobby': 'I love playing the piano, listening to classical music, traveling, and capturing cityscapes through photography.',
        'music': 'I enjoy classical music, especially compositions by Beethoven and Chopin.',
        'food': 'My favorite food is bakso with bakso urat jumbo and bakso mercon.',
        'drink': 'I enjoy drinking iced tea without sugar.',
        'color': 'My favorite color is blue.',
        'sport': 'I always spent 4 days at gym for 2 hours every week.',
        'movie': 'One of my favorite movies is "Inception."',
        'book': 'I like reading "The Pragmatic Programmer."',
        'pet': 'I LOOOOOVEEEE my cat',
        'social media': 'You can find me on LinkedIn and GitHub.',
        'github': 'Here is my GitHub profile: https://github.com/thegilangpratama',

        // Professional Summary
        'job experience': 'I have a diverse and dynamic work history in the field of software engineering. Currently, I am a Fullstack Software Engineer at SnowHeap, LLC, where he focuses on developing AI-driven applications and managing CI/CD pipelines. My notable projects at SnowHeap include the Pipeline Builder, a tool for streamlining AI-driven workflows, and the Crisis Monitoring Dashboard, a real-time tool for crisis management. Previously, Gilang worked at IFG Life Insurance, where he contributed to digital transformation projects, particularly in web development and deployment automation. my role there allowed him to leverage my expertise in enhancing and optimizing digital platforms. At CPR Vision Pte Ltd, Gilang held the position of Software Engineer and was involved in developing web platforms, booking systems, and campaign platforms. my key projects included the Life by IFG Web Platform and the Booking PWA, showcasing my skills in both frontend and backend development. In addition to my primary roles, Gilang has engaged in freelancing and various side projects. These efforts have allowed him to explore new technologies and contribute to open-source projects, reflecting my commitment to continuous learning and innovation. Throughout my career, Gilang has demonstrated proficiency in technologies such as Node.js, React.js, TypeScript, PHP, and Python. He is experienced with frameworks like Next.js and Laravel and skilled in DevOps practices, including Docker and cloud platforms like AWS and Google Cloud. my background highlights a strong focus on creating scalable and responsive web applications, making him a valuable asset in the software engineering field.',
        'job': 'I have a diverse and dynamic work history in the field of software engineering. Currently, I am a Fullstack Software Engineer at SnowHeap, LLC, where he focuses on developing AI-driven applications and managing CI/CD pipelines. My notable projects at SnowHeap include the Pipeline Builder, a tool for streamlining AI-driven workflows, and the Crisis Monitoring Dashboard, a real-time tool for crisis management. Previously, Gilang worked at IFG Life Insurance, where he contributed to digital transformation projects, particularly in web development and deployment automation. my role there allowed him to leverage my expertise in enhancing and optimizing digital platforms. At CPR Vision Pte Ltd, Gilang held the position of Software Engineer and was involved in developing web platforms, booking systems, and campaign platforms. my key projects included the Life by IFG Web Platform and the Booking PWA, showcasing my skills in both frontend and backend development. In addition to my primary roles, Gilang has engaged in freelancing and various side projects. These efforts have allowed him to explore new technologies and contribute to open-source projects, reflecting my commitment to continuous learning and innovation. Throughout my career, Gilang has demonstrated proficiency in technologies such as Node.js, React.js, TypeScript, PHP, and Python. He is experienced with frameworks like Next.js and Laravel and skilled in DevOps practices, including Docker and cloud platforms like AWS and Google Cloud. my background highlights a strong focus on creating scalable and responsive web applications, making him a valuable asset in the software engineering field.',
        'future': 'I am currently looking for something that sustainable for workplace',
        'professional experience': 'I have 5 years of experience in Full Stack Software Engineering, focusing on web and mobile applications.',
        // 'experience': 'I have experience in designing, developing, and optimizing web and mobile applications, with a focus on the software lifecycle and team leadership.',
        'skill': 'I am skilled in Fullstack Development, Software Lifecycle Management, Project & Team Leadership, CI/CD, and DevOps.',
        'area of expertise': 'My areas of expertise include Fullstack Development, Software Lifecycle Management, and Team Leadership.',
        'tech stack': 'I work with technologies like Node.js, React.js, Next.js, PHP, Laravel, MySQL, PostgreSQL, Docker, AWS, and Google Cloud.',
        'education': 'I hold a Bachelor’s degree in Computer Science from Lancang Kuning University with a GPA of 3.81/4.0.',
        'degree': 'I have a Bachelor’s degree in Computer Science from Lancang Kuning University.',
        'university': 'I graduated from Lancang Kuning University with a degree in Computer Science.',
        'gpa': 'I graduated with a GPA of 3.81 out of 4.0.',
        'awards': 'I received the Best Student Award in my final year of university.',
        'problem': 'I am adept at solving complex problems and finding innovative solutions.',
        'team player': 'I am a team player who enjoys collaborating with others to achieve shared goals.',
        'adaptability': 'I am highly adaptable and can quickly learn new technologies and methodologies.',
        'work ethic': 'I am known for my strong work ethic and dedication to delivering high-quality results.',
        'professionalism': 'I maintain a high level of professionalism in all my work.',
        'integrity': 'I value integrity and strive to always do the right thing, even when no one is watching.',
        'project management': 'I have experience in managing projects from inception to completion, ensuring they meet deadlines and budget constraints.',
        'time management': 'I am skilled at managing my time effectively to balance multiple projects and deadlines.',
        'conflict resolution': 'I have experience in resolving conflicts within teams and ensuring a positive work environment.',
        'decision making': 'I am confident in making decisions that align with project goals and team objectives.',
        'innovation': 'I am always looking for new ways to innovate and improve processes.',
        'customer satisfaction': 'I am committed to ensuring customer satisfaction by delivering high-quality products and services.',
        'client relations': 'I have built strong relationships with clients by understanding their needs and delivering solutions that exceed their expectations.',
        'business acumen': 'I have a strong understanding of business principles and how they apply to technology projects.',
        'attention to detail': 'I pay close attention to detail to ensure the highest quality in my work.',
        'creativity': 'I bring creativity to my work, finding unique solutions to challenging problems.',
        'continuous learning': 'I am committed to continuous learning and staying updated on the latest trends and technologies in the industry.',

        // Work Experience
        'current employer': 'I am currently employed by SnowHeap, LLC.',
        'tools used': 'I frequently use Git, JIRA, Node.js, React.js, Next.JS, Postman, SCSS, Tailwind, TypeScript, Docker, and cloud services like AWS and Google Cloud.',
        'frontend development': 'I have extensive experience in frontend development, including using React.js, Next.js, and SCSS.',
        'backend development': 'My backend development skills include Node.js, PHP, Laravel, and MySQL.',
        'devops experience': 'I have experience with CI/CD and DevOps, using tools like Docker, Jenkins, and AWS.',
        'team leadership': 'I have led teams, managed projects, and supervised CI/CD pipelines.',
        'client communication': 'I am skilled in client and stakeholder communication, ensuring clear and effective project delivery.',

        // Work Experience
        'current job': 'I currently work as a Fullstack Software Engineer at SnowHeap, LLC, focusing on AI Applications.',
        'current role': 'I am a Fullstack Software Engineer at SnowHeap, LLC, handling software lifecycle management and development.',
        'current company': 'I am working at SnowHeap, LLC as a Fullstack Software Engineer.',
        'previous job': 'Before SnowHeap, I worked as a Frontend Developer at IFG Life Insurance and as a Fullstack Developer at CPR Vision Pte Ltd.',
        'previous role': 'I was a Frontend Developer at IFG Life Insurance and a Fullstack Developer at CPR Vision Pte Ltd.',
        'previous company': 'I have worked at IFG Life Insurance and CPR Vision Pte Ltd.',
        'job history': 'I started my career as a Fullstack Developer at CPR Vision Pte Ltd, then moved to IFG Life Insurance as a Frontend Developer before joining SnowHeap, LLC.',
        'roles and responsibilities': 'In my current role, I am responsible for developing and maintaining AI-driven applications, managing CI/CD pipelines, and leading project teams.',
        'job achievements': 'I successfully led the development of a Pipeline Builder and a Crisis Monitoring Dashboard at SnowHeap, LLC.',
        'current project': 'I am currently working on AI-driven workflow interfaces and a crisis monitoring dashboard at SnowHeap, LLC.',
        'achievement': 'One of my biggest achievements was leading the development of a complex AI-driven project that significantly improved the company’s workflow efficiency.',
        'challenge': 'One of the biggest challenges I faced was implementing a real-time crisis monitoring dashboard under tight deadlines, which required innovative problem-solving and teamwork.',
        'work culture': 'I thrive in collaborative work cultures that value innovation and continuous learning.',
        'career goals': 'My career goals include advancing to a leadership role where I can mentor others and lead large-scale technology projects.',
        'professional growth': 'I am focused on continuous professional growth, both in technical skills and leadership abilities.',
        'work motivation': 'I am motivated by the opportunity to solve complex problems and create impactful solutions that make a difference.',
        'mentorship': 'I am passionate about mentoring junior developers and helping them grow in their careers.',
        'technical expertise': 'I have deep technical expertise in Fullstack Development, DevOps, and AI-driven applications.',
        'team collaboration': 'I believe in the power of team collaboration to achieve shared goals and deliver high-quality results.',
        'innovation in work': 'I am always looking for ways to innovate in my work, whether it’s through new technologies or improved processes.',
        'client satisfaction': 'Ensuring client satisfaction is a top priority for me, and I work hard to exceed client expectations in every project.',
        'remote work': 'I am experienced in remote work environments and have successfully led remote teams to deliver projects on time.',
        'office work': 'I am also comfortable working in an office environment and enjoy the camaraderie of in-person collaboration.',
        'company values': 'I value working for companies that prioritize innovation, integrity, and continuous learning.',
        'professional network': 'I have built a strong professional network through my work and participation in industry events.',
        'industry trends': 'I stay updated on industry trends and enjoy discussing new technologies and their potential impact.',
        'professional community': 'I am an active member of the tech community and enjoy attending meetups and conferences to learn from others.',
        'career transition': 'I made a successful transition from Frontend Development to Fullstack Development and am always open to new challenges.',
        'career growth': 'I am committed to continuous career growth and am always looking for opportunities to learn and advance.',
        'professional development': 'I regularly invest in professional development through courses, certifications, and attending industry events.',
        'tech community involvement': 'I am involved in the tech community through mentoring, attending meetups, and contributing to open-source projects.',
        'work environment': 'I thrive in work environments that encourage innovation, collaboration, and continuous learning.',
        'work relationships': 'I have built strong work relationships by being a reliable team member and always being willing to help others.',
        'work ethics': 'I believe in strong work ethics, including integrity, reliability, and dedication to delivering quality work.',
        'work principles': 'My work principles include continuous improvement, attention to detail, and a focus on customer satisfaction.',
        'professional goals': 'My professional goals include advancing to a leadership position, mentoring others, and leading large-scale technology projects.',
        'long-term career': 'In the long term, I see myself in a senior leadership role, guiding teams and driving innovation in the technology industry.',
        'short-term career': 'In the short term, I am focused on expanding my technical skills and taking on more complex projects to advance my career.',
        'job satisfaction': 'I find job satisfaction in solving complex problems, working with innovative technologies, and making a positive impact on the company.',
        'job responsibilities': 'My current job responsibilities include developing AI-driven applications, managing CI/CD pipelines, and leading project teams.',
        'career advice': 'My career advice is to stay curious, continuously learn, and always look for ways to innovate and improve.',

        // Projects
        'recent projects': 'Recently, I have worked on projects like the Pipeline Builder and Crisis Monitoring Dashboard at SnowHeap, LLC.',
        'current projects': 'I am currently working on AI-driven workflow interfaces and a crisis monitoring dashboard at SnowHeap, LLC.',
        'project experience': 'I have experience with projects like the Life by IFG Web Platform, Booking PWA, and various campaign platforms at CPR Vision Pte Ltd.',
        'ai projects': 'I am working on AI-driven projects like the Pipeline Builder and Crisis Monitoring Dashboard at SnowHeap, LLC.',
        'web development projects': 'I have worked on various web development projects, including e-commerce platforms, booking systems, and internal tools for businesses.',
        'mobile development projects': 'I have experience in mobile development, including building PWA (Progressive Web Apps) and native applications for Android and iOS.',
        'project challenges': 'Some challenges I’ve faced in projects include tight deadlines, changing requirements, and ensuring cross-functional team collaboration.',
        'project success': 'Project success for me means delivering high-quality results that meet or exceed client expectations.',
        'agile projects': 'I have experience working in Agile environments, leading sprints, and adapting to changing project requirements.',
        'devops projects': 'I have been involved in DevOps projects, setting up CI/CD pipelines and automating deployment processes.',
        'cloud projects': 'I have worked on cloud projects, including migrating applications to AWS and optimizing cloud infrastructure.',
        'open source projects': 'I contribute to open-source projects and enjoy collaborating with the community to build useful tools and libraries.',
        'frontend projects': 'My frontend projects include building responsive web applications with React, Next.js, and Tailwind CSS.',
        'backend projects': 'I have worked on backend projects, developing RESTful APIs, microservices, and database management with Node.js and Laravel.',
        'fullstack projects': 'As a Fullstack Developer, I have worked on projects that involve both frontend and backend development, providing end-to-end solutions.',
        'ai-driven projects': 'I am involved in AI-driven projects that use machine learning models to improve business processes and decision-making.',
        'ecommerce projects': 'I have developed e-commerce platforms with features like product catalogs, shopping carts, and payment integrations.',
        'portfolio projects': 'You can check out some of my portfolio projects on my GitHub profile: https://github.com/thegilangpratama.',
        'collaborative projects': 'I enjoy working on collaborative projects where I can contribute to both the technical and creative aspects.',
        'side projects': 'In my free time, I work on side projects that explore new technologies and ideas, helping me stay ahead in the industry.',
        'project outcomes': 'The outcomes of my projects include increased efficiency, improved user experience, and higher customer satisfaction.',
        'project feedback': 'I value feedback on my projects and use it to continuously improve and deliver better results in the future.',
        'project impact': 'The projects I have worked on have had a positive impact on the businesses by improving processes, increasing revenue, and enhancing customer experience.',
        'project learning': 'Every project I work on is an opportunity to learn and grow, and I always seek to apply new knowledge to future projects.',
        'project collaboration': 'Successful project collaboration involves clear communication, mutual respect, and a shared commitment to the project goals.',

        // Skills & Technologies
        'programming languages': 'I am proficient in Node.js, React.js, TypeScript, PHP, and have experience with Python for backend development.',
        'frameworks': 'I work with frameworks like Next.js, React.js, and Laravel for building robust web applications.',
        'devops': 'I have experience in CI/CD, Docker, and using AWS and Google Cloud for deployment and infrastructure management.',
        'cloud platforms': 'I am familiar with AWS and Google Cloud, using them for deployment and cloud infrastructure management.',
        'tools': 'I use Git, Postman, SCSS, Tailwind, and Storybook, PostgresSql, Supabase regularly in my development process.',
        'testing': 'I emphasize rigorous testing and evaluation of software programs to ensure optimal functionality.',
        'data structures': 'I have a solid understanding of data structures like arrays, linked lists, stacks, queues, and trees.',
        'algorithms': 'I am proficient in algorithms, including sorting, searching, and dynamic programming.',
        'design patterns': 'I apply design patterns like MVC, Singleton, and Observer in my software development process.',
        'architecture': 'I have experience in designing scalable and maintainable software architecture, including microservices and monolithic architectures.',
        'database management': 'I am skilled in database management, including designing schemas, writing complex queries, and optimizing database performance.',
        'api development': 'I have developed RESTful APIs and have experience with GraphQL for building efficient and flexible APIs.',
        'version control': 'I use Git for version control and am experienced in branching strategies, pull requests, and code reviews.',
        'deployment': 'I am skilled in deploying applications using Docker, Kubernetes, and cloud platforms like AWS and Google Cloud.',
        'automation': 'I have experience in automating repetitive tasks using scripts, CI/CD pipelines, and infrastructure as code (IaC).',
        'performance optimization': 'I focus on performance optimization in both frontend and backend development, ensuring fast load times and efficient resource usage.',
        'security best practices': 'I follow security best practices, including data encryption, secure authentication, and regular security audits.',
        'code quality': 'I maintain high code quality by following coding standards, writing clean and readable code, and conducting thorough code reviews.',
        'debugging': 'I am proficient in debugging complex issues using tools like Chrome DevTools, Postman, and various IDEs.',
        'problem-solving': 'I excel at problem-solving, using a systematic approach to identify issues, analyze potential solutions, and implement effective fixes.',
        'agile methodologies': 'I am experienced in Agile methodologies, including Scrum and Kanban, and have led sprints and daily stand-ups.',
        'ux/ui design': 'I have a strong understanding of UX/UI design principles, creating user-friendly interfaces that enhance the user experience.',
        'responsive design': 'I build responsive web applications that work seamlessly across different devices and screen sizes.',
        'accessibility': 'I ensure that my web applications are accessible to all users, including those with disabilities, by following accessibility guidelines.',
        'seo': 'I am knowledgeable in SEO best practices and implement strategies to improve the search engine ranking of web applications.',
        'digital marketing': 'I have experience in digital marketing, including social media management, email campaigns, and online advertising.',
        'content management systems': 'I have worked with content management systems like WordPress, Joomla, and Drupal for building and managing websites.',
        'e-commerce platforms': 'I have developed and managed e-commerce platforms using technologies like WooCommerce, Shopify, and Magento.',
        'crm systems': 'I have experience integrating and customizing CRM systems like Salesforce and HubSpot to meet business needs.',
        'erp systems': 'I have worked on ERP systems, streamlining business processes and improving efficiency across departments.',
        'business intelligence': 'I have experience in business intelligence, using data analytics tools to provide insights and support decision-making.',
        'big data': 'I have worked with big data technologies, including Hadoop and Spark, for processing and analyzing large datasets.',
        'machine learning': 'I have a basic understanding of machine learning and have experimented with libraries like TensorFlow and scikit-learn.',
        'ai applications': 'I am involved in AI applications, leveraging machine learning models to improve business processes and user experiences.',
        'blockchain': 'I have a foundational knowledge of blockchain technology and its applications in areas like finance and supply chain management.',
        'iot': 'I have explored IoT technologies and their applications in smart homes, wearable devices, and industrial automation.',
        'cybersecurity': 'I have a strong understanding of cybersecurity principles and practices, ensuring the security of applications and data.',
        'linux administration': 'I am proficient in Linux administration, including server management, shell scripting, and system monitoring.',
        'windows administration': 'I have experience in Windows administration, managing servers, Active Directory, and group policies.',
        'macos administration': 'I am familiar with macOS administration, including software deployment, user management, and security settings.',
        'virtualization': 'I have experience with virtualization technologies like VMware, VirtualBox, and Hyper-V for creating and managing virtual machines.',
        'containerization': 'I am skilled in containerization using Docker and Kubernetes, ensuring consistent and efficient application deployment.',
        'software development life cycle': 'I follow the software development life cycle (SDLC) processes, from requirements gathering to testing and deployment.',
        'system integration': 'I have experience in system integration, ensuring different software components work seamlessly together.',
        'automation testing': 'I have experience in automation testing, using tools like Selenium and Jenkins to improve test coverage and efficiency.',
        'unit testing': 'I write unit tests to ensure the reliability and correctness of my code, using frameworks like Jest and PHPUnit.',
        'integration testing': 'I perform integration testing to ensure that different modules of an application work together as expected.',
        'end-to-end testing': 'I conduct end-to-end testing to validate the entire application workflow, from the user interface to the backend.',
        'performance testing': 'I perform performance testing to identify and resolve bottlenecks, ensuring the application can handle high loads.',
        'user acceptance testing': 'I facilitate user acceptance testing (UAT) to ensure that the application meets the requirements and expectations of the end-users.',
        'documentation': 'I write clear and comprehensive documentation, including technical specs, user manuals, and API documentation.',
        'training': 'I provide training to team members and clients, ensuring they understand how to use the applications and tools I develop.',
        'mentoring': 'I enjoy mentoring junior developers, helping them grow their skills and advance their careers.',
        'public speaking': 'I am comfortable with public speaking, presenting at meetings, conferences, and workshops on various tech topics.',
        'technical writing': 'I am skilled in technical writing, creating detailed guides, tutorials, and blog posts on technology-related subjects.',
        'project estimation': 'I have experience in project estimation, providing accurate time and cost estimates for software development projects.',
        'requirements analysis': 'I perform requirements analysis, working closely with stakeholders to gather and define project requirements.',
        'risk management': 'I identify and mitigate risks in software development projects, ensuring that potential issues are addressed early.',
        'quality assurance': 'I am committed to quality assurance, implementing processes and practices that ensure the delivery of high-quality software.',
        'product development': 'I have experience in product development, from ideation and prototyping to launch and ongoing support.',
        'customer support': 'I provide customer support, addressing issues and ensuring that clients are satisfied with the products and services.',
        'consulting': 'I offer consulting services, providing expert advice on technology solutions and strategies to businesses.',
        'freelancing': 'I have experience freelancing, working on various projects for clients in different industries.',
        'entrepreneurship': 'I am interested in entrepreneurship and have explored launching my own tech startup in the future.',
        'organization': 'I am highly organized, keeping track of multiple projects and ensuring that nothing falls through the cracks.',
        'collaboration': 'I value collaboration and work well in team environments, contributing to the success of group projects.',
        'communication': 'I have strong communication skills, both written and verbal, ensuring that information is conveyed clearly and effectively.',
        'critical thinking': 'I apply critical thinking to analyze problems, evaluate solutions, and make informed decisions.',
        'leadership': 'I have leadership experience, guiding teams to achieve their goals and delivering successful project outcomes.',
        'empathy': 'I practice empathy in my work, understanding the needs and perspectives of clients, users, and team members.',
        'motivation': 'I am highly motivated, driven by a passion for technology and a desire to continuously learn and grow.',
        'work-life balance': 'I believe in maintaining a healthy work-life balance, ensuring that I have time for both professional and personal pursuits.',
        'personal development': 'I am committed to personal development, continually seeking opportunities to improve my skills and knowledge.',
        'volunteering': 'I volunteer my time and skills to various causes, giving back to the community and helping others in need.',
        'networking': 'I actively network with other professionals in the tech industry, building relationships and sharing knowledge.',
        'community involvement': 'I am involved in the tech community, attending events, participating in forums, and contributing to open-source projects.',
        'fitness': 'I prioritize fitness, regularly working out and maintaining a healthy lifestyle to stay energized and focused.',

        // Internships and Early Experience
        'internships': 'I have completed internships at Chevron Pacific Indonesia and Kementerian Dalam Negeri.',
        'internship experience': 'During my internships, I worked on data backups at Chevron and web development at Kementerian Dalam Negeri.',
        'chevron internship': 'At Chevron, I managed data backups, worked with Azure AD, and maintained Windows Servers.',
        'kementerian dalam negeri internship': 'At Kementerian Dalam Negeri, I designed and maintained a public permitting system.',
    }

    // Search for the question in the map
    Object.keys(qnaMap).forEach((key) => {
        if (question.toLowerCase().includes(key)) {
            answer = qnaMap[key];
        }
    });

    res.status(200).json({ answer });
}
