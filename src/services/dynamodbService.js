const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");

exports.PutBlogPost = async function (blogPostObject, contentBucketKey) {

    const client = new DynamoDBClient({ region: process.env.Region });
    const command = new PutItemCommand({
        TableName: process.env.BlogPostTableName,
        Item: {
            "title": { S: blogPostObject.title },
            "category": { S: blogPostObject.category },
            "image_principal_key": { S: blogPostObject.image_principal_key },
            "post_date": { S: blogPostObject.post_date },
            "resume": { S: blogPostObject.resume },
            "content_bucket_key": { S: contentBucketKey }
        }
    });

    await client.send(command);
}