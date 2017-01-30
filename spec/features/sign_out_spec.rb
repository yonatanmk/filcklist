require 'rails_helper'

xfeature 'Sign Out' do
  scenario 'Sign Out Button signs user out' do
    visit root_path
    click_link 'Sign Up'

    fill_in 'Username', with: 'birdman'
    fill_in 'Email', with: 'birdie@gmail.com'
    fill_in 'user_password', with: 'password'
    fill_in 'Confirm Password', with: 'password'
    click_button 'Sign Up'
    expect(page).to have_content("Welcome! You have signed up successfully.")
    expect(page).to have_content("Sign Out")
    click_link 'Sign Out'
    expect(page).to have_content("Sign Up")
  end
end
