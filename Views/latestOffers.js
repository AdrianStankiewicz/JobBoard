db.createView(
    "latestOffers",
    "offers",
    [
        {
            $sort: {
                createdAt: -1
            }
        },
        {
            $limit: 20
        }
    ]
)
