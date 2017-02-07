class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true

  has_many :user_movies
  has_many :movies, through: :user_movies

  mount_uploader :profile_photo, ProfilePhotoUploader

  devise :database_authenticatable, :registerable, :recoverable, :rememberable,
    :trackable, :validatable
end
