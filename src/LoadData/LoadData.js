const loadCategoriesData = async () => {
  const loadedCategoriesData = await fetch("categories.json");
  const categories = await loadedCategoriesData.json();
  console.log(categories);
  return { categories };
};

const loadJobsData = async () => {
  const loadedJobsData = await fetch("jobs.json");
  const jobs = await loadedJobsData.json();
  // console.log(jobs);
  return { jobs };
};

export { loadCategoriesData, loadJobsData };
