export const submitFormData = {
  title: {
    id: "title",
    className: "submit-research__research-title",
    label: "Research Title",
    type: "text",
  },
  author: {
    id: "author",
    className: "submit-research__author",
    label: "Author",
    type: "text",
  },
  year: {
    id: "year",
    className: "submit-research__year",
    label: "Published Year",
    type: "date",
  },
  department: {
    id: "department",
    className: "submit-research__department",
    label: "Department",
    type: "text",
    departments: ["CITE", "CEA", "CMA", "CAHS", "CELA", "CCJE", "SHS", "LAW"],
  },
  course: {
    id: "course",
    className: "submit-research__course",
    label: "Course",
    type: "text",
    departments: {
      CITE: ["BSIT"],
      CEA: ["BSCE", "BSEE", "BSECE", "BSCPE", "BSARCH", "BSME"],
      CMA: ["BSA", "BSAIS", "BSMA", "BSBA-MM", "BSBA-FM", "BSHM", "BSTM"],
      CAHS: ["BSN", "BSMLS"],
      CELA: ["BSE", "BSEP", "BSS"],
      CCJE: ["BSC"],
      SHS: ["STEM", "ABM", "TVL", "GAS"],
      LAW: ["BSL"],
    },
  },
  abstract: {
    id: "abstract",
    className: "submit-research__abstract",
    label: "Abstract",
  },
};
