const Blog = require("../models/blog");

module.exports.createblog = async (req, res) => {
  try {
    const { title, slug, image, body } = req.body;
    // console.log(req.body);
    const newblog = await new Blog({
      title,
      slug,
      image,
      body,
    }).save();
    res.json(newblog);
  } catch (err) {
    console.log(err);
  }
};

// getallblogs
// getSingleBlog
// updateBlog
// deleteBlog