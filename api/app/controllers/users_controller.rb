class UsersController < ApplicationController
  def create
    user = User.new(user_params)
    user.save!
    render json: user, serializer: UserSerializer
  end

  private

  def user_params
    params.permit(:name, :email, :password, :password_confirmation)
  end
end
