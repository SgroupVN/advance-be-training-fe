$(document).ready(function () {
  $('#login-btn').on('click', () => {
    const queryParams = new URLSearchParams({
      client_id: 'public-client',
      redirect_uri: 'http://localhost:3000',
      response_type: 'token', // For implicit type
      scope: 'read:users'
    });

    window.location.href = `http://localhost:8080/login?${queryParams.toString()}`;
  });

  function validateImplicitFlow() {
    const params = new URLSearchParams(window.location.search);
    // get response from the URL
    const accessToken = params.get('access_token'); // Successfully retrieve from the URL

    console.log(params.toString());
  }

  function validateAuthorizationCodeFlow() {
    const params = new URLSearchParams(window.location.search);
    // get response from the URL
    const authorizationCode = params.get('code'); // Successfully retrieve from the URL

    $.ajax({
      url: 'http://localhost:8080/token', // Server URL
      method: 'POST',
      data: {
        code: authorizationCode,
        client_id: 'public-client',
        redirect_uri: 'http://localhost:3000',
        grant_type: 'authorization_code'
      },
      success: function (response) {
        console.log(response); // Should contains access_token, token_type, expires_in, scope
      },
      error: function (error) {
        console.log(error);
      }
    });

    console.log(params.toString());
  }

  validateImplicitFlow();
});
