const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const fileSystemService = require('./fileSystemService');

exports.PutObject = async function (objectKey) {

    const client = new S3Client({ region: process.env.Region });
    const command = new PutObjectCommand({
        Bucket: process.env.BlogPostContentBucketName,
        Key: objectKey,
        Body: fileSystemService.readFile("/tmp/" + objectKey)
    });

    await client.send(command);

    return objectKey;
}
