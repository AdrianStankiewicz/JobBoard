db.runCommand({
    collMod: "applications",
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["offerId", "name", "email", "cv"],
            properties: {
                offerId: {
                    bsonType: "objectId"
                },
                name: {
                    bsonType: "string"
                },
                email: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
                },
                about: {
                    bsonType: "string"
                },
                cv: {
                    bsonType: "string"
                }
            }
        }
    }
});