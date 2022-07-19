let response;

const dynamodbService = require('./services/dynamodbService');
const s3Service = require('./services/s3Service');
const validatorService = require('./services/validatorService');
const { v4: uuidv4 } = require('uuid');

exports.lambdaHandler = async (event, context) => {
    try {

        console.log('evento recebido');
        console.log(event);
        console.log('fim evento recebido');

        const errors = validatorService.validateInput(JSON.parse(event.body));

        if (errors.length > 0) {
            return {
                'statusCode': 400,
                'body': JSON.stringify(errors),
                'isBase64Encoded': false,
                'headers': {
                    'Content-Type': 'application/json'
                }
            }
        }

        const objectKey = uuidv4();

        Promise.all([
            await dynamodbService.PutBlogPost(event.body, objectKey),
            await s3Service.PutObject(objectKey, event.body.BlogPostContent)
        ]);

        response = {
            'statusCode': 201,
            'isBase64Encoded': false,
            'headers': {
                'Content-Type': 'application/json'
            }
        }

    } catch (err) {
        console.log(err);
        response = {
            'statusCode': 500,
            'body': JSON.stringify({ error: err }),
            'isBase64Encoded': false,
            'headers': {
                'Content-Type': 'application/json'
            }
        }
    }

    return response
};