class Api::V1::UsersController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    binding.pry
  end

  def show
  end

  def create
  end

  def destroy
  end

  def update
  end

end
