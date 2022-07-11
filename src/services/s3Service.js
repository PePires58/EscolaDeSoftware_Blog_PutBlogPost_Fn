const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

exports.PutObject = async function (objectKey, objectContent) {

    const errors = invalidObjectInput({
        objectKey: objectKey,
        objectContent: objectContent
    });

    if (errors.length > 0) {
        throw new Error(errors)
    }
    else {

        const client = new S3Client({ region: process.env.Region });
        const command = new PutObjectCommand({
            Bucket: process.env.BlogPostContentBucketName,
            Key: objectKey,
            Body: objectContent
        });

        await client.send(command);
    }
}

function invalidObjectInput(input) {
    let errors = [];

    if (!input.objectKey)
        errors.push('object key is required');
    else if (!input.objectContent)
        errors.push('object content is required');

    return errors;
}