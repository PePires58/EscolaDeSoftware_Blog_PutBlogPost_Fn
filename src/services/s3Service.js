const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

exports.PutObject = async function (objectKey) {

    const client = new S3Client({ region: process.env.Region });
    const command = new PutObjectCommand({
        Bucket: process.env.BlogPostContentBucketName,
        key: objectKey,
        Body: "/tmp/" + objectKey
    });

    console.log("command:");
    console.log(command);

    await client.send(command);

    return objectKey;
}
