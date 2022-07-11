const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { v4: uuidv4 } = require('uuid');

exports.PutObject = async function (objectContent) {
    const objectKey = uuidv4();
    const client = new S3Client({ region: process.env.Region });
    const command = new PutObjectCommand({
        Bucket: process.env.BlogPostContentBucketName,
        Key: objectKey,
        Body: objectContent
    });

    client.send(command);

    return objectKey;
}
