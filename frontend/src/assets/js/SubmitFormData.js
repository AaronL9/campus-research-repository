const program = {
  CITE: ["BSIT"],
  CEA: ["BSCE", "BSEE", "BSECE", "BSCPE", "BSARCH", "BSME"],
  CMA: ["BSA", "BSAIS", "BSMA", "BSBA-MM", "BSBA-FM", "BSHM", "BSTM"],
  CAHS: ["BSN", "BSMLS", "BSP", "BSPsych"],
  CELA: [
    "BEEd",
    "BSEd-EN",
    "BSEd-GENSCI",
    "BSEd-MATH",
    "BSEd-SOCSCI",
    "AB Comm",
    "AB PolSci",
  ],
  CCJE: ["BSC"],
  SHS: ["STEM", "ABM", "TVL", "GAS"],
  LAW: ["BSL"],
};

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
    departments: program,
    
  },
  course: {
    id: "course",
    className: "submit-research__course",
    label: "Course",
    type: "text",
    courses: program,
  },
  abstract: {
    id: "abstract",
    className: "submit-research__abstract",
    label: "Abstract",
  },
};
