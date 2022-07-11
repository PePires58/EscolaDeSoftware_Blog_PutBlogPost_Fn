## Escola de software - Blog - Put BlogPost - Lambda Function

This repository contains the lambda function to put a blogpost.

The table already exists and the bucket to upload the content as well.

Don't forget, to be able to connect with S3 and DynamoDB the function will need two permissions.

- dynamodb:PutItem
- s3:PutObject

The dynamodb:PutItem is a custom manage policy, check it out at the BlogPost table repository [Click Here](https://github.com/PePires58/EscolaDeSoftware_Blog_BlogPost_Table).

S3 BlogContent Bucket is defined at this repository [Click Here](https://github.com/PePires58/EscolaDeSoftware_Blog_BlogPost_ContentBucket)

Thanks a lot
