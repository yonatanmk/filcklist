require 'rails_helper'

feature 'Sign Up' do
  scenario 'specifying valid and required information' do
    visit root_path
    click_link 'Sign Up'

    fill_in 'Username', with: 'birdman'
    fill_in 'Email', with: 'birdie@gmail.com'
    fill_in 'user_password', with: 'password'
    fill_in 'Confirm Password', with: 'password'
    click_button 'Sign Up'
    expect(page).to have_content("Welcome! You have signed up successfully.")
  end

  scenario 'required information is not supplied' do
    visit root_path
    click_link 'Sign Up'
    click_button 'Sign Up'

    expect(page).to have_content("Something Went Wrong.")
    expect(page).to have_content("Please Specify A Username.")
    expect(page).to have_content("Please Specify An Email.")
    expect(page).to have_content("Please Specify A Password.")
  end

  scenario 'password confirmation does not match confirmation' do
    visit root_path
    click_link 'Sign Up'

    fill_in 'Username', with: 'birdman'
    fill_in 'Email', with: 'birdie@gmail.com'
    fill_in 'user_password', with: 'password'
    fill_in 'Confirm Password', with: 'not password'
    click_button 'Sign Up'

    expect(page).to have_content("Something Went Wrong.")
    expect(page).to have_content("Password Does Not Match")
  end

  scenario 'invalid email supplied' do
    visit root_path
    click_link 'Sign Up'
    fill_in 'Email', with: 'birdie@gmailcom'
    click_button 'Sign Up'

    expect(page).to have_content("Something Went Wrong.")
    expect(page).to have_content("Please Specify A Valid Email.")
    expect(page).to_not have_content("Sign Out")
  end

  scenario 'password is too short' do
    visit root_path
    click_link 'Sign Up'
    fill_in 'user_password', with: '123'
    click_button 'Sign Up'

    expect(page).to have_content("Something Went Wrong.")
    expect(page).to have_content("Password Is Too Short (6 Characters Minimum)")
    expect(page).to_not have_content("Sign Out")
  end
end
