let response;

const dynamodbService = require('./services/dynamodbService');
const s3Service = require('./services/s3Service');
const { v4: uuidv4 } = require('uuid');

exports.lambdaHandler = async (event, context) => {
    try {
        const objectKey = uuidv4();

        await s3Service.PutObject(objectKey, event.body.BlogPostContent);
        await dynamodbService.PutBlogPost(event.body, objectKey);

        response = {
            'statusCode': 201,
            'isBase64Encoded': false,
            'headers': {}
        }

    } catch (err) {
        console.log(err);
        response = {
            'statusCode': 500,
            'body': JSON.stringify(err),
            'isBase64Encoded': false,
            'headers': {}
        }
    }

    return response
};