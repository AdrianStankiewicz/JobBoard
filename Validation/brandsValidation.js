db.runCommand({
    collMod: "brands",
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["_id", "name", "logo", "about", "data"],

            properties: {
                _id: {
                    bsonType: "objectId"
                },
                name: {
                    bsonType: "string"
                },
                logo: {
                    bsonType: "string",
                    pattern: "^(https?)://[^\\s/$.?#].[^\\s]*$"
                },
                about: {
                    bsonType: "string"
                },
                aboutData: {
                    bsonType: "object",
                    required: ["established", "offices", "industry", "employees"],
                    properties: {
                        established: {
                            bsonType: "int"
                        },
                        offices: {
                            bsonType: "array",
                            uniqueItems: true,
                            items: {
                                bsonType: "string"
                            }
                        },
                        industry: {
                            bsonType: "string"
                        },
                        employees: {
                            bsonType: "int"
                        }
                    }
                },
                social: {
                    bsonType: "object",
                    properties: {
                        website: {
                            bsonType: "string",
                            pattern: "^(https?)://[^\\s/$.?#].[^\\s]*$"
                        },
                        facebook: {
                            bsonType: "string",
                            pattern: "^(https?)://[^\\s/$.?#].[^\\s]*$"
                        },
                        twitter: {
                            bsonType: "string",
                            pattern: "^(https?)://[^\\s/$.?#].[^\\s]*$"
                        },
                        linkedin: {
                            bsonType: "string",
                            pattern: "^(https?)://[^\\s/$.?#].[^\\s]*$"
                        }
                    }
                },
                gallery: {
                    bsonType: "array",
                    uniqueItems: true,
                    items: {
                        bsonType: "string",
                        pattern: "^(https?)://[^\\s/$.?#].[^\\s]*$"
                    }
                }
            }
        }
    }
});