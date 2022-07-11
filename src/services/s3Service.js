const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { v4: uuidv4 } = require('uuid');

exports.PutObject = async function (blogPostContent) {

    const objectKey = uuidv4();

    const client = new S3Client({ region: process.env.Region });
    const command = new PutObjectCommand({
        Bucket: process.env.BlogPostContentBucketName,
        key: objectKey,
        Body: blogPostContent
    });

    console.log('command:' + command);

    await client.send(command);

    return objectKey;
}
