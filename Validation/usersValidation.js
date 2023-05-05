db.runCommand({
    collMod: "users",
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "email", "password", "address"],
            properties: {
                name: {
                    bsonType: "string"
                },
                email: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
                },
                password: {
                    bsonType: "string"
                },
                address: {
                    bsonType: "object",
                    required: ["city", "country"],
                    properties: {
                        city: {
                            bsonType: "string"
                        },
                        country: {
                            bsonType: "string"
                        }
                    }
                }
            }
        }
    }
});