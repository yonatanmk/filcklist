require 'rails_helper'

feature 'Log In' do
  scenario 'an existing user specifies a valid email and password' do
    user = FactoryGirl.create(:user)
    visit root_path

    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button 'Log In'

    expect(page).to have_content("Signed in successfully.")
    expect(page).to_not have_content("Sign Up")
    expect(page).to_not have_content("Log In")
  end

  scenario 'a nonexistant email and password is supplied' do
    visit root_path
    fill_in 'Email', with: 'nonbody@gmail.com'
    fill_in 'Password', with: 'wrbdstdaetnat'
    click_button 'Log In'
    # save_and_open_page
    expect(page).to have_content("Invalid Email or password")
    expect(page).to_not have_content("Signed in successfully.")
    expect(page).to have_content("Log In")
  end

  scenario 'an existing email and wrong password is denied access' do
    user = FactoryGirl.create(:user)

    visit root_path
    fill_in 'Email', with: user.email
    fill_in 'Password', with: 'wrbdstdaetnat'
    click_button 'Log In'
    expect(page).to have_content("Invalid Email or password")
    expect(page).to_not have_content("Signed in successfully.")
    expect(page).to have_content("Log In")
  end

  scenario 'an already authenticated user cannot re-sign in' do
    user = FactoryGirl.create(:user)
    visit new_user_session_path
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button 'Log In'

    expect(page).to_not have_content("Sign Up")
    expect(page).to_not have_content("Log In")

    visit new_user_session_path
    expect(page).to have_content("You are already signed in.")
  end


end
