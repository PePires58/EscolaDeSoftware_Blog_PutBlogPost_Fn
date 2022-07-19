exports.validateInput = function (input) {
    let errors = [];

    console.log('input recebido')
    console.log(input);
    console.log(input.Title);
    console.log('input como json');
    console.log(JSON.parse(input));
    console.log(JSON.parse(input).Title);

    if (!input.Title)
        errors.push('title is required');
    if (!input.Category)
        errors.push('category is required');
    if (!input.ImagePrincipalKey)
        errors.push('image principal key is required');
    if (!input.PostDate)
        errors.push('post date is required');
    if (!input.Resume)
        errors.push('resume is required');
    if (!input.BlogPostContent)
        errors.push('object content is required');

    return errors;
}