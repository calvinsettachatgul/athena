# calvins_api

# cognito user pool
### how to authorize apigateway calls

# authorizer
### needs cognito userpool

# lambda function

### lambda function to get all posts

exports.handler = async (event) => {
    // TODO implement
    
    const posts = [
        {
            id: 1,
            title: 'posttitle1',
            text: 'posttext1'
        },
        {
            id: 2,
            title: 'posttitle2',
            text: 'posttext2'
        },
        {
            id: 3,
            title: 'posttitle3',
            text: 'posttext3'
        },
        {
            id: 4,
            title: 'posttitle4',
            text: 'posttext4'
        }
    ]
    const response = {
        statusCode: 200,
        body: posts,
    };
    return response;
};
