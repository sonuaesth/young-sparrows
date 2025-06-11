type Subject = {
    name: string,
    description: string,
    imageUrls: string[],
}

type programData = { [key: string]: Subject[] }

export const program: programData = {
    clubs: [
        {
            name: 'Choir student club',
            description: 'In a group setting that facilitates camaraderie and team spirit, your child learns how to express emotions through singing and music.',
            imageUrls: ['/subjectImages/Choir.webp']
        },
        {
            name: 'Robotics student club',
            description: 'A playground for future innovators, this club helps your child build a love for problem-solving and engineering.',
            imageUrls: ['/subjectImages/Robotics.webp']
        },
        {
            name: 'Pottery work student club',
            description: 'Teaching your child that patience leads to art, the club fine-tunes motor skills and boosts creative thinking.',
            imageUrls: ['/subjectImages/Pottery.webp']
        }
    ],
    year1: [
        {
            name: 'Mathematics',
            description: 'An introduction to the language of logic and problem-solving, these lessons improve your child\'s critical thinking and numerical fluency.',
            imageUrls: ['/subjectImages/Math.webp']
        },
        {
            name: 'Science',
            description: 'Engaging hands-on experiments unveil the wonders of the natural world and bring the basic scientific principles closer to your child’s awareness.',
            imageUrls: ['/subjectImages/Science.webp']
        },
        {
            name: 'English as a second language',
            description: 'Lessons that help your child unlock the world of global communication, giving them  bilingual confidence and cultural awareness at an early age.',
            imageUrls: ['/subjectImages/English.webp']
        },
/*         {
            name: 'Computing',
            description: 'Lessons teaches students about computer components, coding, and the role of computers in daily life, emphasizing computational thinking skills and logical problem-solving.',
            imageUrls: ['./subjectImages/Computing.webp']
        }, */
        {
            name: 'Digital Literacy',
            description: 'Our students gain essential digital literacy skills, enabling them to navigate the online world safely, make informed decisions, create advanced documents, contribute positively, and prioritize their well-being.',
            imageUrls: ['/subjectImages/Digital.webp']
        },
/*         {
            name: 'Global Perspective',
            description: 'Lessons foster essential research, collaboration, and communication skills across subjects, facilitating early integration into existing curricula and enhancing lifelong learning outcomes.',
            imageUrls: ['./subjectImages/Global.webp']
        }, */
        {
            name: 'Wellbeing',
            description: 'Developing your child’s self-awareness, these lessons explore all the different factors that contribute to emotional and physical well-being.',
            imageUrls: ['/subjectImages/Wellbeing.webp']
        },
        {
            name: 'Phonics/Handwriting',
            description: 'Our interactive phonics and handwriting exercises are designed to enhance your child’s ability to express thoughts and emotions articulately.',
            imageUrls: ['/subjectImages/Pen.webp']
        },
/*         {
            name: 'Humanities',
            description: 'The lessons spark curiosity about the ever-changing world and foster an understanding ' +
                'of diverse perspectives and cultures.',
            imageUrls: ['./subjectImages/Humanity.webp']
        }, */
        {
            name: 'Art & design',
            description: 'By unleashing creativity through colors and forms, your child is encouraged to use visual expression as a tool for cognitive growth.',
            imageUrls: ['/subjectImages/Art.webp']
        },
        {
            name: 'Physical education',
            description: 'These lessons lay the groundwork for healthy habits and active lifestyles, while also increasing strength, coordination, and team spirit in each child.',
            imageUrls: ['/subjectImages/pe.webp']
        },
/*         {
            name: 'Ballet and dancing',
            description: 'The class is created by the renowned Konstantin Kostyukov and led by Tamara Ivanović, ' +
                'the principal dancer of the Ballet of the Serbian National Theater.',
            imageUrls: ['./subjectImages/Dance.webp']
        }, */
        {
            name: 'Music',
            description: 'Children learn to harness their creative powers through music, experiencing how practice and perseverance lead to progress.',
            imageUrls: ['/subjectImages/Music.webp']
        },
/*         {
            name: 'Pottery work',
            description: 'Guided by experienced tutors, your child learns to strengthen focus, discover the ' +
                'importance of perseverance, and explore their creative depths.',
            imageUrls: ['./subjectImages/Pottery.webp']
        }, */
/*         {
            name: 'Karate',
            description: 'Designed by the Gendarmerie karate club and often led by the members of the national ' +
                'karate team, the age-appropriate class promotes a healthy view of competitiveness.',
            imageUrls: ['./subjectImages/Karate.webp']
        }, */
        {
            name: 'Swimming (optional)',
            description: 'An activity that develops all crucial muscle groups while building endurance and strength. Supervised by professional tutors who keep a watchful eye on what is going on in and around the pool.',
            imageUrls: ['/subjectImages/Swimming.webp']
        },
/*         {
            name: 'Yoga (optional)',
            description: 'An increasingly popular class aims to help your child become more focused and flexible, ' +
                'in addition to learning about the proper breathing techniques.',
            imageUrls: ['./subjectImages/Yoga.webp']
        } */
    ],
    year2: [
        {
            name: 'Mathematics',
            description: 'Serving as an introduction to the language of logic and problem-solving, these lessons ' +
                'improve your child\'s critical thinking and numerical fluency.',
            imageUrls: ['/subjectImages/Math.webp']
        },
        {
            name: 'Science',
            description: 'Engaging hands-on experiments unveil the wonders of the natural world and bring the ' +
                'basic scientific principles closer to your child.',
            imageUrls: ['/subjectImages/Science.webp']
        },
        {
            name: 'English as a second language',
            description: 'Lessons that help your child unlock the world of global communication, fostering bilingual ' +
                'confidence and cultural awareness at an early age.',
            imageUrls: ['/subjectImages/English.webp']
        },
        {
            name: 'Computing',
            description: 'Lessons teaches students about computer components, coding, and the role of computers in daily life, emphasizing computational thinking skills and logical problem-solving.',
            imageUrls: ['/subjectImages/Computing.webp']
        },
        {
            name: 'Digital Literacy',
            description: 'Students will gain essential digital literacy skills, enabling them to navigate the online world safely, make informed decisions, create advanced documents, contribute positively, and prioritize their well-being.',
            imageUrls: ['/subjectImages/Digital.webp']
        },
        {
            name: 'Global Perspective',
            description: 'Lessons foster essential research, collaboration, and communication skills across subjects, facilitating early integration into existing curricula and enhancing lifelong learning outcomes.',
            imageUrls: ['/subjectImages/Global.webp']
        },
/*         {
            name: 'Phonics/Handwriting',
            description: 'Our interactive phonics and handwriting exercises are designed to enhance your child’s ' +
                'ability to express thoughts and emotions articulately.',
            imageUrls: ['./subjectImages/Pen.webp']
        }, */
        {
            name: 'Wellbeing',
            description: 'Developing your child’s self-awareness, the lessons explore different factors that ' +
                'contribute to emotional and physical well-being.',
            imageUrls: ['/subjectImages/Wellbeing.webp']
        },
/*         {
            name: 'Guided reading',
            description: 'By diving into engaging, age-appropriate stories, your child develops creativity and ' +
                'begins to build a lifelong love of reading.',
            imageUrls: ['./subjectImages/Reading.webp']
        }, */
        {
            name: 'Humanities',
            description: 'The lessons spark curiosity about the ever-changing world and foster an understanding ' +
                'of diverse perspectives and cultures.',
            imageUrls: ['/subjectImages/Humanity.webp']
        },
        {
            name: 'Music',
            description: 'Children learn to harness their creative powers through music, experiencing how ' +
                'perseverance leads to improvement.',
            imageUrls: ['/subjectImages/Music.webp']
        },
        {
            name: 'Art & design',
            description: 'By unleashing creativity through colors and forms, your child is encouraged to use ' +
                'visual expression as a tool for cognitive growth.',
            imageUrls: ['/subjectImages/Art.webp']
        },
        {
            name: 'Physical education',
            description: 'Lessons that lay the groundwork for healthy habits and active lifestyles, while also ' +
                'increasing strength, coordination, and team spirit in each child.',
            imageUrls: ['/subjectImages/pe.webp']
        },
        {
            name: 'German language (optional)',
            description: 'Enhance your child’s linguistic arsenal with German language lessons, opening doors to a ' +
                'rich cultural heritage.',
            imageUrls: ['/subjectImages/German.webp']
        },
        {
            name: 'Swimming (optional)',
            description: 'Our popular swimming lessons help your child learn how to swim at an early age, boosting ' +
                'confidence, endurance, and physical strength.',
            imageUrls: ['/subjectImages/Swimming.webp']
        },
    ],
}