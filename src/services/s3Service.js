const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { v4: uuidv4 } = require('uuid');

exports.PutObject = async function (blogPostContent) {

    const objectKey = uuidv4();

    console.log('object key');
    console.log(objectKey);
    console.log('end object key');

    const client = new S3Client({ region: process.env.Region });
    const command = new PutObjectCommand({
        Bucket: process.env.BlogPostContentBucketName,
        key: objectKey,
        Body: blogPostContent,
        ACL: 'private',
        ContentEncoding: 'utf-8',
    });

    await client.send(command);

    return objectKey;
}
