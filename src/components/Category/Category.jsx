import "./Category.css";

const Category = (pros) => {
  // console.log(pros);
  const { logo, category_name, availability } = pros.category;
  // console.log(category_name);
  return (
    <div className="category p-5">
      <img
        src={logo}
        style={{
          backgroundColor: "#d3d7df",
          padding: "6px",
          borderRadius: "4px",
        }}
      />
      <br />
      <p className=" font-bold">{category_name}</p>
      <p>{availability}</p>
    </div>
  );
};

export default Category;
