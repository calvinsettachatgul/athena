# all posts lambda for calvins_api aws_apigateway

exports.handler = async (event) => {

    const posts = { 
      posts: 
        [
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
      }
    const response = {
        statusCode: 200,
        body: posts,
    };
    return response;
};

