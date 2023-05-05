db.runCommand({
    collMod: "reviews",
    validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["company", "companyId", "title", "review", "score"],
      properties: {
        company: {
          bsonType: "string"
        },
        companyId: {
          bsonType: "string"
        },
        title: {
          bsonType: "string"
        },
        review: {
          bsonType: "string"
        },
        score: {
          bsonType: "int",
          minimum: 1,
          maximum: 5
        }
      }
    }
  }
});