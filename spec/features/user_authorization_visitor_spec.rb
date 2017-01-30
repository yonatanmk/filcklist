require "rails_helper"

feature "Visitor authorization" do

  scenario "visitor navigates to the index page" do
    visit root_path
    expect(page).to have_content "You need to sign in or sign up before continuing."
    expect(page).to have_content "Log In"
    expect(page).to_not have_content "Your Movies"
  end
  scenario "visitor navigates to a movie's show page" do
    visit '/movies/272'
    expect(page).to have_content "You need to sign in or sign up before continuing."
    expect(page).to have_content "Log In"
    expect(page).to_not have_content "Your Movies"
  end
  scenario "visitor navigates to user profile page" do
    visit '/user'
    expect(page).to have_content "You need to sign in or sign up before continuing."
    expect(page).to have_content "Log In"
    expect(page).to_not have_content "Your Movies"
  end
end
