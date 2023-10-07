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
    ? { archiveStatus: false, department: deptId }
    : {
        $or: [
          { title: { $regex: new RegExp(filterValue, "i") } },
          { author: { $regex: new RegExp(filterValue, "i") } },
        ],
        archiveStatus: false,
        department: deptId,
      };
};

const filterSubmit = (filterValue) => {
  return filterValue === "undefined"
    ? { approve: false }
    : {
        $or: [
          { title: { $regex: new RegExp(filterValue, "i") } },
          { author: { $regex: new RegExp(filterValue, "i") } },
        ],
        approve: false,
      };
};

module.exports = { filterArchive, filterResearch, filterSubmit, filterRecords };
