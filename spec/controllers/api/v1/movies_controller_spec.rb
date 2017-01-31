require "rails_helper"

RSpec.describe Api::V1::MoviesController, vcr: { cassette_name: "TMDB_API" }, type: :controller do
  describe "GET #index" do
    it "should return the correct movie given an id" do
      get :index, params: { query: 'iron man' }
      json = JSON.parse(response.body)
      expect(json[0]["title"]).to eq('Iron Man')
      expect(json[1]["title"]).to eq('Iron Man 3')
      expect(json[2]["title"]).to eq('Iron Man 2')
    end
  end
  describe "GET #show" do
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
    it "should return the correct movie given an id" do
      get :show, params: { id: batman.id }
      json = JSON.parse(response.body)

      expect(json["id"]).to eq(batman.id)
      expect(json["title"]).to eq(batman.title)
      expect(json["poster_path"]).to eq(batman.poster_path)
      expect(json["release_date"]).to eq(batman.release_date)
      expect(json["overview"]).to eq(batman.overview)
      expect(json["adult"]).to eq(batman.adult)
      expect(json["status"]).to eq(batman.status)
    end
  end
  describe "POST #create" do
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
    it "should create a Movie using given params" do
      get :create, params: {
        movie: {
          id: 1924,
          title: "Superman",
          poster_path: "/n2DOECThGG7h7m5AjLi2Nuh23u1.jpg",
          release_date: "1978-12-14",
          overview:
          "Mild-mannered Clark Kent works as a reporter at the Daily Planet alongside his crush, Lois Lane − who's in love with Superman. Clark must summon his superhero alter ego when the nefarious Lex Luthor launches a plan to take over the world.",
          adult: false
        }
      }
      json = JSON.parse(response.body)
      expect(json).to eq({})
      expect(Movie.last["id"]).to eq(1924)
      expect(Movie.last["title"]).to eq("Superman")
      expect(Movie.last["poster_path"]).to eq("/n2DOECThGG7h7m5AjLi2Nuh23u1.jpg")
      expect(Movie.last["release_date"]).to eq("12/14/1978")
      expect(Movie.last["overview"]).to eq("Mild-mannered Clark Kent works as a reporter at the Daily Planet alongside his crush, Lois Lane − who's in love with Superman. Clark must summon his superhero alter ego when the nefarious Lex Luthor launches a plan to take over the world.")
      expect(Movie.last["adult"]).to eq(false)
    end
    it "should not create a Movie if it's already in database" do
      get :create, params: {
        movie: {
          id: batman.id,
          title: batman.title,
          poster_path: batman.poster_path,
          release_date: batman.release_date,
          overview: batman.overview,
          adult: batman.adult
        }
      }
      expect(Movie.all.length).to eq(1)
    end
  end
end
