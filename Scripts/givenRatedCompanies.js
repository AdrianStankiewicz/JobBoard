// shows all companies with their average rating score

console.log("Enter the rating:")
var chosenRating = parseFloat(passwordPrompt());

var db = connect("127.0.0.1:27017/jobBoardDB");

var pipeline = [
    {
        $lookup: {
            from: "reviews",
            localField: "_id",
            foreignField: "companyId",
            as: "company_reviews"
        }
    },
    {
        $unwind: {
            path: "$company_reviews",
            preserveNullAndEmptyArrays: true
        }
    },
    {
        $group: {
            _id: "$name",
            averageReviewScore: { $avg: "$company_reviews.score" }
        }
    },
    {
        $project: {
            _id: 0,
            brandName: "$_id",
            averageReviewScore: { $round: [ "$averageReviewScore", 2 ] }
        }
    },
    {
      $match: {
          averageReviewScore: { $gte: chosenRating }
      }
  }
  
];

var result = db.brands.aggregate(pipeline).toArray();

// Loop through the results and print each one
console.log("Brands with better rating:");
result.forEach(function(doc) {
    printjson(doc);
});
