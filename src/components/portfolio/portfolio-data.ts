export const portfolioMenu = [
  "All",
  "Branding",
  "UI/UX",
  "Illustration",
  "Motion",
];

export const portfolioContent: PortfolioContent = [
  {
    tabContent: [
      { img: "foodneko", meta: "UI/UX", title: "Foodneko", to: "/foodneko", },
      { img: "directfarm", meta: "UI/UX", title: "Baemin Directfram", to: "/directfarm" },
      { img: "work-4", meta: "Web Design", title: "Taskly Dashboard" },
      { img: "work-3", meta: "Illustration", title: "LW Poster" },
      { img: "work-6", meta: "Branding, Motion", title: "Film & Art Festival" },
      { img: "work-5", meta: "Branding, Motion", title: "Dark Wishky Wine" },
    ],
  },
  {
    tabContent: [
      { img: "work-3", meta: "Illustration", title: "LW Poster" },
      { img: "work-6", meta: "Branding, Motion", title: "Film & Art Festival" },
      { img: "work-5", meta: "Branding, Motion", title: "Dark Wishky Wine" },
    ],
  },
  {
    tabContent: [
      { img: "work-1", meta: "Web Design", title: "Supro Online Store" },
      { img: "work-2", meta: "Web Design, Branding", title: "FG Print Brand" },
      { img: "work-4", meta: "Web Design", title: "Taskly Dashboard" },
    ],
  },
  {
    tabContent: [
      { img: "work-4", meta: "Web Design", title: "Taskly Dashboard" },
      { img: "work-3", meta: "Illustration", title: "LW Poster" },
      { img: "work-6", meta: "Branding, Motion", title: "Film & Art Festival" },
    ],
  },
  {
    tabContent: [
      { img: "work-1", meta: "Web Design", title: "Supro Online Store" },
      { img: "work-2", meta: "Web Design, Branding", title: "FG Print Brand" },
      { img: "work-4", meta: "Web Design", title: "Taskly Dashboard" },
    ],
  },
];

type PortfolioContent = {
  tabContent: {
    img: string,
    meta: string,
    title: string,
    to?: string,
  }[],
}[];
