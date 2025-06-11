type Price = {
  title: string;
  text: string[];
};

export const pricing: { [key: string]: Price[] } = {
  year3: [
    {
      title: "Standard lessons:",
      text: [
        "Mathematics",
        "Science",
        "English as a second language",
        /* "5 English as a second language lessons per week", */
        "Computing",
        "Global perspective",
        /* "5 Mathematics lessons per week", */
        /* "5 Guided reading lessons per week", */
        /* "4 Phonics/handwriting lessons per week", */
        /* "4 Wellbeing lessons per week", */
        "Wellbeing",
        "Digital Literacy",
        "Physical Education",
        /* "2 Humanities lessons per week", */
        "Humanities",
        /* "1 Science lesson per week", */
        /* "1 Music lesson per week", */
        "Music",
        /* "1 Art & design lesson per week", */
        "Art & design",
        /* "1 Physical education lesson per week" */
        "Physical education",
      ],
    },
    {
      title: "Standard offer:",
      text: [
        "3 Outside play times per day",
        "2 Dental checkups per year",
        "2-3 Medical checkups per year",
        "Free accident insurance",
        "Regular exams and progress reports",
        "8.00-15.30 working hours",
        "Choir student club",
        "Robotics student club",
        "Pottery work student club",
      ],
    },
    {
      title: "Optional lessons:",
      text: [
        "2 German language lessons per week",
        "2 Swimming lessons per week",
      ],
    },
    {
      title: "Optional offer:",
      text: [
        /* "Choir student club", */
        /* "Robotics student club", */
        /* "Pottery work student club", */
        /*  "Two to three nutritious meals per day", */
        /*  "Transfers to and from our school", */
        "Fun and educational field trips",
        "15:30-17:00 extended stay",
      ],
    },
  ],
  year2: [
    {
      title: "Standard lessons:",
      text: [
        "Mathematics",
        "Science",
        "English as a second language",
        /* "5 English as a second language lessons per week", */
        "Computing",
        "Global perspective",
        /* "5 Mathematics lessons per week", */
        /* "5 Guided reading lessons per week", */
        /* "4 Phonics/handwriting lessons per week", */
        /* "4 Wellbeing lessons per week", */
        "Wellbeing",
        "Digital Literacy",
        "Physical Education",
        /* "2 Humanities lessons per week", */
        "Humanities",
        /* "1 Science lesson per week", */
        /* "1 Music lesson per week", */
        "Music",
        /* "1 Art & design lesson per week", */
        "Art & design",
        /* "1 Physical education lesson per week" */
        "Physical education",
      ],
    },
    {
      title: "Standard offer:",
      text: [
        "3 Outside play times per day",
        "2 Dental checkups per year",
        "2-3 Medical checkups per year",
        "Free accident insurance",
        "Regular exams and progress reports",
        "8.00-15.30 working hours",
        "Choir student club",
        "Robotics student club",
        "Pottery work student club",
      ],
    },
    {
      title: "Optional lessons:",
      text: [
        "2 German language lessons per week",
        "2 Swimming lessons per week",
      ],
    },
    {
      title: "Optional offer:",
      text: [
        /* "Choir student club", */
        /* "Robotics student club", */
        /* "Pottery work student club", */
        /*  "Two to three nutritious meals per day", */
        /*  "Transfers to and from our school", */
        "Fun and educational field trips",
        "15:30-17:00 extended stay",
      ],
    },
  ],
  year1: [
    {
      title: "Standard lessons per week:",
      text: [
        "Mathematics",
        "Science",
        "English as a second language",
        /* "Two PE classes per week", */
        /* "Two music lessons per week", */
        "Music lessons",
        "Wellbeing",
        "Digital Literacy",
        "Physical Education",
        /* "One karate lesson per week", */
        /* "One ballet lesson per week", */
        /* "One pottery lesson per week", */
        /* "One German (or Serbian) language lesson per week", */
        /* "3 Mathematics lessons per week", */
        /* "2 Phonics/handwriting lessons per week", */
        "Phonics/handwriting",
        /* "1 Humanities lessons per week", */
        /* "1 Science lesson per week", */
        /* "2 Art & design lesson per week" */
        "Art & design",
      ],
    },
    {
      title: "Standard offer:",
      text: [
        /* "Four nutritious meals per day", */
        "Two dental checkups per year",
        "Two to three medical checkups per year",
        "Free accident insurance",
        "Regular exams and progress reports",
        "8.00-15.30 regular working hours",
        "Choir student club",
        "Robotics student club",
        "Pottery work student club",
      ],
    },
    {
      title: "Optional lessons:",
      text: [
        "2 German language lessons per week",
        "2 Swimming lessons per week",
      ],
    },
    {
      title: "Optional offer:",
      text: [
        /* "Choir student club", */
        /* "Robotics student club", */
        /* "Pottery work student club", */
        /*  "Two to three nutritious meals per day", */
        /*  "Transfers to and from our school", */
        "Fun and educational field trips",
        "15:30-17:00 extended stay",
      ],
    },
  ],
  optional1: [
    /*         {
            title: '',
            text: [
                "Mini-bus transfers*:",
                "🚐 One way: 168 EUR",
                "🚐 Round-trip: 273 EUR",
                "*Within 7km of the city center."
            ]
        }, */
    {
      title: "Homemade meals:",
      text: [
        // "🍲 Lunch 8 eur/day",
        "🍲 Lunch: 10 EUR/day",
        "🍲 Breakfast & lunch: 14 EUR/day",
      ],
    },
    {
      title: "Extended stay program (15.30-17.00):",
      text: [
        "🕔 3 days/w: 120 EUR",
        "🕔 4 days/w: 160 EUR",
        "🕔 5 days/w: 200 EUR",
        "🕔 3 days/w + Swimming: 194 EUR",
      ],
    },
  ],
  optional2: [
    /*         {
            title: '',
            text: [
                "Mini-bus transfers*:",
                "🚐 One way: 168 EUR",
                "🚐 Round-trip: 273 EUR",
                "*Within 7km of the city center."
            ]
        }, */
    {
      title: "Homemade meals:",
      text: [
        /*      "🍲 Breakfast: 168 EUR",
                "🍲 Lunch: 168 EUR",
                "🍲 Breakfast & lunch: 210 EUR" */
        "🍲 Lunch: 10 EUR/day",
        "🍲 Breakfast & lunch: 14 EUR/day",
      ],
    },
    {
      title: "Extended stay program (15.30-17.00):",
      text: [
        "🕔 3 days/w: 120 EUR",
        "🕔 4 days/w: 160 EUR",
        "🕔 5 days/w: 200 EUR",
        "🕔 3 days/w + Swimming: 194 EUR",
      ],
    },
  ],
};
