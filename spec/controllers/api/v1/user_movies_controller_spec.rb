require "rails_helper"

RSpec.describe Api::V1::UserMoviesController, type: :controller do
  describe "POST #create" do
    let(:tj) {
      User.create(
        email: "tjdetweiler@recess.com",
        username: "TJ",
        password: "123456"
      )
    }
    let(:batman) {
      Movie.create(
        id: 268,
        title: "Batman",
        poster_path: "/kBf3g9crrADGMc2AMAMlLBgSm2h.jpg",
        release_date: "06/23/1989",
        overview:
        "The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker, who has seized control of Gotham's underworld.",
        adult: false,
        status: nil
      )
    }
    it "should create a UserMovie using given params" do
      get :create, params: { user_movie: {user_id: tj.id, movie_id: batman.id, status: 'want' }}
      json = JSON.parse(response.body)
      expect(json).to eq({})
      expect(UserMovie.all.length).to eq(1)
      expect(UserMovie.first.user_id).to eq(tj.id)
      expect(UserMovie.first.movie_id).to eq(batman.id)
      expect(UserMovie.first.status).to eq('want')
    end
    it "should update a UserMovie if it already exists" do
      UserMovie.create(user: tj, movie: batman)
      expect(UserMovie.first.status).to eq('seen')
      get :create, params: { user_movie: {user_id: tj.id, movie_id: batman.id, status: 'want' }}
      expect(UserMovie.all.length).to eq(1)
      expect(UserMovie.first.status).to eq('want')
      get :create, params: { user_movie: {user_id: tj.id, movie_id: batman.id, status: 'dislike' }}
      expect(UserMovie.all.length).to eq(1)
      expect(UserMovie.first.status).to eq('dislike')
    end
  end
end
