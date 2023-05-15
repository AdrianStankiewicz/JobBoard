// This scripts moves offers that are over 30 days old from collection 'reviews' to 'history'

var db = connect("127.0.0.1:27017/jobBoardDB");

const thirtyDaysAgo = new Date();
thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

db.offers.find({
    createdAt: { $lt: thirtyDaysAgo }
}).forEach(function (doc) {
    db.history.insertOne({
        offerId: doc._id,
        title: doc.title,
        companyName: doc.companyName,
        companyId: doc.companyId,
        location: doc.location,
        description: doc.description,
        requirements: doc.requirements,
        responsibilities: doc.responsibilities,
        benefits: doc.benefits,
        createdAt: doc.createdAt,
        movedToHistoryAt: new Date()
    });
    db.offers.deleteOne({ _id: doc._id });
});
