db.createView(
    "mostAppliedCompanies",
    "applications",
    [{
        $lookup: {
            from: "offers",
            localField: "offerId",
            foreignField: "_id",
            as: "offer"
        }
    },
    {
        $unwind: "$offer"
    },
    {
        $group:
        {
            _id: {
                companyId: "$offer.companyId",
                companyName: "$offer.companyName"
            },
            total_applicants: {
                $sum: 1
            }
        }
    },
    {
        $project: {
            _id: 0,
            companyId: "$_id.companyId",
            companyName: "$_id.companyName",
            total_applicants: 1
        }
    },
    {
        $sort: {
            total_applicants: -1
        }
    }]
);