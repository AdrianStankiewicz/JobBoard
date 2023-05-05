db.runCommand({
    collMod: "offers",
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "title",
                "companyName",
                "companyId",
                "location",
                "description",
                "requirements",
                "responsibilities",
            ],
            properties: {
                title: {
                    bsonType: "string"
                },
                companyName: {
                    bsonType: "string"
                },
                companyId: {
                    bsonType: "objectId"
                },
                location: {
                    bsonType: "string"
                },
                description: {
                    bsonType: "string"
                },
                requirements: {
                    bsonType: "object",
                    additionalProperties: {
                        bsonType: "int"
                    }
                },
                responsibilities: {
                    bsonType: "array",
                    uniqueItems: true,
                    items: {
                        bsonType: "string"
                    }
                },
                benefits: {
                    bsonType: "array",
                    uniqueItems: true,
                    items: {
                        bsonType: "string"
                    }
                }
            }
        }
    }
});