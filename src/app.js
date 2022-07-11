let response;

const dynamodbService = require('./services/dynamodbService');
const s3Service = require('./services/s3Service');

exports.lambdaHandler = async (event, context) => {
    try {

        await dynamodbService.PutBlogPost(event.body);

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