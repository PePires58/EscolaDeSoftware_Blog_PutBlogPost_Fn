const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");

exports.PutBlogPost = async function (blogPostObject) {

    const client = new DynamoDBClient({ region: process.env.Region });
    const command = new PutItemCommand({
        TableName: process.env.BlogPostTableName,
        Item: {
            "title": blogPostObject.title,
            "category": blogPostObject.category,
            "image_principal_key": blogPostObject.image_principal_key,
            "post_date": blogPostObject.post_date,
            "resume": blogPostObject.resume
        }
    });

    await client.send(command);
}