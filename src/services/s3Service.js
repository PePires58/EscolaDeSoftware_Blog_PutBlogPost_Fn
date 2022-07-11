const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

exports.PutObject = async function (objectKey) {

    const client = new S3Client({ region: process.env.Region });
    const command = new PutObjectCommand({
        Bucket: process.env.BlogPostContentBucketName,
        Key: objectKey,
        Body: "/tmp/" + objectKey
    });

    await client.send(command);

    return objectKey;
}
