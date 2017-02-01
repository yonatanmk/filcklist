require "rails_helper"

RSpec.describe Api::V1::UsersController, type: :controller do
  describe "GET #current" do
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
    let(:superman) {
      Movie.create(
        id: 1924,
        title: "Superman",
        poster_path: "/n2DOECThGG7h7m5AjLi2Nuh23u1.jpg",
        release_date: "12/14/1978",
        overview:
        "Mild-mannered Clark Kent works as a reporter at the Daily Planet alongside his crush, Lois Lane − who's in love with Superman. Clark must summon his superhero alter ego when the nefarious Lex Luthor launches a plan to take over the world.",
        adult: false,
        status: nil
      )
    }

    it "should return the current user with appropriate info" do
      sign_in tj
      get :current
      json = JSON.parse(response.body)
      expect(json["info"]["id"]).to eq(tj.id)
      expect(json["info"]["username"]).to eq(tj.username)
      expect(json["info"]["email"]).to eq(tj.email)
      expect(json["movies"].length).to eq(0)
    end

    it "should return the current user's movies" do
      UserMovie.create(user: tj, movie: batman)
      UserMovie.create(user: tj, movie: superman)
      sign_in tj
      get :current
      json = JSON.parse(response.body)
      expect(json["movies"].length).to eq(2)
      expect(json["movies"][0]["title"]).to eq(batman.title)
      expect(json["movies"][0]["id"]).to eq(batman.id)
      expect(json["movies"][0]["status"]).to eq("seen")
      expect(json["movies"][1]["title"]).to eq(superman.title)
      expect(json["movies"][1]["id"]).to eq(superman.id)
      expect(json["movies"][1]["status"]).to eq("seen")
    end

    it "should return the current user's movies with changed statuses" do
      UserMovie.create(user: tj, movie: batman, status: 'like')
      UserMovie.create(user: tj, movie: superman, status: 'want')
      sign_in tj
      get :current
      json = JSON.parse(response.body)
      expect(json["movies"].length).to eq(2)
      expect(json["movies"][0]["title"]).to eq(batman.title)
      expect(json["movies"][0]["id"]).to eq(batman.id)
      expect(json["movies"][0]["status"]).to eq("like")
      expect(json["movies"][1]["title"]).to eq(superman.title)
      expect(json["movies"][1]["id"]).to eq(superman.id)
      expect(json["movies"][1]["status"]).to eq("want")
    end
  end
end
