const filterArchive = (filterValue) => {
  return filterValue === "undefined"
    ? { archiveStatus: true }
    : {
        archiveStatus: true,
        $or: [
          { department: filterValue },
          { course: filterValue },
          { title: { $regex: new RegExp(filterValue, "i") } },
          { author: { $regex: new RegExp(filterValue, "i") } },
        ],
      };
};

const filterRecords = (filterValue) => {
  return filterValue === "undefined"
    ? { approve: true, archiveStatus: false }
    : {
        archiveStatus: false,
        approve: true,
        $or: [
          { department: filterValue },
          { course: filterValue },
          { title: { $regex: new RegExp(filterValue, "i") } },
          { author: { $regex: new RegExp(filterValue, "i") } },
        ],
      };
};

const filterResearch = (filterValue, deptId) => {
  return filterValue === "undefined"
    ? { archiveStatus: false, department: deptId, approve: true }
    : {
        $or: [
          { title: { $regex: new RegExp(filterValue, "i") } },
          { author: { $regex: new RegExp(filterValue, "i") } },
        ],
        approve: true,
        department: deptId,
        archiveStatus: false,
      };
};

const filterSubmit = (filterValue) => {
  return filterValue === "undefined"
    ? { approve: false, queue: false }
    : {
        $or: [
          { title: { $regex: new RegExp(filterValue, "i") } },
          { author: { $regex: new RegExp(filterValue, "i") } },
        ],
        approve: false,
        queue: false,
      };
};

const filterCount = (filterValue) => {
  switch (filterValue) {
    case "1":
      return { archiveStatus: false, approve: false, queue: false };
    case "2":
      return { archiveStatus: false, approve: true };
    case "3":
      return { archiveStatus: true, approve: true };
    case "4":
      return { queue: true };
  }
};

module.exports = {
  filterArchive,
  filterResearch,
  filterSubmit,
  filterRecords,
  filterCount,
};
