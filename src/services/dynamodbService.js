const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");
const { v4: uuidv4 } = require('uuid');

exports.PutBlogPost = async function (blogPostObject, contentBucketKey) {

    const id = uuidv4();
    const client = new DynamoDBClient({ region: process.env.Region });
    const command = new PutItemCommand({
        TableName: process.env.BlogPostTableName,
        Item: {
            "id": { S: id },
            "title": { S: blogPostObject.Title },
            "category": { S: blogPostObject.Category },
            "image_principal_key": { S: blogPostObject.ImagePrincipalKey },
            "post_date": { S: blogPostObject.PostDate },
            "resume": { S: blogPostObject.Resume },
            "content_bucket_key": { S: contentBucketKey }
        }
    });

    await client.send(command);
}