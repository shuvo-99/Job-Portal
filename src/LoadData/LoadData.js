const loadCategoriesData = async () => {
  const loadedCategoriesData = await fetch("../../public/categories.json");
  const categories = await loadedCategoriesData.json();
  console.log(categories);
  return { categories };
};

const loadJobsData = async () => {
  const loadedJobsData = await fetch("../../public/jobs.json");
  const jobs = await loadedJobsData.json();
  console.log(jobs);
  return { jobs };
};

export { loadCategoriesData, loadJobsData };
