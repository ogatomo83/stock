module Jwt::UserAuthenticator
  extend self

  def call(request_headers)
    @request_headers = request_headers
    begin
      payload, = Jwt::TokenDecryptor.call(token)
      return User.find(payload['user_id'])
    rescue StandardError
      return nil
    end
  end

  private
  
  def token
    @request_headers['Authorization'].split(' ').last
  end
end
