require "rails_helper"

feature "user edits their account" do

  before(:each) do
    visit root_path
    click_link 'Sign Up'
    fill_in 'Username', with: 'birdman'
    fill_in 'Email', with: 'birdie@gmail.com'
    fill_in 'user_password', with: 'password'
    fill_in 'Confirm Password', with: 'password'
    click_button 'Sign Up'
    visit '/users/edit'
  end

  scenario "user can navigate to the edit account page" do
    expect(page).to have_content "Edit User"
    expect(page).to have_content "Cancel my account"
  end

  scenario "user can edit username/email/password" do
    fill_in "Username", with: "catman"
    fill_in "Email", with: "fishman@gmail.com"
    fill_in "New Password", with: "fishman"
    fill_in "New Password Confirmation", with: "fishman"
    fill_in "Current password", with: 'password'
    click_button "Update"

    visit '/users/edit'
    expect(find_field("Username").value).to eq "catman"
    expect(find_field("Email").value).to eq "fishman@gmail.com"
  end

  scenario "user can delete their account" do
    click_link "Cancel my account"
    expect(User.all.length).to eq(0)
  end
end
