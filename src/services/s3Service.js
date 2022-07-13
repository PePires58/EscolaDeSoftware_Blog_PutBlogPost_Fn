const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

exports.PutObject = async function (objectKey, objectContent) {


    const client = new S3Client({ region: process.env.Region });
    const command = new PutObjectCommand({
        Bucket: process.env.BlogPostContentBucketName,
        Key: objectKey,
        Body: objectContent
    });

    await client.send(command);
}