const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");

exports.PutBlogPost = async function (blogPostObject, contentBucketKey) {

    const errors = getObjectInputErros(blogPostObject);
    if (errors.length > 0) {
        throw new Error(errors)
    }
    else {
        const client = new DynamoDBClient({ region: process.env.Region });
        const command = new PutItemCommand({
            TableName: process.env.BlogPostTableName,
            Item: {
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
}

function getObjectInputErros(input) {
    let errors = [];

    if (!input.Title)
        errors.push('title is required');
    if (!input.Category)
        errors.push('category is required');
    if (!input.ImagePrincipalKey)
        errors.push('image principal key is required');
    if (!input.PostDate)
        errors.push('post date is required');
    if (!input.Resume)
        errors.push('resume is required');
    if (!input.BlogPostContent)
        errors.push('object content is required');

    return errors;
}