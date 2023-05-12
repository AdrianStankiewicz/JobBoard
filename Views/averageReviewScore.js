db.createView(
    "averageReviewScore",
    "brands",
    [
        {
            $lookup: {
                from: "reviews",
                localField: "_id",
                foreignField: "companyId",
                as: "brandReviews"
            }
        },
        {
            $project: {
                _id: 0,
                brandName: "$name",
                brandLogo: "$logo",
                averageReviewScore: {
                    $round: [
                        {
                            $avg: "$brandReviews.score"
                        },
                        2
                    ]
                }
            }
        }
    ]
)
