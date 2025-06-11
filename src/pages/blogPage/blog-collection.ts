type SubContent = {
  sub_content_titleKey?: string;
  sub_content_textKey: string;
};

type SubSection = {
  sub_section_titleKey?: string;
  sub_section_textKey?: string;
  sub_content: SubContent[];
};

type Content = {
  content_titleKey: string;
  content_textKey?: string;
  content_text_belowKey?: string;
  sub_sections?: SubSection[];
};

type Section = {
  section_titleKey?: string;
  section_textKey?: string;
  content: Content[];
};

export type Blog = {
  id: number;
  slugs: Record<string, string>;
  image: string;
  altImage: string;
  titleKey: string;
  date: string;
  descriptionKey: string;
  introductionKey: string;
  sections: Section[];
  conclusionKey?: string;
};

export const blogs: Blog[] = [
  {
    id: 1,
    slugs: {
      en: "10-benefits-of-private-primary-schools-why-theyre-worth-the-investment",
      ru: "10-preimuschestv-chastnykh-nachalnykh-shkol-pochemu-oni-stoyat-svoikh-vlozheniy",
      sr: "10-prednosti-privatnih-osnovnih-skola-zasto-su-vredne-ulaganja",
    },
    image: "/blogPage/image-5.webp",
    altImage: "alt_image_5",
    titleKey: "blog_1_title",
    date: "12/03/2023",
    descriptionKey: "blog_1_description",
    introductionKey: "blog_1_introduction",
    sections: [
      {
        content: [
          {
            content_titleKey: "blog_1_section_1_content_title_1",
            content_textKey: "blog_1_section_1_content_text_1",
          },
          {
            content_titleKey: "blog_1_section_1_content_title_2",
            content_textKey: "blog_1_section_1_content_text_2",
          },
          {
            content_titleKey: "blog_1_section_1_content_title_3",
            content_textKey: "blog_1_section_1_content_text_3",
          },
          {
            content_titleKey: "blog_1_section_1_content_title_4",
            content_textKey: "blog_1_section_1_content_text_4",
          },
          {
            content_titleKey: "blog_1_section_1_content_title_5",
            content_textKey: "blog_1_section_1_content_text_5",
          },
          {
            content_titleKey: "blog_1_section_1_content_title_6",
            content_textKey: "blog_1_section_1_content_text_6",
          },
          {
            content_titleKey: "blog_1_section_1_content_title_7",
            content_textKey: "blog_1_section_1_content_text_7",
          },
          {
            content_titleKey: "blog_1_section_1_content_title_8",
            content_textKey: "blog_1_section_1_content_text_8",
          },
          {
            content_titleKey: "blog_1_section_1_content_title_9",
            content_textKey: "blog_1_section_1_content_text_9",
          },
          {
            content_titleKey: "blog_1_section_1_content_title_10",
            content_textKey: "blog_1_section_1_content_text_10",
          },
        ],
      },
      {
        section_titleKey: "blog_1_section_2_title",
        section_textKey: "blog_1_section_2_text",
        content: [
          {
            content_titleKey: "blog_1_section_2_content_title_1",
            content_textKey: "blog_1_section_2_content_text_1",
          },
          {
            content_titleKey: "blog_1_section_2_content_title_2",
            content_textKey: "blog_1_section_2_content_text_2",
          },
          {
            content_titleKey: "blog_1_section_2_content_title_3",
            content_textKey: "blog_1_section_2_content_text_3",
          },
          {
            content_titleKey: "blog_1_section_2_content_title_4",
            content_textKey: "blog_1_section_2_content_text_4",
          },
        ],
      },
    ],
    conclusionKey: "blog_1_conclusion",
  },
  {
    id: 2,
    slugs: {
      en: "how-to-choose-the-best-private-primary-school-for-your-child",
      ru: "kak-vybrat-luchshuyu-chastnuyu-nachalnuyu-shkolu-dlya-vashego-rebenka",
      sr: "kako-odabrati-najbolju-privatnu-osnovnu-skolu-za-vashe-dete",
    },
    image: "/blogPage/image-3.webp",
    altImage: "alt_image_3",
    titleKey: "blog_2_title",
    date: "15/05/2023",
    descriptionKey: "blog_2_description",
    introductionKey: "blog_2_introduction",
    sections: [
      {
        content: [
          {
            content_titleKey: "blog_2_section_1_content_title_1",
            content_textKey: "blog_2_section_1_content_text_1",
            content_text_belowKey: "blog_2_section_1_content_text_below_1",
            sub_sections: [
              {
                sub_content: [
                  {
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_1_content_1",
                  },
                  {
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_1_content_2",
                  },
                  {
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_1_content_3",
                  },
                  {
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_1_content_4",
                  },
                ],
              },
            ],
          },
          {
            content_titleKey: "blog_2_section_1_content_title_2",
            content_textKey: "blog_2_section_1_content_text_2",
            content_text_belowKey: "blog_2_section_1_content_text_below_2",
            sub_sections: [
              {
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_2_title_1",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_2_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_2_title_2",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_2_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_2_title_3",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_2_content_3",
                  },
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_2_title_4",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_2_content_4",
                  },
                ],
              },
            ],
          },
          {
            content_titleKey: "blog_2_section_1_content_title_3",
            content_textKey: "blog_2_section_1_content_text_3",
            content_text_belowKey: "blog_2_section_1_content_text_below_3",
            sub_sections: [
              {
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_3_title_1",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_3_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_3_title_2",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_3_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_3_title_3",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_3_content_3",
                  },
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_3_title_4",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_3_content_4",
                  },
                ],
              },
            ],
          },
          {
            content_titleKey: "blog_2_section_1_content_title_4",
            content_textKey: "blog_2_section_1_content_text_4",
            content_text_belowKey: "blog_2_section_1_content_text_below_4",
            sub_sections: [
              {
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_4_title_1",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_4_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_4_title_2",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_4_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_4_title_3",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_4_content_3",
                  },
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_4_title_4",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_4_content_4",
                  },
                ],
              },
            ],
          },
          {
            content_titleKey: "blog_2_section_1_content_title_5",
            content_textKey: "blog_2_section_1_content_text_5",
            content_text_belowKey: "blog_2_section_1_content_text_below_5",
            sub_sections: [
              {
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_5_title_1",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_5_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_5_title_2",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_5_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_5_title_3",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_5_content_3",
                  },
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_5_title_4",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_5_content_4",
                  },
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_5_title_5",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_5_content_5",
                  },
                ],
              },
            ],
          },
          {
            content_titleKey: "blog_2_section_1_content_title_6",
            content_textKey: "blog_2_section_1_content_text_6",
            content_text_belowKey: "blog_2_section_1_content_text_below_6",
            sub_sections: [
              {
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_6_title_1",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_6_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_6_title_2",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_6_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_6_title_3",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_6_content_3",
                  },
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_6_title_4",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_6_content_4",
                  },
                ],
              },
            ],
          },
          {
            content_titleKey: "blog_2_section_1_content_title_7",
            content_textKey: "blog_2_section_1_content_text_7",
            content_text_belowKey: "blog_2_section_1_content_text_below_7",
            sub_sections: [
              {
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_7_title_1",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_7_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_7_title_2",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_7_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_7_title_3",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_7_content_3",
                  },
                ],
              },
            ],
          },
          {
            content_titleKey: "blog_2_section_1_content_title_8",
            content_textKey: "blog_2_section_1_content_text_8",
            content_text_belowKey: "blog_2_section_1_content_text_below_8",
            sub_sections: [
              {
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_8_title_1",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_8_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_8_title_2",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_8_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_8_title_3",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_8_content_3",
                  },
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_8_title_4",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_8_content_4",
                  },
                ],
              },
            ],
          },
          {
            content_titleKey: "blog_2_section_1_content_title_9",
            content_textKey: "blog_2_section_1_content_text_9",
            content_text_belowKey: "blog_2_section_1_content_text_below_9",
            sub_sections: [
              {
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_9_title_1",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_9_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_9_title_2",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_9_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_9_title_3",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_9_content_3",
                  },
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_9_title_4",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_9_content_4",
                  },
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_9_title_5",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_9_content_5",
                  },
                ],
              },
            ],
          },
          {
            content_titleKey: "blog_2_section_1_content_title_10",
            content_textKey: "blog_2_section_1_content_text_10",
            content_text_belowKey: "blog_2_section_1_content_text_below_10",
            sub_sections: [
              {
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_10_title_1",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_10_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_10_title_2",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_10_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_10_title_3",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_10_content_3",
                  },
                  {
                    sub_content_titleKey:
                      "blog_2_section_1_sub_section_10_title_4",
                    sub_content_textKey:
                      "blog_2_section_1_sub_section_10_content_4",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    conclusionKey: "blog_2_conclusion",
  },
  {
    id: 3,
    slugs: {
      en: "the-importance-of-early-childhood-education-setting-a-strong-foundation",
      ru: "vazhnost-doshkolnogo-obrazovaniya-zakladyvaya-prochnyj-fundament",
      sr: "vaznost-ranog-obrazovanja-postavljanje-cvrstih-temelja",
    },
    image: "/blogPage/image-2.webp",
    altImage: "alt_image_2",
    titleKey: "blog_3_title",
    date: "20/08/2023",
    descriptionKey: "blog_3_description",
    introductionKey: "blog_3_introduction",
    sections: [
      {
        content: [
          {
            content_titleKey: "blog_3_section_1_content_title_1",
            content_textKey: "blog_3_section_1_content_text_1",
          },
          {
            content_titleKey: "blog_3_section_1_content_title_2",
            content_textKey: "blog_3_section_1_content_text_2",
          },
          {
            content_titleKey: "blog_3_section_1_content_title_3",
            content_textKey: "blog_3_section_1_content_text_3",
          },
          {
            content_titleKey: "blog_3_section_1_content_title_4",
            content_textKey: "blog_3_section_1_content_text_4",
          },
          {
            content_titleKey: "blog_3_section_1_content_title_5",
            content_textKey: "blog_3_section_1_content_text_5",
          },
          {
            content_titleKey: "blog_3_section_1_content_title_6",
            content_textKey: "blog_3_section_1_content_text_6",
          },
          {
            content_titleKey: "blog_3_section_1_content_title_7",
            content_textKey: "blog_3_section_1_content_text_7",
          },
          {
            content_titleKey: "blog_3_section_1_content_title_8",
            content_textKey: "blog_3_section_1_content_text_8",
          },
          {
            content_titleKey: "blog_3_section_1_content_title_9",
            content_textKey: "blog_3_section_1_content_text_9",
          },
          {
            content_titleKey: "blog_3_section_1_content_title_10",
            content_textKey: "blog_3_section_1_content_text_10",
          },
          {
            content_titleKey: "blog_3_section_1_content_title_11",
            content_textKey: "blog_3_section_1_content_text_11",
          },
          {
            content_titleKey: "blog_3_section_1_content_title_12",
            content_textKey: "blog_3_section_1_content_text_12",
          },
        ],
      },
    ],
    conclusionKey: "blog_3_conclusion",
  },
  {
    id: 4,
    slugs: {
      en: "a-day-in-the-life-of-a-student-at-youngsparrows",
      ru: "odin-den-iz-zhizni-uchenika-v-shkole-youngsparrows",
      sr: "jedan-dan-u-zivotu-ucenika-skole-youngsparrows",
    },
    image: "/blogPage/image-4.webp",
    altImage: "alt_image_4",
    titleKey: "blog_4_title",
    date: "10/10/2023",
    descriptionKey: "blog_4_description",
    introductionKey: "blog_4_introduction",
    sections: [
      {
        content: [
          {
            content_titleKey: "blog_4_section_1_content_title_1",
            content_textKey: "blog_4_section_1_content_text_1",
          },
          {
            content_titleKey: "blog_4_section_1_content_title_2",
            content_textKey: "blog_4_section_1_content_text_2",
          },
          {
            content_titleKey: "blog_4_section_1_content_title_3",
            content_textKey: "blog_4_section_1_content_text_3",
          },
          {
            content_titleKey: "blog_4_section_1_content_title_4",
            content_textKey: "blog_4_section_1_content_text_4",
          },
          {
            content_titleKey: "blog_4_section_1_content_title_5",
            content_textKey: "blog_4_section_1_content_text_5",
          },
          {
            content_titleKey: "blog_4_section_1_content_title_6",
            content_textKey: "blog_4_section_1_content_text_6",
          },
          {
            content_titleKey: "blog_4_section_1_content_title_7",
            content_textKey: "blog_4_section_1_content_text_7",
          },
          {
            content_titleKey: "blog_4_section_1_content_title_8",
            content_textKey: "blog_4_section_1_content_text_8",
          },
          {
            content_titleKey: "blog_4_section_1_content_title_9",
            content_textKey: "blog_4_section_1_content_text_9",
          },
          {
            content_titleKey: "blog_4_section_1_content_title_10",
            content_textKey: "blog_4_section_1_content_text_10",
          },
          {
            content_titleKey: "blog_4_section_1_content_title_11",
            content_textKey: "blog_4_section_1_content_text_11",
          },
        ],
      },
    ],
    conclusionKey: "blog_4_conclusion",
  },
  {
    id: 5,
    slugs: {
      en: "5-innovative-teaching-methods-used-at-youngsparrows",
      ru: "5-innovacionnykh-metodov-obucheniya-ispolzuemykh-v-shkole-youngsparrows",
      sr: "5-inovativnih-metoda-nastave-koje-se-koriste-u-skoli-youngsparrows",
    },
    image: "/blogPage/image-1.webp",
    altImage: "alt_image_1",
    titleKey: "blog_5_title",
    date: "08/11/2023",
    descriptionKey: "blog_5_description",
    introductionKey: "blog_5_introduction",
    sections: [
      {
        content: [
          {
            content_titleKey: "blog_5_section_1_content_title_1",
            content_textKey: "blog_5_section_1_content_text_1",
            sub_sections: [
              {
                sub_section_titleKey: "blog_5_section_1_sub_section_1_title",
                sub_content: [
                  {
                    sub_content_textKey:
                      "blog_5_section_1_sub_section_1_content_1",
                  },
                  {
                    sub_content_textKey:
                      "blog_5_section_1_sub_section_1_content_2",
                  },
                  {
                    sub_content_textKey:
                      "blog_5_section_1_sub_section_1_content_3",
                  },
                  {
                    sub_content_textKey:
                      "blog_5_section_1_sub_section_1_content_4",
                  },
                  {
                    sub_content_textKey:
                      "blog_5_section_1_sub_section_1_content_5",
                  },
                ],
              },
            ],
          },
          {
            content_titleKey: "blog_5_section_1_content_title_2",
            content_textKey: "blog_5_section_1_content_text_2",
            sub_sections: [
              {
                sub_section_titleKey: "blog_5_section_1_sub_section_2_title",
                sub_content: [
                  {
                    sub_content_textKey:
                      "blog_5_section_1_sub_section_2_content_1",
                  },
                  {
                    sub_content_textKey:
                      "blog_5_section_1_sub_section_2_content_2",
                  },
                  {
                    sub_content_textKey:
                      "blog_5_section_1_sub_section_2_content_3",
                  },
                  {
                    sub_content_textKey:
                      "blog_5_section_1_sub_section_2_content_4",
                  },
                  {
                    sub_content_textKey:
                      "blog_5_section_1_sub_section_2_content_5",
                  },
                ],
              },
            ],
          },
          {
            content_titleKey: "blog_5_section_1_content_title_3",
            content_textKey: "blog_5_section_1_content_3",
            sub_sections: [
              {
                sub_section_titleKey: "blog_5_section_1_sub_section_3_title",
                sub_content: [
                  {
                    sub_content_textKey:
                      "blog_5_section_1_sub_section_3_content_1",
                  },
                  {
                    sub_content_textKey:
                      "blog_5_section_1_sub_section_3_content_2",
                  },
                  {
                    sub_content_textKey:
                      "blog_5_section_1_sub_section_3_content_3",
                  },
                  {
                    sub_content_textKey:
                      "blog_5_section_1_sub_section_3_content_4",
                  },
                  {
                    sub_content_textKey:
                      "blog_5_section_1_sub_section_3_content_5",
                  },
                ],
              },
            ],
          },
          {
            content_titleKey: "blog_5_section_1_content_title_4",
            content_textKey: "blog_5_section_1_content_text_4",
            sub_sections: [
              {
                sub_section_titleKey: "blog_5_section_1_sub_section_4_title",
                sub_content: [
                  {
                    sub_content_textKey:
                      "blog_5_section_1_sub_section_4_content_1",
                  },
                  {
                    sub_content_textKey:
                      "blog_5_section_1_sub_section_4_content_2",
                  },
                  {
                    sub_content_textKey:
                      "blog_5_section_1_sub_section_4_content_3",
                  },
                  {
                    sub_content_textKey:
                      "blog_5_section_1_sub_section_4_content_4",
                  },
                  {
                    sub_content_textKey:
                      "blog_5_section_1_sub_section_4_content_5",
                  },
                ],
              },
            ],
          },
          {
            content_titleKey: "blog_5_section_1_content_title_5",
            content_textKey: "blog_5_section_1_content_text_5",
            sub_sections: [
              {
                sub_section_titleKey: "blog_5_section_1_sub_section_5_title",
                sub_content: [
                  {
                    sub_content_textKey:
                      "blog_5_section_1_sub_section_5_content_1",
                  },
                  {
                    sub_content_textKey:
                      "blog_5_section_1_sub_section_5_content_2",
                  },
                  {
                    sub_content_textKey:
                      "blog_5_section_1_sub_section_5_content_3",
                  },
                  {
                    sub_content_textKey:
                      "blog_5_section_1_sub_section_5_content_4",
                  },
                  {
                    sub_content_textKey:
                      "blog_5_section_1_sub_section_5_content_5",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        content: [
          {
            content_titleKey: "blog_5_section_2_content_title_1",
            content_textKey: "blog_5_section_2_content_text_1",
          },
          {
            content_titleKey: "blog_5_section_2_content_title_2",
            content_textKey: "blog_5_section_2_content_text_2",
          },
        ],
      },
    ],
    conclusionKey: "blog_5_conclusion",
  },
  {
    id: 6,
    slugs: {
      en: "preparing-your-child-for-primary-school-top-tips-for-parents",
      ru: "podgotovka-vashego-rebenka-k-nachalnoy-shkole-luchshie-sovety-dlya-roditeley",
      sr: "priprema-vasheg-deteza-za-osnovnu-skolu-najbolji-saveti-za-roditelje",
    },
    image: "/blogPage/image-6.webp",
    altImage: "alt_image_6",
    titleKey: "blog_6_title",
    date: "30/12/2023",
    descriptionKey: "blog_6_description",
    introductionKey: "blog_6_introduction",
    sections: [
      {
        content: [
          {
            content_titleKey: "blog_6_section_1_content_title_1",
            content_textKey: "blog_6_section_1_content_text_1",
            content_text_belowKey: "blog_6_section_1_content_text_below_1",
            sub_sections: [
              {
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_6_section_1_sub_section_1_title_1",
                    sub_content_textKey:
                      "blog_6_section_1_sub_section_1_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_6_section_1_sub_section_1_title_2",
                    sub_content_textKey:
                      "blog_6_section_1_sub_section_1_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_6_section_1_sub_section_1_title_3",
                    sub_content_textKey:
                      "blog_6_section_1_sub_section_1_content_3",
                  },
                ],
              },
            ],
          },
          {
            content_titleKey: "blog_6_section_1_content_title_2",
            content_textKey: "blog_6_section_1_content_text_2",
            content_text_belowKey: "blog_6_section_1_content_text_below_2",
            sub_sections: [
              {
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_6_section_1_sub_section_2_title_1",
                    sub_content_textKey:
                      "blog_6_section_1_sub_section_2_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_6_section_1_sub_section_2_title_2",
                    sub_content_textKey:
                      "blog_6_section_1_sub_section_2_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_6_section_1_sub_section_2_title_3",
                    sub_content_textKey:
                      "blog_6_section_1_sub_section_2_content_3",
                  },
                ],
              },
            ],
          },
          {
            content_titleKey: "blog_6_section_1_content_title_3",
            content_textKey: "blog_6_section_1_content_text_3",
            content_text_belowKey: "blog_6_section_1_content_text_below_3",
            sub_sections: [
              {
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_6_section_1_sub_section_3_title_1",
                    sub_content_textKey:
                      "blog_6_section_1_sub_section_3_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_6_section_1_sub_section_3_title_2",
                    sub_content_textKey:
                      "blog_6_section_1_sub_section_3_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_6_section_1_sub_section_3_title_3",
                    sub_content_textKey:
                      "blog_6_section_1_sub_section_3_content_3",
                  },
                ],
              },
            ],
          },
          {
            content_titleKey: "blog_6_section_1_content_title_4",
            content_textKey: "blog_6_section_1_content_text_4",
            content_text_belowKey: "blog_6_section_1_content_text_below_4",
            sub_sections: [
              {
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_6_section_1_sub_section_4_title_1",
                    sub_content_textKey:
                      "blog_6_section_1_sub_section_4_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_6_section_1_sub_section_4_title_2",
                    sub_content_textKey:
                      "blog_6_section_1_sub_section_4_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_6_section_1_sub_section_4_title_3",
                    sub_content_textKey:
                      "blog_6_section_1_sub_section_4_content_3",
                  },
                ],
              },
            ],
          },
          {
            content_titleKey: "blog_6_section_1_content_title_5",
            content_textKey: "blog_6_section_1_content_text_5",
            content_text_belowKey: "blog_6_section_1_content_text_below_5",
            sub_sections: [
              {
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_6_section_1_sub_section_5_title_1",
                    sub_content_textKey:
                      "blog_6_section_1_sub_section_5_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_6_section_1_sub_section_5_title_2",
                    sub_content_textKey:
                      "blog_6_section_1_sub_section_5_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_6_section_1_sub_section_5_title_3",
                    sub_content_textKey:
                      "blog_6_section_1_sub_section_5_content_3",
                  },
                ],
              },
            ],
          },
          {
            content_titleKey: "blog_6_section_1_content_title_6",
            content_textKey: "blog_6_section_1_content_text_6",
            content_text_belowKey: "blog_6_section_1_content_text_below_6",
            sub_sections: [
              {
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_6_section_1_sub_section_6_title_1",
                    sub_content_textKey:
                      "blog_6_section_1_sub_section_6_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_6_section_1_sub_section_6_title_2",
                    sub_content_textKey:
                      "blog_6_section_1_sub_section_6_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_6_section_1_sub_section_6_title_3",
                    sub_content_textKey:
                      "blog_6_section_1_sub_section_6_content_3",
                  },
                ],
              },
            ],
          },
          {
            content_titleKey: "blog_6_section_1_content_title_7",
            content_textKey: "blog_6_section_1_content_text_7",
            content_text_belowKey: "blog_6_section_1_content_text_below_7",
            sub_sections: [
              {
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_6_section_1_sub_section_7_title_1",
                    sub_content_textKey:
                      "blog_6_section_1_sub_section_7_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_6_section_1_sub_section_7_title_2",
                    sub_content_textKey:
                      "blog_6_section_1_sub_section_7_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_6_section_1_sub_section_7_title_3",
                    sub_content_textKey:
                      "blog_6_section_1_sub_section_7_content_3",
                  },
                ],
              },
            ],
          },
          {
            content_titleKey: "blog_6_section_1_content_title_8",
            content_textKey: "blog_6_section_1_content_text_8",
            content_text_belowKey: "blog_6_section_1_content_text_below_8",
            sub_sections: [
              {
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_6_section_1_sub_section_8_title_1",
                    sub_content_textKey:
                      "blog_6_section_1_sub_section_8_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_6_section_1_sub_section_8_title_2",
                    sub_content_textKey:
                      "blog_6_section_1_sub_section_8_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_6_section_1_sub_section_8_title_3",
                    sub_content_textKey:
                      "blog_6_section_1_sub_section_8_content_3",
                  },
                ],
              },
            ],
          },
          {
            content_titleKey: "blog_6_section_1_content_title_9",
            content_textKey: "blog_6_section_1_content_text_9",
            sub_sections: [
              {
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_6_section_1_sub_section_9_title_1",
                    sub_content_textKey:
                      "blog_6_section_1_sub_section_9_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_6_section_1_sub_section_9_title_2",
                    sub_content_textKey:
                      "blog_6_section_1_sub_section_9_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_6_section_1_sub_section_9_title_3",
                    sub_content_textKey:
                      "blog_6_section_1_sub_section_9_content_3",
                  },
                  {
                    sub_content_titleKey:
                      "blog_6_section_1_sub_section_9_title_4",
                    sub_content_textKey:
                      "blog_6_section_1_sub_section_9_content_4",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    conclusionKey: "blog_6_conclusion",
  },
  {
    id: 7,
    slugs: {
      en: "how-private-schools-nurture-creativity-and-confidence-in-children",
      ru: "kak-chastnye-shkoly-razvivayut-kreativnost-i-uverennost-u-detej",
      sr: "kako-privatne-skole-razvijaju-kreativnost-i-samopouzdanje-kod-dece",
    },
    image: "/blogPage/image-7.webp",
    altImage: "alt_image_7",
    titleKey: "blog_7_title",
    date: "14/01/2024",
    descriptionKey: "blog_7_description",
    introductionKey: "blog_7_introduction",
    sections: [
      {
        content: [
          {
            content_titleKey: "blog_7_section_1_content_title_1",
            content_textKey: "blog_7_section_1_content_text_1",
          },
          {
            content_titleKey: "blog_7_section_1_content_title_2",
            content_textKey: "blog_7_section_1_content_text_2",
          },
          {
            content_titleKey: "blog_7_section_1_content_title_3",
            content_textKey: "blog_7_section_1_content_text_3",
          },
          {
            content_titleKey: "blog_7_section_1_content_title_4",
            content_textKey: "blog_7_section_1_content_text_4",
          },
          {
            content_titleKey: "blog_7_section_1_content_title_5",
            content_textKey: "blog_7_section_1_content_text_5",
          },
          {
            content_titleKey: "blog_7_section_1_content_title_6",
            content_textKey: "blog_7_section_1_content_text_6",
          },
          {
            content_titleKey: "blog_7_section_1_content_title_7",
            content_textKey: "blog_7_section_1_content_text_7",
          },
          {
            content_titleKey: "blog_7_section_1_content_title_8",
            content_textKey: "blog_7_section_1_content_text_8",
          },
          {
            content_titleKey: "blog_7_section_1_content_title_9",
            content_textKey: "blog_7_section_1_content_text_9",
          },
          {
            content_titleKey: "blog_7_section_1_content_title_10",
            content_textKey: "blog_7_section_1_content_text_10",
          },
          {
            content_titleKey: "blog_7_section_1_content_title_11",
            content_textKey: "blog_7_section_1_content_text_11",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    slugs: {
      en: "understanding-the-curriculum-at-youngsparrows-a-parents-guide",
      ru: "ponimanie-uchebnoj-programmy-v-shkole-youngsparrows-rukovodstvo-dlya-roditeley",
      sr: "razumevanje-nastavnog-plana-i-programa-u-skoli-youngsparrows-vodic-za-roditelje",
    },
    image: "/blogPage/image-8.webp",
    altImage: "alt_image_8",
    titleKey: "blog_8_title",
    date: "21/02/2024",
    descriptionKey: "blog_8_description",
    introductionKey: "blog_8_introduction",
    sections: [
      {
        content: [
          {
            content_titleKey: "blog_8_section_1_content_title_1",
            content_textKey: "blog_8_section_1_content_text_1",
            sub_sections: [
              {
                sub_section_titleKey: "blog_8_section_1_sub_section_1_title",
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_1_title_1",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_1_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_1_title_2",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_1_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_1_title_3",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_1_content_3",
                  },
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_1_title_4",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_1_content_4",
                  },
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_1_title_5",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_1_content_5",
                  },
                ],
              },
            ],
          },
          {
            content_titleKey: "blog_8_section_1_content_title_2",
            content_textKey: "blog_8_section_1_content_text_2",
            sub_sections: [
              {
                sub_section_titleKey: "blog_8_section_1_sub_section_2_0_title",
                sub_section_textKey: "blog_8_section_1_sub_section_2_0_text",
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_2_0_title_1",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_2_0_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_2_0_title_2",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_2_0_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_2_0_title_3",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_2_0_content_3",
                  },
                ],
              },
              {
                sub_section_titleKey: "blog_8_section_1_sub_section_2_1_title",
                sub_section_textKey: "blog_8_section_1_sub_section_2_1_text",
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_2_1_title_1",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_2_1_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_2_1_title_2",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_2_1_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_2_1_title_3",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_2_1_content_3",
                  },
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_2_1_title_4",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_2_1_content_4",
                  },
                ],
              },
              {
                sub_section_titleKey: "blog_8_section_1_sub_section_2_2_title",
                sub_section_textKey: "blog_8_section_1_sub_section_2_2_text",
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_2_2_title_1",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_2_2_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_2_2_title_2",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_2_2_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_2_2_title_3",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_2_2_content_3",
                  },
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_2_2_title_4",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_2_2_content_4",
                  },
                ],
              },
              {
                sub_section_titleKey: "blog_8_section_1_sub_section_2_3_title",
                sub_section_textKey: "blog_8_section_1_sub_section_2_3_text",
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_2_3_title_1",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_2_3_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_2_3_title_2",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_2_3_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_2_3_title_3",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_2_3_content_3",
                  },
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_2_3_title_4",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_2_3_content_4",
                  },
                ],
              },
            ],
          },
          {
            content_titleKey: "blog_8_section_1_content_title_3",
            content_textKey: "blog_8_section_1_content_text_3",
            sub_sections: [
              {
                sub_section_titleKey: "blog_8_section_1_sub_section_3_0_title",
                sub_section_textKey: "blog_8_section_1_sub_section_3_0_text",
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_3_0_title_1",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_3_0_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_3_0_title_2",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_3_0_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_3_0_title_3",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_3_0_content_3",
                  },
                ],
              },
              {
                sub_section_titleKey: "blog_8_section_1_sub_section_3_1_title",
                sub_section_textKey: "blog_8_section_1_sub_section_3_1_text",
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_3_1_title_1",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_3_1_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_3_1_title_2",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_3_1_content_2",
                  },
                ],
              },
              {
                sub_section_titleKey: "blog_8_section_1_sub_section_3_2_title",
                sub_section_textKey: "blog_8_section_1_sub_section_3_2_text",
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_3_2_title_1",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_3_2_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_3_2_title_2",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_3_2_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_3_2_title_3",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_3_2_content_3",
                  },
                ],
              },
            ],
          },
          {
            content_titleKey: "blog_8_section_1_content_title_4",
            content_textKey: "blog_8_section_1_content_text_4",
            sub_sections: [
              {
                sub_section_titleKey: "blog_8_section_1_sub_section_4_0_title",
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_4_0_title_1",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_4_0_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_4_0_title_2",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_4_0_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_4_0_title_3",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_4_0_content_3",
                  },
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_4_0_title_4",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_4_0_content_4",
                  },
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_4_0_title_5",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_4_0_content_5",
                  },
                ],
              },
              {
                sub_section_titleKey: "blog_8_section_1_sub_section_4_1_title",
                sub_content: [
                  {
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_4_1_content_1",
                  },
                ],
              },
            ],
          },
          {
            content_titleKey: "blog_8_section_1_content_title_5",
            content_textKey: "blog_8_section_1_content_text_5",
            sub_sections: [
              {
                sub_section_titleKey: "blog_8_section_1_sub_section_5_0_title",
                sub_content: [
                  {
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_5_0_content_1",
                  },
                ],
              },
              {
                sub_section_titleKey: "blog_8_section_1_sub_section_5_1_title",
                sub_content: [
                  {
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_5_1_content_1",
                  },
                ],
              },
            ],
          },
          {
            content_titleKey: "blog_8_section_1_content_title_6",
            content_textKey: "blog_8_section_1_content_text_6",
            sub_sections: [
              {
                sub_section_titleKey: "blog_8_section_1_sub_section_6_title",
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_6_title_1",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_6_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_6_title_2",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_6_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_6_title_3",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_6_content_3",
                  },
                ],
              },
            ],
          },
          {
            content_titleKey: "blog_8_section_1_content_title_7",
            content_textKey: "blog_8_section_1_content_text_7",
            sub_sections: [
              {
                sub_section_titleKey: "blog_8_section_1_sub_section_7_title",
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_7_title_1",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_7_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_7_title_2",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_7_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_7_title_3",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_7_content_3",
                  },
                  {
                    sub_content_titleKey:
                      "blog_8_section_1_sub_section_7_title_4",
                    sub_content_textKey:
                      "blog_8_section_1_sub_section_7_content_4",
                  },
                ],
              },
            ],
          },
          {
            content_titleKey: "blog_8_section_1_content_title_8",
            content_textKey: "blog_8_section_1_content_text_8",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    slugs: {
      en: "5-signs-your-child-is-ready-for-private-primary-school",
      ru: "5-priznakov-togo-chto-vash-rebenok-gotov-k-obucheniyu-v-chastnoj-nachalnoj-shkole",
      sr: "5-znakova-da-je-vashe-dete-spremno-za-privatnu-osnovnu-skolu",
    },
    image: "/blogPage/image-9.webp",
    altImage: "alt_image_9",
    titleKey: "blog_9_title",
    date: "05/03/2024",
    descriptionKey: "blog_9_description",
    introductionKey: "blog_9_introduction",
    sections: [
      {
        content: [
          {
            content_titleKey: "blog_9_section_1_content_title_1",
            content_textKey: "blog_9_section_1_content_text_1",
            content_text_belowKey: "blog_9_section_1_content_text_below_1",
            sub_sections: [
              {
                sub_section_titleKey: "blog_9_section_1_sub_section_1_title",
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_9_section_1_sub_section_1_title_1",
                    sub_content_textKey:
                      "blog_9_section_1_sub_section_1_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_9_section_1_sub_section_1_title_2",
                    sub_content_textKey:
                      "blog_9_section_1_sub_section_1_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_9_section_1_sub_section_1_title_3",
                    sub_content_textKey:
                      "blog_9_section_1_sub_section_1_content_3",
                  },
                ],
              },
            ],
          },
          {
            content_titleKey: "blog_9_section_1_content_title_2",
            content_textKey: "blog_9_section_1_content_text_2",
            content_text_belowKey: "blog_9_section_1_content_text_below_2",
            sub_sections: [
              {
                sub_section_titleKey: "blog_9_section_1_sub_section_2_title",
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_9_section_1_sub_section_2_title_1",
                    sub_content_textKey:
                      "blog_9_section_1_sub_section_2_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_9_section_1_sub_section_2_title_2",
                    sub_content_textKey:
                      "blog_9_section_1_sub_section_2_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_9_section_1_sub_section_2_title_3",
                    sub_content_textKey:
                      "blog_9_section_1_sub_section_2_content_3",
                  },
                ],
              },
            ],
          },
          {
            content_titleKey: "blog_9_section_1_content_title_3",
            content_textKey: "blog_9_section_1_content_text_3",
            content_text_belowKey: "blog_9_section_1_content_text_below_3",
            sub_sections: [
              {
                sub_section_titleKey: "blog_9_section_1_sub_section_3_title",
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_9_section_1_sub_section_3_title_1",
                    sub_content_textKey:
                      "blog_9_section_1_sub_section_3_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_9_section_1_sub_section_3_title_2",
                    sub_content_textKey:
                      "blog_9_section_1_sub_section_3_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_9_section_1_sub_section_3_title_3",
                    sub_content_textKey:
                      "blog_9_section_1_sub_section_3_content_3",
                  },
                  {
                    sub_content_titleKey:
                      "blog_9_section_1_sub_section_3_title_4",
                    sub_content_textKey:
                      "blog_9_section_1_sub_section_3_content_4",
                  },
                ],
              },
            ],
          },
          {
            content_titleKey: "blog_9_section_1_content_title_4",
            content_textKey: "blog_9_section_1_content_text_4",
            content_text_belowKey: "blog_9_section_1_content_text_below_4",
            sub_sections: [
              {
                sub_section_titleKey: "blog_9_section_1_sub_section_4_title",
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_9_section_1_sub_section_4_title_1",
                    sub_content_textKey:
                      "blog_9_section_1_sub_section_4_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_9_section_1_sub_section_4_title_2",
                    sub_content_textKey:
                      "blog_9_section_1_sub_section_4_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_9_section_1_sub_section_4_title_3",
                    sub_content_textKey:
                      "blog_9_section_1_sub_section_4_content_3",
                  },
                  {
                    sub_content_titleKey:
                      "blog_9_section_1_sub_section_4_title_4",
                    sub_content_textKey:
                      "blog_9_section_1_sub_section_4_content_4",
                  },
                ],
              },
            ],
          },
          {
            content_titleKey: "blog_9_section_1_content_title_5",
            content_textKey: "blog_9_section_1_content_text_5",
            content_text_belowKey: "blog_9_section_1_content_text_below_5",
            sub_sections: [
              {
                sub_section_titleKey: "blog_9_section_1_sub_section_5_title",
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_9_section_1_sub_section_5_title_1",
                    sub_content_textKey:
                      "blog_9_section_1_sub_section_5_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_9_section_1_sub_section_5_title_2",
                    sub_content_textKey:
                      "blog_9_section_1_sub_section_5_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_9_section_1_sub_section_5_title_3",
                    sub_content_textKey:
                      "blog_9_section_1_sub_section_5_content_3",
                  },
                  {
                    sub_content_titleKey:
                      "blog_9_section_1_sub_section_5_title_4",
                    sub_content_textKey:
                      "blog_9_section_1_sub_section_5_content_4",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        content: [
          {
            content_titleKey: "blog_9_section_2_content_title_1",
            content_textKey: "blog_9_section_2_content_text_1",
            sub_sections: [
              {
                sub_section_titleKey: "blog_9_section_2_sub_section_1_title",
                sub_content: [
                  {
                    sub_content_textKey:
                      "blog_9_section_2_sub_section_1_content_1",
                  },
                ],
              },
              {
                sub_section_titleKey: "blog_9_section_2_sub_section_2_title",
                sub_content: [
                  {
                    sub_content_textKey:
                      "blog_9_section_2_sub_section_2_content_1",
                  },
                ],
              },
              {
                sub_section_titleKey: "blog_9_section_2_sub_section_3_title",
                sub_content: [
                  {
                    sub_content_textKey:
                      "blog_9_section_2_sub_section_3_content_1",
                  },
                ],
              },
              {
                sub_section_titleKey: "blog_9_section_2_sub_section_4_title",
                sub_content: [
                  {
                    sub_content_textKey:
                      "blog_9_section_2_sub_section_4_content_1",
                  },
                ],
              },
              {
                sub_section_titleKey: "blog_9_section_2_sub_section_5_title",
                sub_content: [
                  {
                    sub_content_textKey:
                      "blog_9_section_2_sub_section_5_content_1",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    conclusionKey: "blog_9_conclusion",
  },
  {
    id: 10,
    slugs: {
      en: "the-role-of-community-in-private-primary-schools-building-strong-partnerships",
      ru: "rol-soobshchestva-v-chastnykh-nachalnykh-shkolakh-sozdanie-prochnykh-partnerstv",
      sr: "uloga-zajednice-u-privatnim-osnovnim-skolama-izgradnja-snaznih-partnerstava",
    },
    image: "/blogPage/image-10.webp",
    altImage: "alt_image_10",
    titleKey: "blog_10_title",
    date: "17/04/2024",
    descriptionKey: "blog_10_description",
    introductionKey: "blog_10_introduction",
    sections: [
      {
        content: [
          {
            content_titleKey: "blog_10_section_1_content_title_1",
            content_textKey: "blog_10_section_1_content_text_1",
          },
          {
            content_titleKey: "blog_10_section_1_content_title_2",
            sub_sections: [
              {
                sub_section_titleKey: "blog_10_section_1_sub_section_2_0_title",
                sub_section_textKey: "blog_10_section_1_sub_section_2_0_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_10_section_1_sub_section_2_1_title",
                sub_section_textKey: "blog_10_section_1_sub_section_2_1_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_10_section_1_sub_section_2_2_title",
                sub_section_textKey: "blog_10_section_1_sub_section_2_2_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_10_section_1_sub_section_2_3_title",
                sub_section_textKey: "blog_10_section_1_sub_section_2_3_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_10_section_1_sub_section_2_4_title",
                sub_section_textKey: "blog_10_section_1_sub_section_2_4_text",
                sub_content: [],
              },
            ],
          },
          {
            content_titleKey: "blog_10_section_1_content_title_3",
            sub_sections: [
              {
                sub_section_titleKey: "blog_10_section_1_sub_section_3_0_title",
                sub_section_textKey: "blog_10_section_1_sub_section_3_0_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_10_section_1_sub_section_3_1_title",
                sub_section_textKey: "blog_10_section_1_sub_section_3_1_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_10_section_1_sub_section_3_2_title",
                sub_section_textKey: "blog_10_section_1_sub_section_3_2_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_10_section_1_sub_section_3_3_title",
                sub_section_textKey: "blog_10_section_1_sub_section_3_3_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_10_section_1_sub_section_3_4_title",
                sub_section_textKey: "blog_10_section_1_sub_section_3_4_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_10_section_1_sub_section_3_5_title",
                sub_section_textKey: "blog_10_section_1_sub_section_3_5_text",
                sub_content: [],
              },
            ],
          },
          {
            content_titleKey: "blog_10_section_1_content_title_4",
            content_textKey: "blog_10_section_1_content_text_4",
            sub_sections: [
              {
                sub_section_titleKey: "blog_10_section_1_sub_section_4_0_title",
                sub_section_textKey: "blog_10_section_1_sub_section_4_0_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_10_section_1_sub_section_4_1_title",
                sub_section_textKey: "blog_10_section_1_sub_section_4_1_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_10_section_1_sub_section_4_2_title",
                sub_section_textKey: "blog_10_section_1_sub_section_4_2_text",
                sub_content: [],
              },
            ],
          },
          {
            content_titleKey: "blog_10_section_1_content_title_5",
            content_textKey: "blog_10_section_1_content_text_5",
            sub_sections: [
              {
                sub_section_titleKey: "blog_10_section_1_sub_section_5_0_title",
                sub_section_textKey: "blog_10_section_1_sub_section_5_0_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_10_section_1_sub_section_5_1_title",
                sub_section_textKey: "blog_10_section_1_sub_section_5_1_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_10_section_1_sub_section_5_2_title",
                sub_section_textKey: "blog_10_section_1_sub_section_5_2_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_10_section_1_sub_section_5_3_title",
                sub_section_textKey: "blog_10_section_1_sub_section_5_3_text",
                sub_content: [],
              },
            ],
          },
          {
            content_titleKey: "blog_10_section_1_content_title_6",
            sub_sections: [
              {
                sub_section_titleKey: "blog_10_section_1_sub_section_6_0_title",
                sub_section_textKey: "blog_10_section_1_sub_section_6_0_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_10_section_1_sub_section_6_1_title",
                sub_section_textKey: "blog_10_section_1_sub_section_6_1_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_10_section_1_sub_section_6_2_title",
                sub_section_textKey: "blog_10_section_1_sub_section_6_2_text",
                sub_content: [],
              },
            ],
          },
          {
            content_titleKey: "blog_10_section_1_content_title_7",
            content_textKey: "blog_10_section_1_content_text_7",
            sub_sections: [
              {
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_10_section_1_sub_section_7_title_1",
                    sub_content_textKey:
                      "blog_10_section_1_sub_section_7_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_10_section_1_sub_section_7_title_2",
                    sub_content_textKey:
                      "blog_10_section_1_sub_section_7_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_10_section_1_sub_section_7_title_3",
                    sub_content_textKey:
                      "blog_10_section_1_sub_section_7_content_3",
                  },
                  {
                    sub_content_titleKey:
                      "blog_10_section_1_sub_section_7_title_4",
                    sub_content_textKey:
                      "blog_10_section_1_sub_section_7_content_4",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    conclusionKey: "blog_10_conclusion",
  },
  {
    id: 11,
    slugs: {
      en: "the-advantages-of-a-multicultural-classroom-in-primary-education",
      ru: "preimushchestva-multikulturnogo-klassa-v-nachalnom-obrazovanii",
      sr: "prednosti-multikulturalne-ucionice-u-osnovnom-obrazovanju",
    },
    image: "/blogPage/image-11.webp",
    altImage: "alt_image_11",
    titleKey: "blog_11_title",
    date: "24/05/2024",
    descriptionKey: "blog_11_description",
    introductionKey: "blog_11_introduction",
    sections: [
      {
        content: [
          {
            content_titleKey: "blog_11_section_1_content_title_1",
            content_textKey: "blog_11_section_1_content_text_1",
          },
          {
            content_titleKey: "blog_11_section_1_content_title_2",
            content_textKey: "blog_11_section_1_content_text_2",
          },
          {
            content_titleKey: "blog_11_section_1_content_title_3",
            content_textKey: "blog_11_section_1_content_text_3",
          },
          {
            content_titleKey: "blog_11_section_1_content_title_4",
            content_textKey: "blog_11_section_1_content_text_4",
          },
          {
            content_titleKey: "blog_11_section_1_content_title_5",
            content_textKey: "blog_11_section_1_content_text_5",
          },
          {
            content_titleKey: "blog_11_section_1_content_title_6",
            content_textKey: "blog_11_section_1_content_text_6",
          },
          {
            content_titleKey: "blog_11_section_1_content_title_7",
            content_textKey: "blog_11_section_1_content_text_7",
          },
          {
            content_titleKey: "blog_11_section_1_content_title_8",
            content_textKey: "blog_11_section_1_content_text_8",
          },
          {
            content_titleKey: "blog_11_section_1_content_title_9",
            content_textKey: "blog_11_section_1_content_text_9",
          },
          {
            content_titleKey: "blog_11_section_1_content_title_10",
            content_textKey: "blog_11_section_1_content_text_10",
          },
          {
            content_titleKey: "blog_11_section_1_content_title_11",
            content_textKey: "blog_11_section_1_content_text_11",
          },
        ],
      },
    ],
    conclusionKey: "blog_11_conclusion",
  },
  {
    id: 12,
    slugs: {
      en: "how-international-primary-schools-foster-leadership-skills-in-young-learners",
      ru: "kak-mezhdunarodnye-nachalnye-shkoly-razvivayut-liderskie-navyki-u-molodykh-uchenikov",
      sr: "kako-medjunarodne-osnovne-skole-razvijaju-liderske-vestine-kod-mladih-ucenika",
    },
    image: "/blogPage/image-12.webp",
    altImage: "alt_image_12",
    titleKey: "blog_12_title",
    date: "24/06/2024",
    descriptionKey: "blog_12_description",
    introductionKey: "blog_12_introduction",
    sections: [
      {
        content: [
          {
            content_titleKey: "blog_12_section_1_content_title_1",
            content_textKey: "blog_12_section_1_content_text_1",
            sub_sections: [
              {
                sub_content: [
                  {
                    sub_content_textKey:
                      "blog_12_section_1_sub_section_1_content_1",
                  },
                  {
                    sub_content_textKey:
                      "blog_12_section_1_sub_section_1_content_2",
                  },
                  {
                    sub_content_textKey:
                      "blog_12_section_1_sub_section_1_content_3",
                  },
                  {
                    sub_content_textKey:
                      "blog_12_section_1_sub_section_1_content_4",
                  },
                  {
                    sub_content_textKey:
                      "blog_12_section_1_sub_section_1_content_5",
                  },
                ],
              },
            ],
          },
          {
            content_titleKey: "blog_12_section_1_content_title_2",
            content_textKey: "blog_12_section_1_content_text_2",
            sub_sections: [
              {
                sub_section_titleKey: "blog_12_section_1_sub_section_2_0_title",
                sub_section_textKey: "blog_12_section_1_sub_section_2_0_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_12_section_1_sub_section_2_1_title",
                sub_section_textKey: "blog_12_section_1_sub_section_2_1_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_12_section_1_sub_section_2_2_title",
                sub_section_textKey: "blog_12_section_1_sub_section_2_2_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_12_section_1_sub_section_2_3_title",
                sub_section_textKey: "blog_12_section_1_sub_section_2_3_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_12_section_1_sub_section_2_4_title",
                sub_section_textKey: "blog_12_section_1_sub_section_2_4_text",
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_12_section_1_sub_section_2_4_title_1",
                    sub_content_textKey:
                      "blog_12_section_1_sub_section_2_4_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_12_section_1_sub_section_2_4_title_2",
                    sub_content_textKey:
                      "blog_12_section_1_sub_section_2_4_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_12_section_1_sub_section_2_4_title_3",
                    sub_content_textKey:
                      "blog_12_section_1_sub_section_2_4_content_3",
                  },
                ],
              },
              {
                sub_section_titleKey: "blog_12_section_1_sub_section_2_5_title",
                sub_section_textKey: "blog_12_section_1_sub_section_2_5_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_12_section_1_sub_section_2_6_title",
                sub_section_textKey: "blog_12_section_1_sub_section_2_6_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_12_section_1_sub_section_2_7_title",
                sub_section_textKey: "blog_12_section_1_sub_section_2_7_text",
                sub_content: [],
              },
            ],
          },
          {
            content_titleKey: "blog_12_section_1_content_title_3",
            sub_sections: [
              {
                sub_section_titleKey: "blog_12_section_1_sub_section_3_0_title",
                sub_section_textKey: "blog_12_section_1_sub_section_3_0_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_12_section_1_sub_section_3_1_title",
                sub_section_textKey: "blog_12_section_1_sub_section_3_1_text",
                sub_content: [],
              },
            ],
          },
          {
            content_titleKey: "blog_12_section_1_content_title_4",
            content_textKey: "blog_12_section_1_content_text_4",
            sub_sections: [
              {
                sub_content: [
                  {
                    sub_content_titleKey:
                      "blog_12_section_1_sub_section_4_title_1",
                    sub_content_textKey:
                      "blog_12_section_1_sub_section_4_content_1",
                  },
                  {
                    sub_content_titleKey:
                      "blog_12_section_1_sub_section_4_title_2",
                    sub_content_textKey:
                      "blog_12_section_1_sub_section_4_content_2",
                  },
                  {
                    sub_content_titleKey:
                      "blog_12_section_1_sub_section_4_title_3",
                    sub_content_textKey:
                      "blog_12_section_1_sub_section_4_content_3",
                  },
                  {
                    sub_content_titleKey:
                      "blog_12_section_1_sub_section_4_title_4",
                    sub_content_textKey:
                      "blog_12_section_1_sub_section_4_content_4",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    conclusionKey: "blog_12_conclusion",
  },
  {
    id: 13,
    slugs: {
      en: "developing-a-growth-mindset-in-primary-school-students-why-it-matters",
      ru: "razvitiye-myshleniya-rosta-u-uchenyikov-nachalnoy-shkoly-pochemu-eto-vazhno",
      sr: "razvijanje-mentaliteta-raste-kod-ucenika-osnovnih-skola-zasto-je-vazno",
    },
    image: "/blogPage/image-13.webp",
    altImage: "alt_image_13",
    titleKey: "blog_13_title",
    date: "30/07/2024",
    descriptionKey: "blog_13_description",
    introductionKey: "blog_13_introduction",
    sections: [
      {
        content: [
          {
            content_titleKey: "blog_13_section_1_content_title_1",
            sub_sections: [
              {
                sub_section_titleKey: "blog_13_section_1_sub_section_1_0_title",
                sub_section_textKey: "blog_13_section_1_sub_section_1_0_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_13_section_1_sub_section_1_1_title",
                sub_section_textKey: "blog_13_section_1_sub_section_1_1_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_13_section_1_sub_section_1_2_title",
                sub_section_textKey: "blog_13_section_1_sub_section_1_2_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_13_section_1_sub_section_1_3_title",
                sub_section_textKey: "blog_13_section_1_sub_section_1_3_text",
                sub_content: [],
              },
            ],
          },
          {
            content_titleKey: "blog_13_section_1_content_title_2",
            sub_sections: [
              {
                sub_section_titleKey: "blog_13_section_1_sub_section_2_0_title",
                sub_section_textKey: "blog_13_section_1_sub_section_2_0_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_13_section_1_sub_section_2_1_title",
                sub_section_textKey: "blog_13_section_1_sub_section_2_1_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_13_section_1_sub_section_2_2_title",
                sub_section_textKey: "blog_13_section_1_sub_section_2_2_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_13_section_1_sub_section_2_3_title",
                sub_section_textKey: "blog_13_section_1_sub_section_2_3_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_13_section_1_sub_section_2_4_title",
                sub_section_textKey: "blog_13_section_1_sub_section_2_4_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_13_section_1_sub_section_2_5_title",
                sub_section_textKey: "blog_13_section_1_sub_section_2_5_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_13_section_1_sub_section_2_6_title",
                sub_section_textKey: "blog_13_section_1_sub_section_2_6_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_13_section_1_sub_section_2_7_title",
                sub_section_textKey: "blog_13_section_1_sub_section_2_7_text",
                sub_content: [],
              },
            ],
          },
          {
            content_titleKey: "blog_13_section_1_content_title_3",
            sub_sections: [
              {
                sub_section_titleKey: "blog_13_section_1_sub_section_3_0_title",
                sub_section_textKey: "blog_13_section_1_sub_section_3_0_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_13_section_1_sub_section_3_1_title",
                sub_section_textKey: "blog_13_section_1_sub_section_3_1_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_13_section_1_sub_section_3_2_title",
                sub_section_textKey: "blog_13_section_1_sub_section_3_2_text",
                sub_content: [],
              },
            ],
          },
          {
            content_titleKey: "blog_13_section_1_content_title_4",
            sub_sections: [
              {
                sub_section_titleKey: "blog_13_section_1_sub_section_4_0_title",
                sub_section_textKey: "blog_13_section_1_sub_section_4_0_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_13_section_1_sub_section_4_1_title",
                sub_section_textKey: "blog_13_section_1_sub_section_4_1_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_13_section_1_sub_section_4_2_title",
                sub_section_textKey: "blog_13_section_1_sub_section_4_2_text",
                sub_content: [],
              },
              {
                sub_section_titleKey: "blog_13_section_1_sub_section_4_3_title",
                sub_section_textKey: "blog_13_section_1_sub_section_4_3_text",
                sub_content: [],
              },
            ],
          },
        ],
      },
    ],
    conclusionKey: "blog_13_conclusion",
  },
];
