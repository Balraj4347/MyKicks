class FilterFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  search() {
    const keyword = this.queryString.keyword
      ? {
          name: {
            $regex: this.queryString.keyword,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryString };

    // fields to remove
    const removeFields = ["keyword", "page", "limit"];

    // console.log(queryCopy);
    removeFields.forEach((key) => delete queryCopy[key]);
    // console.log(queryCopy);

    // price filter
    let queryString = JSON.stringify(queryCopy);
    queryString = queryString.replace(
      /\b(gt|gte|lt|lte)\b/g,
      (key) => `$${key}`
    );

    // console.log(JSON.parse(queryString));

    this.query = this.query.find(JSON.parse(queryString));
    return this;
  }
}

module.exports = FilterFeatures;
