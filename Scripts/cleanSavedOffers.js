// the functions makes sure that there is no outdates offers in saved offers

var db = connect("127.0.0.1:27017/jobBoardDB");

// Fetch all users
var users = db.users.find().toArray();

users.forEach(function(user) {
    var validOffers = [];

    // Check if 'saved' field exists and is an array
    if (Array.isArray(user.saved)) {
        // For each saved offer, check if it still exists in the offers collection
        user.saved.forEach(function(savedOfferId) {
            var offerExists = db.offers.countDocuments({ _id: savedOfferId }) > 0;
            if (offerExists) {
                validOffers.push(savedOfferId);
            }
        });
    }

    // Update the user's saved offers with the valid ones
    db.users.updateOne(
        { _id: user._id },
        { $set: { saved: validOffers } }
    );
});



// To check how it works use this code:
//
// db.users.updateOne(
//     { _id: ObjectId("645177a9b9cbe2057b4969c3") },
//     {
//         $set: { 
//             saved: [ 
//                 ObjectId("000000000000000000000001"), 
//                 ObjectId("000000000000000000000002"), 
//                 ObjectId("000000000000000000000003") 
//             ] 
//         }
//     }
// );